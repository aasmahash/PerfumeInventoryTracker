// src/components/RestockButton.js
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../api/client';
import '../App.css';

export default function RestockButton({ product }) {
  const qc = useQueryClient();

  const mutation = useMutation({
  mutationFn: amount =>
    client.post(`/products/${product.id}/restock`, { amount }),
  onSuccess: () => {
    qc.invalidateQueries({ queryKey: ['products'] });
    qc.invalidateQueries({ queryKey: ['history'] });
  }
});


  return (
    <button
      onClick={() => mutation.mutate(1)}
      disabled={mutation.isLoading}
    >
      Restock
    </button>
  );
}
