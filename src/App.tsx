import './App.css'
import SearchAppBar from './components/Navigation'
import theme from './themes/theme'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import PlanetPage from './pages/PlanetPage'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'
import PeoplePage from './pages/PeoplePage'
import PeoplesPage from './pages/PeoplesPage'
import PlanetsPage from './pages/PlanetsPage'
import SpeciesPage from './pages/SpeciesPage'
import SpeciePage from './pages/SpeciePage'
import StarshipsPage from './pages/StarshipsPage'
import StarshipPage from './pages/StarshipPage'
import VehiclesPage from './pages/VehiclesPage'
import VehiclePage from './pages/VehiclePage'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
        <SearchAppBar />
          <Routes>
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/film/:id" element={<FilmPage />} />
            <Route path="/people" element={<PeoplesPage />} />
            <Route path="/people/:id" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/planet/:id" element={<PlanetPage />} />
            <Route path="/species" element={<SpeciesPage />} />
            <Route path="/specie/:id" element={<SpeciePage />} />
            <Route path="/starships" element={<StarshipsPage />} />
            <Route path="/starship/:id" element={<StarshipPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/vehicle/:id" element={<VehiclePage />} />
          </Routes>
          
        </Router>
        
      
      
    </ ThemeProvider>
  )
}

export default App
