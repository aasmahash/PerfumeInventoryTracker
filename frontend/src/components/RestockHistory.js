// src/components/RestockHistory.js
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../api/client';
import '../App.css';

export default function RestockHistory() {
  const qc = useQueryClient();
  const { data = [], isLoading } = useQuery({
    queryKey: ['history'],
    queryFn: () => client.get('/restockEvents').then(r => r.data)
  });
  const [expanded, setExpanded] = useState(false);

  // Mutation to clear all events
  const clearHistory = useMutation({
    mutationFn: () => client.delete('/restockEvents'),
    onSuccess: () => {
      // clear cached history and refetch
      qc.setQueryData(['history'], []);
      qc.invalidateQueries({ queryKey: ['history'] });
    }
  });

  if (isLoading) return <p className="dm-sans-regular">Loading history…</p>;

  // Sort newest first
  const sorted = [...data].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  const visible = expanded ? sorted : sorted.slice(0, 10);

  return (
    <div className="RestockHistory dm-sans-regular" style={{ marginTop: 30 }}>
      <h2 className="dm-sans-bold">Restock History</h2>

      <ul className="RestockHistory-list dm-sans-regular">
        {visible.map(ev => (
          <li key={ev.id} className="RestockHistory-item dm-sans-regular">
            {ev.product.name}: +{ev.amount} at{' '}
            {new Date(ev.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>

      {/* footer with buttons side by side */}
      <div style={{ display: 'flex', justifyContent: data.length > 10 ? 'space-between' : 'flex-end', alignItems: 'center', marginTop: '1rem' }}>
        {data.length > 10 && (
          <button
            className="Button dm-sans-medium"
            onClick={() => setExpanded(x => !x)}
          >
            {expanded ? 'Show Less' : `Show All (${data.length})`}
          </button>
        )}

        <button
          className="Button dm-sans-medium"
          onClick={() => clearHistory.mutate()}
          disabled={clearHistory.isLoading}
        >
          Clear History
        </button>
      </div>
    </div>
  );
}
