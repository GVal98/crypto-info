import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import NameCell from './NameCell'
import ChangeCell from './ChangeCell'

const rowStyle = { '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }

export default function RowView({ coinData, isFavorite, addToFavorites }) {
  return (
    <TableRow sx={rowStyle}>
      <TableCell component="th" scope="row">{coinData.market_cap_rank}</TableCell>
      <NameCell coinData={coinData} />
      <TableCell>
        <IconButton onClick={addToFavorites}>{isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}</IconButton>
      </TableCell>
      <TableCell align="right">
        ${coinData.current_price}
      </TableCell>
      <ChangeCell change={coinData.price_change_percentage_24h} />
      <TableCell align="right">
        ${coinData.market_cap.toLocaleString('en-US')}
      </TableCell>
    </TableRow>
  )
}
