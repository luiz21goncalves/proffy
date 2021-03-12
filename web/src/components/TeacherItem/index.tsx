import React from 'react';
import { useHistory } from 'react-router-dom';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  user_id: number;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps>  = ({ teacher }) => {
  const history = useHistory();

  async function handleCreateNewConnection(user_id: number) {
    await api.post('connections', {user_id});

    // history.push('/');
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => handleCreateNewConnection(teacher.user_id)}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
