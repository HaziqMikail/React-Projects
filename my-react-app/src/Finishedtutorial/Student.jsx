// props is an object that contains all the attributes passed to the component
// propTypes is a mechanism that ensure passed value is of the correct datatype
// defaultprop is default value in case they are not passed from parent component
 
import PropTypes from 'prop-types'

function Student(props){ 

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div> 
    );

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student  