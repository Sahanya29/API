import {useState,useEffect} from 'react'
import axios from 'axios' 

function Useeffectdemo()

{
    let [users,setUsers]=useState([])
    let[error,setError]=useState('')
 useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(response=>setUsers(response.data))
     .catch(err=>setError(err.message))
     

     //fetch('https://jsonplaceholder.typicode.com/posts')

 //   .then(response=>response.json())
   // .then((apiData)=> setUsers(apiData))
    //.catch(err=>console.log(err))
    
},[])


return (
/*headings of the table
*/ 
    <div className='container '>
        {error!==''&&<h1 className='display-1 text-danger'>{error}</h1>}
        {users.length ==0 &&  < p className='display-1 text-center text-danger'>invalid url</p>}
        {users.length  !==0 &&          
    <table className=' table text-center'>
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
            </tr>

            
        </thead>
    {/* body fecting data from API */}
        <tbody>
            {
            users.map((userObj)=>
            <tr key={userObj.id}>
                <td>{userObj.userId}</td>
                <td>{userObj.id}</td>
                <td>{userObj.title}</td>
                
                    </tr>)

            }
        </tbody>
    </table>}
</div>
)
        
       
}
export default Useeffectdemo







