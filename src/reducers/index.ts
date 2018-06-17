import { combineReducers } from "redux"
import { EditorState, reducer as editor } from "./editor"
import { reducer as repository, RepositoryState } from "./repository"

export type RootState = {
  repository: RepositoryState
  editor: EditorState
}

export const rootReducer: (
  state: RootState,
  action: any
) => RootState = combineReducers({
  editor,
  repository
} as any)
