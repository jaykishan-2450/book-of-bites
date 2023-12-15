import './App.css';
import DishCard from './DishCard';
import { useState } from "react";
import { useEffect } from "react";
import DishGrid from './DishGrid';
import NewSidebar from './NewSidebar';
import Loading from './loading';
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
  <>
  <NewSidebar/>
  <DishGrid/>
  </>
  );
}

export default App;
