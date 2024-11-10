import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/interfaces/product';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  favoritesProducts: Product[],
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  favoritesProducts: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.loading = false; 
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    filterProductsByCategory(state, action: PayloadAction<string>) {
      state.loading = true;
      if (action.payload === 'all') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          product => product.category === action.payload
        );
      }
      state.loading = false; 
    },
    filterProductsByName(state, action: PayloadAction<string>) {
      state.loading = true;
      const nameFilter = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(nameFilter)
      );
      state.loading = false; 
    },
    addFavorite(state, action: PayloadAction<Product>) {

      if (!state.favoritesProducts) {
        state.favoritesProducts = [];
      }
      if (!state.favoritesProducts.some(fav => fav.id === action.payload.id)) {
        state.favoritesProducts.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favoritesProducts = state.favoritesProducts.filter(fav => fav.id !== action.payload);
    },
  },
});

export const { 
  setProducts, 
  setLoading, 
  filterProductsByCategory, 
  filterProductsByName,
  addFavorite,
  removeFavorite,
} = productSlice.actions;
export default productSlice.reducer;