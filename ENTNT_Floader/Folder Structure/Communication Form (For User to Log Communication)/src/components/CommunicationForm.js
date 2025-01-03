import React, { useState } from 'react';
import { logCommunication } from '../services/api';

const CommunicationForm = () => {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async () => {
    const data = {
      type,
      date,
      notes,
    };
    await logCommunication(1, data); // Mocked companyId 1
    alert('Communication logged');
  };

  return (
    <div>
      <h3>Log Communication</h3>
      <label>Type</label>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>Notes</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Log Communication</button>
    </div>
  );
};

export default CommunicationForm;

