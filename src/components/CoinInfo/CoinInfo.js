import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import MainInfo from './MainInfo'
import Chart from './Chart'

export default function CoinInfo() {
  const { coinId } = useParams()

  return (
    <>
      <MainInfo coinId={coinId} />
      <Typography variant="h5" component="h2">Annual price chart</Typography>
      <Chart coinId={coinId} />
    </>
  )
}