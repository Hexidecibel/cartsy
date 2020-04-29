import * as React from 'react';

export type product = {
  name: string;
  cost: number;
  exempt: boolean;
  import: boolean;
}

export type cart = {
  name: string;
  items: cartItem[];
}

export type cartItem = {
  product: product;
  qty: number;
  tax: number;
}

function calculateTax(product: product): number {
  let taxRate = (product.exempt ? 0 : .1) + (product.import ? .05 : 0);
  return Math.ceil((product.cost * taxRate) * 20) / 20
}

export default function Cart(props: { inputCart: cart }): JSX.Element {
  const {inputCart} = {...props};
  let totalTax = 0;
  let total = 0;
  return (
    <div className="Cart">
      <h1>{inputCart.name}</h1>
      <h2>Input</h2>
      {inputCart.items.map((item) => {
        const p = item.product;
        return (
          <div>
            <div>{item.qty + (item.product.import ? ' imported' : '') + ' ' + p.name + ': ' + p.cost.toFixed(2)}</div>
          </div>
        )
      })}
      <br/>
      <br/>
      <h2>Output</h2>
      {inputCart.items.map((item) => {
        const p = item.product;
        const t = calculateTax(p);
        totalTax += t;
        total += p.cost;
        return (
          <div>
            <div>{item.qty + (item.product.import ? ' imported' : '') + ' ' + p.name + ': ' + (p.cost + t).toFixed(2)}</div>
          </div>
        )
      })}
      <h4>Sales Tax: {totalTax.toFixed(2)}<br/>
        Total: {(total + totalTax).toFixed(2)}</h4>
    </div>
  )
}