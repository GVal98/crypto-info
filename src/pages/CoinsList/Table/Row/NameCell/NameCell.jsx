import NameCellView from './NameCellView'

const createLinkTo = (data) => ({
  pathname: `/coin/${data.id}`,
  state: {
    name: data.name,
    image: data.image,
    symbol: data.symbol,
    price: data.current_price,
    change24h: data.price_change_percentage_24h,
    marketCap: data.market_cap,
    marketCapRank: data.market_cap_rank,
  },
})

export default function NameCell({ data }) {
  return (
    <NameCellView
      linkTo={createLinkTo(data)}
      name={data.name}
      image={data.image}
      symbol={data.symbol}
    />
  )
}
