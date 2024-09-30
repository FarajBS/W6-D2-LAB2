import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight]   = useState(0);
  const [height, setHeight]   = useState(0)
  const [bestbmi, setBestBmi] = useState(0);
  const [state, setState]     = useState("");
  const [img, setImg]         = useState("");

  const calWeight = (e) => {
    setWeight(e.target.value);
  }

  const  calculate = () => {
   
    const bmi = setHeight(height/100) * setHeight(height/100) / setWeight(weight); 

    if (bmi < 18.5) {
      img= "https://media.discordapp.net/attachments/1282781080004591646/1290284547816034409/underweight.png?ex=66fbe6a0&is=66fa9520&hm=93b434f5f8043db53778db69fc1bb9338dff9b04ca652199c21ce5f4caf4718f&=&format=webp&quality=lossless&width=164&height=326"
      
    } else if (bmi > 18.5 && bmi < 24.9) {
      img= "https://cdn.discordapp.com/attachments/1282781080004591646/1290284547606450286/overweight.png?ex=66fbe6a0&is=66fa9520&hm=ca3950e8258a486cbbf066c57fb876ee10a1b35884aef09fead4b54f557d2d23&"
    } else if (bmi > 25 && bmi < 29.9) {
      img="https://media.discordapp.net/attachments/1282781080004591646/1290284548004904981/normal-weight.png?ex=66fbe6a0&is=66fa9520&hm=24a0c48eab6c9c97afec775d89c492a5e56269cb4e2b62543e00621071948274&=&format=webp&quality=lossless&width=162&height=324"
    } else if (bmi > 30 && bmi < 34.9) {
      img="https://media.discordapp.net/attachments/1282781080004591646/1290284548260888637/obesity.png?ex=66fbe6a0&is=66fa9520&hm=1028f9e3ac7653556b8ed0556b8ad9a2e0e9c7e75e9eb8fcadc0f0912923b4cc&=&format=webp&quality=lossless&width=170&height=322"
    } else {
      img="https://media.discordapp.net/attachments/1282781080004591646/1290284548575203358/over-obesity.png?ex=66fbe6a0&is=66fa9520&hm=3f7f591af235d6de9df8b6501322fd78fc07351b9454149e2d4421c5f147a3c6&=&format=webp&quality=lossless&width=170&height=330"
    }
    
  }
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-1/3 bg-slate-400 p-10 rounded-full'>
          <h2 className='text-center text-3xl font-bold'>BMI</h2>

          <div className="mb-3">
            <input type="text" value={weight} className="form-control text-2xl" 
                  aria-describedby="emailHelp" 
                  placeholder='أدخل وزنك الحالي' 
                  onChange={setWeight(weight.target.value)}
            />

            <input type="text" value={height} className="form-control text-2xl" 
                  aria-describedby="emailHelp" 
                  placeholder='أدخل طولك الحالي' 
                  onChange={setHeight(weight.target.value)}
            />
          </div>
            <button type="submit" onClick={calculate}  className="btn btn-primary form-control">احسب</button>
              <div className='mt-5 p-3 text-center text-2xl font-bold rounded-lg form-control  disabled'>زونك الحالي هو ( {weight} )</div>
              <div className='mt-5 p-3 text-center text-2xl font-bold rounded-lg form-control  disabled'>طولك الحالي هو ( {height/100} ) بالمتر</div>
              <div className='mt-5 p-3 text-center text-2xl font-bold rounded-lg form-control  disabled'>( {bestbmi} )</div>
              <img src={img} alt="" />
              <div className='mt-3 p-3 text-center text-2xl font-bold rounded-lg form-control  disabled'>( {state} )</div>
              <div className='mt-3 p-3 text-center text-2xl font-bold rounded-lg form-control  disabled'>{img}</div>
        </div>
      </div>
    </>
  )
}

export default App
