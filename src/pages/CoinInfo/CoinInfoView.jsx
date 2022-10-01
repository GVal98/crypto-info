import { Typography, Box, Container } from '@material-ui/core'
import MainInfo from './MainInfo'
import Chart from './Chart'
import ExtraInfo from './ExtraInfo'
import Loader from '../../components/Loader'

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: {
    xs: 'column-reverse',
    md: 'row',
  },
}

const chartStyle = {
  flexGrow: 1,
  flexShrink: 1,
  minWidth: '300px',
  mr: {
    xs: 0,
    md: 3,
  },
}

const extraInfoStyle = {
  flexShrink: 0,
  flexGrow: 0,
  mb: 2,
}

export default function CoinInfoView({ coinId, cachedData, coinData, isError, isFetching }) {
  const data = coinData || cachedData
  return (
    <>
      {isError && 'Error'}
      <Loader loading={isFetching} />
      {data && <MainInfo coinData={data} />}
      <Container disableGutters maxWidth="lg" sx={containerStyle}>
        <Box sx={chartStyle}>
          <Typography variant="h5" component="h2">Annual price chart</Typography>
          <Chart coinId={coinId} />
        </Box>
        <Box sx={extraInfoStyle}>
          <Typography variant="h5" component="h2">Info</Typography>
          {isError && 'Error'}
          <Loader loading={isFetching} />
          {coinData && <ExtraInfo coinData={coinData} />}
        </Box>
      </Container>
    </>
  )
}
