import { create } from 'zustand';
import { getData } from '@/components/utils';

const defaultDetail = {
  id: 0,
  asset_name: "Test Name",
  token_symbol: "",
  token_icon: "",
  title: "",
  thumbnail: "",
  description: "Test Description",
  total_supply: 0,
  decimals: 0,
  token_standard: "",
  blockchain: "",
  token_address: null,
  explorer_url: null,
  category: "",
  valuation: "",
  revenue_distribution: "",
  expected_yield_percent: null,
  offering_type: null,
  offering_start_date: null,
  offering_end_date: null,
  is_fractionalized: 0,
  country_of_asset: null,
  progress: 0,
  investors: 0,
  apr: 0,
  listed_quantity: 0,
};

const useAssetDetailStore = create((set) => ({
  detail: defaultDetail,
  offers:[],
  isLoading: false,
  error: null,


  fetchAssetDetail: async (id) => {

    set({ isLoading: true, error: null });
    
    try {
      const result = await getData(`/api/marketplace/asset-detail?id=${id}`, true);
      // Optional: guard against bad responses
      if (!result || typeof result !== 'object') {
        alert("Get : Failed to fetch data")
      }

      set({ detail: result, isLoading: false }); // ✅ store in correct key
    } catch (err) {
      set({ error: err.message || 'Unknown error', isLoading: false });
    }

    try {
      const result = await getData(`/api/marketplace/asset-listings/${id}`, true);
      // Optional: guard against bad responses
      if (!result || typeof result !== 'object') {
        alert("Get : Failed to fetch data")
      }
      set({ offers: result, isLoading: false }); // ✅ store in correct key
    } catch (err) {
      set({ error: err.message || 'Unknown error', isLoading: false });
    }    


  },
}));

export default useAssetDetailStore;
