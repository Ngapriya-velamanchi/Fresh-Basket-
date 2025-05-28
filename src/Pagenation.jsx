import React, { useState } from 'react'

function Pagenation({ items, itemsPerPage = 2, renderItem }) {


const[CurrentPage,setCurrentPage]=useState(1);

//get the items to dispalay on the page

const indexOfLastItem=CurrentPage* itemsPerPage;
const indexOfFirstItem=indexOfLastItem-itemsPerPage;
const currentItems=items.slice(indexOfFirstItem,indexOfLastItem);

//caclulate total pages

const totalPages=Math.ceil(items.length/itemsPerPage); 

const gotopage=(page)=>{
    setCurrentPage(page);
}


  return (
    <>
       <ul className="veg-list">
  {currentItems.map((item, index) =>
    renderItem ? renderItem(item, index) : <li key={index}>{item}</li>
  )}
</ul>

        {/* pagenation buttons*/}
        {Array.from({length:totalPages},(_,index)=>(
            <button
            key={index+1}
            onClick={()=>gotopage(index+1)}
            style={{
                margin:"0 5px",
                fontWeight:CurrentPage===index+1?"bold":"normal",
            }}> {index+1} </button>
        )
        )}
         <div style={{margin:"15px",textAlign:"center"}}>
            <button onClick={()=>gotopage(CurrentPage-1)} disabled={CurrentPage===1}>
                Previous
            </button>

            <button onClick={()=>gotopage(CurrentPage+1)} disabled={CurrentPage===totalPages}>
                Next
            </button>

        </div>

      
    </>
  
)}


export default Pagenation
