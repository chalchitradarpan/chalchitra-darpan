import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import Navbar from './Navbar';
import Banner from './Banner';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Navbar/>
            <main className={styles.pagemain}>
              <Banner/>
            </main>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
