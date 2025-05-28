import { configureStore, createSlice, } from "@reduxjs/toolkit";
import Chocolates from "./Chocolates";


//load the cart from local storage

const savecart=localStorage.getItem("cart");
const initialCartState=savecart?JSON.parse(savecart):[];


//create the slice
const productSlice=createSlice({
    name:'product',
    initialState: {
       
        Veg:[
            {name:'Tomato', price:20.5, image:'/tomato.jpeg'},
            {name:'Potato', price:25.5, image:'/potato.jpeg'},
            {name:'Carrot', price:30.5, image:'/carrot.jpeg'},
            {name:'Spinach', price:35.5, image:'/spinach.jpeg'},
            {name:'Cabbage', price:40.5, image:'/cabbage.jpeg'},
            {name:'Cauliflower', price:45.5, image:'/cauliflower.jpeg'},
            {name:'Onino', price:20.5, image:'/onion.jpeg'},
           {name:'Durmstick', price:35.5, image:'/DurmStick.jpg'},
            {name:'Lady Finger', price:25.5, image:'/lady finger.jpg'},
            {name:'Avocado', price:45.5, image:'/avocado.jpg'},
            {name:'Brinjal', price:40.5, image:'/brinjal.jpg'},
            {name:'Capsicum', price:35.5, image:'/capsicum.jpg'},
           



        ],
        Nonveg:[

            {name:'Chicken', price:200.5, image:'/chicken.jpeg'},
            {name:'Mutton', price:220.5, image:'/mutton.jpeg'},
            {name:'Fish', price:225.5, image:'/fish.jpeg'},
            {name:'Prawns', price:300.0, image:'/Prawns.jpeg'},
            {name:'Egg', price:320.5, image:'/Egg.jpeg'},
            {name:'Kababs', price:330.0, image:'/Kababs.jpeg'},
             {name:'Crap', price:450.5, image:'/crap.jpg'},
            {name:'Turkey', price:430.5, image:'/turkey.jpg'},
            {name:'Duck Meat', price:540.5, image:'/duck meat.jpg'},
            
        ],
        Chocolates:[
            {name:'KitKat', price:20.0, image:'/kitkat.jpg'},
            {name:'Munch', price:25.5, image:'/munch.jpg'},
            {name:'Dark Fantasy', price:45.5, image:'/dark fantasy.jpg'},
             {name:'Dairy Milk', price:50.0, image:'/dairy milk.jpg'},
            {name:'5Star', price:10.5, image:'/5star.jpg'},
            {name:'MilkyBar', price:30.5, image:'/milkybar.jpg'},
            {name:'Bournville Dark Chocolate', price:60.5, image:'/Bournville Dark Chocolate.jpg'},
            {name:'Perk', price:35.5, image:'/perk.jpg'},
            {name:'Snickers', price:40.5, image:'/snickers.jpg'},

        ],
        Milk:[

            
            {name:'Amul Milk', price:75.5, image:'/amul milk.jpg'},
            {name:'Butter Milk', price:30.5, image:'/buttermilk.jpg'},
            {name:'Flavoured Milk', price:120.5, image:'/flavoured milk.jpg'},
            {name:'Curd', price:45.5, image:'/curd.jpg'},
            {name:'Paneer', price:80.5, image:'/paneer.jpg'},
            {name:'Lassi', price:20.5, image:'/lassi.jpg'},
            {name:'Ghee', price:330.5, image:'/ghee.jpg'},
            {name:'Cheese', price:60.5, image:'/cheese.jpg'},



        ]
    },
        reducers:{}
});


// create the cartslice

const cartSlice=createSlice({
    name: 'cart',
    initialState:initialCartState,
    reducers :{
         AddToCart:(state,inputItem)=>{

            let item=state.find(item=>item.name===inputItem.payload.name);

            if(item){
                item.quantity+=1

            }
            else{
                state.push({...inputItem.payload,quantity:1});
             }
      
        },
         increment :(state,inputItem)=>{
         let item=state.find(item=>item.name===inputItem.payload.name);

         if(item){
             item.quantity+=1

         }
       },
       decrement:(state,inputItem)=>{
        let item=state.find(item=>item.name===inputItem.payload.name);
        if(item && item.quantity>=1){
            item.quantity-=1
        }
       },
       remove:(state,inputItem)=>{
        return state.filter(item=>item.name !== inputItem.payload.name);
    },
    clearcart:()=>[]
    }
})


//create the orders slice

const ordersSlice=createSlice({
    name:'order',
    initialState:[],
    reducers:{
        OrderDetails:(state,inputItem)=>{
         state.push(inputItem.payload);

        }
        
        
    }

})

// create the user slice

const userSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
        isAuthenticated:false,
        currentuser:null
    },
    reducers:{

        registeruser:(state,inputdata)=>{

            state.users.push(inputdata.payload);
        },
        loginuser:(state,inputdata)=>{
            const founduser=state.users.find(user=>user.username===inputdata.payload.username && user.password===inputdata.payload.password)

        if(founduser){
            state.isAuthenticated=true;
            state.currentuser=founduser;

        }
        else{
            alert("Invalid credentials");
        }
    },
    logoutuser:(state)=>{
        state.isAuthenticated=false;
        state.currentuser=null;
    }
   }

});

 //Array destruring :exporting the cart reducers

 export const {OrderDetails} = ordersSlice.actions;

 export let {AddToCart,increment,decrement,remove,clearcart}=cartSlice.actions;
 export let {registeruser,loginuser,logoutuser}=userSlice.actions;


   //configure to store
   let store=configureStore({
    reducer:{
        product:productSlice.reducer,
        cart:cartSlice.reducer,
        order:ordersSlice.reducer,
        users:userSlice.reducer
    }
   })

   //save the cart to localstorage whenever it changes

   store.subscribe(()=>{

    const state=store.getState();
    localStorage.setItem("cart",JSON.stringify(state.cart));
   })

//explore the store


export default store;