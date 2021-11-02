import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import CoinsList from "../pages/CoinsList"
import CoinInfo from "../pages/CoinInfo"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container  maxWidth="lg">
          <Header />
          <Switch>
            <Route exact path="/">
              <CoinsList />
            </Route>
            <Route exact path="/:pageNumber">
              <CoinsList />
            </Route>
            <Route exact path="/coin/:coinId">
              <CoinInfo />
            </Route>
            <Route path="*">
              Not Found
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  )
}