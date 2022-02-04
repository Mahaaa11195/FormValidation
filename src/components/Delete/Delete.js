import React from 'react';

function Delete(props) {

    const deleted=(id)=>{
        console.log('delete working');
        console.log(id);
    }
  return <div>
  <button  onClick={()=>{deleted(props.id)}}>delete</button>
  </div>;
}

export default Delete;
