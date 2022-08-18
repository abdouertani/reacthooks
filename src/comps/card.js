import React from 'react'
import './body.css'
 function Card(props) {
    console.log(props)
  return (
   <div className='card'> 
     <div >
        <img src={props.image}>
        
        </img>
        </div>
      <div className='cardfoot'>
        
      <p>
       {props.name}
       </p>
       <p>Rating:{props.rating}</p>
      </div>
     
   
   </div>
  )
}
export default Card