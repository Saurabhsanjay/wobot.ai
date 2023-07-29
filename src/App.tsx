
import  { useEffect, useState } from "react";
import "./App.css";
import Form from "./pages/Form";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loader /> : <Form />}</>;
}

export default App;
