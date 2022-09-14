import React from 'react'

export default function Profile(props){
    return (
        <center>
        <div style={{"border-style":"solid","background-color":"red","color":"white","width":"75%","border-color":"black"}}>
            <h4>{props.name}: {props.title}</h4>
        </div>
        </center>
    )

    
}