import React from "react";
import style from "./Cardbox.module.css";
import Card from "../card/Card";
function Cardbox() {
  const imageURL = [
    "https://images.unsplash.com/photo-1444526110212-06a94d9a473c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",
    "https://images.unsplash.com/photo-1444525567579-c025cd07de6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",
    "https://images.unsplash.com/photo-1522126998770-2de6dc92f798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1488227402652-00175718582c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1515008346526-e36a0c621e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1472419551702-dc4862cad8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1455448972184-de647495d428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=891&q=80",
    "https://images.unsplash.com/photo-1542383075-1bd827e86ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];
  return (
    <div className={style.mainBox}>
      <div className={style.heading}>
        <span>Officia ut</span>
        <a href="#">Ipsum Lorem</a>
      </div>
      <div className={style.cards}>
        {imageURL.map((ele, index) => {
          return <Card key={index} imgURL={ele} />;
        })}
      </div>
    </div>
  );
}

export default Cardbox;
