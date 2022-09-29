import { Box } from '@material-ui/core'
import ChartView from './ChartView'
import { useGetCoinHistoryQuery } from '../../../api/coinsApi'
import Loader from '../../Loader'

const mapData = (data) => data.prices.map((tuple) => ({ date: tuple[0], price: tuple[1] }))

export default function Chart({ coinId }) {
  const { data, isError, isFetching } = useGetCoinHistoryQuery(coinId)

  return (
    <Box height="400px">
      {isError && 'Error'}
      <Loader loading={isFetching} />
      {data && <ChartView prices={mapData(data)} />}
    </Box>
  )
}
