import PropTypes from 'prop-types'

export const User=(props) =>{
    return <div className="App">
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h2>{props.email}</h2>
    <img src={props.photo}></img>
  </div>
}

User.propTypes={
  name:PropTypes.string.isRequired
}
// User.defaultProps={
//   name:"Radhe",
//   age:25,
//   email: "test@gmail.com",
//   photo:"httsp://google.com"
// }