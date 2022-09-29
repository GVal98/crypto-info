import { Avatar, Typography, Box } from '@material-ui/core'
import { getChangeColor } from '../../../utils'

const Icon = ({ src }) => (
  <Avatar
    sx={{ width: 50, height: 50, display: 'inline-block', mr: 1 }}
    src={src}
  />
)

const Name = ({ name }) => (
  <Typography
    sx={{ display: 'inline-block', mr: 1 }}
    variant="h4"
    component="h1"
  >
    {name}
  </Typography>
)

const Symbol = ({ symbol }) => (
  <Typography
    sx={{ display: 'inline-block', fontWeight: 'light', mr: 5 }}
    variant="h6"
    component="div"
  >
    {symbol.toUpperCase()}
  </Typography>
)

const Price = ({ price }) => (
  <Typography
    sx={{ display: 'inline-block', mr: 1 }}
    variant="h6"
    component="div"
  >
    ${price}
  </Typography>
)

const Change24h = ({ change24h }) => (
  <Typography
    sx={{ display: 'inline-block', mr: 5, color: getChangeColor(change24h) }}
    variant="body2"
    component="div"
  >
    {change24h.toFixed(1)}%
  </Typography>
)

const MarketCap = ({ marketCap }) => (
  <Typography
    sx={{ display: 'inline-block', mr: 1 }}
    variant="h6"
    component="div"
  >
    ${marketCap.toLocaleString('en-US')}
  </Typography>
)

const MarketCapRank = ({ marketCapRank }) => (
  <Typography
    sx={{ display: 'inline-block' }}
    variant="body2"
    component="div"
  >
    #{marketCapRank}
  </Typography>
)

const NameBox = ({ image, name, symbol }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Icon src={image} />
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
      <Name name={name} />
      <Symbol symbol={symbol} />
    </Box>
  </Box>
)

const PriceBox = ({ price, change24h }) => (
  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
    <Price price={price} />
    <Change24h change24h={change24h} />
  </Box>
)

const MarketCapBox = ({ marketCap, marketCapRank }) => (
  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
    <MarketCap marketCap={marketCap} />
    <MarketCapRank marketCapRank={marketCapRank} />
  </Box>
)

export default function MainInfo({
  data: { name, image, symbol, price, change24h, marketCap, marketCapRank },
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
      <NameBox image={image} name={name} symbol={symbol} />
      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 1, flexWrap: 'wrap' }}>
        <PriceBox price={price} change24h={change24h} />
        <MarketCapBox marketCap={marketCap} marketCapRank={marketCapRank} />
      </Box>
    </Box>
  )
}
