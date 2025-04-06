import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskProgressPieChart = () => {
  const [progressData, setProgressData] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await axios.get("http://localhost:9005/api/v1/tasks/progress", {
          headers,
        });
        setProgressData(response.data);
      } catch (error) {
        console.error("Error fetching task progress:", error);
      }
    };

    fetchProgressData();
  }, []);

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [progressData.completed, progressData.pending],
        backgroundColor: ["#4CAF50", "#FFC107"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Task Progress Overview</h3>
      <div className="w-64 mx-auto">
        <Pie data={data} />
      </div>
      <div className="mt-8 space-y-2 text-lg">
        <p className="text-gray-700">
          <span className="font-semibold">Total Tasks:</span> {progressData.total}
        </p>
        <p className="text-green-600 font-semibold">Completed: {progressData.completed}</p>
        <p className="text-yellow-600 font-semibold">Pending: {progressData.pending}</p>
      </div>
    </div>
  );
};

export default TaskProgressPieChart;
