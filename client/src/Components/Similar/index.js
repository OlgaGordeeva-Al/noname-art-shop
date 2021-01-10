import React,{useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Art from '../Arts/Art'

function Similar() {
  const arts=[{name: 'hello from similar'}]
  return(
    arts.map((art)=> <Art Art={art}/>)
  )
}
export default Similar;
