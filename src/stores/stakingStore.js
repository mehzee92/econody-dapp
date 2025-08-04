import { create } from 'zustand';
import { getData } from "@/components/utils";

const useVestingsStore = create((set) => ({
  stakes: [],
  isLoading: false,
  error: null,

  fetchStakings: async () => {
    set({ isLoading: true, error: null });
    try {
      const result = await getData('/api/my-stakes', true);
      alert(JSON.stringify());
      if (!Array.isArray(result.data)) throw new Error('Invalid response format');
      set({ stakes: result.data, isLoading: false });
    } catch (err) {
      set({ error: err?.message || 'Something went wrong', isLoading: false });
    }
  },
}));

export default useVestingsStore;
