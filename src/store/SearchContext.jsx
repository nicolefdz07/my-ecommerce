import { createContext, useState } from "react";
import { searchProducts } from "../services/api";

const SearchContext = createContext();

export const SearchProvider = ({children})=>{
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeQuery = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  }

  const fetchSearchProducts = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    const searchResults = await searchProducts(query);
    setResults(searchResults);
    setIsLoading(false);
    console.log('🔥 Search results:', searchResults);
  }

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  }

  const searchCtx = {
    query,
    results, 
    isLoading,
    handleChangeQuery,
    fetchSearchProducts,
    clearSearch
  };

  return (
    <SearchContext.Provider value={searchCtx}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
