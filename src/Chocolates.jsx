import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './store';
import { toast } from 'react-toastify';
import Pagenation from './Pagenation';
import './Chocolates.css';
function Chocolates() {

  const chocolateproducts=useSelector(globalstate=>globalstate.product.Chocolates);
  const dispatch=useDispatch();
  const[SelectedRanges,setSelectedRanges]=useState([]);

  const priceRanges=[
    {value:'Rs 1 to Rs 50',min:1,max:50},
    {value:'Rs 51 to Rs 100',min:51,max:100},
    {value:'Rs 100 to Rs 150',min:100,max:150},
    {value:'Rs 150 to Rs 200',min:150,max:200},
    {value:'Rs 200 to Rs 250',min:200,max:250},
    {value:'  More than 250',min:250,max:Infinity}
  ];

  const handleCheckboxChange=(selectedRange)=>{
    if(SelectedRanges.includes(selectedRange)){

      //if already exist remove it
      
      const updated=SelectedRanges.filter(r=>r!==selectedRange);
      setSelectedRanges(updated);
    }
    else{
      //if not selected, add it
      const updated=[...SelectedRanges,selectedRange];
      setSelectedRanges(updated)
    }
  }
   const activeRanges=priceRanges.filter(range=>SelectedRanges.includes(range.value));
    const filteredProducts=SelectedRanges.length!==0
                  ?chocolateproducts.filter(product=>
                    activeRanges.some(range=>
                      product.price>=range.min&&product.price<=range.max
                    )
                  )
                  :chocolateproducts;



  const renderChocolateItem=(product,index)=>(

    <li key={index}>
      <img src={product.image} alt={product.name}/>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <button onClick={()=>{dispatch(AddToCart(product))
        toast.success('product is added successfully')
      }}>AddToCart</button>
    
    </li>
  );

  const handleClearAll=()=>{
    setSelectedRanges([]);
  }
  
  return (
   <>
    <div className="Chocolates-page">
   <h3 style={{ textAlign: 'center', marginTop: '20px' }}> Chocolate Products</h3>
   

   {/* Filters Row */}
      <div className="filters-row">
        {priceRanges.map(range => (
          <label key={range.value} className="filter-checkbox">
            <input
              type="checkbox"
              checked={SelectedRanges.includes(range.value)}
              onChange={() => handleCheckboxChange(range.value)}
            />
            {range.value}
          </label>
        ))}
      </div>
   <div className="clear-filters">
  <button onClick={handleClearAll}>Clear All Filters</button>
</div>
<br></br>

 <Pagenation 
    items={filteredProducts}
    itemsPerPage={4}
    renderItem={renderChocolateItem}

   />
   </div>

   </>
  )
}

export default Chocolates;
