import { useLocation, useParams } from 'react-router-dom'
import { useGetCoinInfoQuery } from '../../api/coinsApi'
import CoinInfoView from './CoinInfoView'

const mapData = (data) => ({
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
  athChange: data.market_data.ath_change_percentage.usd,
})

export default function CoinInfo() {
  const { coinId } = useParams()
  const location = useLocation()
  const cachedData = location.state
  const { data, isError, isFetching } = useGetCoinInfoQuery(coinId)

  return (
    <CoinInfoView
      coinId={coinId}
      cachedData={cachedData}
      coinData={data && mapData(data)}
      isError={isError}
      isFetching={isFetching}
    />
  )
}
