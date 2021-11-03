import { TableCell } from '@material-ui/core'

const getColor = change => change > 0 ? 'success.main' : 'error.main'

export default function ChangeCell({ change }) {
  return (
    <TableCell sx={{ color: getColor(change) }} align="right">
      {change.toFixed(1)}%
    </TableCell>
  )
}