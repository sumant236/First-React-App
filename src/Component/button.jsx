import React from "react";
import styles from "./button.module.css"

function Button(props){
    const {title} = props;
    // const style = {
    //     padding: "1rem",
    //     margin: "0.25rem",
    //     minWidth: "10rem"
    // }
    return <div>
        {/* <button style={style}>{title}</button> */}
        <button className={styles.button}>{title}</button>
    </div>
}

export default Button;