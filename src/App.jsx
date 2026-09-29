import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Download from "./components/Download";
import Kids from "./components/Kids";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Occasions from "./components/Occasions";
import "./App.css";

import createImage from "./assets/create.png";
import hostImage from "./assets/host.png";
import playImage from "./assets/play.png";
import learnImage from "./assets/learn.png";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="intro-section">
        <h2>
          One app. Create, host, play, and learn.
        </h2>
        <p>
          Whether you're a teacher building lessons, a student turning notes
          into a study tool, or a friend who takes quiz night a little too
          seriously, the Kahoot! app lets you create, host, play, and learn
          on any device, anywhere. Free to download and free to get started.
        </p>
      </section>
      <section className="features">
<Feature
  title="Create"
  heading="Build a quiz on anything"
  description="Make your own quiz, trivia game, or study set in minutes, on any topic, in different languages. Great for teachers building lessons, friends planning a game night, or students turning notes into a revision tool."
  image={createImage}
  reverse
/>
<Feature
  title="Host"
  heading="Run a live game with your group"
  description="Share a PIN and watch your players join in real time. Host a Kahoot game wherever your group is."
  image={hostImage}
/>
<Feature
  title="Play"
  heading="Join any game instantly"
  description="Got a PIN? You're in. No account needed to play — just open the app or browser, enter the code, and you're live. Players join from any device."
  image={playImage}
  reverse
/>
<Feature
  title="Learn"
  heading="Turn any content into a game"
  description="Upload your own material and Kahoot! turns it into flashcards or a quiz automatically. Or explore millions of ready-made kahoots across every subject, built by teachers, creators, and top brands."
  image={learnImage}
/>
       

      </section>
      <Download />
      <Kids />
      <FAQ />
      <Occasions/>
      <Footer />
    </div>
  );
}
export default App;