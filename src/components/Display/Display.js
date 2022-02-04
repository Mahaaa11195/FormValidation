import React, { useState } from 'react';
import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';

function Display(props) {

    const [state, setstate] = useState([11,22,33,44])

  return <div>
{
    state.map((data,index)=>{
        return <div> 
            <span>{data}</span>
            <Delete id={index} data={data}/>  
            <Edit />
        </div>
    })
}
  </div>;
}

export default Display;
