import { TableContainer, Table, Paper, TableBody, Link } from '@material-ui/core'
import Row from './Row'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

const formatSypply = (supply, symbol) => `${Math.round(supply) || 'Infinity'} ${symbol}`

export default function ExtraInfo({ coinData }) {
  const symbol = coinData.symbol.toUpperCase()
  const homePageLink = <Link href={coinData.homePage}>{coinData.homePage}</Link>

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <Row name="Category" value={coinData.category} />
          <Row name="Home Page" value={homePageLink} />
          <Row name="Circulating Supply" value={formatSypply(coinData.circulatingSupply, symbol)} />
          <Row name="Max Supply" value={formatSypply(coinData.maxSupply, symbol)} />
          <Row name="All Time High" value={`${coinData.ath} ${symbol}`} />
          <Row name="ATH Date" value={formatDate(coinData.athDate)} />
          <Row name="ATH Change" value={`${coinData.athChange.toFixed(2)}%`} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
