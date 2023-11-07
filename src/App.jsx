
import Header_content from "./component/Header-content/Header_content";
import Header from "./component/Header/Header";
import "./App.css"; 
import Sponser from "./component/sponser/sponser";
import Residencies from "./component/Residencies/Residencies";
import Value from "./component/value/value";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header />
      <Header_content />
      </div>
      <Sponser />
      <Residencies />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


