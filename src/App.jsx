import React, { useState } from 'react'
import Menu from './Menu'
import MenuItems from './MenuItems';
import Categories from './Categories';

// const allCatVal=Menu.map((curElem)=>{
//   return curElem.category;
// })

const allCatVal = [...new Set(Menu.map((curElem) => { return curElem.category; })), 'all']

// console.log(allCatVal);

function App() {
  const [Item, setItem] = useState(Menu);
  const [CatItem, setCatItem] = useState(allCatVal)


  const filterItem = (categItem) => {

    if (categItem == 'all') {
      setItem(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category == categItem;
    })
    setItem(updatedItems)
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className="mt-5 text-center heading">Order Your Favourite Meal</h1>
        <hr />
        <Categories filterMenu={filterItem} CatItem={CatItem} />
        <MenuItems items={Item} />
      </div>

    </>
  )
}
export default App

