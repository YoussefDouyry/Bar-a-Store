import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../src/index.css'
export default function Produit(props) {
    const {id}=useParams()
    const productNow = props.products.find(e=>e.id==id)
    const [alert,setAlert]=useState()
    const [taille,setTaille]=useState(null)
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const nom1=<input type="text" className='form-control p-2 m-2 w-75' placeholder='Nom /9 caractére max' />
    const prenom2=<input type="text" className='form-control p-2 m-2 w-75' placeholder='Numéro /2 num max'/>
    const showNomPrenom=()=>{
        setNom(nom1)
        setPrenom(prenom2)
        const style = {
            
        }
    }
    const produit_ajouter=()=>{
           setAlert(
            <div className='alert alert-warning p-4 m-2 w-75 ' style={{color:'#181733',fontWeight:'bold',textAlign:'center'}} >
                <h5>{productNow.nom}</h5> 
                Produit bien ajouter  
           </div>
           ) 
    }
    const selectTaille=(t)=>{
        
        setTaille(t === taille ? null : t);
    
}
    const alett=()=>{
        window.confirm('etvu')
    }
  return (
    <>
       
        {/*===================== Product ================*/}
        <div className='container-fluid'>
        <div className='row' >
            <div className='col-md-8' >
                
                {
                productNow.images.map(
                    i=> 
                        <img src={require(`./images/${i}`)} className='img-head1'/>
                    
                )
            }
                
            </div>
            <div className='col-md-4' id='cardo' >
            <div style={{position:'sticky',top:80}}>
            <h2 className='text1' >{productNow.nom}</h2>
            <p style={{fontSize:'20px'}}>{productNow.prix}</p>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                
                
                {
                    productNow.taille.map(
                        t=>
                        <div key={t} className='radio-button-container'>
                            <input type="radio" id={`size-${t}`} value={t} name='size' className='inR visually-hidden' />
                            <label htmlFor={`size-${t}`} className='button-style'>{t}</label>
                        </div>
                    )
                }
            </div>
            <div>
                {productNow.competion ?
                    <>
                        <h5>Personnalisez cet article</h5>
                        <p>Ajoutez un nom ou un numéro pour personnaliser votre t-shirt ou créer le cadeau parfait.</p>
                        <div id='competion' style={{display:'flex',height:'70px',margin:'auto',textAlign:'center',alignItems:'center',justifyContent:'center'}} onClick={showNomPrenom}>
                            <h6 style={{fontWeight:'bold',fontSize:18}}>Ajoutez votre nom</h6>
                        </div>
                        <div className='d-flex'>
                        {nom}{prenom}
                        </div>
                        {
                            
                            <div>
                                <h6 style={{fontWeight:'bold'}}>Ajouter des competition</h6>

                                <div className='d'>
                                {
                                    productNow.competion.map(
                                        c=>
                                        <div className='d-flex'>
                                            
                                            <input type="radio" id={`comp-${c}`} value={c} name='comp' className='inR visually-hidden'  />
                                            <label htmlFor={`comp-${c}`} className='button-style1'>{c}</label>
                                        </div>)
                                }
                            </div>
                            </div>
                        }
                    </>
                :''}
                {
                   productNow.description.map(d=>
                        <div>
                        <p style={{fontWeight:'bold'}}>{d.n1}</p>
                        <p>{d.n2}</p>
                        <p>{d.n3}</p>
                        <p style={{fontWeight:'600'}}>{d.n4}</p>
                        </div>                        
                   ) 
                }
            </div>
            <button  id='btnP' type='button' onClick={produit_ajouter}><i class="bi bi-bag" ></i> Ajouter au panier</button>
            {
                alert
            }
            <div>
                
            </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
