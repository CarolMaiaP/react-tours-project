import { useEffect, useState } from 'react'
import './App.css'
import { Tour } from './components/Tour';
import { Tours } from './components/Tours'

const api = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);

  async function fetchTours(){
    try{
      const response = await fetch(api);
      const tours = await response.json();
      console.log(tours)
      setTours(tours);
    }catch{
      alert("erro ao buscar")
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <div className="Tours">
      <Tours tours={tours}/>
    </div>
  )
}

export default App
