import { Fragment } from "react";
import "./Lokasi.css";
import CardProfile from '../component/CardLokasi'
import axios from 'axios';
import React, { useEffect, useState } from "react";


export default function Lokasi() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://6198d455164fa60017c231d5.mockapi.io/api/gedung/Tempat",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        setData(data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <p id="judul">Lokasi</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile 
            nama={item.nama}
            img={item.img}
            alamat={item.alamat}
            onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}