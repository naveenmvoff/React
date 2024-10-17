import Car from './car';
import Apple from './Apple';

function Garage() {
  const isDoorOpened = false;
  const carInfo = { brand: "Ford", color: "Black" };
  const appleInfo = { type: "Fuji", color: "Red" };

  const bikeList = [
    { brand: "Honda", color: "Yellow" },
    { brand: "Hero", color: "Orange" },
    { brand: "Yamaha", color: "White" }
  ];

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

      {/* Rendering bike list */}
      <ul>
        {bikeList.map((bikeInfo, index) => (
          <li key={index}>
            <Car carInfo={bikeInfo} /> {/* Reused Car component to display bikes */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Garage;
