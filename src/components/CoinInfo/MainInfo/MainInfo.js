import { useGetCoinInfoQuery } from '../../../api/coinsApi'
import { useLocation } from 'react-router-dom'
import Loader from '../../Loader'
import MainInfoView from './MainInfoView'

export default function MainInfo({ coinId }) {
  const location = useLocation()
  const cachedData = location.state
  const { data, isError, isFetching } = useGetCoinInfoQuery(coinId)
  
  let formattedData = null
  if (data) formattedData = { 
    name: data.name,
    image: data.image.large,
    symbol: data.symbol,
    price: data.market_data.current_price.usd,
    change24h: data.market_data.price_change_percentage_24h
  }

  return (
    <>
      {isError && 'Error'}
      <Loader loading={isFetching} />
      <MainInfoView data={data ? formattedData : cachedData} />
    </>
  )
}