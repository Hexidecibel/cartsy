import React from 'react';
import './App.css';
import Cart, { cart } from './Cart';

const cart1: cart = {
  name: 'Cart 1',
  items: [
    {
      product: {
        name: 'book',
        cost: 12.49,
        exempt: true,
        import: false
      },
      qty: 1,
      tax: 0
    },
    {
      product: {
        name: 'music CD',
        cost: 14.99,
        exempt: false,
        import: false
      },
      qty: 1,
      tax: 0
    },
    {
      product: {
        name: 'chocolate bar',
        cost: .85,
        exempt: true,
        import: false
      },
      qty: 1,
      tax: 0
    }
  ]
}


const cart2: cart = {
  name: 'Cart 2',
  items: [
    {
      product: {
        name: 'box of chocolates',
        cost: 10,
        exempt: true,
        import: true
      },
      qty: 1,
      tax: 0
    },
    {
      product: {
        name: 'bottle of perfume',
        cost: 47.50,
        exempt: false,
        import: true
      },
      qty: 1,
      tax: 0
    },
  ]
}

const cart3: cart = {
  name: 'Cart 3',
  items: [
    {
      product: {
        name: 'bottle of perfume',
        cost: 27.99,
        exempt: false,
        import: true
      },
      qty: 1,
      tax: 0
    },
    {
      product: {
        name: 'bottle of perfume',
        cost: 18.99,
        exempt: false,
        import: false
      },
      qty: 1,
      tax: 0
    },
    {
      product: {
        name: 'packet of headache pills',
        cost: 9.75,
        exempt: true,
        import: false
      },
      qty: 1,
      tax: 0
    },
    {
      product: {
        name: 'box of chocolates',
        cost: 11.25,
        exempt: true,
        import: true
      },
      qty: 1,
      tax: 0
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Cart inputCart={cart1} />
      <Cart inputCart={cart2} />
      <Cart inputCart={cart3} />
    </div>
  );
}


export default App;