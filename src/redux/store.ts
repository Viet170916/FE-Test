import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postAPIMiddleware, postAPIPath, postAPIReducer } from "@/redux/services/apis/post.ts";

export const store = configureStore( {
  reducer: {
    [ postAPIPath ]: postAPIReducer,
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware().concat( postAPIMiddleware ),
} );
setupListeners( ( store.dispatch as ThunkDispatch<any, any, any> ) );
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
