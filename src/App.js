import { Route, Redirect, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import AddQuote from "./pages/AddQuote";

function App() {

  const DUMMY_QUOTES = [
    {
      id: '1',
      author: 'Lion',
      text: 'Test quote 1'
    },
    {
      id: '2',
      author: 'test2',
      text: 'Test quote 2'
    },
  ]

  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes/:quoteId' exact >
            <QuoteDetail allQuotes={DUMMY_QUOTES} />
          </Route>
          <Route path='/quotes'>
            <Quotes allQuotes={DUMMY_QUOTES} />
          </Route>
          <Route path='/add-quote'>
            <AddQuote />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
