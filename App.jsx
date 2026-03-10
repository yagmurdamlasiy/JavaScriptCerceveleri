import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Baslik(){
return(
    <h2>İstanbul Gelişim Üniversitesİ</h2>
);
}


function KisiKarti(){
  const isim= "Efe ÇETİNKAYA";
  const program="Ön Yüz Yazılım Geliştirme Programı";
  const donem="2.Dönem";
  return(
    <>
    <p>Adı:{isim}</p>
    <p>Programı:{program}</p>
    <p>Dönem:{donem}</p>
    </>
  );
}
 function AltBilgi(){
 return(
  <footer>
    <p>2026- Tüm Hakları Saklıdır.</p>
    </footer>
 );
 }

function App(){
  return(
    <>
  <Baslik/>
  <KisiKarti/>
  <AltBilgi/>
  </>
  );
}
export default App;