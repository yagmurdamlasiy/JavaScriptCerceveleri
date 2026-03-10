import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
  <header>
  <h2>Benim Sitem</h2>
  <nav>
   <a href="#">Ana Sayfa</a>
   <a href="#"> Hakkımda</a> 
   <a href="#">İletişim</a>
   </nav>
  </header>
  );
}
function Main(){
  return(
    <main>
    <h3>Hoş Geldiniz</h3>
    <p> Bu benim React ile yaptığım ilk çok bileşenli sayfa.</p>
    <KartAlani/>
    </main>
  );
}
function KartAlani(){
  return(
    <div className="kart-alani">
      <Kart baslik="HTML" aciklama="Yapıyı oluşturur"/>
       <Kart baslik="CSS" aciklama="Görünümü belirler"/>
        <Kart baslik="JavaScript" aciklama="Etkileşimi ekler"/>
  </div>
  );
}
function Kart(props){
  return(
    <div className="Kart">
      <h3>{props.baslik}</h3>
      <h3>{props.aciklama}</h3>
    </div>
  );
}
 function Footer(){
  return(
    <footer>
      <p>2026 - İstanbul Gelişim Üniversitesi</p>
    </footer>
  );
 }

 function App(){
  return(
    <>
 <Main/>
 <Header/>
 <Kart/>
 <Footer/>
 </>
  );
}
export default App;