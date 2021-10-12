import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import List from './components/List'
import New from './components/New'
import NavBar from './components/NavBar'
import { Container } from '@mui/material'

/**
 * CRUD example App with React.
 * @return {Object} The main component.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <NavBar />
        </header>
        <Container>
          <Switch>
            <Route path="/new">
              <New />
            </Route>
            <Route exact path="/">
              <List />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
