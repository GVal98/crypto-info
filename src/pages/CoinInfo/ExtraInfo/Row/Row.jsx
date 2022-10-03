import { TableRow, TableCell } from '@material-ui/core'

const rowStyle = { '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }

export default function Row({ name, value }) {
  return (
    <TableRow sx={rowStyle}>
      <TableCell component="th" scope="row">{name}</TableCell>
      <TableCell align="right" sx={{ fontWeight: 'medium' }}>{value}</TableCell>
    </TableRow>
  )
}
