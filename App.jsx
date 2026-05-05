import { useState, useEffect } from 'react'
import './App.css'

function SayfaBasligi(){
  const[sayac,setSayac]=useState(0);
  useEffect(()=>{
    document.title=`Tıklama:${sayac}`;
  },[sayac]);

  return(
    <div>
      <p>Sayaç:{sayac}</p>
      <button onClick={()=> setSayac(sayac+1)}>Tıkla</button>
      <p><i>Not: Tarayıcının başlığına bakar mısın?</i></p>
    </div>
  );
}
function Zamanlayici(){
  const[saniye,setSaniye]=useState(0);
  const[calisiyor,setCalisiyor]=useState(false);
  useEffect(()=>{
  if(!calisiyor) return;
const timer=setInterval(
  ()=>setSaniye(s=>s+1),1000
);

return() => clearInterval(timer);
},[calisiyor]);

return(
  <div>
    <h2>{saniye}Saniye</h2>
    <button onClick={()=>setCalisiyor(c => !c)}>
    {calisiyor ? 'Durdur' : 'Baslat'}
    </button>
    <button onClick={() => {setCalisiyor(false); setSaniye(0);}}></button>
  </div>
);
}
function App() {
  return (
    <div className="App">
      <SayfaBasligi/>
      <hr/>
      <Zamanlayici/>
    </div> 
  );
}


export default SayfaBasligi;