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
    id: "natal",
    name: "Natal",
    short: "Natal",
    description: "Opções de produtos artesanais para o natal",
    image: "img/vela-aromatizador-natal.jpeg",
  },
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
    price: "R$10,00",
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
    price: "R$9,50",
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
    price: "R$9,50",
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
    price: "R$38,50",
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
    price: "R$9,50",
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
  {
    slug: "vela-metalica-coco",
    name: "Vela de Coco em embalagem metálica",
    category: "velas",
    fragrance: "Coco",
    price: "R$34,50",
    shortDescription:
      "Vela em embalagem metálica com cera de coco",
    fullDescription:
      "Uma vela de fragrância de coco, pensada para momentos de pausa. A queima lenta perfuma o ambiente com suavidade, sem enjoar.",
    composition: "[Cera de coco e essência de coco]",
    usage:
      "Apare o pavio antes de cada uso e mantenha acesa por no máximo 3 horas.",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/vela-metalica-coco.jpeg",
  },
  {
    slug: "vela-anjo-da-guarda",
    name: "Vela Anjo da Guarda",
    category: "velas",
    fragrance: "Coco",
    price: " R$ 10,00 a unidade",
    shortDescription:
      "Vela com formato de anjo da guarda com cera de coco e essência de coco",
      fullDescription:
      "",
    composition: "[Cera de coco e essência de coco]",
    usage:
      "Apare o pavio antes de cada uso e mantenha acesa por no máximo 3 horas.",
    availability: "[Consultar disponibilidade]",
    featured: true,
    image: "img/anjo.jpeg",
  },
];
