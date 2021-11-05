import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import CoinsList from "../components/CoinsList"
import CoinInfo from "../components/CoinInfo"
import LoginModal from "../components/LoginModal"

export default function App() {

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
          <Route path="/">
            <CoinsList />
          </Route>
          <Route path="*">
            Not Found
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}