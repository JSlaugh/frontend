import React from "react";

function InfoPage() {
  return (
    // PODCASTS WOOHOO
    <div className="row">
      <h2>Welcome to the Fag El-Gamous Database</h2>
      <p>
        To explore our data, please check the left-hand side panel where you can
        find the available options.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/images/fagelgamous.jpg"
          alt="Fag El-Gamous"
          style={{ width: "50%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default InfoPage;
