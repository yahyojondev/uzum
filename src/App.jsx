import Home from "./pages/home/index";
import Header from "./components/header/Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
