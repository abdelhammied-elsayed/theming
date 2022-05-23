import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from "./theme/theme.reducer";

export default combineReducers({
    theme: themeReducer
});
