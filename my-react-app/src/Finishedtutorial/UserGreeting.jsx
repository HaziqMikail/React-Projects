// conditional rendering = allows to control what gets 
//                         rendered in application based on certain 
//                         condition (show, hide, change component)

function UserGreeting(props){

    const welcomeMessage = <h2>Welcome {props.username}</h2>;
    const loginPrompt = <h2>Please login</h2>;

return(props.isLoggedIn ? welcomeMessage : loginPrompt )
}

export default UserGreeting