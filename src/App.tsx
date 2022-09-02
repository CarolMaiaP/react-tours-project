import { useEffect, useState } from 'react'
import './App.css'
import { Loading } from './components/Loading';
import { Tour } from './components/Tour';
import { Tours } from './components/Tours'

const api = 'https://course-api.com/react-tours-project';

interface deleteTourProps{
  deleteTour: (id: string) => void;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function deleteTour(id:deleteTourProps){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  async function fetchTours(){
    setLoading(true)

    try{
      const response = await fetch(api);
      const tours = await response.json();
      console.log(tours)
      setLoading(false)
      setTours(tours);
    }catch{
      setLoading(false)
      console.log(Error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <h2>No tours left</h2>
        <button className='btn' onClick={() => fetchTours()}>Refresh</button>
      </main>
    )
  }

  return (
    <div className="Tours">
      <Tours tours={tours} deleteTour={deleteTour}/>
    </div>
  )
}

export default App
