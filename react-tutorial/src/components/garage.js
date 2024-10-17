import Car from './car';
import Apple from './Apple';

function Garage() {
  const isDoorOpened = false;
  // const brand = 'Ford';
  // const color = 'Black'
  const carInfo = {brand: "Ford", color: "Black"}
  // const bikeInfo = {brand: "Nike", color: "Blueeee"}

  // const carInfo = {};
  const appleInfo = {type: "fugi", color: "Red"}
  // const carList = [
  //   {brand: "BMW", color: "Red"},
  //   {brand: "Ford", color: "Green"},
  //   {brand: "Tesla", color: "Black"},
  // ]

  const bikeList = [
    {brand: "Honda", color: "Yellow"},
    {brand: "Hero", color: "Orange"},
    {brand: "Yamaha", color: "White"},
  ];


  // const showCarInfo = carInfo.brand !== undefined &&  carInfo.color !== undefined 
  const showCarInfo = bikeInfo.brand !== undefined &&  bikeInfo.color !== undefined 


  return(
    <>
    <h1>Who lives in the Garage?</h1>
    {/* <Car brand = {brand} color = {color}/> */}
    {showCarInfo && <Car carInfo = {carInfo}/>} {/* And Operator*/}
    <Apple appleInfo = {appleInfo}/>
    {isDoorOpened ? <h1>The Door is now open!</h1> : <h1>The Door is now closed</h1>}  {/* Ternary Operator*/}
    {/* <ul>
      {carList.map((carInfo) => <li><Car carInfo={carInfo}/></li>)}  
    </ul>
    </> */}

    <ul>
      {bikeList.map((bikeInfo) => (<li key={index}> 
        <Car carInfo={bikeInfo}/>
        </li>
      ))} 
    </ul>
    
  )
}

  export default Garage; 