import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import videoReducer from "../slices/videoSlice";
import sidebarReducer from "../slices/sidebarSlice";
export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    videos: videoReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});