import { UPDATE_CURRENT_ACTIVE_THEME } from "./theme.types";

const initialState = {
  currentActiveTheme: "default",
};

export default function themeReducer(state = initialState, { type, payload }) {
  if (type === UPDATE_CURRENT_ACTIVE_THEME) {
    return { ...state, currentActiveTheme: payload };
  }

  return state
}
