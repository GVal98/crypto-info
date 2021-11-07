import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../../../api/usersApi'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import NameCell from './NameCell'
import ChangeCell from './ChangeCell'

const rowStyle = { '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }

export default function Row({ data, favorite }) {
  const [addFavorite] = useAddFavoriteMutation()
  const [removeFavorite] = useRemoveFavoriteMutation()
  const accessToken = useSelector(state => state.user.accessToken)
  const history = useHistory()

  return (
    <TableRow sx={rowStyle}>
      <TableCell component="th" scope="row">{data.market_cap_rank}</TableCell>
      <NameCell data={data} />
      <TableCell>
        <IconButton onClick={() => accessToken ? (favorite ? removeFavorite({ accessToken, tokenId: data.id }) : addFavorite({ accessToken, tokenId: data.id })) : history.push(`${history.pathname === '/' ? '' : history.pathname}/login`) }>{favorite ? <Favorite color="error" /> : <FavoriteBorder />}</IconButton>
      </TableCell>
      <TableCell align="right">${data.current_price}</TableCell>
      <ChangeCell change={data.price_change_percentage_24h} />
      <TableCell align="right">${data.market_cap.toLocaleString('en-US')}</TableCell>
    </TableRow>
  )
}