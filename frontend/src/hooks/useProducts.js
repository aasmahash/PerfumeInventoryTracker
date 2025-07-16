// src/hooks/useProducts.js
import { useQuery } from '@tanstack/react-query';
import client from '../api/client';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => client.get('/products').then(res => res.data)
  });
}
