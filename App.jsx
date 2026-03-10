import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ProfilBaslik({kullanici}) {
  return(
    <div style={{ padding: "20px",
      backgroundColor: "lightblue",
      color: "white",
      borderRadius:"12px",
      marginBottom:"20px" }}>
       <h1>{kullanici.isim}</h1>
       <p>{kullanici.bio}</p>
      </div>
  );
}
 
function Istatistik({etiket, deger}){
  return(
    <div style={{ textAlign: "center",
       padding: "10px" }}>
<p><strong>{deger}</strong></p>
<p style={{ color: "red"}}>etiket</p>
</div>
  );
}

function IstatistikBari({takipci, takip, gonderi }){
  return(
    <div style={{ display: "flex",
      justifyContent: "space-around",
      border:"1px solid gray",
      borderRadius:"8px",
      padding: "10px",
      marginBottom: "20px" }}>
<Istatistik etiket="Gönderi" deger={gonderi}/>
<Istatistik etiket="Takipçi" deger={takipci}/>
<Istatistik etiket="Takip" deger={takip}/>
</div>
  );
}
function Gonderi({icerik, tarih, begeni }){
  return(
    <div style={{ border: "1px solid gray",
      borderRadius:"8px",
      padding: "16px",
      marginBottom:"10px"
    }}>
      <p>{icerik}</p>
      <p style={{ color: "blue"}}>
        {tarih} - {begeni} beğeni </p>
    </div>
  );

}

function SosyalMedyaProfil(){
  const kullanici = {
    isim: "Yağmur Doğan",
    bio: "Yazılım Öğrencisi | React Öğreniyorum!",
  };
}

const gonderiler = [
  { id: 1, icerik: "Bugün react bileşenleri öğrendim!", tarih: "3 gün önce", begeni: 24},
  { id: 3, icerik: "İlk proemi vite ile oluşturdum.", tarih:"2 saat önce", begeni: 12}
];

return(
  <div style={{ maxWidth: "500px",
    margin: "0 auto",
    padding: "20px"
  }}> <ProfilBaslik kullanici={kullanici} />

  <IstatistikBari takipci={1234} takip={567} gonderi={gonderiler.length}/>
  
  <h2>Gönderiler</h2>

  {gonderiler.map(g = (
    <Gonderi key={g.id}
    icerik={g.icerik}
    tarih={g.tarih}
    begeni={g.begeni}/>
  ))}
  </div>
)
 // returen foksiyonun dıında

 export default SosyalMedyaProfil;