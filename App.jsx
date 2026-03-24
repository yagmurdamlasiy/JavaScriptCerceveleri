import { useState } from 'react'
import './App.css'
 
function Profil({isim , bolum}){
return (
<div style={{display: "flex",
gap:"10px",
justifyContent: "center",
backgroundColor:"green",
padding:"15px",
color:"black",

}}>

<p>İsim: {isim}</p>
<p> Bölüm:{bolum}</p>
</div>
);
}

function Dersler(){
  return(
    <div style={{display:"flex",
    gap:"10px", justifyContent: "center"
    }}>
    <h3>Dersler</h3>
    <ul>
      <li>JSC</li>
      <li>Veritabanı</li>
      <li>Grafik</li>
      </ul>
      </div>
  );
}

function App(){
  return(
    <>
    <h3>Profil</h3>
    <Profil isim= "Çisem" bolum="OnYuz"/>
    <Dersler/>
    </>
  );
}
export default App;