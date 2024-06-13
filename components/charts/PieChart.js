"use client";
import React from "react";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const PieChartComponent = () => {
  const data01 = [
    {
      name: "Targeting",
      value: 400,
    },
    {
      name: "Devices",
      value: 300,
    },
    {
      name: "Rates",
      value: 300,
    },
    {
      name: "Retention",
      value: 200,
    },
    {
      name: "Performance",
      value: 278,
    },
  ];
  const data02 = [
    {
      name: "Targeting",
      value: 2400,
    },
    {
      name: "Devices",
      value: 4567,
    },
    {
      name: "User Behavior",
      value: 1398,
    },
    {
      name: "Rates",
      value: 9800,
    },
    {
      name: "Retention",
      value: 3908,
    },
    {
      name: "Performance",
      value: 4800,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8b5cf6"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-300">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default PieChartComponent;
