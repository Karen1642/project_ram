import { useState } from 'react'
import './App.css'

 async function CharsList2() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    return (
      <div className="charWrap">
            {data}
      </div>
    );
}

export default CharsList2
