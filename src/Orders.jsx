/*import React from 'react'
import { useSelector } from 'react-redux';
import './Order.css';


function Orders() {

//getting purchase history grom store
 const purchaseDetails=useSelector(globalstate=>globalstate.order);

  //convert orderdetails into listoforders

  let OrderDetailsItems=purchaseDetails.map((purchase,index)=>(
    <li key={index}>

      <p>Date: {purchase.date}</p>
    <p>Total amount:{purchase.totalprice.toFixed(2)}</p>
  
    <ul>

      {purchase.items.map((item,itemIndex) =>(
      <li key={itemIndex}>

        {item.name} - {item.price}*{item.quantity}
      </li>
      ))}
    </ul>
    </li>  

  ))

  return (
    <>
     <p>This is orders page..</p> 
     {  !purchaseDetails ||purchaseDetails.length===0 ?
     <p>No Purchase History is Available..</p>
     :
     <div>
      <h2>Purchase History</h2>
      <ul>{OrderDetailsItems}</ul>

     </div>
     }
    </>
  )

}*/


/* import React from 'react';
import { useSelector } from 'react-redux';
import './Order.css';

function Orders() {
  const purchaseDetails = useSelector(globalstate => globalstate.order);

  const OrderDetailsItems = purchaseDetails.map((purchase, index) => (
    <li key={index} className="order-item">
      <p>ORDER_ID:{purchase.orderId}</p>
      <p>Date: {purchase.date}</p>
      <p>Total amount: ₹{purchase.totalprice.toFixed(2)}</p>

      <ul className="order-sublist">
        {purchase.items.map((item, itemIndex) => (
          <li key={itemIndex}>
            {item.name} - ₹{item.price} × {item.quantity}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="orders-container">
      <p>This is orders page..</p>
      {!purchaseDetails || purchaseDetails.length === 0 ? (
        <p>No Purchase History is Available..</p>
      ) : (
        <div>
          <h2 className="orders-header">Purchase History</h2>
          <ul className="order-list">{OrderDetailsItems}</ul>
        </div>
      )}
    </div>
  );
};

export default Orders;


/*import React from 'react';
import { useSelector } from 'react-redux';
import './Order.css'; // Optional, for small extras

function Orders() {
  const purchaseDetails = useSelector((globalstate) => globalstate.order);

  // Color palette for balloon-style cards
  const cardColors = ['#FFD3B6', '#FFAAA5', '#D5AAFF', '#A0E7E5', '#B4F8C8'];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-5 text-gradient">🎈 Orders Page 🎈</h1>

      {!purchaseDetails || purchaseDetails.length === 0 ? (
        <div className="no-orders-card">
        🎈 No Purchase History is Available 🎈<br />
         Start shopping and your orders will appear here!
       </div>

      ) : (
        <div>
          <h2 className="text-center text-primary mb-4">🎁 Purchase History 🎁</h2>
          <div className="row g-4 justify-content-center">
            {purchaseDetails.map((purchase, index) => (
              <div className="col-md-6 col-lg-5" key={index}>
                <div
                  className="card shadow balloon-card h-100 border-0"
                  style={{ backgroundColor: cardColors[index % cardColors.length] }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold">📦 Order ID: {purchase.orderId}</h5>
                    <p className="card-text mb-2">
                      <strong>📅 Date:</strong> {purchase.date}
                      <br />
                      <strong>💰 Total Amount:</strong> ₹{purchase.totalprice.toFixed(2)}
                    </p>
                    <ul className="list-group list-group-flush rounded shadow-sm">
                      {purchase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <span>🛒 {item.name}</span>
                          <span>₹{item.price} × {item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;*/



import React from 'react';
import { useSelector } from 'react-redux';
import './Order.css';

function Orders() {
  const purchaseDetails = useSelector(globalstate => globalstate.order);

  let OrderDetailsItems = purchaseDetails.map((purchase, index) => (
    <li key={index}>
      <p>ORDER_ID:{purchase.orderId}</p>
      <p>Date: {purchase.date}</p>
      <p>Total amount: ₹{purchase.totalprice.toFixed(2)}</p>

      <ul>
        {purchase.items.map((item, itemIndex) => (
          <li key={itemIndex}>
           🛒  {item.name} - {item.price} × {item.quantity}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
     <div className="order-page-background">
    <div className="orders-page">
      <h2>🎈 Purchase History 🎈</h2>
      { !purchaseDetails || purchaseDetails.length === 0 ? (
        <div className="no-orders">
          🎁 No Purchase History is Available 🎁<br />
          Make your first order and it will appear here!
        </div>
      ) : (
        <ul className="orders-list">{OrderDetailsItems}</ul>
      )}
    </div>
    </div>
  );
}

export default Orders;


