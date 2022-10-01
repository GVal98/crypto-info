import { TableContainer, Table as MaterialTable, Paper, TableBody } from '@material-ui/core'
import Head from './Head'
import Row from './Row'

export default function Table({ coinsArray, favorites }) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable>
        <Head />
        <TableBody>
          {coinsArray.map(
            (coin) => (
              <Row
                coinData={coin}
                key={coin.id}
                isFavorite={favorites.includes(coin.id)}
              />
            ),
          )}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}
