import { Link } from 'react-router-dom'
import { Box, TableCell, Avatar } from '@material-ui/core'

const avatarStyle = {
  width: 25, height: 25, display: 'inline-block', verticalAlign: 'middle',
}

const nameStyle = {
  display: 'inline-block', verticalAlign: 'middle', ml: 2, color: 'black',
}

const symbolStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  ml: 2,
  fontWeight: 'light',
  color: 'black',
}

export default function NameCellView({ linkTo, image, name, symbol }) {
  return (
    <TableCell sx={{ whiteSpace: 'nowrap' }}>
      <Link to={linkTo}>
        <Avatar sx={avatarStyle} src={image} />
        <Box sx={nameStyle}>{name}</Box>
        <Box sx={symbolStyle}>{symbol.toUpperCase()}</Box>
      </Link>
    </TableCell>
  )
}
