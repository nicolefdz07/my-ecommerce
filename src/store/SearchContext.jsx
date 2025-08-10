import { createContext, useState } from "react";
import { searchProducts } from "../services/api";

const SearchContext = createContext();

export const SearchProvider = ({children})=>{
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]); 

  const handleChangeQuery = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  }

  const fetchSearchProducts = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    const searchResults = await searchProducts(query);
    setResults(searchResults);
    setFilteredProducts(searchResults);
    setIsLoading(false);
    
  }

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  }
  const updateProductsInContext = (newProducts)=>{
    setProducts(newProducts);
    setFilteredProducts(newProducts);
    console.log('Productos actualizados en el contexto:', newProducts);
  }
  const updateFilteredProducts = (newProducts) => {
    setFilteredProducts(newProducts);
    console.log('Productos filtrados actualizados en el contexto:', newProducts);
  };

  const searchCtx = {
    query,
    results, 
    isLoading,
    handleChangeQuery,
    fetchSearchProducts,
    clearSearch,
    products,
    updateProductsInContext,
    filteredProducts,
    updateFilteredProducts
  };

  return (
    <SearchContext.Provider value={searchCtx}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
