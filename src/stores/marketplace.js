import { create } from 'zustand';
import {  getData } from '@/components/utils';

const useMarketplaceStore = create((set) => ({
  assets: [],
  isLoading: false,
  error: null,
  fetchAssets: async (query="limit=10&page=1") => {
    set({ isLoading: true, error: null });
    try {
      const result = await getData('/api/marketplace?'+query, true);
      set({ assets:result, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useMarketplaceStore;
