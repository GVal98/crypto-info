import { Typography } from '@material-ui/core'

export default function Heading({ children }) {
  return (
    <Typography sx={{ mb: 1 }} variant="h4" component="h1">
      {children}
    </Typography>
  )
}
