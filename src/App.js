import React from 'react';
import './App.css';
import Banner from './components/Banner';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import InfoSection from './components/InfoSection';

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
        <InfoSection 
          title={"There, for you"}
          paragraphs={[
            {
              title: "Favorite things",
              body: "A Rock is a recommendation to you, for something you might enjoy.  It could be music, books, articles, or really anything.",
            },
            {
              title: "Personal content by design",
              body: 'There are no algorithmically generated feeds or influencer accounts to follow. The only recomendations you see will be made personally to you, by your friends.',
            },
            {
              title: "Resharable",
              body: "Re-sharing a Rock that was sent to you is easy. Just tap the arrow icon and add a new note to your friend.",
            },
          ]}
          screenshot={"https://placekitten.com/250/450"}
          graphic={"https://placekitten.com/120/80"}
        />
        <InfoSection 
          title={"There, for you"}
          paragraphs={[
            {
              title: "Favorite things",
              body: "A Rock is a recommendation to you, for something you might enjoy.  It could be music, books, articles, or really anything.",
            },
            {
              title: "Personal content by design",
              body: 'There are no algorithmically generated feeds or influencer accounts to follow. The only recomendations you see will be made personally to you, by your friends.',
            },
            {
              title: "Resharable",
              body: "Re-sharing a Rock that was sent to you is easy. Just tap the arrow icon and add a new note to your friend.",
            },
          ]}
          screenshot={"https://placekitten.com/250/450"}
          graphic={"https://placekitten.com/120/80"}
          horizontalFlip
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
