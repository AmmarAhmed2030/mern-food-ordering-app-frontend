import { RestaurantsState } from "@/types";
import { create } from "zustand";
import axios from "axios";
const backendURL = import.meta.env.VITE_API_BASE_URL;
const useRestaurants = create<RestaurantsState>((set) => ({
  restaurants: [],
  topRestaurants: [],
  loading: false,
  error: "",
  getTopRestaurants: async () => {
    try {
      set({ loading: true });
      const response = await axios.get(
        `${backendURL}/api/restaurant/get-top-restaurants`
      );
      const { data } = response.data;
      set({
        restaurants: data,
        loading: false,
        topRestaurants: data.slice(0, 7),
        error: null,
      });
    } catch (error: unknown) {
      set({ loading: false });

      if (axios.isAxiosError(error)) {
        // Axios-specific error handling
        if (error.response) {
          set({ error: error.response.data.message });
        } else {
          set({ error: error.message });
        }
      } else {
        // Fallback for unexpected error types
        set({ error: "An unexpected error occurred" });
      }
    }
  },
}));
export { useRestaurants };
