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
      product1: 3300,
      product2: 4400,
    },
    {
      name: "Feb",
      product1: 3000,
      product2: 3220,
    },
    {
      name: "Mar",
      product1: 3500,
      product2: 4290,
    },
    {
      name: "Apr",
      product1: 2790,
      product2: 3000,
    },
    {
      name: "May",
      product1: 2500,
      product2: 4400,
    },
    {
      name: "Jun",
      product1: 2600,
      product2: 3000,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <Legend />
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
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
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
