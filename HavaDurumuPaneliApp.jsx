
import './App.css'

function HavaDurumuKarti({ sehir , sicaklik , durum }) {
  const sicakMi=sicaklik >25;
  const sogukMu=sicaklik < 10;
  const durumIkonu ={
    gunesli: "Güneş",
    bulutlu: "Bulut",
    yagmurlu: "Yağmur",
    karli: "Kar",
  };

  const arkaPlanRengi=
  sogukMu ? 
  "lightblue" :
  sicakMi ? 
  "yellow" :
  "gray";

  return (
    <div style={{
      backgroundColor:arkaPlanRengi,
      borderRadius:"12px",
      padding:"24px",
      margin:"10px",
      width:"280px",
      display:"inline-block",
      textAlign:"center",
    }}>
      <h2>{sehir}</h2>

      <p style={{fontSize:"32px"}}>
        {durumIkonu[durum]}
      </p>

      <p style={{fontSize:"28px", fontWeight:"bold"}}>
      {sicaklik}Derece</p>


{sicakMi && (
      <p style={{color:"gray", fontWeight:"bold"}}>
        {sicaklik}Derece
        Sıcak hava su içmeyi unutmayın!
      </p>
    )}
    
    {sogukMu && (
      <p style={{color:"gray", fontWeight:"bold"}}>
        {sicaklik}Derece
        Soğuk hava kalın giyinmeyi unutmayın!
      </p>
    )}
    </div>
  );
}

function HavaDurumuApp() {
return (
  <div style={{padding:"20px", textAlign:"center"}}>
    <h1>Şehir Hava Durumu Paneli</h1>
    <>
    <HavaDurumuKarti sehir="İstanbul" sicaklik={30} durum="gunesli" />
    <HavaDurumuKarti sehir="Yalova" sicaklik={5} durum="bulutlu" />
    </>
  </div>
);
}

export default HavaDurumuApp;
        
      
    
