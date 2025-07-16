import React, { useState } from 'react';
import client from '../api/client';
import { useQueryClient } from '@tanstack/react-query';
import '../App.css';

export default function ProductForm({ initial = {}, onSuccess }) {
  const [form, setForm] = useState({
    id: initial.id || null,
    name: initial.name || '',
    sku: initial.sku || '',
    quantity: initial.quantity || 0,
    restockThreshold: initial.restockThreshold || 0,
  });
  const qc = useQueryClient();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'name' || name === 'sku' ? value : +value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = form.id ? 'put' : 'post';
    const url = form.id ? `/products/${form.id}` : '/products';

    await client[method](url, form);
    qc.invalidateQueries({ queryKey: ['products'] });
    onSuccess?.();

    setForm({ id: null, name: '', sku: '', quantity: 0, restockThreshold: 0 });
  };

  return (
    <section className="product-form-container">
      <h3 className="dm-sans-bold">Add or Update a Product</h3>
      <p className="form-description dm-sans-regular">
        Use the fields below to set a <strong>Quantity</strong> (current stock level), and a{' '}
        <strong>Restock Threshold</strong> (the point at which this item should be flagged as low on stock).
      </p>
      <form onSubmit={handleSubmit} className="product-form">
        <label className="dm-sans-medium">
          Name
          <input
            name="name"
            placeholder="e.g., Latafa Oud"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="dm-sans-medium">
          SKU
          <input
            name="sku"
            placeholder="e.g., LAT123"
            value={form.sku}
            onChange={handleChange}
            required
          />
        </label>
        <label className="dm-sans-medium">
          Quantity
          <input
            name="quantity"
            type="number"
            placeholder="Current stock count"
            value={form.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label className="dm-sans-medium">
          Restock Threshold
          <input
            name="restockThreshold"
            type="number"
            placeholder="When qty ≤ this value"
            value={form.restockThreshold}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="primary-button dm-sans-medium">
          {form.id ? 'Update' : 'Add'} Product
        </button>
      </form>
    </section>
  );
}
