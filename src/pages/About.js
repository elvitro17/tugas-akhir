import React, { useState } from "react";
import './About.css';

export default function About(props) {
    return (
        <div className="Card1">
            <div className="upper-container1">
                <div className="image-container">
                   
                </div>
            </div>
            <div className="lower-container1">
                <h3>Aplikasi dibuat oleh:</h3>
                <h4>Nama = Elvitro Gumelar Agung</h4>
                <h4>NIM = 21120117140022</h4>
                <p id="about"> { props.about } </p>
            
            </div>
        </div>
    );
  }