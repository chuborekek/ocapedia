import './App.css';
import ContactOPedia from './contactopedia/ContactOPedia';
import CountOPedia from './countopedia/CountOPedia';
import CyclOPedia from './cyclopedia/CyclOPedia';
import ReduxOPedia from './reduxopedia/ReduxOPedia';
import RouteOPedia from './routeopedia/RouteOPedia';
import TravelOPedia from './travelopedia/TravelOPedia';
import WatchOPedia from './watchopedia/WatchOPedia';

function App() {
  return (
    <div className="App">
     <CountOPedia/>
     <ContactOPedia/>
     <CyclOPedia/>
     <WatchOPedia/>
     <RouteOPedia/>
     <ReduxOPedia/>
     <TravelOPedia/>
    </div>
  );
}

export default App;
