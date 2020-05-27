import React from "react"
// import Bio from "./Components/Bio"

function Bio(props) {
    return (
    <div style={{textAlign:"left"}}>
        <p>
            Princeton Computer Science BSE 2022<br/>
            <a style={{color:"#99ffff"}} href="https://github.com/kl29" target="_blank">Visit my Github!</a>
            <br/><br/>

            Fluent Technologies: 
            <ul style={{textAlign:"left"}}>
                <li>Python (Django + Databases, Colab)</li>
                <li>Java (Algorithms, Data Structures)</li>
                <li>C (Systems)</li>
                <li>Javascript (React)</li>
                <li>R (functional, Data Science)</li>

            </ul>
    
            <hr/>
            Here are my projects:
        </p>
    </div>
    )
}

export default Bio