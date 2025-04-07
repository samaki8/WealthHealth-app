//WealthHealth-app\src\components\datapicker.jsximport React, { useState, useRef, useEffect } from 'react';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

function DatePicker({ label, value, onChange }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value ? format(value, 'dd/MM/yyyy') : '');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    try {
      const parsedDate = new Date(newValue.split('/').reverse().join('-')); // Convertit dd/MM/yyyy en yyyy-MM-dd
      if (!isNaN(parsedDate.getTime())) {
        onChange(parsedDate);
      }
    } catch (error) {
      console.error("Invalid date format");
    }
  };

  const handleDaySelect = (date) => {
    if (date) {
      setInputValue(format(date, 'dd/MM/yyyy'));
      onChange(date);
      setIsCalendarOpen(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <label>{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsCalendarOpen(true)}
        placeholder="dd/MM/yyyy"
        style={{
          padding: '8px',
          width: '100%',
          marginBottom: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {isCalendarOpen && (
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
            selected={value}
            onSelect={handleDaySelect}
            defaultMonth={value || new Date()}
          />
        </div>
      )}
    </div>
  );
}

export default DatePicker;



/*import React, { useState, useRef, useEffect } from 'react';
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
    console.log('Selected date:', date);
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

  useEffect(() => {
    if (selected) {
      setInputValue(format(selected, 'MM/dd/yyyy'));
    }
  }, [selected]);
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
*/


//npm install react-day-picker date-fns
/* En combinant React-Day-Picker pour les dates, React Hook Form pour la gestion des formulaires, et des techniques avancées de memoisation, vous obtiendrez des performances supérieures à la solution jQuery tout en maintenant une base de code maintenable.

La clé est de :

Choisir des librairies ciblées

Minimiser les re-renders React

Optimiser le bundle final

Profiter des avantages du virtual DOM de React*/