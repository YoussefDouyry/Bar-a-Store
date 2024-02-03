import React from 'react'

export default function Navbar1() {
  return (
    <>
        <div style={{background:'#181733',position:'sticky',top:0,zIndex:1000,padding:'10px'}} className='d-flex justify-content-around'>
            
        <a href="" ><img src="//store.fcbarcelona.com/cdn/shop/t/9/assets/logo-store-white.svg?v=114152627602665118381676546075"  /></a>
            <p className='text-light'>Best sellers</p>
            <p className='text-light'>Tenus de Matche</p>
            <p className='text-light'>Entraiment</p>
            <p className='text-light'>Mode</p>
            <p className='text-light'>Memorabilia</p>
            <p className='text-light'>Cadeaux et Accessoires</p>
            <p className='text-light'>Link</p>
            <p className='text-light'>Link</p>
            <p className='text-light'>Link</p>
        </div>
    </>
  )
}