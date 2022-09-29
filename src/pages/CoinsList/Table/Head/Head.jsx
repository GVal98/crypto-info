import { TableHead, TableRow, TableCell } from '@material-ui/core'

export default function Head() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Coin</TableCell>
        <TableCell />
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">24h</TableCell>
        <TableCell align="right">Market Cap</TableCell>
      </TableRow>
    </TableHead>
  )
}
