/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import FoodItem from '../FoodItem/FoodItem'

const Menu = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
    <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  )
}

export default Menu