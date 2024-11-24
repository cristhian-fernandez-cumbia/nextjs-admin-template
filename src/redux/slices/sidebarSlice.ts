import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isCollapsed: boolean;
}

const initialState: SidebarState = {
  isCollapsed: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleCollapseMenu: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    setCollapseState: (state, action: PayloadAction<boolean>) => {
      state.isCollapsed = action.payload;
    },
  },
});

export const { toggleCollapseMenu, setCollapseState } = sidebarSlice.actions;

export const selectIsCollapsed = (state: { sidebar: SidebarState }) => state.sidebar.isCollapsed;

export default sidebarSlice.reducer;
