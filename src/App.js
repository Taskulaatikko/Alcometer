//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [bottles, setBottles] = useState(0)
  const [grams, setGrams] = useState(0)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  
  function count (e) {
    e.preventDefault()

  let userLitres = (bottles*0.33)
  let userGrams = (userLitres*8*4.5)
  let userBurns = (grams/10)
  let userGramsLeft = (userGrams-(userBurns*time))
  let alcoholMeter = 0

  if (gender === 'male') {
    alcoholMeter = (userGramsLeft/(grams*0.7))
  }
  else {
    alcoholMeter = (userGramsLeft/(grams*0.6))
  }

  if (alcoholMeter < 0.0){
    alcoholMeter = 0
  }
 
  //alert(alcoholMeter)


setResult(alcoholMeter)

}
  return (
<>
<h3>Calculating alcohol blood level</h3>
<form onSubmit={count}>
  <div>
    <label>Weight</label>
    <input name='grams' value={grams} onChange={e => setGrams(e.target.value)} type="number"></input>
  </div>
  <div>
    <label>Bottles</label>
    <select name='bottles' value={bottles} onChange={e =>setBottles(e.target.value)}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
      <option value='10'>10</option>
    </select>
  </div>
  <div>
  <label>Time</label>
    <select name='time' value={time} onChange={e =>setTime(e.target.value)}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
      <option value='10'>10</option>
    </select>
  </div>
  <div>
  <label>Gender</label>
    <input type='radio' name='gender' value='male' defaultChecked onChange={e =>setGender(e.target.value)} /><label>Male</label>
    <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)}/><label>Female</label>
  </div>

  <button>Calculate</button>
</form>
<div> 
  <br></br>
  <output>{result.toFixed(1)}</output>     
  </div>
</>
  );
}

export default App;
