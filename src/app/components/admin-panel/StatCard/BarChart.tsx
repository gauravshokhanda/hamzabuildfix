"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "@mui/material";

const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 2;
  return (
    <path
      d={`M${x + radius},${y} 
           L${x + width - radius},${y} 
           C${x + width},${y} ${x + width},${y + radius} ${x + width},${
        y + radius
      } 
           L${x + width},${y + height} 
           L${x},${y + height} 
           L${x},${y + radius} 
           C${x},${y} ${x + radius},${y} ${x + radius},${y}
           Z`}
      fill={fill}
    />
  );
};

const data = [
  {
    name: "Jan",
    uv: 80,
    pv: 20,
    wv: 60,
  },
  {
    name: "Feb",
    uv: 90,
    pv: 40,
    wv: 60,
  },
  {
    name: "Mar",
    uv: 50,
    pv: 40,
    wv: 60,
  },
  {
    name: "Apr",
    uv: 80,
    pv: 80,
    wv: 80,
  },
  {
    name: "May",
    uv: 100,
    pv: 40,
    wv: 80,
  },
  {
    name: "Jun",
    uv: 60,
    pv: 80,
    wv: 100,
  },
  {
    name: "Jul",
    uv: 80,
    pv: 40,
    wv: 60,
  },
  {
    name: "Aug",
    uv: 80,
    pv: 40,
    wv: 60,
  },
  {
    name: "Sep",
    uv: 90,
    pv: 40,
    wv: 60,
  },
  {
    name: "Oct",
    uv: 40,
    pv: 60,
    wv: 60,
  },
  {
    name: "Nov",
    uv: 80,
    pv: 60,
    wv: 60,
  },
  {
    name: "Dec",
    uv: 60,
    pv: 40,
    wv: 60,
  },
];

const BarChartInsight = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");

  const height = isSmallScreen ? 260 : isMediumScreen ? 300 : 400;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50,
        }}
      >
        <CartesianGrid stroke="" strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          interval={0}
          label={{
            value: "Month",
            position: "insideBottom",
            offset: -25,
            style: {
              textAnchor: "middle",
              fill: "#666",
              fontSize: "14px",
            },
          }}
          tick={{
            dx: isSmallScreen ? -5 : 0,
            dy: isSmallScreen ? 10 : 0,
            fontSize: isSmallScreen ? "10px" : "12px",
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: isSmallScreen ? "10px" : "12px",
          }}
          label={{
            value: "Registrations",
            angle: -90,
            position: "insideLeft",
            offset: 10,
          }}
          tickMargin={isSmallScreen ? -0 : -25}
        />
        <Tooltip />
        <Bar
          dataKey="pv"
          stackId="a"
          fill="#029CD7"
          barSize={32}
          shape={RoundedBar}
        />
        <Bar
          dataKey="uv"
          stackId="a"
          fill="#04B4F8"
          barSize={32}
          shape={RoundedBar}
        />
        <Bar
          dataKey="wv"
          stackId="a"
          fill="#9DE4FF"
          barSize={32}
          shape={RoundedBar}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartInsight;
