import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from "primereact/dropdown";


function App() {
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ]);

  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
    { name: "Tokyo", code: "TKY" },
  ];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <div style={{ padding: "2rem" }}>
        <h1>PrimeReact with React 18</h1>
        <Button label="Click Me" icon="pi pi-check" className="p-button-success" />
      </div>

      <div style={{ padding: "2rem" }}>
        <h1>PrimeReact DataTable</h1>
        <DataTable value={products} responsiveLayout="scroll">
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="price" header="Price"></Column>
        </DataTable>
      </div>

      <div style={{ padding: "2rem" }}>
        <h1>PrimeReact Dropdown</h1>
        <Dropdown
          value={selectedCity}
          options={cities}
          onChange={(e) => setSelectedCity(e.value)}
          optionLabel="name"
          placeholder="Select a City"
        />
        <p>Selected City: {selectedCity ? selectedCity.name : "None"}</p>
      </div>
    </>
  )
}

export default App
