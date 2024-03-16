import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {item} from './Api';
import Products from './Products';

function Search() {
  const{term}=useParams();
  const [searInput, setSearInput] = useState([])
  useEffect(() => {
    const searchPro = item.filter((ele)=>ele.title.toLowerCase().includes(term.toLowerCase()));
    setSearInput(searchPro);
  }, [term])
  
  return (
    <div> 
      <Products productItem={searInput}/>
      
    </div>
  )
}

export default Search