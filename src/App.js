import './App.css';
import Card1 from './components/Card1';
import Card11 from './components/card11';
import Card2 from './components/Card2';
import Carousell from './components/Carousell';
import Footer from './components/Footer';
import Mypricing from './components/Mypricing';
import Myworks from './components/myworks';
import CenterMode from './components/slickslide';
import Tabb from './components/tab';




function App() {
  return (
    <div className="App">
      <Carousell/>
      <CenterMode/>
      <Card1/>
      <Card2/>
      <Card11/>
      <Tabb/>
      <Myworks/>
      <Mypricing/>
      <Footer/>
      
    </div>
  );
}

export default App;
