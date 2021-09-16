import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import theme from './theme'
import Navbar from './Navbar';
import Banner from './Banner';
import TheTeam from './TheTeam';
import About from './About';
import Contact from './Contact';
import CallForPapers from './CallForPapers';
import Archives from './Archives';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <ScrollToTop/>
            <Navbar/>
            <main className="pagemain">
              <Switch>
                <Route exact path="/">
                  <Banner/>
                  <About/>
                  <TheTeam/>
                  <Contact/>
                </Route>
                <Route exact path="/callforpapers">
                  <CallForPapers/>
                  <Contact/>
                </Route>
                <Route exact path="/archives">
                  <Archives/>
                  <Contact/>
                </Route>
              </Switch>
            </main>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
