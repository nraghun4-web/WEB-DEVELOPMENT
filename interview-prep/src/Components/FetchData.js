import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import UserInfo from "./UserInfo";
export default function FetchData({pageNumber} ) {
  const [data, setData] = useState('');

  const [userInfos, setUserInfos] = useState([])
  const [randomUser, setRandomUser] = useState('')
  const[ nextPage, setNextPage] = useState(pageNumber)
  const url = 'https://randomuser.me/api?page=${nextPage}'
  const getData = async() =>{
    return axios.get(url).then((response)=> {
        return JSON.stringify(response.data)
      }) 
  }
  function viewData(){
  
    getData().then(response => {
        setData(response)
        setUserInfos(JSON.parse(response).results)
        setNextPage(JSON.parse(response).info.page +1)
    })
}
function newData(){
    getData().then(response => {
        setRandomUser(JSON.parse(response).results)
        setNextPage(JSON.parse(response).info.page +1)
    })
}
  function removeData(){
    setData('')
  }
  useEffect(viewData,[])
  return (
    <div>
      <p>{data}</p>
      <button onClick={viewData}>View Data</button>
      <button onClick={removeData}>Remove Data</button>
      <button>View User</button>
      { 
        userInfos.map((user, index) => {
            return (
                <UserInfo key={index} firstName={user.name.first} lastName={user.name.last} img={user.picture.large}/>
            )
        }
        )

      }
      <div>
      <button onClick={viewData}>View next User</button>
      </div>
    </div>
  );
}
