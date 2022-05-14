

import{useState} from 'react'




 

function App() {


  let [count,setCount]=useState(0)
  //increment by 1 function
  const increment_=()=>{
    setCount(count+1)
  }
  //increment by 2 function
  const decrement_=()=>{
    setCount(count-1)
  }
const inc_by2=()=>{
  setCount(count+2)
}
  let  users=
  [
    {
    id:75,
    name:'sahA',
    city:'HYD'
  },
  {
    id:5,
    name:'hA',
    city:'HYD'
  },
  {
    id:9,
    name:'poga',
    city:'HYD'
  }]
  
  
  const eventManage =()=>{
   console.log("non parameterized function")
  }
  const eventManage2= (a)=>{
    console.log("parameterized function",a)
  }
  return (
  <div className='text-center container'> 
  {/* table view */}
  <table class="table container">
  <thead>
    <tr>
     
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">city</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(  (userObj)=><tr key={userObj.id}>
        <td>{userObj.id}</td>
      <td>{userObj.name}</td>
      <td>{userObj.city}</td>
      </tr>)
    }
  </tbody>
    
</table>
{/* cards view */}
<div className="row row-cols-1  row-cols-sm-2 row-cols-md-3 g-4">
  
      {
        users.map((userObj)=> <div key={userObj.id} className="col"> 
        <div className=" card card-body">
          <h2>{userObj.id}</h2>
          <h2>{userObj.name}</h2>
          <h2>{userObj.city}</h2>
        </div>
        </div>)
      }
{/* non parameterized */}
     <div className='container text-center'>
       <button className ='btn mt-5 btn-success' onClick={eventManage}></button>
{/* parameterized  */}
     </div>
     <div className='container text-center'>
       <button className='btn btn-info wt-2 p-3' onClick={()=>eventManage2(100)}>get info</button>
     </div>
     
    
      
      </div>
      <div>
        <button className='btn mt-3 btn-success ' onClick={increment_}>add</button>
      <span className='display-3'>{count}</span>
        <button className='btn mt-3  btn-danger' onClick={decrement_}>sub</button>
        <button className=' container btn btn-dark mt-5' onClick={inc_by2}>increment_by2</button>

      </div>
        
     
    </div>

  
 

   
 
 
  );
}

export default App;
