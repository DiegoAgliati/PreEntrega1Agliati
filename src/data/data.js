const products = [
    {
      id: "b1",
      name: "World of Warcraft",
      description: "World of Warcraft es un juego de rol multijugador masivo en línea (MMORPG) que permite a los jugadores explorar el vasto mundo de Azeroth, enfrentarse a criaturas épicas, completar misiones y unirse a otros héroes en aventuras legendarias. Con expansiones constantes y una rica historia, WoW sigue siendo uno de los MMORPG más populares y envolventes del mundo.",
      price: 59.99,
      category: "MMORPG",
      stock: 25,
      platform: ["PC"],
      release: "2023-01-20",
      image: "/img/wow.jpg",
    },
    {
      id: "b2",
      name: "Overwatch 2",
      description: "Un shooter en equipo con héroes únicos y una experiencia de juego intensa y dinámica.",
      price: 39.99,
      category: "Shooter",
      stock: 15,
      platform: ["PC", "Consola"],
      release: "2022-10-04",
      image: "/img/overwatch2.jpg",
    },
    {
      id: "b3",
      name: "Diablo IV",
      description: "Explora un oscuro mundo lleno de demonios en la última entrega de la serie Diablo.",
      price: 69.99,
      category: "RPG",
      stock: 10,
      platform: ["PC", "Consola"],
      release: "2023-06-06",
      image: "/img/DiabloIV.jpg",
    },
    {
      id: "b4",
      name: "Hearthstone",
      description: "Juego de cartas digital con personajes del universo de Warcraft. Ideal para partidas rápidas.",
      price: 0.00,
      category: "Card Game",
      stock: "N/A",
      platform: ["PC", "Móvil"],
      release: "2014-03-11",
      image: "/img/hearthstone.jpg",
    },
    {
      id: "b5",
      name: "StarCraft II",
      description: "Juego de estrategia en tiempo real con una narrativa épica y batallas estratégicas.",
      price: 29.99,
      category: "Estrategia",
      stock: 20,
      platform: ["PC"],
      release: "2010-07-27",
      image: "/img/starcraft2.jpg",
    },
    {
      id: "b6",
      name: "Diablo III",
      description: "Toma el papel de un héroe legendario y salva Santuario de las fuerzas del infierno.",
      price: 19.99,
      category: "RPG",
      stock: 30,
      platform: ["PC", "Consola"],
      release: "2012-05-15",
      image: "/img/diablo3.jpg",
    },
    {
      id: "b7",
      name: "Heroes of the Storm",
      description: "MOBA con héroes icónicos de los universos de Blizzard, que combina acción rápida y táctica.",
      price: 0.00,
      category: "MOBA",
      stock: "N/A",
      platform: ["PC"],
      release: "2015-06-02",
      image: "/img/heroes.jpg",
    },
    {
      id: "b8",
      name: "Warcraft III: Reforged",
      description: "Versión remasterizada del clásico RTS con gráficos mejorados y nuevos modos de juego.",
      price: 29.99,
      category: "Estrategia",
      stock: 10,
      platform: ["PC"],
      release: "2020-01-28",
      image: "img/w3r.jpg",
    },
    {
      id: "b9",
      name: "Diablo II: Resurrected",
      description: "Remasterización del clásico Diablo II, con gráficos mejorados y una jugabilidad más accesible.",
      price: 39.99,
      category: "RPG",
      stock: 18,
      platform: ["PC", "Consola"],
      release: "2021-09-23",
      image: "img/diablo2.jpg",
    }
  ];

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

  const getProduct = (idProduct) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find((product) => product.id === idProduct);
        resolve(product);
      }, 2000);
    });
  };
  
  export { getProducts , getProduct };
  