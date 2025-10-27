
function Food() {

    const food1="Pizza"
    const food2="Burger"
    const food3="Pasta"

    return (
        <div>
        <h2>Food Component</h2>
        <p>This is the Food component.</p>
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3}</li>
        </ul>   
        </div>
    )
}

export default Food