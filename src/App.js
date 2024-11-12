import LandingPage from "./pages/LandingPage";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import MobilePage from "./pages/MobilePage";
import WatchPage from "./pages/WatchPage";
import ComputerPage from "./pages/ComputerPage";
import KitchenPage from "./pages/KitchenPage";
import FurniturePage from "./pages/FurniturePage";
import AcPage from "./pages/ACPage";
import MenPage from "./pages/MenPage";
import WomanPage from "./pages/WomanPage";
import TVPage from "./pages/TVPage";
import FridgePage from "./pages/FridgePage";
import SpeakerPage from "./pages/SpeakerPage";
import BooksPage from "./pages/BooksPage";
import MobileSingle from "./singles/MobileSingle";
import ComputerSingle from "./singles/ComputerSingle";
import WatchSingle from "./singles/WatchSingle";
import MenSingle from "./singles/MenSingle";
import WomanSingle from "./singles/WomanSingle";
import BooksSingle from "./singles/BooksSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import FridgeSingle from "./singles/FridgeSingle";
import AcSingle from "./singles/AcSingle";
import KitchenSingle from "./singles/KitchenSingle";
import SpeakersSingle from "./singles/SpeakersSingle";
import TvSingle from "./singles/TvSingle";
import UserCart from "./UserCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/watches' element={<WatchPage />}></Route>
        <Route path='/mobiles' element={<MobilePage />}></Route>
        <Route path='/computers' element={<ComputerPage />}></Route>
        <Route path='/kitchen' element={<KitchenPage />}></Route>
        <Route path='/furniture' element={<FurniturePage />}></Route>
        <Route path='/ac' element={<AcPage />}></Route>
        <Route path='/men' element={<MenPage />}></Route>
        <Route path='/woman' element={<WomanPage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
        <Route path="/speakers" element={<SpeakerPage />}></Route>
        <Route path="/fridge" element={<FridgePage />}></Route>
        <Route path="/tv" element={<TVPage />}></Route>
        <Route path='/mobiles/:id' element={<MobileSingle />}></Route>
        <Route path='/computers/:id' element={<ComputerSingle />}></Route>
        <Route path="/watches/:id" element={<WatchSingle />}></Route>
        <Route path='/men/:id' element={<MenSingle />}></Route>
        <Route path='/woman/:id' element={<WomanSingle />}></Route>
        <Route path="/books/:id" element={<BooksSingle />}></Route>
        <Route path='/furniture/:id' element={<FurnitureSingle />}></Route>
        <Route path='/kitchen/:id' element={<KitchenSingle />}></Route>
        <Route path="/fridge/:id" element={<FridgeSingle />}></Route>
        <Route path='/speakers/:id' element={<SpeakersSingle />}></Route>
        <Route path='/ac/:id' element={<AcSingle />}></Route>
        <Route path="/tv/:id" element={<TvSingle />}></Route>
        <Route path='/cart' element={<UserCart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;