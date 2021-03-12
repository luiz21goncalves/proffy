import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

import {Teacher} from '../../components/TeacherItem'

function TeachersList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { data } = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(data)
  }

  return  (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSubmit}>
          <Select
            name="subject"
            label="Máteria"
            value={subject}
            onChange={(event) => {setSubject(event.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={(event) => { setWeekDay(event.target.value) }}
            options={[
              { value:"0", label:"Domingo" },
              { value:"1", label:"Segunda-feira" },
              { value:"2", label:"Terça-feira" },
              { value:"3", label:"Quarta-feira" },
              { value:"4", label:"Quita-feira" },
              { value:"5", label:"Sexta-feira" },
              { value:"6", label:"Sábado" },
            ]}
          />

          <Input
            label="Horário"
            name="time"
            type="time"
            value={time}
            onChange={(event) => { setTime(event.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) =>
          <TeacherItem key={teacher.id} teacher={teacher}/>
        )}

      </main>
    </div>
  );
}

export default TeachersList;
