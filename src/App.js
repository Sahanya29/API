
import Useeffectdemo  from './components/Useeffectdemo'

function App() {
  
 /* let [data ,setData]=useState('')
const getdataFromchild=(data)=>{
setData(data)
}


  let [username,setUser]= useState('sahanya')
  let [city,setcity]= useState('hyd')
  */
  return (
    <div className='container text-center mt-5 bg-warning'>
      <Useeffectdemo/>
    </div>
  )
   /* <div className='container   mt-2 text-center bg-danger'>
      <h1 className='mt-3 display-3 container'>root components</h1>
      <h2>{data}</h2>
      <div className='row'>
<div className=' col-sm-6 bg-info '>
  < Child2 username={username} city={city}  getdataFromchild={getdataFromchild}/>
</div>
<div className=' col-sm-6 bg-warning'>
   <Child1 username={username} city={city} getdataFromchild={getdataFromchild}/>

</div>
<div>
<div>
   <useEffecthook  />  
   </div>
</div>

</div>

</div>

   */

}

export default App;
