import { Link } from 'react-router-dom'
import { Box, TableCell, Avatar } from '@material-ui/core'

const avatarStyle = { width: 25, height: 25, display: 'inline-block', verticalAlign: 'middle' }
const nameStyle = { display: 'inline-block', verticalAlign: 'middle', ml: 2, color: 'black' }
const symbolStyle = { 
  display: 'inline-block',
  verticalAlign: 'middle',
  ml: 2,
  fontWeight: 'light',
  color: 'black',
}

export default function NameCell({ data }) {
  const linkTo = {
    pathname: `/coin/${data.id}`,
    state: {
      name: data.name,
      image: data.image,
      symbol: data.symbol,
      price: data.current_price,
      change24h: data.price_change_percentage_24h
    }
  }

  return (
    <TableCell>
      <Link to={linkTo}>
        <Avatar sx={avatarStyle} src={data.image} />
        <Box sx={nameStyle}>{data.name}</Box>
        <Box sx={symbolStyle}>{data.symbol.toUpperCase()}</Box>
      </Link>
    </TableCell>
  )
}