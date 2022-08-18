
import  Card from "./card"
import React, {  useRef , useState } from 'react'
import image1 from "./jon.jpg"
import image2 from "./op.jpg"
import image3 from "./opg.jpg"
import image4 from "./ops.jpg"
import image5 from "./jon.jpg"
import image6 from "./jon.jpg"
function Body()
{
    const  [movies,setMovie]=useState([
        {name:"john wick",image:image1,rating:"1"},
        {name:"one piece red",image:image2,rating:"5"},
        {name:"one piece gold",image:image3,rating:"4"},
        {name:"one piece stam",image:image4,rating:"3"}
]

      

    )
    const namemovie=useRef();
    console.log(movies)
   return <div className='cards' >
     {movies.map((e) =>  
     <Card name={e.name} image={e.image} rating={e.rating}></Card> )}
     
      <button onClick={()=>setMovie(movies=>[...movies,{name:"MOVIE",image:image5,rating:"3"}])}>Add movie</button>
 
   </div>

      
    

    





}
export default Body