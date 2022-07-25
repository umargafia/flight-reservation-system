import React from 'react'
import "../user/HomeCompanents/App.css"
 const MyLoading = () => {
  return (
    <div className="mainLoading">
      <div className="loading"></div>
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
          color: "rgb(6, 6, 49)",
        }}
      >
        Loading...
      </h1>
    </div>
  );
}

export default MyLoading;