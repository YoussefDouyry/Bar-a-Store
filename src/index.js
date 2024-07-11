import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produit from './Produit';
import Navbar from './Navbar';
import Footer from './Footer';
const barca_old_product=[
  {id:1 ,description:[{n1:'Description du produit',n2:'Chargé d’histoire. Et, avec un grand futur.',n3:'Pelouse originale provenant du Spotify Camp Nou, authentifiée par l’illustre notaire de Barcelone, avec le numéro de protocole 2429 du 1er juin 2023.',n4:'6,2x9,2x3,6cm '}] ,taille:[],nom:'Dernière pelouse du stade Spotify Camp Nou. Stade.',prix:'49,99€',image:'1.webp' ,images:['1.webp','3.webp']},
  {id:2 ,description:[{n1:'Description du produit',n2:'Maillot domicile du FC Barcelone 23/24 porté lors de matchs de la Liga.',n3:'La tenue 23/24 est inspirée des maillots classiques avec les larges rayures et les couleurs blaugranas originales. Le design contient cependant un nouvel élément, le losange sublimé au-dessus du bouclier représentant la première équipe féminine de l’histoire ayant joué un match de football au Camp Nou. Ce détail vise à donner de la visibilité à l’un des fondements du Barça, et qui rend notre club unique dans le monde entier : l’avant-gardisme dans tout ce que nous faisons. Ainsi, comme par le passé les sportifs, les jeunes joueurs et joueuses du FC Barcelone restent des leaders, et ont été choisis pour ouvrir la voie au Club dans les années à venir.',n4:'*Les numéros des joueurs seront définitifs à la fin du mercato. BLM ne saurait être tenu responsable des possibles changements qui pourraient survenir jusqu’à ce que les numéros de dossards de la prochaine saison 23/24 soient rendus officiels.'}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'UCL Maillot domicile FC Barcelone 23/24',prix:'99,99€',image:'2.webp' ,images:['2.webp','21.webp','222.webp','2222.webp','22222.jpg','222222.jpg',],competion:['LaLiga Champions','UCL','Liga F','UWCL']},
  {id:3 ,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:[],nom:'Dernière pelouse du stade Spotify Camp Nou. Méthacrylate.',prix:'79,99€',image:'3.webp' ,images:['3.webp']},
  {id:4 ,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'UCL Maillot domicile FC Barcelone 23/24 - Junior',prix:'79,99€',image:'4.webp' ,images:['4.webp']},   
  {id:5 ,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Insigne Écusson FC Barcelona',prix:'699,00€',image:'5.webp' ,images:['5.webp']},
  {id:6 ,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Topps FC Barcelona Fan Set 23/24',prix:'19,99€',image:'6.webp' ,images:['6.webp']},
  {id:7 ,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:[],nom:'Lionel Messi Officiel FC Barcelone Signé et Encadré de Marque',prix:'1.799,99€',image:'7.webp' ,images:['7.webp']}
  

]
const barça_old_product=[
  {id:8 ,description:[{n1:'Description du produit',n2:'Maillot domicile du FC Barcelone 1995/97 porté lors de matchs de la Liga.',n3:"Réplique du maillot du FC Barcelone de la saison 1995-97. En suivant le même schéma et en recherchant des tissus aussi proches que possible de l'original. Col à revers. Manche courte. Couleur : bleu turquoise.",n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Maillot 1995-97',prix:'69,99€',image:'11.webp',images:['11.webp','112.webp','113.webp','114.webp']},
  {id:9 ,description:[{n1:'Description du produit',n2:'',n3:'Sweat à capuche à manches longues pour femme, orné d’un empiècement avec un petit écusson du FC Barcelone et les mots « Més que un club » sur la poitrine. Avec poignets et taille élastiques. Poches latérales. Finition duveteuse sur l’intérieur. Couleur : kaki.',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Sweat à capuche kaki Barça - Femme',prix:'69,99€',image:'22.webp',images:['22.webp','221.webp','222.jpg','223.webp']},
  {id:10,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Maillot Domicile FC Barcelona 1981-90',prix:'69,99€',image:'33.webp',images:['33.webp','331.webp','332.webp']},
  {id:11,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Sweat motif beige Barça - Junior',prix:'69,99€',image:'44.webp',images:['44.webp','441.webp','442.webp']},
  {id:12,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Montre The Club',prix:'499,99€',image:'55.webp',images:['55.webp','551.webp','552.webp','553.webp']},
  {id:13,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Veste Softshell Barça',prix:'89,99€',image:'66.webp',images:['66.webp','661.webp','662.webp','663.webp','664.webp']},
  {id:14,description:[{n1:'',n2:'',n3:'',n4:''}] ,taille:['M','S','L','XL','2XL','3XL'],nom:'Veste Avant-Match FC Barcelone 23/24',prix:'89,99€',image:'8.webp',images:['8.webp','81.webp','82.webp','83.webp','84.webp','85.webp','86.webp']},
]
const barça_new =[
  {nom:'TENUES DE MATCH',image:'d4-1.webp'},
  {nom:'CADEUX MEMORABILIA',image:'d4-2.webp'},
  {nom:'AUTRES SPORTS',image:'d4-3.webp'},
  {nom:'BEST SELLERS POUR ENFANTS',image:'d4-4.webp'}
]
const barça_perfect=[
  {image:'bg3.webp'},
  {image:'bg4.webp'},
  {image:'bg5.webp'},
  {image:'bg6.webp'}
]
const products = [...barca_old_product,...barça_old_product]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route index path='/' element={<Store barca_old_product={barca_old_product} barça_old_product={barça_old_product} barça_new={barça_new} barça_perfect={barça_perfect}/>}/>
      <Route path='/Produit/:id' element={<Produit products={products} />} />
    </Routes>
  <Footer />
  </BrowserRouter>
  
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 "e         "