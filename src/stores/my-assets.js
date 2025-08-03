import { create } from 'zustand';
import { getData } from "@/components/utils"

const useMyAssetsStore = create((set) => ({
  assets: [],
  isLoading: false,
  error: null,

  fetchAssets: async (q) => {
    set({ isLoading: true, error: null });
    try {
      const result = await getData('/api/my-assets?'+q, true);
      set({ assets:result, isLoading: false });
    } catch (err) 
    {
        set({ error: err.message, isLoading: false });
    }
  },
}));

export default useMyAssetsStore;
