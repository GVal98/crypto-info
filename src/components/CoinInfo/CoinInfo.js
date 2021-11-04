import { useGetCoinInfoQuery } from '../../api/coinsApi'
import { useLocation, useParams } from 'react-router-dom'
import { Typography, Box, Container } from '@material-ui/core'
import MainInfo from './MainInfo'
import Chart from './Chart'
import ExtraInfo from './ExtraInfo'
import Loader from '../Loader'

export default function CoinInfo() {
  const { coinId } = useParams()
  const location = useLocation()
  const cachedData = location.state
  const { data, isError, isFetching } = useGetCoinInfoQuery(coinId)
  
  let formattedData = null
  if (data) formattedData = { 
    name: data.name,
    image: data.image.large,
    symbol: data.symbol,
    price: data.market_data.current_price.usd,
    change24h: data.market_data.price_change_percentage_24h,
    marketCap: data.market_data.market_cap.usd,
    marketCapRank: data.market_cap_rank,
    category: data.categories[0],
    homePage: data.links.homepage[0],
    circulatingSupply: data.market_data.circulating_supply,
    maxSupply: data.market_data.max_supply,
    ath: data.market_data.ath.usd,
    athDate: data.market_data.ath_date.usd,
    athChange: data.market_data.ath_change_percentage.usd
  }

  return (
    <>
      {isError && 'Error'}
      <Loader loading={isFetching} />
      <MainInfo data={data ? formattedData : cachedData} />
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box flexGrow="1" maxWidth="65%">
          <Typography variant="h5" component="h2">Annual price chart</Typography>
          <Chart coinId={coinId} />
        </Box>
        <Box flexShrink="0" minWidth="30%">
          <Typography variant="h5" component="h2">Info</Typography>
          {isError && 'Error'}
          <Loader loading={isFetching} />
          {data && <ExtraInfo data={formattedData} />}
        </Box>
      </Container>
    </>
  )
}