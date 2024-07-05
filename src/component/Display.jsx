// ProductDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 mt-16">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <div className="flex justify-center">
        <img src={product.image} alt={product.title} className="h-64 w-full object-cover" />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold mb-2">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default Display;
