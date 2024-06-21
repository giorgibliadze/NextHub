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
      revenue: 20,
      profit: 41,
    },
    {
      name: "Feb",
      revenue: 30,
      profit: 52,
    },
    {
      name: "Mar",
      revenue: 40,
      profit: 56,
    },
    {
      name: "Apr",
      revenue: 50,
      profit: 65,
    },
    {
      name: "May",
      revenue: 60,
      profit: 69,
    },
    {
      name: "Jun",
      revenue: 80,
      profit: 75,
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
        <CartesianGrid strokeDasharray="6 6" />
        <Tooltip content={<CustomTooltip />} />
        {/*  <Legend /> */}
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
          სიმარტივე:
          <span className="ml-2">{payload[0].value}%</span>
        </p>
        <p className="text-sm text-indigo-400">
          კმაყოფილება:
          <span className="ml-2">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
};

export default BarChartComponent;
