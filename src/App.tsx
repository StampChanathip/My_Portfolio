import "./App.css";
import Back2Top from "./Components/Back2Top";
import Activities from "./Containers/Activities";
import Education from "./Containers/Education";
import Experience from "./Containers/Experiences";
import Footer from "./Containers/Footer";
import Greetings from "./Containers/Greetings";
import Header from "./Containers/Header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Greetings />
        <Experience />
        <Education />
        <Activities />
      </main>
      <Back2Top />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
