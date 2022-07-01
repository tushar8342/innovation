import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Details.css"
import Icon from "../Resourses/Icon.png"

function Details() {
  const { code } = useParams();

  const [data, setData] = useState({});

  console.log(data)
  useEffect(() => {
    axios.get(`https://tushar8342.github.io/jsonserver/db.json`).then((res) => {
      console.log(res.data)
        
      let findcode = res.data.filter((el) => el.code == code)
      console.log(findcode)
      setData(findcode[0]);
    })
  }, [])

  
return (
  <div>      
    <div className='head'>
      <h2>TheFoodList</h2>
    </div>

    <div className='proddetails'>           
      <div className='prod_name'>
        <img src={Icon} alt="not found" className='iconimgg' />          
        <h3 className='prodalign'>{data.product_name}</h3>          
      </div>
      
      <table>  
        <tbody>
          {Object.keys(data).map((key, index) => {
            return (
              <tr key={index}>                  
                <td>{key}</td>
                <td>{data[key]}</td>                  
              </tr>                         
            )              
          })}                  
        </tbody>          
      </table>
        
    </div>     
  </div>

  )

}


export default Details
