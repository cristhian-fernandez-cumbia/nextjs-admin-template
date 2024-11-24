'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useGetAllProductsQuery } from '@/redux/apis/productApi';
import {
  setProducts,
  filterProductsByCategory,
  filterProductsByName,
  removeFavorite,
  addFavorite
} from '@/redux/slices/productSlice';
import {
  selectFilteredProducts,
  selectFavoritesProducts,
} from '@/redux/selectors/productSelectors';
import { Product } from '@/interfaces/product';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';

const ProductosPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: products = [], isLoading, error } = useGetAllProductsQuery();
  const filteredProducts = useSelector(selectFilteredProducts);
  const favoriteProducts = useSelector(selectFavoritesProducts) || [];

  useEffect(() => {
    if (products && products.length > 0) {
      dispatch(setProducts(products));
    }
  }, [products, dispatch]);

  const handleCategoryFilter = (category: string) => {
    dispatch(filterProductsByCategory(category));
  };

  const handleNameFilter = (name: string) => {
    dispatch(filterProductsByName(name));
  };

  const toggleFavorite = (product: Product) => {
    if (favoriteProducts.find(fav => fav.id === product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  if (isLoading ) {
    return <div className="flex justify-center items-center h-screen text-2xl font-semibold">Cargando Productos...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-2xl text-red-600">Error al cargar los productos.</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-center mb-8">Lista de Productos</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => handleCategoryFilter('all')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Todos
          </button>
          <button
            onClick={() => handleCategoryFilter('jewelery')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Joyería
          </button>
          <button
            onClick={() => handleCategoryFilter('electronics')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Electrónica
          </button>
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          <span>Favoritos ({favoriteProducts.length})</span>
        </button>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={(e) => handleNameFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <li key={product.id} className="bg-white p-4 border rounded shadow hover:shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <button onClick={() => toggleFavorite(product)} className="text-red-500">
                {favoriteProducts.some((fav) => fav.id === product.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-700 mb-1">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosPage;