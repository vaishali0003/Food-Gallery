import React from 'react'

function Categories(props) {
    return (
        <>
            <div className="menu-tab d-flex justify-content-around flex-wrap">

                {
                    props.CatItem.map((curElem,index) => {
                        return <button className="btn btn-warning" key={index} onClick={() => props.filterMenu(curElem)}>{curElem}</button>
                    })
                }

            </div>
        </>
    )
}

export default Categories;
