import NameCellView from './NameCellView'

const createLinkTo = (coinData) => ({
  pathname: `/coin/${coinData.id}`,
  state: {
    name: coinData.name,
    image: coinData.image,
    symbol: coinData.symbol,
    price: coinData.current_price,
    change24h: coinData.price_change_percentage_24h,
    marketCap: coinData.market_cap,
    marketCapRank: coinData.market_cap_rank,
  },
})

export default function NameCell({ coinData }) {
  return (
    <NameCellView
      linkTo={createLinkTo(coinData)}
      name={coinData.name}
      image={coinData.image}
      symbol={coinData.symbol}
    />
  )
}
