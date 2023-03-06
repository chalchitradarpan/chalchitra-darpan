import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import theme from './theme'
import Navbar from './Navbar';
import Banner from './Banner';
import TheTeam2k23 from './TheTeam_2k23';
import About from './About';
import Contact from './Contact_2k23';
import CallForPapers from './CallForPapers';
import Archives from './Archives';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Navbar/>
            <main className="pagemain">
              <Switch>
                <Route exact path="/">
                  <Banner/>
                  <About/>
                  <TheTeam2k23/>
                </Route>
                <Route exact path="/chalchitradarpan21_22">
                  <CallForPapers/>
                </Route>
                <Route exact path="/archives">
                  <Archives/>
                </Route>
              </Switch>
              <Contact/>
            </main>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
