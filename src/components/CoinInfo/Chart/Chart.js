import { useGetCoinHistoryQuery } from '../../../api/coinsApi'
import { Box } from '@material-ui/core'
import Loader from '../../Loader'
import ChartView from './ChartView'

const mapData = data => data.prices.map(tuple => ({ date: tuple[0], price: tuple[1] }))

export default function Chart({ coinId }) {
  const { data, isError, isFetching } = useGetCoinHistoryQuery(coinId)
  
  return (
    <Box height="400px">
      {isError && 'Error'}
      <Loader loading={isFetching} />
      {data && <ChartView prices={mapData(data)}/>}
    </Box>
  )
}