import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import CardsSlider from "./containers/CardSlider";
import Articles from "./containers/Articles";
import Footer from "./containers/Footer";
function App() {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <HomePage />
      <CardsSlider />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
