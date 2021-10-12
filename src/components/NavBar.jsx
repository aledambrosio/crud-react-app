import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo-firebase-cra.svg'
/**
 *
 * @return {Object} Component for Creating an entity
 */
export default function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, height: '12vh' }}>
        <img src={Logo} className="App-header-Logo" alt="logo" />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button variant="contained" component={Link} to="/">
                <HomeIcon /> Inicio
              </Button>
              <Button variant="contained" component={Link} to="/new">
                <AddIcon /> Nueva
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
