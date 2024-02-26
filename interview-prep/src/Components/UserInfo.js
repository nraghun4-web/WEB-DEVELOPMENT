import React from "react";

export default function UserInfo({img, firstName, lastName}){
    {        console.log(img)}
    return <>
        <p>{firstName + ' ' + lastName}</p>
        <img src={img} alt={firstName + ' ' + lastName}></img>
    </>
}