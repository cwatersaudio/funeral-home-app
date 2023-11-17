import React from "react";

export default function Card (props) {
    return (
        <div className="card--container">
            <p className="card--title">{props.name}</p>
                <div className="location--info">
                    <p>{props.address}</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
            

        </div>
    )
}