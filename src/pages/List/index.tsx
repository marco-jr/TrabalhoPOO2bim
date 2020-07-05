import React, {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css'

interface Marcas {
  codigo: number;
  nome: string;
}

export default function List() {
  const [marcas, setMarcas]= useState<Marcas[]>([]);

  useEffect(() => {
    api.get('marcas').then(response => {
      setMarcas(response.data)
    })
  }, []);

  return (
    <div className="profile-container">
      <h1>MARCAS AUTOMOTIVAS</h1>
      <ul>
        {marcas.map(marca => (
        <li key={marca.codigo}>
          <p>{marca.nome}</p>

          <button>
          <Link to={`${marca.nome}/${marca.codigo}`} ><FiArrowRight size={40} color="#1b262c" /></Link>
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}