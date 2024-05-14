import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }
    return response.json();
  };
  const { isLoading, data: restaurant } = useQuery(
    "fetchMyRestaurant",
    getMyRestaurantRequest
  );
  return {
    isLoading,
    restaurant,
  };
};
export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });
    //console.log(response.json());

    if (!response.ok) {
      //console.log(response.json());
      throw new Error("Failed to create a restaurant");
    }
    return response.json();
  };
  const {
    mutate: createRestaurant,
    isLoading,
    error,
    isSuccess,
  } = useMutation(createMyRestaurantRequest);
  if (isSuccess) {
    toast.success("Restaurant Created!");
  }
  if (error) {
    toast.error("Unable to update restaurant");
  }
  return {
    isLoading,
    createRestaurant,
  };
};
export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });
    if (!response.ok) {
      throw new Error("Failed to update restaurant");
    }
    return response.json();
  };

  const {
    isLoading,
    mutate: updateRestaurant,
    error,
    isSuccess,
  } = useMutation(updateMyRestaurantRequest);
  if (isSuccess) {
    toast.success("Restaurant updated");
  }
  if (error) {
    toast.error("Unable to upate a restaurant");
  }
  return {
    isLoading,
    updateRestaurant,
  };
};
