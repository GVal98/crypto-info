import { TableCell } from '@material-ui/core'
import { getChangeColor } from '../../../../utils'

export default function ChangeCell({ change }) {
  return (
    <TableCell sx={{ color: getChangeColor(change) }} align="right">
      {change.toFixed(1)}%
    </TableCell>
  )
}
