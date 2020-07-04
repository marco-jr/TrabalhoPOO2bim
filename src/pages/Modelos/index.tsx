import React, {useState ,useEffect} from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css'
import { Link, useParams } from 'react-router-dom';

interface Modelos {
  codigo: string;
  nome: string;
}

export default function List() {
  const [modelos, setModelos] = useState<Modelos[]>([]);
  const { id, marca } = useParams();

  useEffect(() => {
    api.get(`marcas/${id}/modelos`).then(response => {
      setModelos(response.data.modelos)
    })
  }, [id]);

  return (
    <div className="profile-container">
      <h1>Modelos Cadastrados de {marca}</h1>
      <ul>
        {modelos.map(modelo => (
        <li key={modelo.codigo}>
          <strong>Nome do modelo: </strong>
          <p>{modelo.nome}</p>

          <strong>Código do modelo: </strong>
          <p>{modelo.codigo}</p>

          <button>
          <Link to="/" ><FiArrowLeft size={40} color="#d92027" /></Link>
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}