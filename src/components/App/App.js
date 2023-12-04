import React, { lazy, Suspense, useEffect, useReducer, useState } from 'react';
import './App.css';
import axios from 'axios'
import { baseUrl } from '../../env';
const RiverInformation = lazy(() => import(/* webpackChunkName: "RiverInformation" */ '../RiverInformation/RiverInformation'));

function App() {
  const [river, setRiver] = useState('nile');
  const [show, toggle] = useReducer(state => !state, true);
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const api = "/test"

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get(baseUrl +api);
        const data = res.data
        setData(data)
      }catch(error){
        setError(error.message)
      }  
    }
    fetchData()
  },[])

  console.log(data)
  return (
    <div className="wrapper">
      <h1>Test</h1>
      {data.map((element)=>{
        return(
        <div className='element' key={element.id}>
          <div>name: {element.name}</div>
          <div>age: {element.age}</div>
        </div>
        )
      })}
    </div>
  );
}

export default App;