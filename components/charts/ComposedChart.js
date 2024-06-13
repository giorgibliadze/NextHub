"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ComposedChartComponent = () => {
  const salesData = [
    {
      name: "Jan",
      amt: 2975,
      revenue: 3300,
      profit: 4400,
    },
    {
      name: "Feb",
      amt: 1320,
      revenue: 3000,
      profit: 3220,
    },
    {
      name: "Mar",
      amt: 2500,
      revenue: 3500,
      profit: 4290,
    },
    {
      name: "Apr",
      amt: 4000,
      revenue: 2790,
      profit: 3000,
    },
    {
      name: "May",
      amt: 2000,
      revenue: 2500,
      profit: 2200,
    },
    {
      name: "Jun",
      amt: 3000,
      revenue: 2600,
      profit: 3000,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart width={730} height={250} data={salesData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#3b82f6" />
        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />
      </ComposedChart>
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
export default ComposedChartComponent;
