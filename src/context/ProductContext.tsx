// Import necessary libraries and types
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Define the structure of a product
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Define the structure of the Product Context
interface ProductContextType {
  products: Product[];
  searchResults: Product[];
  currentCategory: string | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
  searchProducts: (query: string) => void;
  fetchCategoryProducts: (category: string) => void;
  sortProducts: (sortBy: string, sortOrder?: string) => void;
  fetchMoreProducts: () => void;
}

// Create a Product Context with its initial value as undefined
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// ProductProvider component responsible for managing product-related state and actions
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State variables for products, loading status, error message, search results, current category, and limit
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(5);

  // Function to fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      setProducts(response.data);
      setSearchResults(response.data);
      setCurrentCategory(null); // Reset current category when fetching all products
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch more products
  const fetchMoreProducts = async () => {
    setLoading(true);
    try {
      const newLimit = limit + 4;
      setLimit(newLimit);
  
      let endpoint = `https://fakestoreapi.com/products?limit=${newLimit}`;
  
      if (currentCategory) {
        endpoint = `https://fakestoreapi.com/products/category/${currentCategory}?limit=${newLimit}`;
      }
  
      const response = await axios.get(endpoint);
      setProducts((prevdata) => [...prevdata, ...response.data]);
    } catch (error) {
      setError("Error fetching more products");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch products based on a specific category
  const fetchCategoryProducts = async (category: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
      setSearchResults(response.data);
    } catch (error) {
      setError(`Error fetching ${category} products`);
    } finally {
      setLoading(false);
    }
  };

  // Function to sort products based on a specific criteria and order
  const sortProducts = (sortBy: string, sortOrder: string = "asc") => {
    setLoading(true);
    try {
      // Create a copy of the current searchResults to avoid mutating the state directly
      const sortedResults = [...searchResults];
  
      // Sort the products based on the selected criteria
      sortedResults.sort((a, b) => {
        if (sortBy === "name") {
          return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        } else if (sortBy === "price") {
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        } else {
          return 0;
        }
      });
  
      // Update the state with the sorted results
      setSearchResults(sortedResults);
    } catch (error) {
      setError(`Error sorting products by ${sortBy}`);
    } finally {
      setLoading(false);
    }
  };

  // Function to search products based on a query
  const searchProducts = (query: string) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  // useEffect to fetch products when the component mounts and when the limit changes
  useEffect(() => {
    fetchProducts();
  }, [limit]);

  // Create the context value
  const contextValue: ProductContextType = {
    products,
    searchResults,
    loading,
    error,
    currentCategory,
    fetchProducts,
    fetchCategoryProducts,
    searchProducts,
    sortProducts,
    fetchMoreProducts,
  };

  // Provide the context value to the context provider
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the Product Context
export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
