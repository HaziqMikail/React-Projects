// React hook = function that lets you use state and other React features without writing a class
//  examples: useState, useEffect, useContext

//  useState = function that lets you add state to functional components
//  returns an array with two elements: the current state value and a function to update it
//  example: const [count, setCount] = useState(0);

// import React, {useState} from "react";

// function MyComponent(){

//     const [name, setName] = useState("Guest"); // name is current state value, setName is the function to update it, "Guest" is the initial state value
//     const [age, setAge] = useState(0); // age is current state value, setAge is the function to update it, 0 is the initial state value
//     const [isStudent, setIsStudent] = useState(false); // isStudent is current state value, setIsStudent is the function to update it, false is the initial state value

//     const updateName = () => { // function to update the state value
//         setName("Mikail");
//     }

//     const incrementAge = () => { // function to update the state value
//         setAge(age + 1);
//     }

//     const ToggleStatus = () => { // function to update the state value
//         setIsStudent(!isStudent);
//     }

//     return(
//         <div>
//             <h1>Name: {name}</h1>
//             <button onClick={updateName}>Set Name</button>

//             <h1>Age: {age}</h1>
//             <button onClick={incrementAge}>Increase Age</button>

//             <h1>Is Student: {isStudent ? "Yes" : "No"}</h1>
//             <button onClick={ToggleStatus}>Toggle Status</button>
//         </div>
//     );
// }

// export default MyComponent;

// onChange event handler for input fields to update state

// import React, { useState } from "react";

// function MyComponent() {
//     const [name, setName] = useState("Name"); // name is current state value, setName is the function to update it
//     const [quantity, setQuantity] = useState(1); // quantity is current state value, setQuantity is the function to update it
//     const [comment, setComment] = useState(""); // comment is current state value, setComment is the function to update it
//     const [payment, setPayment] = useState(""); // payment is current state value, setPayment is the function to update it
//     const [shipping, setShipping] = useState(""); // shipping is current state value, setShipping is the function to update it

//     function handleNameChange(event) { // event handler function to update state
//         setName(event.target.value);
//     }

//     function handleQuantityChange(event) {
//         setQuantity(event.target.value);
//     }

//     function handleCommentChange(event) {
//         setComment(event.target.value);
//     }

//     function handlePaymentChange(event) {
//         setPayment(event.target.value);
//     }

//     function handleShippingChange(event) {
//         setShipping(event.target.value);
//     }

//     return (
//         <div>
//         <input type="text" value={name} onChange={handleNameChange} /> // input field with onChange event handler
//         <p>Name : {name}</p>

//         <input type="number" value={quantity} onChange={handleQuantityChange} />
//         <p>Quantity : {quantity}</p>

//         <textarea
//             value={comment}
//             onChange={handleCommentChange}
//             placeholder="Enter delivery instruction"
//         />
//         <p>Comment : {comment}</p>

//         <select value={payment} onChange={handlePaymentChange}>
//             <option value="">Select Payment Method</option>
//             <option value="credit">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             <option value="bank">Bank Transfer</option>
//         </select>
//         <p>Payment Method : {payment}</p>

//         <label>
//             <input type="radio" value="standard" 
//                 checked={shipping === "Pickup"} 
//                 onChange={handleShippingChange} />
//             Pickup
//         </label><br />

//         <label>
//             <input type="radio" value="express" 
//                 checked={shipping === "Express"} 
//                 onChange={handleShippingChange} />
//             Express Delivery
//         </label>
//         <p>Shipping Method : {shipping}</p>

//         </div>
//     );
// }
// export default MyComponent;


//------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react"; //update object state with useState hook

// function MyComponent() {

//     const [car, setCar] = useState({year: 2020, 
//                                     make: "Toyota", 
//                                     model: "Camry"});

//     function handleYearChange(event) {
//         setCar(c => ({...c, year: event.target.value}));// use spread operator to copy existing car properties and update year
//     }

//     function handleMakeChange(event) {
//         setCar(c => ({...c, make: event.target.value}));// use update function to ensure we have latest state
//     }

//     function handleModelChange(event) {
//         setCar(c => ({...c, model: event.target.value}));
//     }

//     return(  
//         <div>
//             <p>My favourite car is {car.year} {car.make} {car.model}</p>

//             <input type="number" value={car.year} onChange={handleYearChange}/><br />
//             <input type="text" value={car.make} onChange={handleMakeChange}/><br />
//             <input type="text" value={car.model} onChange={handleModelChange}/><br />
//         </div>
//     );
// }
// export default MyComponent;

//------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";

// function MyComponent() {

//     const [food, setFood] = useState(["Pizza", "Burger", "Pasta"]); // food is current state value (array), setFood is the function to update it

//     function handleAddFood() {
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";

//         setFood(f => [...f, newFood]); // use spread operator to copy existing food items and add newFood to the end of the array
//     }

//     function handleRemoveFood() {
//         setFood(f => f.slice(0, -1)); // remove last item from the array by slicing it
//     }

//     return(
//         <div>
//             <h2>List of food</h2>
//             <ul>
//                 {food.map((item, index) => (
//                     <li key={index} onClick={handleRemoveFood}>{item}</li> // display each food item in a list, clicking an item removes the last item
//                 ))}
//             </ul>
//             <input type="text" id="foodInput" placeholder="Enter food name"/><br />
//             <button onClick={handleAddFood}>Add Food</button><br />
//             <button onClick={handleRemoveFood}>Remove Last Food</button>
//         </div>
//     );
// }
// export default MyComponent;


//------------------------------------------------------------------------------------------------------------------------------
// Array of objects state with useState hook
import React, { useState } from "react";

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) { // remove car at specified index
        setCars(c => c.filter((_, i) => i !== index)); // formula to filter out the car at the given index
    }

    function handleYearChange(event) {
        setCarYear(Number(event.target.value));
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => ( // clicking a car removes it from the list
                    <li key={index} onClick={() => handleRemoveCar(index)}> 
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter car year"/><br />
            <input type="text" value={carMake} onChange={handleMakeChange}  placeholder="Enter car make"/><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
};
export default MyComponent;