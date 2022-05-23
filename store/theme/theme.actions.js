import { UPDATE_CURRENT_ACTIVE_THEME } from "theme.types";

export const updateCurrentActiveTheme = (theme) => ({
  type: UPDATE_CURRENT_ACTIVE_THEME,
  payload: theme,
});
