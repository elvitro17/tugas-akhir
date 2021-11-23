import React from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../component/Input";
import "./MyForm.css";
import { useAlert } from 'react-alert'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function MyForm() {
  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  function sayHello() {
    
    alert('Data telah ditambahkan');
  }
  return (
    <Form onSubmit={handleSubmit}>
      

      <Input name="name" label="Nama Lengkap" />
      <Input name="email" label="E-mail" type="email" />
      <FormControl component="fieldset">
  <FormLabel component="legend">Pilih Paket</FormLabel>
  <RadioGroup
    aria-label="paket"   
    name="radio-buttons-group"  >
    <FormControlLabel value="paket1" control={<Radio />} label="Paket 1" />
    <FormControlLabel value="paket2" control={<Radio />} label="Paket 2" />
    <FormControlLabel value="paket3" control={<Radio />} label="Paket 3" />
   
  </RadioGroup>
</FormControl>
     
        <Input name="notelpon" label="Nomor Telepon" />
     

        <button onClick={sayHello}>
      Submit
    </button>
    </Form>
  );
} 