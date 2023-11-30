import "./App.css";
// import Faq from "./components/Faqsec";

import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="App">
      <Section1 />
      <div className="mid-area">
        {" "}
        <Subscription />
      </div>
      <Footer />
    </div>
  );
}

export default App;
