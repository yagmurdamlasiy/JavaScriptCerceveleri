import { useState } from 'react'
import './App.css'

function Isim(){
  return(
    <h1 className="selamlama">
      Merhaba, <span>Yağmur Doğan</span>
    </h1>
  );
}

function Sayac()
{
  const[sayi,setSayi]=useState(0);
  return(
    <div className='sayac-card'>
    <p className='sayac-label'>Sayaç</p>
    <h1 className={`sayac-deger${sayi >0 ? 'pozitif': sayi <0 ? 'negatif':0}`}>{sayi}</h1>
    <div className="butonlar">
    <button className='btn artir' onClick={()=>setSayi(sayi+1)}>+Artır</button>
    <button className='btn azalt' onClick={()=>setSayi(sayi-1)}>-Azalt</button>
    <button className='btn sifirla' onClick={()=>setSayi(0)}>Sıfırla</button>
    </div>
    </div>
  );
}


const AltBilgi=()=>{
  return(
    <footer clasName="altbilgi">

    <p>2026 - Ön Yüz Yazılım Geliştirme</p>
    </footer>
  );
}

function App(){
  return(
    <div clasName='app'>
    <Isim/>
    <Sayac/>
    <AltBilgi/>
    </div>
  );
}

export default App;
