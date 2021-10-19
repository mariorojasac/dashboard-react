import Analysis from "./components/Analysis"
import Rating from "./components/Rating"
import Reviews from "./components/Reviews"
import Sidebar from "./components/Sidebar"
import Visitors from "./components/Visitors"
import "./styles.css"

function App() {
  return (
    <div className="maindiv">
      <Sidebar />
      <div className="threediv">
      <Reviews />
      <Rating />
      <Analysis />
        <Visitors />
      </div>
    </div>
  );
}

export default App;
