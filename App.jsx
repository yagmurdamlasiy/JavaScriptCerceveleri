import { useState } from 'react'
import './App.css'

function Etkinlik() {
  const [isim, setIsim] = useState("");
  const [rol, setRol] = useState("Öğrenci");
  const [mesaj, setMesaj] = useState("");

  return(
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"#2d3a4a"}}>Etkinlik Kayıt Formu</h1>

      <input type="text"
      placeholder="Adınızı Giriniz"
      value={isim} 
      onChange={(e) => setIsim(e.target.value)}
      style={{padding:"6px", borderRadius:"6px", border:"1px solid #ccc"}}
      />
      <br /><br />

      <select 
      value={rol} 
      onChange={(e) => setRol(e.target.value)}
      style={{ padding:"6px", borderRadius:"6px", border:"1px solid #ccc"}}
      >
        <option value="Öğrenci">Öğrenci</option>
        <option value="Eğitmen">Eğitmen</option>
        
      </select>
      <br /> <br />

      <button
      onClick={() =>
        isim.trim() === ""
        ? setMesaj("Lütfen adınızı giriniz.")
        : setMesaj(`Etkinliğe hoş geldiniz  ${rol} ${isim}`)
      }
      style={{
        padding:"8px",
        backgroundColor:"#2d3a4a",
        color:"white",

      }}
      >
      Katılımı Tamamla
      </button>
      {mesaj && (
        <h2 style={{ color: isim.trim() === "" ? "red" : "green" }}>
        {mesaj}</h2>
      )}
    </div>
  );
}
export default Etkinlik;