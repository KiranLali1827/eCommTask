import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Invoice/Invoicestyle.scss'
import Container from 'react-bootstrap/Container';
import InvoiceForm from './InvoiceForm';

function Invoicedashboard() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
    <Container>
      <InvoiceForm/>
    </Container>
  </div>
  )
}

export default Invoicedashboard
