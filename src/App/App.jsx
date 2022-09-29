import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import LoginModal from '../components/LoginModal'
import Footer from '../components/Footer'
import CoinsList from '../pages/CoinsList'
import CoinInfo from '../pages/CoinInfo'
import Account from '../pages/Account'

export default function App() {
  const username = useSelector((state) => state.user.username)

  return (
    <BrowserRouter>
      <Container maxWidth="lg" disableGutters>
        <LoginModal />
        <Header />
        <Switch>
          <Route path="/:pageNumber(\d+)">
            <CoinsList />
          </Route>
          <Route path="/coin/:coinId">
            <CoinInfo />
          </Route>
          <Route path="/account">
            {username ? <Account /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <CoinsList />
          </Route>
          <Route path="*">
            Not Found
          </Route>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}
