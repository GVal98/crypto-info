import { LinearProgress, Box } from '@material-ui/core'

const getVisibility = loading => loading ? 'visible' : 'hidden'

export default function Loader({ loading }) {
  return (
    <Box sx={{ width: '100%', visibility: getVisibility(loading) }}>
      <LinearProgress />
    </Box>
  )
}