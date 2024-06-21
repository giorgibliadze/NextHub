"use client";
import React from "react";
import {
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
  Tooltip,
  Legend,
} from "recharts";

const RadarChartComponent = () => {
  const data = [
    { subject: "თარგეთირება", A: 140, B: 100, FullMark: 150 },
    { subject: "მოწყობილობები", A: 134, B: 100, FullMark: 150 },
    { subject: "მომხმარებლის ქცევა", A: 140, B: 100, FullMark: 150 },
    {
      subject: "აუდიტორია",
      A: 145,
      B: 100,
      FullMark: 150,
    },
    {
      subject: "სანდოობა",
      A: 156,
      B: 100,
      FullMark: 150,
    },
    {
      subject: "შესაძლებლობები",
      A: 143,
      B: 100,
      FullMark: 150,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Analytics"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="No Analytics"
          dataKey="B"
          stroke="#3b5cf6"
          fill="#3b5cf6"
          fillOpacity={0.6}
        />
        <Tooltip content={<CustomTooltip />} />
        {/*  <Legend /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-300">
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
  return null;
};

export default RadarChartComponent;
