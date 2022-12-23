import React, { useState } from 'react'
import data from './list'
import './Product.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsSmartwatch } from 'react-icons/bs'
import { AiFillCamera } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { SiTelegraph } from 'react-icons/si'
import { AiOutlineCustomerService } from 'react-icons/ai'


const PAGE_DATA = 'data';
const PAGE_CART = 'cart';

function Product() {

   // filter data ......
   const [image, setimage] = useState(data);

   const alldata = () => {
      const finaldata = data.filter((val) => {
         return val;
      })
      setimage(finaldata);
   }

   const filterout = (item) => {
      const finaldata = data.filter((val) => {
         // eslint-disable-next-line eqeqeq
         return val.name == item;
      })
      setimage(finaldata)
   }
   //--------------------------------------------------------------------------------


   let list = document.querySelectorAll(".list")
   for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function () {
         for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("Active")
         }
         this.classList.add("Active")
      })
   }

   //Add to cart...

   const [cart, setCart] = useState([]);
   const [page, setPage] = useState('data')


   const addToCart = (e, data) => {
      e.preventDefault();
      setCart([...cart, { ...data }]);
   }

   const removeFromoCart = (dataToRemove) => {
      setCart(cart.filter((data) => data !== dataToRemove))
   }

   const removeAll = () => {
      setCart([]);
   }

   const navigateTo = (nextPage) => {
      setPage(nextPage);
   }

   const getTotalSum = () => {
      return cart.reduce((sum, { price }) => sum + price, 0)
   }

   const orderplace = () => {
      if (cart.length > 0) {
         alert("ORDER PLACED SUCESSFULL !")
      } else {
         alert("ORDERD CAN'T BE PLACED !")
      }

   }
   const renderData = () => {
      return (<>
         {
            image.map((val, index) => {
               return (
                  <Link to={'/Pimformation/' + val.id + '/' + val.name + '/' + val.price}>
                     <div className="item">
                        <img src={val.image} key={index} alt="" srcset="" />
                        <h5 className='addtocart' onClick={(e) => addToCart(e, val)}>Add to cart</h5>
                     </div>
                  </Link>
               )
            })
         }
      </>
      )
   }
   const renderCart = () => {
      return (<>
         <div className='ac'>
            {
               cart.length > 0 && (
                  <button className='allclear' onClick={removeAll}>Clear All </button>
               )
            }
         </div>
         {
            cart.map((val, index) => {
               return (
                  <>
                     {/* <Link to={'/Pimformation/' + val.id + '/' + val.name+'/'+val.price}> */}
                     <div className="item">
                        {/* <h4 className='price'>PRICE :{val.price}</h4> */}
                        <img src={val.image} key={index} alt="" srcset="" />
                        <h5 className='addtocart' onClick={() => removeFromoCart(val)}>Remove</h5>
                     </div>
                     {/* </Link> */}
                  </>
               )
            })
         }
         <h4 className='totalcost'>Total Cost:${getTotalSum()}</h4>
         <button className='order' onClick={orderplace}>ORDER NOW</button>
      </>
      )
   }

   return (
      <>
         <section className='pdt'>
            <ul>
               <li className='list Active' onClick={alldata} onDoubleClick={() => navigateTo(PAGE_DATA)}>All</li>
               <li className='list' onClick={() => filterout('phone')}>SmartPhone<BsPhone /></li>
               <li className='list' onClick={() => filterout('camera')}>Camera<AiFillCamera /></li>
               <li className='list' onClick={() => filterout('watch')}>Watch<BsSmartwatch /></li>
               <li className='list' onClick={() => filterout('Tv')}>TV<SiTelegraph /></li>
               <li className='list' onClick={() => filterout('headphone')}>Headphone<AiOutlineCustomerService /></li>
               <li className='list' onClick={() => navigateTo(PAGE_CART)} >Go To Cart({cart.length})</li>
               <li className='list' onClick={() => navigateTo(PAGE_DATA)} >View Product</li>
            </ul>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="Gallery">
               {page === PAGE_DATA && renderData()}
               {/* {page === PAGE_CART && <Shopping cart={cart} removeFromoCart={removeFromoCart} />} */}
               {page === PAGE_CART && renderCart()}

            </motion.div>
         </section>
      </>
   )
}

export default Product;