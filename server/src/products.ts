export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Coconut Donut',
      price: 2.99,
      description: 'Qui voluptate voluptate cupidatat.',
      image: 'http://localhost:8080/donut_4.jpg',
      longDescription:
        'Culpa ex deserunt ad magna ea labore quis reprehenderit adipisicing ea cillum ipsum. Enim ex fugiat consequat reprehenderit. Officia culpa id officia aliqua voluptate. Laborum nulla irure commodo tempor consequat. Laboris pariatur in adipisicing aliquip duis excepteur dolore tempor voluptate proident pariatur.',
    },
    {
      id: 2,
      name: 'Pink Donut',
      price: 5.99,
      description: 'Aliqua velit irure esse.',
      image: 'http://localhost:8080/donut_1.jpg',
      longDescription:
        'Amet tempor in esse dolore pariatur incididunt occaecat ipsum. Incididunt id et pariatur ullamco excepteur cillum. Fugiat esse veniam elit commodo deserunt amet proident velit cupidatat cillum quis aliquip. Cillum minim duis veniam est aliqua nulla nulla ut voluptate laboris.',
    },
    {
      id: 3,
      name: 'Chocolate Donut',
      price: 1.99,
      description: 'Incididunt elit aute.',
      image: 'http://localhost:8080/donut_3.jpg',
      longDescription:
        'Aliquip esse ullamco irure do id officia nisi ut dolore. Aute incididunt cillum deserunt cupidatat est. Consectetur aute deserunt ea ea irure occaecat. Deserunt sint magna pariatur minim ex commodo laborum est labore reprehenderit enim. Veniam incididunt mollit non cillum non minim in non. Qui irure aute incididunt est magna ea deserunt qui ea commodo irure. Ipsum aliqua quis quis proident irure veniam eu incididunt sint labore nisi tempor magna in.',
    },
    {
      id: 4,
      name: 'Spicial Donut',
      price: 3.99,
      description: 'Incididunt elit aute.',
      image: 'http://localhost:8080/donut_2.jpg',
      longDescription:
        'Aliquip esse ullamco irure do id officia nisi ut dolore. Aute incididunt cillum deserunt cupidatat est. Consectetur aute deserunt ea ea irure occaecat. Deserunt sint magna pariatur minim ex commodo laborum est labore reprehenderit enim. Veniam incididunt mollit non cillum non minim in non. Qui irure aute incididunt est magna ea deserunt qui ea commodo irure. Ipsum aliqua quis quis proident irure veniam eu incididunt sint labore nisi tempor magna in.',
    },
    {
      id: 5,
      name: 'Sparkel Donut',
      price: 3.99,
      description: 'Qui dolor fugiat reprehenderit.',
      image: 'http://localhost:8080/donut_5.jpg',
      longDescription:
        'Velit sit sint elit laboris dolor ex pariatur est aute irure mollit velit. Laboris enim irure nulla anim nulla duis id aliqua sunt cupidatat consequat in do laboris. Non veniam esse quis qui anim esse incididunt. Elit id veniam commodo laborum aliqua tempor do. Enim sint magna et occaecat esse proident et elit minim culpa ut. Adipisicing Lorem aliqua tempor exercitation excepteur veniam ea sit adipisicing velit commodo veniam ad. Aute cupidatat quis nisi est commodo ut labore eiusmod consectetur aliqua.',
    },    
  ];
  
  export default products;