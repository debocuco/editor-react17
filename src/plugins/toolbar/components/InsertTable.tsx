import { ButtonWithTooltip } from '.././primitives/toolbar'
import React from 'react'
import { tablePluginHooks } from '../../table'

/**
 * A toolbar button that allows the user to insert a table.
 * For this button to work, you need to have the `tablePlugin` plugin enabled.
 */
export const InsertTable: React.FC = () => {
  const [iconComponentFor] = tablePluginHooks.useEmitterValues('iconComponentFor')
  const insertTable = tablePluginHooks.usePublisher('insertTable')

  return (
    <ButtonWithTooltip
      title="Insert table"
      onClick={() => {
        insertTable({ rows: 3, columns: 3 })
      }}
    >
      {iconComponentFor('table')}
    </ButtonWithTooltip>
  )
}
