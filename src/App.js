import {useState} from 'react';
import "./App.css"

export default function App() {
  const [ishappy, setHappy] = useState(false);
  const [issad, setIsSad] = useState(false);
  const [issleepy, setSleepy] = useState(false);
  const [excite, setExcited] = useState(false);


  const handleHappy =()=>{
    setHappy(current => !current)
  }
  const handleSad = () => {
    setIsSad(current => !current);
  };

  const handleSleepy=()=>{
    setSleepy(current => !current)
  }

  const  handleExited=()=>{
    setExcited(current => !current)
  }
  return (
    <div className='container'>
      <div className='box' style={{ backgroundColor: ishappy ? 'rgb(238, 241, 0)' : '', color: ishappy ? 'white' : '', }} onClick={handleHappy} >Happy</div>
      <div className='box' style={{ backgroundColor: issad ? 'rgb(19, 0, 164)' : '', color: setIsSad ? 'white' : '', }} onClick={handleSad}>Sad</div>
      <div className='box' style={{ backgroundColor: issleepy ? 'rgb(35, 177, 0)' : '', color: setSleepy ? 'white' : '', }} onClick={handleSleepy}>Sleepy</div>
      <div className='box' style={{ backgroundColor: excite ? 'rgb(255, 0, 66)' : '', color: setExcited? 'white' : '', }} onClick={handleExited}>Excited</div>
    </div>
  );
}
