export const getProducts = async ()=>{
  try{
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products;  
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Función específica para obtener productos de moda/ropa
export const getFashionProducts = async () => {
  try {
    // Categorías relacionadas con ropa/moda en DummyJSON
    const fashionCategories = [
      'mens-shirts',
      'womens-dresses', 
      'womens-shoes',
      'mens-shoes',
      'womens-bags',
      'womens-jewellery',
      'mens-watches',
      'womens-watches'
    ];
    
    // Obtener productos de cada categoría
    const promises = fashionCategories.map(category => 
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(response => response.json())
        .then(data => data.products)
    );
    
    const results = await Promise.all(promises);
    // Combinar todos los productos en un solo array
    return results.flat();
    
  } catch (error) {
    console.error('Error fetching fashion products:', error);
    return [];
  }
}

export const searchProducts = async (query)=>{
  try {
    const word = query.trim().toLowerCase();
    if (!word) {
      return [];
    }
    const response = await fetch(`https://dummyjson.com/products/search?q=${word}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data  = await response.json()
    return data.products || [];

  }catch (error){
    console.error('Error searching products:', error);
    return [];
  }
}