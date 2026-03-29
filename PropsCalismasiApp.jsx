import React from "react";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // unutma elemanları alt alta dizmeye yarıyor//
    alignItems: "center", // bu da yatay ortalama şeysi //
    gap: "20px",
    marginTop: "40px",
    backgroundColor: "#75b3ff",
    padding: "20px"
  };

  const cardStyle = {
    backgroundColor: "#559dfa",
    padding: "20px 40px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center"
  };

  const listStyle = {
    textAlign: "left"
  };

  const noTitleCardStyle = {
    backgroundColor: "#ffffff",
    padding: "20px 40px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center"
  };

  return (
<div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Profil</h2>
        <hr />
        <p>İsim: Çisem Yaşar</p>
        <p>Bölüm: Ön-Yüz Yazılım Geliştirme</p>
</div>


  <div style={cardStyle}>
     <h2>Dersler</h2>
        <hr /> 
        <ul style={listStyle}>
        <li>Javascript Çerçeveleri</li>
        <li>Veritabanı Sorgulama Dilleri</li>
        <li>Web Grafik Tasarım</li>
        </ul>
</div>
      <div style={noTitleCardStyle}>
        <p>Kahrolsun CSS!</p>
      </div>
    </div>
  );
}

export default App;
