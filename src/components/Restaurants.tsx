import { useEffect } from "react";
import { useRestaurants } from "@/zustand/store";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const { restaurants, getTopRestaurants, loading, error } = useRestaurants();

  useEffect(() => {
    getTopRestaurants();
  }, [getTopRestaurants]);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div className="max-w-screen-xl mx-auto p-5 sm:px-10 md:px-16">
      <h1 className="text-center text-3xl font-bold pb-16 text-[#ea580c]">
        Latest Restaurants To Order From
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative">
              <Link to={`/detail/${restaurant._id}`}>
                <img
                  className="w-full"
                  src={restaurant.imageUrl}
                  alt={restaurant.restaurantName}
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </Link>
              <Link to={`/detail/${restaurant._id}`}>
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  {restaurant.restaurantName}
                </div>
              </Link>
            </div>
            <div className="px-6 py-4 mb-auto">
              <Link
                to={`/detail/${restaurant._id}`}
                className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                {restaurant.restaurantName}
              </Link>
              <p className="text-gray-500 text-sm">
                {restaurant.country} - {restaurant.city}
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  height="13"
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21..." />
                </svg>
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="px-2">
                    Delivery Price : {restaurant.estimatedDeliveryTime} min
                  </div>{" "}
                  <div>Delivery Price : {restaurant.deliveryPrice / 100}$</div>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
