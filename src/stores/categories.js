import { create } from 'zustand';
import { getData } from '@/components/utils';

const useCategoriesStore = create((set) => ({
  categories: [],
  isLoading: false,
  error: null,
  fetchcategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const result = await getData('/api/categories');
      set({ categories:result, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useCategoriesStore;
