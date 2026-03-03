
import './App.css'

function KullaniciBilgileri(){
  const isim="Çisem Yaşar";
  const mail="cyasar@gelisim.edu.tr";
  return(
    <> {/*fragment*/}
    <h2>{isim}</h2>
    <p>{mail}</p>
    </>
  );
}
function UrunKarti(){
  const urun1={
    ad:"Kablosuz Kulaklık",
    fiyat:299.99,
    stokta:true,
  };
  
  const urun2={
    ad:"Bilgisayar",
    fiyat:1099.99,
    stokta:false,
  };
  
  return(
    <>
      <h3>{urun1.ad}</h3>
      <p>Fiyat: {urun1.fiyat} TL</p>
      <p>KDV dahil: {(urun1.fiyat * 1.20).toFixed(2)} TL</p>
      <p>{urun1.stokta ? "Stokta Var" : "Tükendi"}</p>


      <h3>{urun2.ad}</h3>
      <p>Fiyat: {urun2.fiyat} TL</p>
      <p>KDV dahil: {(urun2.fiyat * 1.20).toFixed(2)} TL</p>
      <p>{urun2.stokta ? "Stokta Var" : "Tükendi"}</p>
    </>
  );
}
export default function App() {
  return(
    <>
    <h1>Kullanıcı Sepeti</h1>
    <KullaniciBilgileri />
    <UrunKarti />
    </>
  );
}
export {App};

