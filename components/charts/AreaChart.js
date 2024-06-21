"use client";
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AreaChartComponent = () => {
  const productSales = [
    {
      name: "Jan",
      A: 100,
      B: 200,
    },
    {
      name: "Feb",
      A: 160,
      B: 100,
    },
    {
      name: "Mar",
      A: 160,
      B: 130,
    },
    {
      name: "Apr",
      A: 30,
      B: 135,
    },
    {
      name: "May",
      A: 170,
      B: 131,
    },
    {
      name: "Jun",
      A: 200,
      B: 150,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />} />
        {/*   <Legend /> */}
        <Area dataKey="A" stroke="#2563eb" fill="#3b82f6" stackId="1" />
        <Area dataKey="B" stroke="#7c3aed" fill="#8b5cf6" stackId="1" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          A:
          <span className="ml-2">{payload[0].value}%</span>
        </p>
        <p className="text-sm text-indigo-400">
          B:
          <span className="ml-2">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
