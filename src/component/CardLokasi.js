import React, { useState } from "react";
import './CardLokasi.css';

export default function CardProfile(props) {
    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={props.img} alt="" height="70px" width="70px" />
                </div>
            </div>
            <div className="lower-container">
                <h3> { props.nama } </h3>
                <h4> { props.alamat } </h4>
                
            
            </div>
        </div>
    );
  }