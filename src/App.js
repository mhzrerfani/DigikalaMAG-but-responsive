import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import CardsSlider from "./containers/CardSlider";
function App() {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <HomePage />
      <CardsSlider />
    </div>
  );
}

export default App;
