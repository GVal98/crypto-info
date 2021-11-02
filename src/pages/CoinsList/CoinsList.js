import { useGetCoinsQuery } from '../../api/coinsApi'
import { Link, useParams, useHistory } from 'react-router-dom'
import { 
  LinearProgress,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Avatar,
  Pagination,
  Typography
} from '@material-ui/core'

const Loader = (visibility='visible') => (
  <Box sx={{ width: '100%', visibility: visibility }}>
    <LinearProgress />
  </Box>
)

const table = data => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Coin</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">24h</TableCell>
          <TableCell align="right">Market Cap</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
          >
            <TableCell component="th" scope="row">
              {row.market_cap_rank}
            </TableCell>
            <TableCell>
              <Link to={{
                pathname: `/coin/${row.id}`, state: { name: row.name, image: row.image, symbol: row.symbol, price: row.current_price, change24h: row.price_change_percentage_24h}
              }}>
                <Avatar sx={{ width: 25, height: 25, display: 'inline-block', verticalAlign: 'middle' }}src={row.image} />
                <Box sx={{ display: 'inline-block', verticalAlign: 'middle', ml: 2, color: 'black' }}>{row.name}</Box>
                <Box sx={{ display: 'inline-block', verticalAlign: 'middle', ml: 2, fontWeight: 'light', color: 'black' }}>{row.symbol.toUpperCase()}</Box>
              </Link>
            </TableCell>
            <TableCell align="right">${row.current_price}</TableCell>
            <TableCell sx={{ color: getChangeColor(row.price_change_percentage_24h) }} align="right">{row.price_change_percentage_24h.toFixed(1)}%</TableCell>
            <TableCell align="right">${row.market_cap.toLocaleString('en-US')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

const getChangeColor = (percent) => percent > 0 ? 'success.main' : 'error.main'

export default function CoinsList() {
  const onPageChange = (page) => {
    history.push(`/${page}`);
    window.scrollTo(0, 0);
  }

  const history = useHistory();
  const pageNumber = useParams().pageNumber || 1;
  const { data, error, isFetching } = useGetCoinsQuery(pageNumber)

  if (error) return 'Error'

  return (
    <>
      {isFetching ? <Loader/> : <Loader visibility='hidden'/>}
      <Typography sx={{ mb: 1 }} variant="h4" component="h1">Cryptocurrency List</Typography>
      {data ? table(data) : ''}
      <Pagination sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} count={10} page={+pageNumber} onChange={(e, pageNumber) => onPageChange(pageNumber)} />
    </>
  );
}