import { setHasResponded } from "../hasRespondedSlice";

const rootReducer = combineReducers({
  hasResponded: setHasResponded,
});

export default rootReducer;
