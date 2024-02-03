import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='footer'>
            
            <div className='div-f1'>
                <p className='f-p1'>FC BARCELONA</p>
            </div>
              <div className='row' id='div-f2'>
                  <div className='col-md-4'>
                      <p style={{textTransform:'uppercase',fontWeight:'bold',color:'white',fontSize:'16px'}}>Découvrez les dernières nouveautés</p>
                      <p style={{fontWeight:'bold',color:'gray',fontSize:'18px',display:'flex'}}>E-mail <i class="bi bi-arrow-right" style={{color:'white',textAlign:'end'}}></i></p>
                      <p style={{color:'white',fontSize:'14px'}}>
                      <input type="checkbox" className='inF'/>En donnant votre email, vous acceptez de recevoir la
                        Newsletter BLM. Consultez les mentions légales et la politique
                          de confidentialité . De même, nous vous enverrons avec votre consentement des informations commerciales concernant le FC Barcelone avec les actualités du club, des promotions, des offres, des invitations à des événements et bien plus encore. Pour en savoir plus sur la façon dont nous traitons
                          vos données ou la manière d’exercer vos droits, consultez notre la politique
                          de confidentialité .
                      </p>
                  </div>
                  <div className="col-md-2">
                  <p style={{textTransform:'uppercase',fontWeight:'bold',color:'white',fontSize:'16px'}}>Aide</p>
                  <p>Commandes</p>
                  <p>Expéditions et livraisons</p>
                  <p>Retours</p>
                  <p>Modalités de peiment</p>
                  <p>Membres et Club de Supporter</p>
                  <p>Nous contacter</p>
                  <p>Localisateure de boutiques</p>
                  </div>
                  <div className="col-md-2">
                  <p style={{textTransform:'uppercase',fontWeight:'bold',color:'white',fontSize:'16px'}}>site officiel fc barcelona</p>
                  <p>Site Officiel FC Barcelona</p>
                  <p>Billets et Museu</p>
                  <p>APP FC Barcelona IOS</p>
                  <p>APP FC Barcelona Android</p>
                  </div>
                  <div className="col-md-2">
                  <p style={{textTransform:'uppercase',fontWeight:'bold',color:'white',fontSize:'16px'}}>confidentialité et utilisation</p>
                  <p>Politique de confidentialité</p>
                  <p>Conditions d'achat</p>
                  <p>Politique de Cookies</p>
                  </div>
                  <div className="col-md-2">
                  <p style={{textTransform:'uppercase',fontWeight:'bold',color:'white',fontSize:'16px'}}>réseaux sociaux</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>Spotify</p>
                  <p>Youtube</p>
                  <p>Instagram</p>
                  <p>OneFootball</p>
                  <p>TikTok</p>
                  </div>
              </div>
              <div className='row'>
              <div className="col-md-4">
              <p style={{fontWeight:'bold',color:'white',fontSize:'15px'}}>
                © FC Barcelona - Official Store - Spotify Camp Nou</p>
              </div>
              <div className='col-md-3'>

              </div>
              <div className='col-md-5'>
                <div style={{display:'flex'}} className='ddd'>
                <div >
                <img src={require(`./images/8812115_mastercard_logo_brand_free_icon.png`)} width={50} height={50}  />
                <span style={{color:'white',marginTop:14}}>mastercard</span>
                </div>
                <div >
                <img src={require(`./images/8812115_mastercard_logo_brand_free_icon.png`)} width={50} height={50} />
                <span style={{color:'white',marginTop:14}}>maestro</span>
                </div>
                <div >
                <img src={require(`./images/104490_apple_icon.png`)} width={35} height={35} />
                <span style={{color:'white',marginTop:'30px',fontWeight:'bold'}}>Pay</span>
                </div>
                <div >
                <img src={require(`./images/8679453_visa_line_icon.png`)} width={50}  height={50} />
                </div>
                <div >
                <img src={require(`./images/4747500_paypal_payment_online payment_icon.png`)} width={70} height={50} />
                </div>
                </div>
                
                
              </div> 
              </div>
         </div>  
    </>
  )
}
