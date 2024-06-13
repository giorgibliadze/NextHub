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
    { subject: "Targeting", Analytics: 120, NoAnalytics: 100, FullMark: 150 },
    { subject: "Devices", Analytics: 98, NoAnalytics: 80, FullMark: 150 },
    { subject: "User Behavior", Analytics: 86, NoAnalytics: 81, FullMark: 150 },
    {
      subject: "Conversion Rates",
      Analytics: 99,
      NoAnalytics: 70,
      FullMark: 150,
    },
    {
      subject: "Customer Retention",
      Analytics: 85,
      NoAnalytics: 69,
      FullMark: 150,
    },
    {
      subject: "Campaign Performance",
      Analytics: 65,
      NoAnalytics: 64,
      FullMark: 150,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Analytics"
          dataKey="Analytics"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="No Analytics"
          dataKey="NoAnalytics"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.6}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
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
          Analytics Value:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          No Analytics Value:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default RadarChartComponent;
