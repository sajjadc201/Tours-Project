import Tours from "./Tours";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project";
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeTour=(id)=>{
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour)
    }
  return (
    <div id="root">
      <main>
        <section>
          {tours.length === 0 && !loading? <div className="title"><h2>no tours left</h2><div className="underline"></div><button className="btn" onClick={()=>{fetchData()}}>Refresh</button></div> :<div className="title"><h2>our tours</h2><div className="underline"></div></div> }
        
          {loading ? <p>Loading Tours...</p> :  <Tours tours={tours} removeTour={removeTour} />}
          
        </section>
      </main>
    </div>
  );
};
export default App;
