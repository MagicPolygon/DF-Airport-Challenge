import Airport from "./airport.js";
import Plane from "./plane.js";
import { changeAirportCapacity } from "./airport.js";

console.log("Create an airport of capacity 5");
let airport = new Airport(5);
console.log(airport);
console.log(`capacity of airport is ${airport.capacity}`);
console.log("====================================================");

console.log("Create a plane of id 1");
let plane = new Plane(1);
console.log(plane);
console.log(`id of pane is ${plane.id}`)
console.log("====================================================");

console.log("land plane at airport");
plane.land(airport);
console.log(`these are the ids of the planes at the airport:`);
airport.planes.forEach(plane => console.log(plane.id))
console.log("====================================================");

console.log("try and fail to land a landed plane at the airport");
plane.land(airport);
console.log(`these are the ids of the planes at the airport:`);
airport.planes.forEach(plane => console.log(plane.id))
console.log("====================================================");

console.log("have a plane take off from the airport");
plane.takeOff(airport);
console.log(`these are the ids of the planes at the airport:`);
airport.planes.forEach(plane => console.log(plane.id))
console.log("====================================================");