import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <> 
        <div id='first-div' className='row'>
              <h6 className='d1h3'>Livraison Gratuit Pour Tout Le Monde</h6>
                
        </div>
          <nav className='navbar' style={{position:'sticky',top:0,zIndex:1000,padding:'10px'}}>
            <div style={{display:'flex'}}>    
                <div>
                    <Link to='/'>
                    <a href="" ><img src="//store.fcbarcelona.com/cdn/shop/t/9/assets/logo-store-white.svg?v=114152627602665118381676546075"  /></a>
                    </Link>
                </div>
                
                <ul id='ul1' style={{lineHeight:3}} className='d-flex justify-content-evenly'>
                  <li className='l1' >
                    Best sellers
                  </li>
                  <li className='l2'>
                    Tenus de Matche
                  </li>
                  <li className='l3'>
                      Entraiment
                  </li>
                  <li className='l4'>
                      Mode
                  </li>
                  <li className='l5'>
                      Memorabilia
                  </li>
                  <li className='l6'>
                      Cadeaux et Accessoires
                  </li>
                  
                </ul>
                <ul style={{}}>
                <li className='l7'>
                      <img src={require(`./images/211817_search_strong_icon.png`)} width={30} height={30} style={{marginTop:'6px',marginLeft:2}} alt="" /><br />
                      <p style={{fontSize:'14px' ,marginBottom:'10px'}}>Search</p>
                </li>
                <li className='l8'>
                      <img src={require(`./images/2203549_admin_avatar_human_login_user_icon.png`)} width={23} style={{marginTop:'6px',marginLeft:2}} height={23} alt="" /><br />
                      <p style={{fontSize:'14px' ,marginTop:'7px'}}>Login</p>
                </li>
                <li className='l9'>
                      <img src={require(`./images/2849808_shop_package_multimedia_icon.png`)} width={30} style={{marginTop:'6px',marginLeft:2}}  height={30} alt="" /><br />
                      <p style={{fontSize:'14px' ,marginBottom:'10px'}}>Panier</p>
                </li>
                </ul>
                
            </div>
          </nav>
          
    </>
  )
}
