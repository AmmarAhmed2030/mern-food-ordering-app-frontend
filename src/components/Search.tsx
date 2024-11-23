import { useRestaurants } from "@/zustand/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select, { SingleValue, StylesConfig } from "react-select"; // Import StylesConfig type for Select

type Option = {
  value: string;
  label: string;
};

const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    padding: "0.5rem", // Tailwind's equivalent of `p-2`
    borderWidth: "2px", // Tailwind's `border-2`
    borderColor: state.isFocused ? "#ea580c" : "#ea580c", // `blue-500` on focus, `gray-300` otherwise
    borderRadius: "1rem", // Tailwind's `rounded-md`
    boxShadow: state.isFocused ? "0 0 0 2px #ea580c" : "none", // Tailwind's `ring-2 ring-blue-500`
    "&:hover": {
      borderColor: "#ea580c", // `blue-500`
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#ea580c" : "white", // `blue-500` on hover
    color: state.isFocused ? "white" : "black",
    padding: "0.5rem 1rem", // Tailwind's `px-4 py-2`
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af", // Tailwind's `text-gray-400`
    fontSize: "0.875rem", // Tailwind's `text-sm`
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#374151", // Tailwind's `text-gray-700`
    fontSize: "1rem", // Tailwind's `text-base`
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #d1d5db", // Tailwind's `border-gray-300`
    borderRadius: "0.375rem", // Tailwind's `rounded-md`
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow
  }),
};

const Search: React.FC = () => {
  const navigate = useNavigate();
  const { restaurants, getTopRestaurants } = useRestaurants();
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getTopRestaurants();
  }, [getTopRestaurants]);

  useEffect(() => {
    const restaurantOptions = restaurants.map((restaurant) => ({
      value: restaurant._id,
      label: `${restaurant.restaurantName} - ${restaurant.city} - ${restaurant.country}`,
    }));
    setOptions(restaurantOptions);
  }, [restaurants]);

  const handleSelectChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      // Navigate to the selected doctor's details or appointment page
      navigate(`/detail/${selectedOption.value}`);
    }
  };

  return (
    <Select
      options={options}
      placeholder="Search by City or Town..."
      isClearable
      isSearchable
      onChange={handleSelectChange} // Pass the updated handler
      styles={customStyles}
    />
  );
};

export default Search;
