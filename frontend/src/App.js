import React, { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LowStockList from './components/LowStockList';
import ProductForm from './components/ProductForm';
import RestockHistory from './components/RestockHistory';

const qc = new QueryClient();

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <QueryClientProvider client={qc}>
      <div className="App dm-sans-regular">
        <header className="App-header dm-sans-bold" style={{ textAlign: 'center' }}>
          <h1>Perfume Elegance Inventory Dashboard</h1>
          <button
            className="Button dm-sans-medium"
            onClick={() => setShowForm(f => !f)}
            style={{ marginTop: '1rem' }}
          >
            {showForm ? 'Hide' : 'Add'} Product
          </button>
        </header>

        {showForm && <ProductForm onSuccess={() => setShowForm(false)} />}

        <LowStockList />
        <RestockHistory />
      </div>
    </QueryClientProvider>
  );
}
