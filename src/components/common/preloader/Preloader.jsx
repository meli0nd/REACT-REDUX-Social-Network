import React from "react"
import preloader from "../../../assest/img/Spinner-1s-200px.gif"

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} style={{ width: 100 }} alt="..." />
        </div>
    )
}

export default Preloader