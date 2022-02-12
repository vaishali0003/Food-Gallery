import React, { useState } from 'react'
import Menu from './Menu'

function App() {

  const [Item, setItem] = useState(Menu);
const filterItem=(categItem)=>{
  const updatedItems=Menu.filter((curElem)=>{
    return curElem.category==categItem;
  })
  setItem(updatedItems)
}

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center heading">Order Your Favourite Meal</h1>
        <hr />
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-warning" onClick={()=>filterItem('breakfast')}>Breakfast</button>
          <button className="btn btn-warning" onClick={()=>filterItem('snacks')}>Snacks</button>
          <button className="btn btn-warning" onClick={()=>filterItem('dinner')}>Dinner</button>
          <button className="btn btn-warning" onClick={()=>setItem(Menu)}>All</button>
        </div>

        <div className="menu-items container-fluid">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row my-5 gy-4">

                {
                  Item.map((elem) => {
                    // console.log(elem)
                    const {id, image, name, category, price, description} = elem

                    return (
                      <>
                        <div className="item col-12 col-md-6 col-lg-6 col-xl-4 my-3">
                          <div className="items">
                            <div className="row Item-inside">
                              {/* images */}
                              <div className="col-12 col-md-12 col-lg-4 img-div">
                                <img src={image} alt="" className='img-fluid'/>
                              </div>
                              {/* menu items desc */}
                              <div className="col-12 col-md-12 col-lg-8">
                                <div className="info-1 py-3">
                                  <h1 className='dish'>{name}</h1>
                                  <p className='dish-info mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehen</p>
                                </div>
                                <div className="info-2 d-flex justify-content-between py-4">
                                  <p className="price">Price : 40Rs</p>
                                  <button type="button" className="btn btn-sm order-now">Order Now</button>
                                </div>
                                <div className="info3 dish-info py-2 mb-2">
                                  <p>*Prices may vary on selected date</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )

                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

