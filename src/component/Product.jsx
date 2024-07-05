import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'; 

export default function Product() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <h1 className='mt-4 text-center text-[black] text-3xl'>Here Some Special Products</h1>
      
      <div className='flex justify-center mt-10 gap-2'>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField
            fullWidth
            label="Search Product"
            id="fullWidth"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, key) => (
              <div key={key} className="relative overflow-hidden">
                <img src={product.image} alt={product.title} className="h-64 w-full object-cover transition duration-300 transform hover:scale-105 cursor-pointer" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 flex flex-col justify-center items-center">
                  <div className="text-white text-center mb-4">
                    <p className="text-lg font-semibold mb-2">{product.title}</p>
                    <p className="text-gray-200">${product.price}</p>
                    <p className="text-gray-200">{product.rating.count} reviews</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">No products found</p>
          )}
        </div>
      </div>
    </>
  );
}
