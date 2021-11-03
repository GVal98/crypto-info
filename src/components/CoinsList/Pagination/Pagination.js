import { useHistory } from 'react-router-dom'
import { Pagination as MaterialPagination } from '@material-ui/core'

const style = { mt: 2, display: 'flex', justifyContent: 'center' }

export default function Pagination({pageNumber}) {
  const onPageChange = pageNumber => {
    history.push(`/${pageNumber}`)
    window.scrollTo(0, 0)
  }

  const history = useHistory();

  return (
    <MaterialPagination
      sx={style}
      count={10}
      page={+pageNumber}
      onChange={(e, pageNumber) => onPageChange(pageNumber)}
    />
  )
}