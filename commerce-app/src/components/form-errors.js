import React from 'react';

export default function FormErrors(props) {
  if (props.errors) {
    return(
      <div className='alert alert-danger' role='alert'>
        <ul>
          {Object.keys(props.errors).map(key => <li>{`${key} ${props.errors[key][0]}`}</li> )}
        </ul>
      </div>
    )
  } else {
    return (<div></div>)
  }
}