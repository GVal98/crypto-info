import { useGetCoinInfoQuery, useGetCoinHistoryQuery } from '../../api/coinsApi'
import { useParams, useLocation } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { 
  LinearProgress,
  Box,
  Avatar,
  Typography
} from '@material-ui/core'

const Loader = (visibility='visible') => (
  <Box sx={{ width: '100%', visibility: visibility }}>
    <LinearProgress />
  </Box>
)

const getChangeColor = (percent) => percent > 0 ? 'success.main' : 'error.main'

const Chart = ({prices}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        fontFamily={'Roboto, sans-serif'}
        fontSize={14}
        data={prices}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" minTickGap="1" tickFormatter={(timestamp) => (new Date(timestamp)).toLocaleDateString()}/>
        <YAxis tickFormatter={(price) => `$${price}`}/>
        <Tooltip contentStyle={{fontFamily:'Roboto, sans-serif'}} formatter={(price) => [`$${+price.toPrecision(5)}`, 'Price']} labelFormatter={(timestamp) => (new Date(timestamp)).toLocaleDateString()} />
        <Line type="monotone" dataKey="price" dot="" strokeWidth={2} stroke="#42a5f5" />
      </LineChart>
    </ResponsiveContainer>
)}

const Info = ({info: {name, image, symbol, price, change24h}}) => (
  <Box sx={{display: 'flex', alignItems: 'center', mb: 10, mt: 1}}>
  <Avatar sx={{ width: 50, height: 50, display: 'inline-block', mr: 1 }} src={image} />
  <Box sx={{display: 'flex', alignItems: 'baseline'}}>
    <Typography sx={{ display: 'inline-block', mr: 1 }} variant="h4" component="h1">{name}</Typography>
    <Typography sx={{ display: 'inline-block', fontWeight: 'light', mr: 5}} variant="h6" component="div">{symbol.toUpperCase()}</Typography>
    <Typography sx={{ display: 'inline-block', mr: 1}} variant="h6" component="div">${price}</Typography>
    <Typography sx={{ display: 'inline-block', color: getChangeColor(change24h)}} variant="body2" component="div">{change24h.toFixed(1)}%</Typography>
  </Box>
</Box>
)

export default function CoinInfo() {
  const { coinId } = useParams()
  const location = useLocation()
  const cachedInfo = location.state
  const { data: info, isError: infoError, isFetching: infoFetching } = useGetCoinInfoQuery(coinId)
  const { data: history, isError: historyError, isFetching: historyFetching } = useGetCoinHistoryQuery(coinId)
  let formattedInfo = null
  if (info) formattedInfo = { 
    name: info.name,
    image: info.image.large,
    symbol: info.symbol,
    price: info.market_data.current_price.usd,
    change24h: info.market_data.price_change_percentage_24h
  }
  return (
    <>
      {infoError && 'Error' }
      {infoFetching ? <Loader /> : <Loader visibility="hidden" />}
      {info ? <Info info={formattedInfo}/> : <Info info={cachedInfo}/> }
      <Typography variant="h5" component="h2">Annual price chart</Typography>
      <Box sx={{height: 500}}>
        {historyError && 'Error'}
        {historyFetching && <Loader />}
        {history && <Chart prices={history.prices.map(tuple => ({date: tuple[0], price: tuple[1]}))}/>}
      </Box>
    </>
  )
}