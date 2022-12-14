import { Route, Redirect } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Route path='/'>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes'>
          <Quotes />
        </Route>
      </main>
    </div>
  );
}

export default App;
