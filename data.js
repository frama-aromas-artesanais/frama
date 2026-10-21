/* CONFIGURAÇÃO DA MARCA — edite os valores. Textos entre [ ] são provisórios. */
const site = {
  brandName: "Frama",
  whatsappNumber: "5500000000000", // código do país + DDD + número, só dígitos
  instagramHandle: "[@seuinstagram]",
  instagramUrl: "https://instagram.com/",
  email: "[contato@suamarca.com]",
  city: "[Cidade – UF]",
  footerNote:
    "Produtos artesanais feitos em pequenos lotes, com fragrâncias selecionadas e cuidado em cada etapa.",
};

const categories = [
  {
    id: "velas",
    name: "Velas Aromáticas",
    short: "Velas",
    description: "Perfume, aconchego e personalidade para seus ambientes.",
    image: "img/velas.png",
  },
  {
    id: "aromatizadores",
    name: "Aromatizadores",
    short: "Aromas",
    description: "Fragrâncias que tornam cada espaço mais agradável.",
    image: "img/aromatizadores.jpg",
  },
  {
    id: "sabonetes",
    name: "Sabonetes Artesanais",
    short: "Sabonetes",
    description: "Cuidado e delicadeza para a sua rotina.",
    image: "img/sabonetes.jpg",
  },
  {
    id: "kits",
    name: "Kits & Presentes",
    short: "Kits",
    description: "Combinações especiais para presentear ou se presentear.",
    image: "img/kits.png",
  },
  {
    id: "hidratante",
    name: "Hidratantes",
    short: "Hidratantes",
    description: "Hidratantes",
    image: "img/hidratante-labial.jpeg",
  },
];

/* PRODUTOS — copie um bloco para adicionar. slug deve ser único. */
const products = [
  {
    slug: "vela-aromatica-baunilha",
    name: "Vela Aromática — Baunilha",
    category: "velas",
    fragrance: "Baunilha",
    price: "A partir de R$",
    shortDescription:
      "Fragrância cremosa e envolvente para criar uma atmosfera acolhedora.",
    fullDescription:
      "Uma vela de fragrância cremosa e envolvente, pensada para momentos de pausa. A queima lenta perfuma o ambiente com suavidade, sem enjoar.",
    composition: "[Cera vegetal, essência de baunilha, pavio de algodão]",
    usage:
      "Apare o pavio antes de cada uso e mantenha acesa por no máximo 3 horas.",
    availability: "[Pronta entrega]",
    featured: true,
    image: "img/velas.png",
  },
  {
    slug: "aromatizador-flor-de-algodao",
    name: "Aromatizador de Ambiente — Flor de Algodão",
    category: "aromatizadores",
    fragrance: "Flor de algodão",
    size: "[250 ml]",
    price: "A partir de R$",
    shortDescription:
      "Uma fragrância delicada e confortável para perfumar seus ambientes.",
    fullDescription:
      "Aromatizador com varetas de rattan e fragrância leve, ideal para salas, quartos e lavabos. Difusão contínua e discreta por semanas.",
    composition: "[Base hidroalcoólica, essência importada, varetas de rattan]",
    usage:
      "Vire as varetas uma vez por semana para renovar a intensidade do aroma.",
    availability: "[Pronta entrega]",
    featured: true,
    image: "img/aromatizadores.jpg",
  },
  {
    slug: "sabonete-artesanal-lavanda",
    name: "Sabonete Artesanal — Lavanda",
    category: "sabonetes",
    fragrance: "Lavanda",
    size: "[100 g]",
    price: "A partir de R$",
    shortDescription: "Limpeza suave com uma fragrância relaxante.",
    fullDescription:
      "Sabonete em barra produzido em pequenos lotes, com espuma cremosa e perfume calmante de lavanda. Embalagem em papel kraft, pronta para presentear.",
    composition:
      "[Base glicerinada vegetal, óleo essencial de lavanda, flores secas]",
    usage:
      "Use sobre a pele húmida e guarde em saboneteira seca entre os usos.",
    availability: "[Pronta entrega]",
    featured: true,
    image: "img/sabonetes.jpg",
  },
  {
    slug: "kit-presente-momento-especial",
    name: "Kit Presente — Momento Especial",
    category: "kits",
    fragrance: "Fragrâncias à escolha",
    size: "[1 vela + 1 aromatizador + 1 sabonete]",
    price: "A partir de R$",
    shortDescription:
      "Uma seleção de produtos para transformar o presente em uma experiência.",
    fullDescription:
      "Kit montado à mão em caixa rígida, com papel de seda, flores secas e cartão personalizável. As fragrâncias podem ser combinadas conforme sua preferência.",
    composition: "[Caixa, papel de seda, laço de cetim, cartão]",
    usage: "Combinações e cores podem ser personalizadas pelo WhatsApp.",
    availability: "[Sob encomenda · 3 dias úteis]",
    featured: true,
    image: "img/kits.png",
  },
  {
    slug: "hidratante-labial-com-manteiga",
    name: "Hidratante labial",
    category: "hidratante",
    fragrance: "Manteiga",
    price: "A partir de R$10,00",
    shortDescription: "Hidratante labial com manteiga",
    fullDescription:
      "Uma vela de fragrância cremosa e envolvente, pensada para momentos de pausa. A queima lenta perfuma o ambiente com suavidade, sem enjoar.",
    composition:
      "[Manteiga de Karite, óleo de coco, óleo de amêndoa, mel e própolis]",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/hidratante-labial.jpeg",
  },
  {
    slug: "sabonetes-massageadores-melancia",
    name: "Sabonete Artesanal Massageador",
    category: "sabonetes",
    fragrance: "Melancia",
    price: "A partir de R$9,50",
    shortDescription: "Limpeza suave com uma fragrância relaxante.",
    fullDescription:
      "Sabonete em barra produzido em pequenos lotes, com espuma cremosa e perfume calmante de lavanda. Embalagem em papel kraft, pronta para presentear.",
    composition: "[Base hipoalergenica, manteiga de karite e mel]",
    usage:
      "Use sobre a pele húmida e guarde em saboneteira seca entre os usos.",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/sabonete-massageador.jpeg",
  },
  {
    slug: "sabonetes-barra-maracujá",
    name: "Sabonete em barra maracujá",
    category: "sabonetes",
    fragrance: "Maracujá",
    price: "A partir de R$9,50",
    shortDescription: "Limpeza suave com uma fragrância relaxante.",
    fullDescription:
      "Sabonete em barra produzido em pequenos lotes, com espuma cremosa e perfume calmante de lavanda. Embalagem em papel kraft, pronta para presentear.",
    composition: "[Base hipoalergenica, manteiga de karite e mel]",
    usage:
      "Use sobre a pele húmida e guarde em saboneteira seca entre os usos.",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/sabonete-barra-maracuja.jpeg",
  },
  {
    slug: "geleia-banho-lavanda",
    name: "Geleia de banho",
    category: "sabonetes",
    fragrance: "Lavanda, morango e maracujá",
    price: "A partir de R$38,50",
    shortDescription: "Limpeza suave com uma fragrância relaxante.",
    fullDescription:
      "Geleia de banho hipoalérgica disponível em 3 fragrâncias: lavanda, morango e maracujá.",
    composition: "[Base suspensiva hipoalégica em 3 fragrâncias]",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/geleias-de-banho.jpeg",
  },
  {
    slug: "sabonetes-barra-morango",
    name: "Sabonete em barra Morango",
    category: "sabonetes",
    fragrance: "Morango",
    price: "A partir de R$9,50",
    shortDescription: "Limpeza suave com uma fragrância relaxante.",
    fullDescription:
      "Sabonete em barra produzido em pequenos lotes, com espuma cremosa e perfume calmante de lavanda. Embalagem em papel kraft, pronta para presentear.",
    composition: "[Base hipoalergenica, manteiga de karite e mel]",
    usage:
      "Use sobre a pele húmida e guarde em saboneteira seca entre os usos.",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/sabonete-barra-rosa.jpeg",
  },
];
