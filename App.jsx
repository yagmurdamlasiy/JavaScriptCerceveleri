import { useState } from 'react'
import './App.css'

function UrunKarti({urunAdi,urunFiyat,stok}){
return(
  <div style={{
  gap:"10px",
  borderRadius:"16px",
  backgroundColor:"pink",
  fontSize:"10px",
  padding:"5px",
  maxWidth:"400px",
  width:"100%",
  color:"midnightblue"
  }}>
  <h3>{urunAdi}</h3>
  <p>Fiyat:{urunFiyat}</p>
  <p>Stok:{stok>0 ? " Mevcut" : "Tükendi"}</p>
  </div>
);
}

function App(){
return(
  <div style={{display:"flex",
  backgroundColor:"gray",
  flexDirect:"column",
  gap:"10px",
  justifyContent:"center",
  alignItems:"center"
  }}>
  <UrunKarti urunAdi="Klavye" urunFiyat={450} stok={10}/>
  <UrunKarti urunAdi="Mouse" urunFiyat={280} stok={0}/>
  <UrunKarti urunAdi="Monitör" urunFiyat={300} stok={5}/>
  </div>
);
}
export default App;
