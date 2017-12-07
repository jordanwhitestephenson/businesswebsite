module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Scotch.io Signature Lager',
        image: 'car5.jpg',
        description: 'The finest lager money can buy.',
        variants: [
          {
            sku: '123123',
            type: '40oz Bottle',
            price: 4.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: '6 Pack',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '30 Pack',
            price: 19.99,
            inventory: 3
          }
        ]
      },
      {
        id: '023434234',
        name: 'woot woot',
        image: 'car6.jpg',
        description: 'Thsdsfdfsdfsdfney can buy.',
        variants: [
          {
            sku: '12322',
            type: 'TIre 1',
            price: 1.99,
            inventory: 1

          },
          {
            sku: '1231123',
            type: 'Tire 2',
            price: 6.99,
            inventory: 5
          },
          {
            sku: '12123312',
            type: 'Tire 3',
            price: 20.55,
            inventory: 3
          }
        ]
      }
    ]));
  }

};
