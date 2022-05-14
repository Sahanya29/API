import {useState,useEffect} from 'react'


function Useeffectdemo()

{
    let[count1,setCount1]=useState(0)
    let[count2,setCount2]=useState(0)
  
  useEffect(()=>{
      console.log("use the effect")
  },[count1])

     const chageState1=()=>{
         setCount1(count1+1)
     }
     const chageState2=()=>{
        setCount2(count2+1)
    }
    
    return (<div className='container'>
        <h1 >USE EFFECT</h1>
        <p className='display-1  '> count1:{count1}</p>
        <p className='display-1 '>count2:{count2}</p>
        <button className='btn  mt-3 btn-danger wt-3' onClick={chageState1}>counter_1</button>
        <button className='btn  mt-3 btn-danger wt-3' onClick={chageState2}>counter_2</button>
        </div>
)
}
export default Useeffectdemo