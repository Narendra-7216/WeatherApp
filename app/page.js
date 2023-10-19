"use client"
import axios from 'axios'
import React, { useState } from 'react'
// import {BsSearch} from 'react-icons/bs'

const page = () => {
  const api_key='dfafd0913cbfd32862c58863cbd8f014';
  const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const [city, setcity] = useState('')

  const [cityName, setcityName] = useState("")
  const [temp, settemp] = useState()
  const [humidity, sethumidity] = useState()
  const [speed, setspeed] = useState()



  const search = async()=>{

console.log(city)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=dfafd0913cbfd32862c58863cbd8f014`
    let response = await axios.get(url);
    setcityName(response.data.name)
    sethumidity(response.data.main.humidity)
   settemp(response.data.main.temp);
   setspeed(response.data.wind.speed)
   
    
  }  




  return (
    <> 
    <div className='flex justify-center text-2xl font-semibold'>
      <h1>Weather</h1>
    </div>
    <div className='w-full p-24 gap-4 flex justify-center items-center p-10' >
      <input type='text' className='rounded text-black p-4' onChange={(e)=>{
        console.log(e.target.value)
        setcity(e.target.value)
      }}
       placeholder='Enter City Name'/>
      <button className=' border-white border-x-2 border-y-2 rounded p-4'
      value={city}
      onClick={search}
      >search</button>
      
    </div>
    <div className=' bg-purple-600 text-white rounded flex justify-center items-center ml-20 mr-20 gap-4'>
      <div className='bg-black rounded p-20 m-4'>
        <h1>City:{cityName}</h1>
      </div>
      <div className='bg-black rounded p-20 m-4'>
        <h1>Temperature:{temp}°c</h1>
      </div>
      <div className='bg-black rounded p-20 m-4'>
        <h1>Humidity:{humidity}Pa</h1>
      </div>
      <div className='bg-black rounded p-20 m-4'>
         <h1>Speed of Wind:{speed}Km/h</h1>
      </div>
       
      </div>
    </>
  )
}
export default page