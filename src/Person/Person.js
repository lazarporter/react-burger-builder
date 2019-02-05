//in its simplest form, a 'component' is a function that returns from JSX for React to render.
import React from 'react'

const person = (props) => {
    return <p>I'm {props.name} and I'm {props.age} years old!</p>
}


export default person;