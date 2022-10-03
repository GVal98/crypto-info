import { useHistory } from 'react-router-dom'
import { Pagination as MaterialPagination } from '@material-ui/core'

const style = { mt: 2, display: 'flex', justifyContent: 'center' }

export default function Pagination({ pageNumber }) {
  const onPageChange = (page) => {
    if (!page) return
    history.push(`/${page}`)
    window.scrollTo(0, 0)
  }

  const history = useHistory();

  return (
    <MaterialPagination
      sx={style}
      count={10}
      hidePrevButton
      hideNextButton
      page={+pageNumber}
      onChange={(e, page) => onPageChange(page)}
    />
  )
}
