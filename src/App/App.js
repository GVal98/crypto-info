import { useSelector } from "react-redux"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import CoinsList from "../components/CoinsList"
import CoinInfo from "../components/CoinInfo"
import LoginModal from "../components/LoginModal"
import AccountInfo from "../components/AccountInfo"
import Footer from '../components/Footer'

export default function App() {
  const username = useSelector(state => state.user.username)

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
            {username ? <AccountInfo /> : <Redirect to="/" />}
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