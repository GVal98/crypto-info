import { useGetCoinsQuery } from '../../api/coinsApi'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import Heading from '../Heading'
import Table from './Table'
import Pagination from './Pagination'

export default function CoinsList() {
  const pageNumber = useParams().pageNumber || 1
  const { data, error, isFetching } = useGetCoinsQuery(pageNumber)

  if (error) return 'Error'

  return (
    <>
      <Loader loading={isFetching} />
      <Heading>Cryptocurrency List</Heading>
      {data && 
      <>
        <Table data={data} />
        <Pagination pageNumber={pageNumber} />
      </>
      }
    </>
  )
}