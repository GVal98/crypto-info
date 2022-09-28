import { TableContainer, Table, Paper, TableBody, Link } from '@material-ui/core'
import Row from './Row'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

const formatSypply = (supply, symbol) => `${Math.round(supply) || 'Infinity'} ${symbol}`

export default function ExtraInfo({ data }) {
  const symbol = data.symbol.toUpperCase()
  const homePageLink = <Link href={data.homePage}>{data.homePage}</Link>

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <Row name="Category" value={data.category} />
          <Row name="Home Page" value={homePageLink} />
          <Row name="Circulating Supply" value={formatSypply(data.circulatingSupply, symbol)} />
          <Row name="Max Supply" value={formatSypply(data.maxSupply, symbol)} />
          <Row name="All Time High" value={`${data.ath} ${symbol}`} />
          <Row name="ATH Date" value={formatDate(data.athDate)} />
          <Row name="ATH Change" value={`${data.athChange.toFixed(2)}%`} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
