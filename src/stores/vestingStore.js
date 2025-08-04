import { create } from 'zustand';
import { getData } from "@/components/utils";

const useVestingsStore = create((set) => ({
  vestings: [],
  isLoading: false,
  error: null,

  fetchVestings: async () => {
    set({ isLoading: true, error: null });
    try {
      const result = await getData('/api/my-vestings', true);
      if (!Array.isArray(result)) throw new Error('Invalid response format');
      set({ vestings: result, isLoading: false });
    } catch (err) {
      set({ error: err?.message || 'Something went wrong', isLoading: false });
    }
  },
}));

export default useVestingsStore;
