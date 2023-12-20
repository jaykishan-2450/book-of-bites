import './App.css';
// import DishCard from './DishCard';
import { useState } from "react";
import { useEffect } from "react";
import DishGrid from './DishGrid';
import NewSidebar from './NewSidebar';
import Loading from './loading';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Recipes from './Recipes';
import Contact from './Contact';


function App() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);
  
    if (isLoading) {
      return <Loading />;
    }
  return (
  <BrowserRouter>
  <NewSidebar/>
  <Routes>
    <Route path="/" element={<DishGrid/>}></Route>
    <Route path="recipes" element={<Recipes/>}></Route>
    <Route path="contact" element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
