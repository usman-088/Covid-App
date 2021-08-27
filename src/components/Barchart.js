import React from "react";
// import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

function BarChar ({c}) {
  console.log(c);
  // console.log(c.todayCases);
  const data = [
    { name: "Facebook", users: c.cases }, 
    { name: "Instagram", users: 15000 },
    { name: "Twiter", users: 10000},
    { name: "Telegram", users: 500000 },
  ];
//   const label= {labels:["Monday", "Tuesday", "Wednesday", "Thursday"]}
// console.log();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChar;