import React from 'react'
import PropTypes from "prop-types";

const File = (props) => {
  return (
    <>
    <h1>Hello {props.name}</h1>
    <h1>my age {props.age}</h1>
    <h1>married {props.isMarried.toString()}</h1>
    <h1>married {String(props.isMarried)}</h1>
    <h1>my friends are {props.arr}</h1>
    <h1>{props.arr[0]}</h1>
  </>
  )
}
File.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
    arr:PropTypes.array,
  };
  
  
  File.defaultProps = {
    name:'Anonymous',
    age: 24,
  };
export default File
