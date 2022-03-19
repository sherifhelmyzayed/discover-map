import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './Pages/Home';
import Map from './Pages/Map'
import DashboardModule from './module/DashboardModule';
import FilterBar from './Pages/FilterBar';


const mainTheme = createTheme({
  palette: {
    // essam choose of color set is presented here:
    primary: {
      main: '#0c2442',
      light: '#4f7492'
    },
    secondary: {
      main: '#4f5a71'
    },
    purple: {
      main: '#17152e'
    },
    newColor: {
      main: "#fffff"
    },
    ofwhite: '#ffffff',
    light: '#f7f7f7'
  },

  // Typography should be edit according to layout
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 200,
    fontWeightBold: 800,
    fontSize: 14,
    lineHeight: '50',
    h1: {
      fontSize: 30,
    },
    h5: {
      fontWeight: 900,
      fontSize: 22
    },
    p: {
      fontFamily: 'Lato',
    },
    subtitle1: {
      fontFamily: 'lato',
      fontWeight: 500,
      fontSize: 14
    },
    subtitle2: {
      fontFamily: 'lato',
      fontWeight: 700,
      fontSize: 13
    },
    OVERLINE: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 13
    },
    headerItem: {
      fontFamily: 'lato',
      fontWeight: 600,
      marginLeft: 30,
      marginRight: 30,
      fontSize: 12
    },
    clickable: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 13,
      marginTop: 10,
      '&:hover': {
        cursor: 'pointer'
    },
    }

    // body1 body subtitle1 subtitle2 caption button overline
  }

})
function App() {
  return (

      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="dashboard/*" element={<DashboardModule />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

  )
}

export default App;