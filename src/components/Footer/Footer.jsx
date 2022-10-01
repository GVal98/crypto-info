import { Typography, Link, Paper } from '@material-ui/core'

export default function Footer() {
  return (
    <Paper
      sx={{ display: 'flex', justifyContent: 'space-between', mt: 5, p: 3 }}
      variant="outlined"
    >
      <Typography>
        Coins API by <Link href="https://www.coingecko.com/">CoinGecko</Link>
      </Typography>
      <Typography>
        Developed by <Link href="https://t.me/GVal98/">GVal98</Link>
      </Typography>
    </Paper>
  )
}
