import React from "react";

function Button (props){
    const { name, onClick } = props; //mesma coisa de fazer props.name
    
    return (// entra o jsx
        <button onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;