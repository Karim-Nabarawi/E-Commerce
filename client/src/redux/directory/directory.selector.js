import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector([selectDirectory], (dierctory) => dierctory.sections);
