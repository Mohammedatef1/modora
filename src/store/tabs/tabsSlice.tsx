import { createSlice } from "@reduxjs/toolkit";

type TInitialState =  {
  activeTab : string
}

const initialState: TInitialState = {
  activeTab : "chair"
}

const tabsSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setActiveTab: (state , action) => {
      state.activeTab = action.payload
    }
  }
})

export const {setActiveTab} =  tabsSlice.actions
export default tabsSlice.reducer