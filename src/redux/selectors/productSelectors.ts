import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.product.products;
export const selectFilteredProducts = (state: RootState) => state.product.filteredProducts;
export const selectIsLoading = (state: RootState) => state.product.loading;
export const selectFavoritesProducts = (state: RootState) => state.product.favoritesProducts;