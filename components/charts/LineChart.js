"use client";
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = () => {
  const salesData = [
    {
      name: "Jan",
      revenue: 3300,
      profit: 4400,
    },
    {
      name: "Feb",
      revenue: 3000,
      profit: 3220,
    },
    {
      name: "Mar",
      revenue: 3500,
      profit: 4290,
    },
    {
      name: "Apr",
      revenue: 2790,
      profit: 3000,
    },
    {
      name: "May",
      revenue: 2500,
      profit: 4400,
    },
    {
      name: "Jun",
      revenue: 2600,
      profit: 3000,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={400}
        data={salesData}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line dataKey="revenue" fill="#3b82f6" />
        <Line dataKey="profit" fill="#8b5cf6" />
      </LineChart>
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
        <p className="text-sm text-indigo-500">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default LineChartComponent;
