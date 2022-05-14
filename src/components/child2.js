import { useState } from "react"

function Child2(props){ 
    let [child2Data,dataChild2]=useState('sahanya')


    return(
        <div>
            <h1>child2</h1>
            <h1> {props.username}</h1>
            <h2>{props.city}</h2>
            <button className="btn btn-danger" onClick={()=>props.getdataFromchild(child2Data)}> get data from child</button>
        
        </div>
       
    )
}

export default Child2



































