import './App.css';
import Discover from './components/Discover';
import FindPorsche from './components/FindPorsche';
import Footer from './components/Footer';
import Models from './components/Models';
import Navbar from './components/Navbar';
import ShoppingTools from './components/ShoppingTools';
import Slider from './components/Slider';

function App() {
  
  return (
    <>
      <Navbar />
      <Slider />
      <h1 className='text-4xl font-bold m-8 ml-20'>Models</h1>
      <div className="flex flex-wrap ">
        <Models name="718" image={"https://images.unsplash.com/photo-1611859266720-147cc87658f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D"} price={14772000}/>
        <Models name="718" image={"https://images.unsplash.com/photo-1616361986889-3a182ffc7a23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D"} price={14772000}/>
        <Models name="GT3RS" image={"https://images.unsplash.com/photo-1547757015-025b1a633637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D"} price={14772000}/>
        <Models name="718" image={"https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxwb3JzY2hlfGVufDB8fDB8fHww"} price={14772000}/>
        <Models name="GT3RS" image={"https://images.unsplash.com/photo-1579200152039-7051de8a159c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxwb3JzY2hlfGVufDB8fDB8fHww"} price={14772000}/>
        <Models name="718 Spyder" image={"https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D"} price={14772000}/>
      </div>
      <div className="my-2 ml-20 text-sm mb-10">* European specifications shown below. Market specific values to be confirmed upon homologation.</div>

      <FindPorsche />
      <ShoppingTools />
      <Discover />
      <Footer />
    </>
  );
}

export default App;
