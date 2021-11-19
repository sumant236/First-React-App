import React from "react";
import styles from "./button.module.css"

const getStyle = (type) =>{
    switch (type) {
        case "success":
            return{
                color: "green"
            }
        case "warning":
            return{
                color: "yellow"
            }
        case "error":
            return {
                color: "red"
            }    
        default:
            return {};
    }
}

function Button(props){
    const {title, type, disabled} = props;
    // const style = {
    //     padding: "1rem",
    //     margin: "0.25rem",
    //     minWidth: "10rem"
    // }
    const style = getStyle(type);
    return <div>
        {/* <button style={style}>{title}</button> */}
        <button className={styles.button} disabled={disabled} style={style}>{title}
        </button>
    </div>
}

export default Button;