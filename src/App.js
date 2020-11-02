import React from 'react';
import './App.scss';
import Banner from './components/Banner';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import InfoSection from './components/InfoSection';
import CenteredInfo from './components/CenteredInfo';
import Footer from './components/Footer';

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
        <CenteredInfo 
          title={"Nice... “Rocks”?"}
          body={"This project was inspired by the bowerbird, which delicately assembles intricate nests filled with special flowers, shells, and rocks to share with that special somebird.\nIf you’re looking for a personal, friendly, “nest-to-nest” sharing system, we hope you find it here."}
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
          screenshot={"./images/received-rocks.png"}
          graphic={"./images/bird.svg"}
        />
        <InfoSection 
          title={"No time pressure"}
          paragraphs={[
            {
              title: "Customizable notification settings",
              body: "Choose times you want to be notified about new content. You can be alerted to new recommendations right when your workday ends and your leisure time begins.",
            },
            {
              title: "Catch up at your leisure",
              body: "Rocks stay in your collection until you have the time for them. No more scrolling back through long chat threads to find the name of that movie you’ve been meaning to see.",
            },
            {
              title: "Send a response",
              body: "Once you’re finished, send a response! Let your friend know if your thoughts, and the rock will move from your collection to your archive. Out of the way, but there if you want to revisit it.",
            },
          ]}
          screenshot={"./images/send-response.png"}
          graphic={"./images/rocks.svg"}
          horizontalFlip
        />
        <InfoSection 
          title={"Secure and reliable"}
          paragraphs={[
            {
              title: "Never lose a thing",
              body: "Nice rocks is built on Google Firebase, so all your data is stored on Google’s cloud servers.",
            },
            {
              title: "Offline mode",
              body: "Access your collection without an internet connection. You can even send rocks and responses, which will queue in the background and then send as soon as you reconnect.",
            },
          ]}
          screenshot={"./images/new-rock.png"}
          graphic={"./images/leaves.svg"}
        />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
