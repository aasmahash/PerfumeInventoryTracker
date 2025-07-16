import React from 'react';
import { useProducts } from '../hooks/useProducts';
import RestockButton from './RestockButton';
import '../App.css';

export default function LowStockList() {
  const { data: products = [], isLoading } = useProducts();
  if (isLoading) return <p className="dm-sans-regular">Loading…</p>;

  const low = products.filter(p => p.quantity <= p.restockThreshold);

  return (
    <div className="lowstock-container dm-sans-regular" style={{ marginTop: 20 }}>
      <h2 className="dm-sans-bold">
        <span
          className={`Badge ${low.length ? 'low' : ''}`}
        >
          {low.length}
        </span>{' '}
        {low.length === 1 ? 'item low on stock' : 'items low on stock'}
      </h2>

      <ul className="LowStockList-grid">
        {low.map(p => (
          <li key={p.id} className="Product-card">
            <div className="Product-info dm-sans-medium">
              <strong className="Product-name dm-sans-medium">{p.name}</strong>
              <div className="Product-qty dm-sans-regular">
                Qty: {p.quantity}
              </div>
            </div>
            <RestockButton product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
