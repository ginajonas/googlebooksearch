import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Search from './pages/Search'
import SavedBooks from './pages/SavedBooks'
import NavBar from './components/Navbar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/saved">
          <SavedBooks />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
