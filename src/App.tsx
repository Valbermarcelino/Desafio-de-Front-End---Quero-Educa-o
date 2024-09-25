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

const App: React.FC = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]); // Ofertas filtradas
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(''); // Termo de busca
  const [sortCriteria, setSortCriteria] = useState<string>('name'); // Critério de ordenação

  // Estado dos filtros
  const [filters, setFilters] = useState({
    level: [],
    kind: [],
    priceRange: [0, 10000],
  });

  useEffect(() => {
    // Realiza a requisição para a API de ofertas
    fetch("http://localhost:3000/offers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar as ofertas");
        }
        return response.json();
      })
      .then((data) => {
        setOffers(data); // Define as ofertas recebidas no estado original
        setFilteredOffers(data); // Inicialmente, as ofertas filtradas são todas
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Define a mensagem de erro
        setLoading(false);
      });
  }, []); // O array vazio faz com que o useEffect rode apenas quando o componente for montado

  // Função para aplicar filtros
  useEffect(() => {
    const filtered = offers.filter((offer) => {
      const matchesLevel = filters.level.length === 0 || filters.level.includes(offer.level);
      const matchesKind = filters.kind.length === 0 || filters.kind.includes(offer.kind);
      const matchesPriceRange =
        offer.offeredPrice >= filters.priceRange[0] &&
        offer.offeredPrice <= filters.priceRange[1];
      return matchesLevel && matchesKind && matchesPriceRange;
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
  }, [filters, sortCriteria, offers]); // Filtros e ordenação são aplicados sempre que esses valores mudam

  // Função para realizar a busca local
  const handleSearch = () => {
    const search = searchTerm.toLowerCase(); // Busca case-insensitive
    const filtered = offers.filter((offer) =>
      offer.courseName.toLowerCase().includes(search)
    );
    setFilteredOffers(filtered); // Atualiza as ofertas filtradas
  };

  // Função para lidar com a alteração do critério de ordenação
  const handleSortChange = (value: string) => {
    setSortCriteria(value); // Atualiza o critério de ordenação
  };

  if (loading) {
    return <p>Carregando ofertas...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <QLayout
      header={
        <QHeader>
          <QInput
            type="search"
            id="site-search"
            name="q"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busque o curso ideal para você"
            aria-label="Buscar cursos e bolsas"
          />
          <QButton type="button" onClick={handleSearch}>Buscar</QButton>
        </QHeader>
      }
      sidebar={
        <QFormFilterOffer
          filters={filters} // Passa os filtros atuais
          onChange={setFilters} // Atualiza os filtros
        />
      }
      footer={<QFooter />}
    >
      <QSectionForm
        title="Veja as opções que encontramos"
        orderBy={
          <QFormOrderByOffer
            sortCriteria={sortCriteria}
            onChange={handleSortChange}
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
              rating={card.rating}
              fullPrice={`R$ ${card.fullPrice.toFixed(2)}`}
              offeredPrice={`R$ ${card.offeredPrice.toFixed(2)}`}
              discount={`${((1 - card.offeredPrice / card.fullPrice) * 100).toFixed(0)}% 📉`}
              kind={card.kind}
              level={card.level}
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
