// import Header from "./Header"
// import Footer from "./Footer"
// import Food from "./Food"


// function App() {

//   return (
//     <>
//       <Header/>
//       <Food/>
//       <Food/><hr />
//       <Footer/>
//     </>
//   )

// }

// export default App



//--------------------------------------------------------------------------------

// Card Component
// import Card from "./Card.jsx";

// function App() {

//   return (
//     <>
//       <Card/>
//       <Card/>
//     </>
//   )
// }

// export default App



//-------------------------------------------------------------------------------

// Button Component for css styling
// import Button from "./Button.jsx";

// function App() {

//   return (
//     <>
//       <Button/>
//     </>
//   )
// }

// export default App



//-------------------------------------------------------------------------------

// Student Component using props

// import Student from "./Student.jsx";

// function App() {

//   return (
//     <>
//       <Student name="John Doe" age={20} isStudent={true}/>
//       <Student name="Jane Smith" age={17} isStudent={true}/>
//       <Student name="Alice Johnson" age={33} isStudent={false}/>
//       <Student name="Sigurd Bodon" age={74} isStudent={false}/>
//       <Student />
//     </>
//   )
// }

// export default App



//-------------------------------------------------------------------------------

// import UserGreeting from "./UserGreeting.jsx";

// function App(){
//   return(
//       <UserGreeting isLoggedIn={true} username="Mikail"/>
//   );
// }

// export default App



//-------------------------------------------------------------------------------
// List Component using props and PropTypes

// import List from "./Finishedtutorial/List.jsx";

// function App(){

//       const fruits = [{id: 1, name: "Apple", calories: 95}, 
//                     {id: 2, name: "Orange", calories: 66 }, 
//                     {id: 3, name: "Cherry", calories: 78 }, 
//                     {id: 4, name: "Date", calories: 87 }]; //list of fruits

//       const vegetables = [{id: 1, name: "Carrot", calories: 31}, 
//                           {id: 2, name: "Broccoli", calories: 15 }, 
//                           {id: 3, name: "Spinach", calories: 23 }, 
//                           {id: 4, name: "Potato", calories: 47 }]; //list of vegetables

//   return(
//       <>
//           {fruits.length > 0? <List items={fruits} category="fruits"/> : null } 
//           {vegetables.length > 0? <List items={vegetables} category="vegetables"/> : null }
//       </>
//   );
// }

// export default App



//-------------------------------------------------------------------------------
//click event handling

// import Button from  "./Finishedtutorial/Button.jsx";
// import ProfilePicture from "./ProfilePicture.jsx";

// function App(){
//   return(
//       <>
//           <ProfilePicture/>
//       </>
//   );
// }

// export default App;



//-------------------------------------------------------------------------------
// useState hook example
// onChange event handler for input fields to update state

import MyComponent from "./MyComponent.jsx";
// import Counter from "./Counter.jsx";

function App(){
  return(
      <>
          {<MyComponent/>}
      </>
  );
}

export default App;











































