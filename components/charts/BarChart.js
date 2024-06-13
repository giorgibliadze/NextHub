"use client";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = () => {
  const salesData = [
    {
      name: "Jan",
      revenue: 20000,
      profit: 4900,
    },
    {
      name: "Feb",
      revenue: 25000,
      profit: 5357,
    },
    {
      name: "Mar",
      revenue: 24000,
      profit: 5673,
    },
    {
      name: "Apr",
      revenue: 23000,
      profit: 6500,
    },
    {
      name: "May",
      revenue: 26000,
      profit: 5400,
    },
    {
      name: "Jun",
      revenue: 30000,
      profit: 7500,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
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
        <Bar dataKey="revenue" fill="#2563eb" />
        <Bar dataKey="profit" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
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

export default BarChartComponent;
