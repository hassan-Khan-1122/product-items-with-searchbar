
// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";

// // function App() {
// //   const boxRef = useRef(null);
// //   const animationRef = useRef(null);

// //   useEffect(() => {
// //     animationRef.current = gsap.to(boxRef.current, {
// //       x: 900,
// //       duration: 3,
// //       paused: true, 
// //     });
// //   }, []);

// //   const buttonStart = () => {
// //     animationRef.current.play();
// //   };

// //   const buttonPause = () => {
// //     animationRef.current.pause();
// //   };

// //   const buttonRestart = () => {
// //     animationRef.current.restart();
// //   };
// //   const buttonrreverse = () => {
// //     animationRef.current.reverse();
// //   };
// //   const buttonResume= () => {
// //     animationRef.current.resume();
// //   };

// //   return (
// //     <>
// //       <div
// //         ref={boxRef}
// //         className="box w-[300px] bg-orange-500 h-[300px] mt-16 rounded-[100%] border-4 border-red-500"
// //       ></div>
// //       <div className="mt-10 flex justify-center gap-5">
// //         <button onClick={buttonStart} className="bg-red-500 w-[100px] text-black">
// //           Play
// //         </button>
// //         <button onClick={buttonPause} className="bg-orange-500 w-[100px] text-black">
// //           Pause
// //         </button>
// //         <button onClick={buttonResume} className="bg-orange-500 w-[100px] text-black">
// //           Resume
// //         </button>
// //         <button onClick={buttonrreverse} className="bg-pink-300 w-[100px] text-black">
// //           Reverse
// //         </button>
// //         <button onClick={buttonRestart} className="bg-pink-300 w-[100px] text-black">
// //           Restart
// //         </button>
        
// //       </div>
// //     </>
// //   );
// // }

// // export default App;



// // // import React, { useEffect } from 'react';
// // // import { gsap } from 'gsap';

// // // export default function App() {
// // //   useEffect(() => {
// // //     gsap.to(".box", {  y: 100, x:500,   duration: 6 , repeat: -1});
// // //     gsap.to(".box2", {  y: 200, x:600, rotate : 360,  duration: 6 , repeat: -1});
// // //   }, []);

// // //   return (
// // //     <>
// // //     <div className='box w-[200px] h-[200px] bg-green-500 rounded-md'>
// // //     </div>
// // //     <div className='box2 w-[200px] h-[200px] bg-green-500 rounded-md'>
// // //     </div>
// // //     </>

// // //   );
// // // }


// // import React, { useEffect, useState } from 'react'
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import { Button } from '@mui/material';
// // import axios from 'axios'; // Ensure axios is imported



// // export default function App() {
// //   const [products, setProducts] = useState([]);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('https://fakestoreapi.com/products');
// //       setProducts(response.data);
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };
// //    useEffect(()=>{
// //    fetchData();
// //    }, [])

  
// //   return (

// //     <>
// //     <h1 className='mt-4 text-center Text-[black] text-3xl '>Here Some Special Prducts </h1>
    
// //     <div className='flex justify-center mt-10 gap-2'>
// //  <Box
// //       sx={{
// //         width: 500,
// //         maxWidth: '100%',
// //       }}
// //     >
// //       <TextField fullWidth label="Search Product" id="fullWidth" />
// //     </Box>
// //     <Button variant="contained">Search</Button>
// //     </div>
// //     <div className="container mx-auto px-4 mt-16">

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {products.map((product, key) => (
// //           <div key={key} className="relative overflow-hidden">
// //             <img src={product.image} alt={product.title} className="h-64 w-full object-cover transition duration-300 transform hover:scale-105 cursor-pointer" />
// //             <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 flex flex-col justify-center items-center">
// //               <div className="text-white text-center mb-4">
// //                 <p className="text-lg font-semibold mb-2">{product.title}</p>
// //                 <p className="text-gray-200">${product.price}</p>
// //                 <p className="text-gray-200">${product.rating.count}</p>

// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// // </>

// //   )
// // }




import React from 'react'
import Product from './component/Product'
import Footer from './component/Footer'

export default function App() {
  return (
    <div>

    <Product/>
    <Footer/>
    </div>

    
  )
}











