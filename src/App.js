import React from 'react';
import './App.css';
import Banner from './components/Banner';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f7ad45',
    },
    secondary: {
      main: '#12b8ff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Banner />
      </div>
    </ThemeProvider>
  );
}

export default App;
