//WealthHealth-app\src\components\datapicker.jsximport React, { useState, useRef, useEffect } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format, parse } from 'date-fns';
import styles from '../css/dataPicker.module.css';

function DatePicker({ label, selected, onSelect, calendarId, openCalendarId, setOpenCalendarId }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const parsedDate = parse(value, 'MM/dd/yyyy', new Date());
    if (!isNaN(parsedDate)) {
      onSelect(parsedDate);
    }
  };

  const handleInputFocus = () => {
    setOpenCalendarId(calendarId); // Ouvre ce calendrier spécifique
  };

  const handleDaySelect = (date) => {
    if (date) {
      setInputValue(format(date, 'MM/dd/yyyy'));
      onSelect(date);
      setOpenCalendarId(null); // Ferme le calendrier après sélection
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpenCalendarId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpenCalendarId]);

  return (
    <div style={{ position: 'relative' }}>
      <label>{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        ref={inputRef}
        placeholder="DD/MM/YYYY"
        style={{
          padding: '8px',
          width: '100%',
          marginBottom: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {openCalendarId === calendarId && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '250px',
          }}
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            defaultMonth={selected || new Date()}
          />
        </div>
      )}
    </div>
  );
}

export default DatePicker;



//npm install react-day-picker date-fns
/* En combinant React-Day-Picker pour les dates, React Hook Form pour la gestion des formulaires, et des techniques avancées de memoisation, vous obtiendrez des performances supérieures à la solution jQuery tout en maintenant une base de code maintenable.

La clé est de :

Choisir des librairies ciblées

Minimiser les re-renders React

Optimiser le bundle final

Profiter des avantages du virtual DOM de React*/