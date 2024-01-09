import React,{useState} from 'react'
import axios from "axios"

const Api_Axios = () => {
const [photo, setphoto] = useState([])
// axios.get("").then(res=>{
//     console.log(res.data);
    
//     setphoto(res.data)
// })
  return (
    <>
      {photo.map((result)=>{
        return (
            <>
                {/* <img height={"100px"} src={result.url} alt="" /> */}
            </>
        )
      })}
    </>
  )
}

export default Api_Axios
