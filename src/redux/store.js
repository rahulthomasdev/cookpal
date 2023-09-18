import rootReducer from "./reducers/reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
