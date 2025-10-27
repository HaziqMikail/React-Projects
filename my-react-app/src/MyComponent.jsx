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

import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Name"); // name is current state value, setName is the function to update it
    const [quantity, setQuantity] = useState(1); // quantity is current state value, setQuantity is the function to update it
    const [comment, setComment] = useState(""); // comment is current state value, setComment is the function to update it
    const [payment, setPayment] = useState(""); // payment is current state value, setPayment is the function to update it
    const [shipping, setShipping] = useState(""); // shipping is current state value, setShipping is the function to update it

    function handleNameChange(event) { // event handler function to update state
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
        <input type="text" value={name} onChange={handleNameChange} /> // input field with onChange event handler
        <p>Name : {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity : {quantity}</p>

        <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter delivery instruction"
        />
        <p>Comment : {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
        </select>
        <p>Payment Method : {payment}</p>

        <label>
            <input type="radio" value="standard" 
                checked={shipping === "Pickup"} 
                onChange={handleShippingChange} />
            Pickup
        </label><br />

        <label>
            <input type="radio" value="express" 
                checked={shipping === "Express"} 
                onChange={handleShippingChange} />
            Express Delivery
        </label>
        <p>Shipping Method : {shipping}</p>

        </div>
    );
}
export default MyComponent;
