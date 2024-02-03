import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Store(props) {
    const div51Ref = useRef(null);
    const handleScroll = () => {
      if (div51Ref.current) {
        div51Ref.current.scrollLeft += 920;
      }
    }
    const handleScrollx = () => {
      if (div51Ref.current) {
        div51Ref.current.scrollLeft -= 920;
      }
    }
    
    
  return (
    <>
            <Navbar />
          <div id='head-div' className='row' >
            <div className='h11'>
                <h1 className='text-light ' id='d2h1'><strong>get the barça gifts</strong></h1>
                <div id='div-btn'>
                    <button className="btn btn-warning" id='btn1'>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 63.6"><rect width="265" height="63.6"/><line class="cls-1" y1="2.5" x2="214" y2="2.5"/></svg>
                    Shop Now   
                    <i className="bi bi-arrow-down-right" style={{padding:'10px'}}></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* =========================== Products =========================== */}
            <div id='div-body-1' >
                <div className='container-fluid' id='div2'>
                    {
                      props.barça_old_product.map((b)=>
                      <Link to={`Produit/${b.id}`}>

                      <div  className='card' id='card1'>
                          <img src={require(`./images/${b.image}`)} alt='not found' id='imgs'  />
                          <h6 className='text-light p-1'>{b.nom}</h6>
                          <h6 className='text-light p-1'>{b.prix}</h6>
                    </div>
                    </Link>

                      )
                    }
                </div>
            </div>
            <div className='div-body-2'>
                  <div  id='h12'>
                    <h4 className='text-warning'>LIMITED UNITES</h4>
                  <strong>the spotify camp nou seats</strong>
                    <div id='div-btn'>
                        <button className="btn btn-warning" id='btn1'>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 63.6"><rect width="265" height="63.6"/><line class="cls-1" y1="2.5" x2="214" y2="2.5"/></svg>
                        Acheter  
                        <i className="bi bi-arrow-down-right" style={{padding:'10px'}}></i>
                        </button>
                    </div>
                  </div>
            </div>


            <div className='div-animation'>
              
                      <span className='animate'>PASSIONBLAUGRANA●</span>
                      <span className='animate'>PASSIONBLAUGRANA●</span>
                      <span className='animate'>PASSIONBLAUGRANA●</span>
                      
            </div>
            <div className='div-body-3'>
                  <div  id='h12'>
                    <h4 className='text-warning'>EXCLUSIF</h4>
                  <strong>collections barça</strong>
                    <div id='div-btn'>
                        <button className="btn btn-warning" id='btn1'>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 63.6"><rect width="265" height="63.6"/><line class="cls-1" y1="2.5" x2="214" y2="2.5"/></svg>
                        Acheter  
                        <i className="bi bi-arrow-down-right" style={{padding:'10px'}}></i>
                        </button>
                    </div>
                  </div>
            </div>
            <div id='div-body-1'>
                <div className='container-fluid' id='div2'>
                    {
                      props.barca_old_product.map((b)=>
                      <Link to={`Produit/${b.id}`}>
                         <div  className='card' id='card1'>
                            <img src={require(`./images/${b.image}`)} alt='not found' id='imgs'  />
                            <h6 className='text-light p-1'>{b.nom}</h6>
                            <h6 className='text-light p-1'>{b.prix}</h6>
                          </div>
                      </Link>
                      )
                    }
                </div>
            </div>
            <div className='div-body-4' style={{padding:'30px'}}>
              <div className='row ' style={{display:'flex'}} >
                   {
                    props.barça_new.map(
                      b=>
                      <div className="col-md-3">
                      <div className="card " style={{width:'300px',height:'390px',border:'none'}} id='card2'>
                        <div className='' id='div4-1'>
                          <h3 className='h33'>{b.nom}</h3>
                        </div>
                        <img src={require(`./images/${b.image}`)} alt="Not found" className='d4i'/>
                      </div>
                  </div>
                    )
                   }
              </div>
            </div>
            <div className='div-body-5'>
                   <div>
                      <span className='text-warning' style={{marginBottom:'20px'}}><strong>COLLECTIONS</strong></span>
                      <div style={{display:'flex'}}>
                      <h2 className='text-light ' style={{marginBottom:'20px'}}><strong>LA MÊME PASSION, STYLES DIFFÉRENTS.</strong></h2>
                      <div style={{position:'absolute',left:'1200px'}}>
                      <button type='button'  style={{width:'50px',height:'50px',borderRadius:'50%',margin:'5px'}} className='btnScrollx' onClick={handleScrollx}><i class="bi bi-chevron-left"></i></button>
                      <button type='button'  style={{width:'50px',height:'50px',borderRadius:'50%',margin:'5px'}} className='btnScrollx' onClick={handleScroll}><i class="bi bi-chevron-right" ></i></button>
                      </div>

                      </div>
                   </div>
                   <div className='div-body-5-1' ref={div51Ref}>
                    
                      <div  className='div5-1' >
                          {
                            props.barça_perfect.map(
                              b=>
                              <div className='card' id='d5card' style={{backgroundImage:`url(${require(`./images/${b.image}`)})`,backgroundSize:'cover'}} >
                                
                              <div className='t1'></div>
                              <div className='t2'></div>
                              <div className='ti3'>
                                  <h3>COLLECTION RETRO</h3>
                                  <button type="button" className='btn2'>découvrir le <strong><i class="bi bi-arrow-right-short" style={{padding:'10px',fontSize:'16px'}}></i></strong></button>
                              </div>
                          </div>
                            )
                          }
                      </div>
                   </div>
            </div>
            <Footer />
    </>


    )
}
