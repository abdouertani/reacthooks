import './nav.css';


function Navbar(){
return(

<div className="nav">
     <div className="nav1">
      <a >Home</a>
      <a >Movies</a>
      <a >Reviews</a>
     </div>
     <div className="nav2">
      <div className='stars'> 
      <i class="fa-regular fa-star" id='1' onClick={()=>{document.getElementById('1').style.color='yellow';document.getElementById('2').style.color='initial';document.getElementById('3').style.color='initial';document.getElementById('4').style.color='initial';document.getElementById('5').style.color='initial'}}  ></i>
          <i class="fa-regular fa-star" id='2' onClick={()=>{document.getElementById('1').style.color='yellow';document.getElementById('2').style.color='yellow';document.getElementById('3').style.color='initial';document.getElementById('4').style.color='initial';document.getElementById('5').style.color='initial'}}></i>
           <i class="fa-regular fa-star" id='3' onClick={()=>{document.getElementById('1').style.color='yellow';document.getElementById('2').style.color='yellow';document.getElementById('3').style.color='yellow';document.getElementById('4').style.color='initial';document.getElementById('5').style.color='initial'}}></i>
          <i class="fa-regular fa-star" id='4' onClick={()=>{document.getElementById('1').style.color='yellow';document.getElementById('2').style.color='yellow';document.getElementById('3').style.color='yellow';document.getElementById('4').style.color='yellow';document.getElementById('5').style.color='initial'}}></i>
           <i class="fa-regular fa-star" id='5' onClick={()=>{document.getElementById('1').style.color='yellow';document.getElementById('2').style.color='yellow';document.getElementById('3').style.color='yellow';document.getElementById('4').style.color='yellow';document.getElementById('5').style.color='yellow'}}></i>
     </div>
     <input placeholder="Search..." />
     <button>Search</button>
     </div>


</div>


)

}
export default Navbar