import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Icon from "../Resourses/Icon.png"
import { useNavigate } from 'react-router';

export default function Homepage() {

  const [fooddata, setFooddata] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://tushar8342.github.io/jsonserver/db.json").then((res) => {
      setFooddata(res.data) 
    })
  }, [])

  return (

    <div>
      <div className='header'>

        <h2>TheFoodList</h2>

        <div className='icons'>
          <SearchIcon className='search'/>
          <MenuIcon />
        </div>

      </div>

      <div className='lists'>
        <div className='lft'>Food List</div>
        <div className='rit'>Favourites</div>
      </div>

      <div className='proodetails'>
      {fooddata.map((el) => (<div onClick={(() => navigate(`/${el.code}`))}
        className= "mapping"
        key={el.code}>
        <img src={Icon} alt="not found" className='iconimg'/>
        <div className='uline'>{el.product_name} ({el.generic_name}) <hr className='hrstyle'/> </div>
        
      </div>))}
        
      </div>
    </div>
  )
}
