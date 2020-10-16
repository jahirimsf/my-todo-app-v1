import React from 'react'

const Check = ({checked,onClick}) => {
    if(checked === true){
        return(
            <span 
            className="material-icons text-success" 
            style={{cursor: "pointer", padding: '5px'}} 
            onClick={onClick}
            >
            check_circle_outline
            </span>
        )
    } else{
        return(
            <span 
            className="material-icons text-muted" 
            style={{cursor: "pointer", padding: '5px'}} 
            onClick={onClick}
            >check_circle_outline</span>
        )
    }
}

export default Check
