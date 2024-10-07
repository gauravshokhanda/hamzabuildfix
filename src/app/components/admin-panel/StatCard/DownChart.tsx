"use client";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "@mui/material";

const data = [
  {
    uv: 800,
  },
  {
    uv: 200,
  },
  {
    uv: 600,
  },
  {
    uv: 0,
  },
];

const DownChart = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");

  const width = isSmallScreen ? 260 : isMediumScreen ? 300 : 340;

  return (
    <ResponsiveContainer width={width} height={100}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="0"
          vertical={false}
          horizontal={false}
        />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} />
        <YAxis axisLine={false} tickLine={false} tick={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#F04438"
          fill="#FEF3F2"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DownChart;
