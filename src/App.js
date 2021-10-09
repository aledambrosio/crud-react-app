import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import List from './components/List'
import New from './components/New'
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'

/**
 * CRUD example App with React.
 * @return {Object} The main component.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button
                    variant="contained"
                    component={NavLink}
                    to="/"
                    activeClassName="button-active"
                  >
                    <HomeIcon /> Inicio
                  </Button>
                  <Button
                    variant="contained"
                    component={NavLink}
                    to="/new"
                    activeClassName="button-active"
                  >
                    <AddIcon /> Nueva
                  </Button>
                </ButtonGroup>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
        <container>
          <Switch>
            <Route path="/new">
              <New />
            </Route>
            <Route exact path="/">
              <List />
            </Route>
          </Switch>
        </container>
      </div>
    </Router>
  )
}

export default App
