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
      revenue: 10000,
      profit: 2000,
    },
    {
      name: "Feb",
      revenue: 12000,
      profit: 2500,
    },
    {
      name: "Mar",
      revenue: 14000,
      profit: 3000,
    },
    {
      name: "Apr",
      revenue: 15000,
      profit: 3200,
    },
    {
      name: "May",
      revenue: 17000,
      profit: 3500,
    },
    {
      name: "Jun",
      revenue: 20000,
      profit: 4000,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
        <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />
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
        <p className="text-sm text-indigo-400">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default LineChartComponent;
