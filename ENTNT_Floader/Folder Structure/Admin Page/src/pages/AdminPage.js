import React, { useState, useEffect } from 'react';
import { getCompanies } from '../services/api';
import CommunicationForm from '../components/CommunicationForm';

const AdminPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const data = await getCompanies();
      setCompanies(data);
    }
    fetchCompanies();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        {companies.map((company) => (
          <div key={company.id}>
            <p>{company.name}</p>
            <p>{company.email}</p>
          </div>
        ))}
      </div>
      <CommunicationForm />
    </div>
  );
};

export default AdminPage;
