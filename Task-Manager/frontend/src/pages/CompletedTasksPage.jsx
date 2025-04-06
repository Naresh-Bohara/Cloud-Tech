import React, { useEffect, useState } from 'react'
import Card from '../components/home/Card'
import axios from 'axios'

const CompletedTasksPage = () => {
  const [data, setData] = useState([]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:9005/api/v1/tasks/completed", {
          headers
        });
        setData(response.data.tasks);
        console.log(response.data.tasks);
      } catch (err) {
        console.error("Failed to fetch completed tasks:", err);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Card home={false} data={data} />
    </div>
  );
};

export default CompletedTasksPage;
