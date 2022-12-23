// import React from 'react'
// import { Link } from 'react-router-dom';
//  export default function Shopping({cart,removeFromoCart}) {
//   return (
//     <>
//       {cart.map((val, index) => {
//         return (
//           <>
//           <Link to={'/Pimformation/' + val.id + '/' + val.name}>
//             <div className="item">
//               <img src={val.image} key={index} alt="" srcset="" />
//               <h5 className='addtocart' onClick={() => removeFromoCart(val)}>Remove</h5>
//             </div>
//           </Link>
//           </>
//         );
//       })}
//       <h5>total price:</h5>
//     </>
//   );
// }

import React from 'react'

function Shopping() {
  return (
    <div>Shopping</div>
  )
}

export default Shopping