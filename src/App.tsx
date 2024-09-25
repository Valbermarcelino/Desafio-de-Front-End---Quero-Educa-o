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

// Função para formatar valores em moeda
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// Função para calcular a porcentagem de desconto
const calculateDiscount = (fullPrice: number, offeredPrice: number) => {
  return ((1 - offeredPrice / fullPrice) * 100).toFixed(0); // Calcula a porcentagem de desconto
};

// Função para renderizar estrelas
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Estrelas completas
  const hasHalfStar = rating % 1 !== 0; // Verifica se há meia estrela

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>🌟</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half">⭐️</span>); // Meia estrela
  }

  return stars;
};

// Função para traduzir o tipo
const translateKind = (kind: string) => {
  switch (kind) {
    case 'presencial':
      return 'Presencial 🏫';
    case 'ead':
      return 'EaD 🏠';
    default:
      return kind;
  }
};

// Função para traduzir o nível
const translateLevel = (level: string) => {
  switch (level) {
    case 'bacharelado':
      return 'Graduação (bacharelado) 🎓';
    case 'tecnologo':
      return 'Graduação (tecnólogo) 🎓';
    case 'licenciatura':
      return 'Graduação (licenciatura) 🎓';
    default:
      return level;
  }
};

const App: React.FC = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]); // Para armazenar as ofertas filtradas
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de busca

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

  // Função que será chamada ao pressionar o botão de busca
  const handleSearch = () => {
    const search = searchTerm.toLowerCase(); // Busca case-insensitive
    const filtered = offers.filter((offer) =>
      offer.courseName.toLowerCase().includes(search)
    );
    setFilteredOffers(filtered); // Atualiza as ofertas filtradas
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
            value={searchTerm} // Vincula o valor do input ao estado
            onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado com o valor do input
            placeholder="Busque o curso ideal para você"
            aria-label="Buscar cursos e bolsas"
          />
          <QButton type="button" onClick={handleSearch}>Buscar</QButton>
        </QHeader>
      }
      sidebar={<QFormFilterOffer />}
      footer={<QFooter />}
    >
      <QSectionForm
        title="Veja as opções que encontramos"
        orderBy={<QFormOrderByOffer />}
        filter={<QFormFilterOffer />}
      />

      <div className="mt-6">
        <QListCard cards={filteredOffers}>
          {(card) => (
            <QCardOffer
              key={card.id}
              courseName={card.courseName}
              rating={renderStars(card.rating)}
              fullPrice={formatCurrency(card.fullPrice)}
              offeredPrice={formatCurrency(card.offeredPrice)}
              discount={`${calculateDiscount(card.fullPrice, card.offeredPrice)}% 📉`}
              kind={translateKind(card.kind)}
              level={translateLevel(card.level)}
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
