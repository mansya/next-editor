import React from "react"
import { ContextMenu, Item } from "react-contexify"
import FaTrash from "react-icons/fa/trash"
import { connect } from "react-redux"
import Actions from "../../../actions"

const selector = () => ({})

const actions = {
  deleteProject: Actions.editor.deleteProject
}

type Props = typeof actions

export const ProjectContextMenu: any = connect(
  selector,
  actions
)((props: Props) => {
  return (
    <ContextMenu id="project">
      <Item
        disabled={({ dataFromProvider }: any) =>
          dataFromProvider.dirpath === "/playground"
        }
        onClick={({ dataFromProvider }: any) => {
          props.deleteProject(dataFromProvider.dirpath)
        }}
      >
        <FaTrash />
        Delete project
      </Item>
    </ContextMenu>
  )
})
