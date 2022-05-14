import { useState } from "react"


function Child1(props){
    let [child1Data,dataChild1]=useState('child1 data')
    return(
       <div>Child1 linked
           <h1>{props.username}</h1>
<h2>{props.city}</h2>
<button className="btn btn-danger" onClick={()=>props.getdataFromchild(child1Data)}> get data from child</button>

       </div>
    )
}
export default Child1