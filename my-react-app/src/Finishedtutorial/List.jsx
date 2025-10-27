import PropTypes from "prop-types";

function List(props) {

    // const fruits = [{id: 1, name: "Apple", calories: 95}, 
    //                 {id: 2, name: "Orange", calories: 66 }, 
    //                 {id: 3, name: "Cherry", calories: 78 }, 
    //                 {id: 4, name: "Date", calories: 47 }]; //list of fruits

    // fruits.sort((a, b) => a.calories - b.calories); //sorting the list based on calories in ascending order
    // fruits.sort((a, b) => b.calories - a.calories); //sorting the list based on calories in descending order
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorting the list based on name in alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //sorting the list based on name in reverse alphabetical order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 80); //filtering the list to get only low calorie fruits
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 80); //filtering the list to get only high calorie fruits

    // const listItems = lowCalFruits.map((lowCalFruits => <li key={lowCalFruits.id}>
    //                                         {lowCalFruits.name} : &nbsp;
    //                                         <b>{lowCalFruits.calories}</b> calories
    //                                     </li>)); //mapping through the list of fruits and returning an array of <li> elements    

    // const listItems = fruits.map((fruit => <li key={fruit.id}>
    //                                     {fruit.name} : &nbsp;
    //                                     <b>{fruit.calories}</b> calories
    //                                 </li>));


    const category = props.category; //getting the category from props
    const itemList = props.items; //getting the list of items from props

    const listItems = itemList.map((item => <li key={item.id}>
                                            {item.name} : &nbsp;
                                            <b>{item.calories}</b> calories
                                        </li>));

    return (
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}


List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
};

List.defaultProps = {
    category: "Category",
    items: []
};

export default List;