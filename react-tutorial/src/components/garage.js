import Car from './car';
import Apple from './Apple';

function Garage() {
  const isDoorOpened = false;
  const carInfo = { brand: "Ford", color: "Black" };
  const appleInfo = { type: "Fuji", color: "Red" };

  const carList = [
    { brand: "BMW", color: "Red" },
    { brand: "Ford", color: "Green" },
    { brand: "Tesla", color: "Black" }
  ];

  const numberList = [
    1,2,3,4,5,6
  ]

  // Checking for carInfo's validity
  const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;

  return (
    <>
      <h1>Who lives in the Garage?</h1>

      {/* Conditionally rendering Car component */}
      {showCarInfo && <Car carInfo={carInfo} />}

      {/* Rendering Apple component */}
      <Apple appleInfo={appleInfo} />

      {/* Using ternary operator for door state */}
      {isDoorOpened ? <h1>The Door is now open!</h1> : <h1>The Door is now closed</h1>}

      {/* Rendering car list */}
      <ul>
        {carList.map((carInfo) => (<li key={carInfo.brand} > <Car carInfo={carInfo} /></li>
        ))}
      </ul>

      <ul>
        {numberList.map((e, index) => <p key={index}>{e}</p>)}
      </ul>

    </>
  );
}

export default Garage;