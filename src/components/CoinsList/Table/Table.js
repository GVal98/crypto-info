import { TableContainer, Table as MaterialTable, Paper, TableBody } from '@material-ui/core'
import Head from './Head'
import Row from './Row'

export default function Table({ data, favorites }) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable>
        <Head />
        <TableBody>
          {data.map((row) => <Row data={row} key={row.id} favorite={favorites.includes(row.id)} />)}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}
