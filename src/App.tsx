import { useState, useEffect } from "react";

import QHeader from "./components/QHeader";
import QInput from "./components/QInput";
import QButton from "./components/QButton";
import QCardOffer from "./components/QCardOffer";
import QFooter from "./components/QFooter";
import QLayout from "./components/QLayout";
import QListCard from "./components/QListCard";
import QFormOrderByOffer from "./components/QFormOrderByOffer";
import QFormFilterOffer from "./components/QFormFilterOffer";
import QSectionForm from "./components/QSectionForm";
import QIconStar from "./components/QIconStar";

// Definir interface para as ofertas
interface Offer {
  id: string;
  courseName: string;
  fullPrice: number;
  offeredPrice: number;
  rating: number;
  kind: 'presencial' | 'ead';
  level: 'bacharelado' | 'tecnologo' | 'licenciatura';
  iesLogo: string;
  iesName: string;
}

// Função para renderizar estrelas
const renderStars = (rating: number): JSX.Element => {
  const fullStars = Math.floor(rating); // Estrelas completas
  const hasHalfStar = rating % 1 !== 0; // Verifica se há meia estrela

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: fullStars }, (_, index) => (
        <QIconStar key={index} />
      ))}
      {hasHalfStar && <QIconStar half />} {/* Meia estrela */}
    </div>
  );
};

const App: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("name");
  const [filters, setFilters] = useState({
    level: [],
    kind: [],
    priceRange: [0, 700], // Faixa de preço inicial
  });

  useEffect(() => {
    // Simulação de fetch de ofertas
    const fetchOffers = async () => {
      const response = await fetch("http://localhost:3000/offers");
      const data = await response.json();
      setOffers(data);
      setFilteredOffers(data); // Inicialmente, todas as ofertas são filtradas
    };

    fetchOffers();
  }, []);

  // Função para aplicar filtros e ordenação
  const applyFiltersAndSort = () => {
    const filtered = offers.filter((offer) => {
      const matchesLevel = filters.level.length === 0 || filters.level.includes(offer.level);
      const matchesKind = filters.kind.length === 0 || filters.kind.includes(offer.kind);
      const matchesPriceRange = offer.offeredPrice <= filters.priceRange[1];
      const matchesSearch = offer.courseName.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesLevel && matchesKind && matchesPriceRange && matchesSearch;
    });

    // Aplica a ordenação após o filtro
    const sortedOffers = [...filtered].sort((a, b) => {
      switch (sortCriteria) {
        case 'name':
          return a.courseName.localeCompare(b.courseName);
        case 'price':
          return a.offeredPrice - b.offeredPrice;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredOffers(sortedOffers); // Define as ofertas filtradas
  };

  const handleSearch = () => {
    applyFiltersAndSort(); // Chama a função de filtragem ao pressionar o botão
  };

  // useEffect para aplicar filtros e ordenação sempre que sortCriteria ou filters mudarem
  useEffect(() => {
    applyFiltersAndSort();
  }, [sortCriteria, filters]); // Executa sempre que sortCriteria ou filters mudarem

  return (
    <QLayout
      header={
        <QHeader>
          <QInput
            type="search"
            id="site-search"
            name="q"
            placeholder="Busque o curso ideal para você"
            aria-label="Buscar cursos e bolsas"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <QButton type="button" onClick={handleSearch}>Buscar</QButton>
        </QHeader>
      }
      sidebar={<QFormFilterOffer filters={filters} onChange={setFilters} />}
      footer={<QFooter />}
    >
      <QSectionForm
        title="Veja as opções que encontramos"
        orderBy={
          <QFormOrderByOffer
            sortCriteria={sortCriteria}
            onChange={setSortCriteria}
          />
        }
        filter={<QFormFilterOffer />}
      />

      <div className="mt-6">
        <QListCard cards={filteredOffers}>
          {(card) => (
            <QCardOffer
              key={card.id}
              courseName={card.courseName}
              rating={renderStars(card.rating)} // Exibe estrelas
              fullPrice={`R$ ${card.fullPrice.toFixed(2).replace('.', ',')}`} // Formatação de moeda
              offeredPrice={`R$ ${card.offeredPrice.toFixed(2).replace('.', ',')}`} // Formatação de moeda
              discount={`${Math.round(((card.fullPrice - card.offeredPrice) / card.fullPrice) * 100)}%`} // Cálculo de desconto
              kind={card.kind === 'presencial' ? 'Presencial' : 'EaD'} // Tipo do curso
              level={
                card.level === 'bacharelado' ? 'Graduação (bacharelado)' :
                card.level === 'tecnologo' ? 'Graduação (tecnólogo)' :
                card.level === 'licenciatura' ? 'Graduação (licenciatura)' :
                'Nível desconhecido'
              }
              iesLogo={card.iesLogo}
              iesName={card.iesName}
            />
          )}
        </QListCard>
      </div>
    </QLayout>
  );
};

export default App;
