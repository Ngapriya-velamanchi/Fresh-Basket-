/*import React from 'react'
import { useSelector } from 'react-redux';*/

/*function Cart() {

  let cartObjects=useSelector(globalState=>globalState.cart)
  console.log("Cart items:", cartObjects);

  let cartListItems=cartObjects.map((item,index)=>(
    <li key={index}>
     Name: {item.name} Price:${item.price} Quantity{item.quantity}
      <button >+</button>
      <button >-</button>
      <button >Remove</button>

    </li>
  ))

  return (
    <>
    <h1>This are cart items..</h1>
    <ol >
      {cartListItems}
      </ol>

    </>
  )
}

export default Cart;*/

import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'; // Ensure this CSS file includes styles from the previous answer
import { useEffect, useRef, useState } from 'react';
import { clearcart, decrement, increment, OrderDetails, remove } from './store';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from'@emailjs/browser';
import { toast } from 'react-toastify';


function Cart() {
  const cartObjects = useSelector(globalState => globalState.cart);
  console.log("Cart items:", cartObjects);



  const[PaymentMethod,setPaymentMethod]=('');
   //calculating the total amount by taking the arrow function 
   let [DiscountPer,setDiscountPer]=useState(0);
  //cuopon code applying 
    //this represents text box
    let Couponcoderef=useRef();
    let[CouponCodeDiscountPer,setCouponCodeDiscountPer]=useState(0);
    let[CuoponName,setCuoponName]=useState("");
    let [CustomerEmail,setCustomerEmail]=useState('');

    let[ShowThankYou,setShowThankYou]=useState(false);
    const [countdown, setCountdown] = useState(5);




    
    let emailRef=useRef();

  let dispatch=useDispatch();

  /*if(!cartObjects || cartObjects.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }*/

  const cartListItems = cartObjects.map((item, index) => (
    <li key={index} className="cart-item">
      <div className="item-details">
        <img src={item.image} />
        <span className="item-name">Name: {item.name}</span>
        <span className="item-price">Price: ${item.price}</span>
        <span className="item-quantity">Quantity: {item.quantity}</span>
      </div>
      <div className="item-actions">
        <button className="btn increment" onClick={()=>{dispatch(increment(item))
          toast.success('Product Quantity incremented Successfully')}}>+</button>
        <button className="btn decrement" onClick={()=>{dispatch(decrement(item))
          toast.success('Product Quantity  decremented Successfully')}} >-</button>
        <button className="btn remove" onClick={()=>{dispatch(remove(item))
          toast.warn('product is removed from the Cart')}}>Remove</button>
      </div>
    </li>
  ));

   /* //calculating the total amount by taking the arrow function 
    let [DiscountPer,setDiscountPer]=useState(0);*/

    const CalculatingAmount=()=>{
      let totalprice=cartObjects.reduce((totaprice,item)=>totaprice+item.price * item.quantity,0);
      const discountAmount=(totalprice* DiscountPer)/100;
      const discountAmountCuopon=(totalprice*CouponCodeDiscountPer)
      let priceAfterdiscount=totalprice-discountAmount;
      const tax=(priceAfterdiscount*5)/100;
      let finalprice=totalprice-discountAmount+tax;
      return{totalprice,discountAmount,discountAmountCuopon,tax,finalprice};

    }
    //call the above arrow function to hold the values
    const{totalprice,discountAmount,discountAmountCuopon,tax,finalprice}=CalculatingAmount();

    //cuopon code applying 
    //this represents text box
    /*let Couponcoderef=useRef();
    let[CouponCodeDiscountPer,setCouponCodeDiscountPer]=useState(0);
    let[CuoponName,setCuoponName]=useState("");*/

   //this function executed when we click on apply cuopon 
    let handlingCuopon=()=>{
      //this line reads the textbox value
      let cuoponcode=Couponcoderef.current.value.trim().toUpperCase();
      setCuoponName(cuoponcode);
      // based on switch decide the cuopon percentage
      switch(cuoponcode){
        case 'RATAN10':setCouponCodeDiscountPer(10);break;
        case 'RATAN20':setCouponCodeDiscountPer(20);break;
        case 'RATAN30':setCouponCodeDiscountPer(30);break;
        case 'RATAN40':setCouponCodeDiscountPer(40);break;
        default:  alert('Invalid Cuopon code');setCouponCodeDiscountPer(0);
      }

    };

    

    let navigate=useNavigate();
     
    let handlingpurchase=()=>{
      //take the cart details store into ordersobject
      
      let OrdersDetailsObject={
        orderId:'ORD-'+new Date().getTime(),
        date:new Date().toLocaleString(),
        items:[...cartObjects],
        totalprice:finalprice
      };
      //clear the cart
    dispatch(clearcart());
    //send details to orders
    dispatch(OrderDetails(OrdersDetailsObject));

    const shipping=50;
    const orderId = 'ORD-' + new Date().getTime();

    const templateParams={
      orderid:orderId,
      orders:cartObjects.map(item=>({
        name:item.name,
        price:(item.price*item.quantity).toFixed(2),
        units:item.quantity
      })),

      cost:{
        shipping,
        tax:tax.toFixed(2),
        total:finalprice.toFixed(2)+shipping,
      },
      email:CustomerEmail
    };
    
    emailjs.send('service_dmz4meb' ,'template_wgl3haa', templateParams,'-aKMRw_L40I6YNSyc')
    .then(()=>{
      console.log("email sent successfully");
    })
    .catch((error)=>{

      console.log("email sending failed");

      useEffect(() => {
  if (ShowThankYou) {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }
}, [ShowThankYou]);

    })

}
   return (
     <div className="cart-page-background">
  <div className="cart-container">
    {cartObjects.length === 0 && !ShowThankYou ? (
      <div className="empty-cart-message">
    Your cart is empty. Start adding some amazing products!
  </div>
      
    ) : (
      <>
        <h1>🛒 Your Cart</h1>
        <ol>{cartListItems}</ol>

        <h2>Your Total Price: ₹{totalprice.toFixed(2)}</h2>

        <button onClick={() => setDiscountPer(10)}>Apply 10% Discount</button>
        <button onClick={() => setDiscountPer(20)}>Apply 20% Discount</button>
        <button onClick={() => setDiscountPer(30)}>Apply 30% Discount</button>

        <h3>Discount: {DiscountPer}% = ₹{discountAmount.toFixed(2)}</h3>

        <input type="text" ref={Couponcoderef} placeholder="Enter coupon code" />
        <button onClick={handlingCuopon}>Apply Coupon</button>

        <h2>Applied Coupon: {CuoponName} - ₹{discountAmountCuopon.toFixed(2)}</h2>
        <h2>Tax (5%): ₹{tax.toFixed(2)}</h2>
        <h1>Final Price to Pay: ₹{finalprice.toFixed(2)}</h1>

        <label>📧 Enter your email to receive order confirmation:</label>
        <input
          type="email"
          ref={emailRef}
          placeholder="you@example.com"
          onChange={(e) => setCustomerEmail(e.target.value)}
        />

        <h3>💳 Select Payment Method</h3>
        <button onClick={() => setPaymentMethod('qr')}>QR Code</button>
        <button onClick={() => setPaymentMethod('card')}>Card</button>

        {PaymentMethod === 'qr' && (
          <div className="qr-container">
            <h4>📱 Scan UPI to Pay ₹{finalprice.toFixed(2)}</h4>
            <QRCode
              value={`upi://pay?pa=priya@ybl&pn=priyastore&am=${finalprice.toFixed(2)}&cu=INR`}
            />
            <p>UPI ID: priya@ybl</p>
          </div>
        )}

        {PaymentMethod === 'card' && (
          <div className="card-form">
            <h4><i className="fas fa-credit-card"></i> Enter Card Details</h4>
            <input type="text" className="input-field" placeholder="Card Number" />
            <input type="text" className="input-field" placeholder="Card Holder Name" />
            <input type="text" className="input-field" placeholder="Expiry Date (MM/YY)" />
            <input type="text" className="input-field" placeholder="CVV" />
            <button className="pay-button">Pay Now</button>
          </div>
        )}

        <button
          onClick={() => {
            setShowThankYou(true);
            setCountdown(5);
            const interval = setInterval(() => {
              setCountdown((prev) => {
                if (prev <= 1) {
                  clearInterval(interval);
                }
                return prev - 1;
              });
            }, 1000);

            setTimeout(() => {
              handlingpurchase();
              toast.success('ORDER placed successfully');
              navigate('/Orders');
            }, 5000);
          }}
        >
          ✅ I Paid Amount
        </button>

        {ShowThankYou && (
          <h2 className="thankyou-message">
            ✅ Thank you for Your Purchase! Redirecting to Orders in {countdown} second
            {countdown !== 1 ? 's' : ''}...
          </h2>
        )}
      </>
    )}
  </div>
  </div>
);
}
export default Cart;

