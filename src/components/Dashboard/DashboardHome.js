import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './DashboardHome.css';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardHome = () => {
  const [recentSold, setRecentSold] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/recent-sold')
      .then(response => response.json())
      .then(data => setRecentSold(data))
      .catch(error => console.error('Error fetching recent sold data:', error));
  }, []);

  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const customerData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Customers',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(153, 102, 255)',
        borderColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  return (
    <div className="dashboard-home">
      <div className="details-box">
        <div className="current-balance">
          <h3>Total Earnings</h3>
          <p>Rs.1,00,000</p>
        </div>
        <div className="stat">
          <h4>130</h4>
          <p>Total orders</p>
        </div>
        <div className="stat">
          <h4>15 pcs</h4>
          <p>New orders</p>
        </div>
        <div className="card">
          <h3>165</h3>
          <p>All Products</p>
        </div>
        <div className="card">
          <h3>15</h3>
          <p>Total customers</p>
        </div>
        <div className="card">
          <h3>160</h3>
          <p>Visitor Count</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <h3>Revenue Over Time</h3>
          <Line data={revenueData} />
        </div>
        <div className="chart">
          <h3>Number of Customers Over Time</h3>
          <Line data={customerData} />
        </div>
      </div>
      <div className="recent-sold">
        <h3>Recent Sold</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentSold.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.customer}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="top-categories">
        <h3>Top Categories</h3>
        <ul>
          <li>P1 - 1308</li>
          <li>P2 - 1019</li>
          <li>P3 - 807</li>
          <li>P4 - 633</li>
          <li>P5 - 418</li>
          <li>P6 - 312</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
