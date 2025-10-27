//import styles from './Button.module.css';  if using module CSS

import { func } from "prop-types";

// function Button() {

//   return (
//     <button className={styles.button}>Click Me</button>
//   );
// }   

// export default Button;

// // Using inline styles
// function Button() {
//   const styles = {
//     padding: "0.75rem 1.5rem",
//     fontSize: "1rem",
//     color: "white",
//     backgroundColor: "#007BFF",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease"
//   };

//   return (
//     <button style={styles}>Click Me</button>
//   );
// }

function Button() {

    // const handleClick = () => console.log("Button Clicked");
    // const handleClick2 = (name) => console.log(`${name} just clicked the button`);

    // return (<><button onClick={() => handleClick2("Mikail")}>Click Me</button></>) //appear in console when clicked
    
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 4) {
    //         count++;
    //         console.log(`${name} just clicked the button ${count} time`);
    //     } else {
    //         console.log("Stop spamming the button");
    //     }
    // }
    // return (<><button onClick={() => handleClick("Mikail")}>Click Me</button></>)

    const handleClick = (e) => e.target.textContent = "Clicked"; //changes button text when clicked

    return (<><button onDoubleClick={(e) => handleClick(e)}>Click Me</button></>)


}
export default Button;




