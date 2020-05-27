import React from "react"

function NavBar(props) {
    return (
        <div>
            <h3 style={{display: !props.items && "none"}}>Table of Contents: {props.items}</h3>
        </div>
    )
    
}

export default NavBar