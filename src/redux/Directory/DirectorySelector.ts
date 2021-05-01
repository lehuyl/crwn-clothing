import { createSelector } from "reselect";
import { RootState } from "../store";
import { DirectoryState } from "./DirectoryReducer";

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory: DirectoryState) => directory.sections
);