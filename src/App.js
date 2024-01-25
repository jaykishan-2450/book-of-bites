import './App.css';
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
      }, 2500);
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
