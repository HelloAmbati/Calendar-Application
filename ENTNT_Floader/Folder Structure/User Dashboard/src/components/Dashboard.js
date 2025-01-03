import React, { useEffect, useState } from 'react';
import { getCompanies } from '../services/api';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const data = await getCompanies();
      setCompanies(data);
    }
    fetchCompanies();
  }, []);

  const getCommunicationStatus = (lastCommunicationDate) => {
    const today = new Date();
    const lastDate = new Date(lastCommunicationDate);
    const diffInDays = (today - lastDate) / (1000 * 3600 * 24);

    if (diffInDays > 14) return 'overdue';  // Red Highlight
    if (diffInDays === 0) return 'due'; // Yellow Highlight
    return 'on-time'; // No Highlight
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Last 5 Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} className={getCommunicationStatus(company.company)} >
              <td>{company.name}</td>
              <td>Last communication: {company.company}</td>
              <td>Next: {company.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
