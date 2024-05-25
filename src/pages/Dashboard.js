import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { chartAreaBorder } from "../utils/chartPlugins";

const Dashboard = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          color: "transparent",
        },
        ticks: { color: "black" },
      },
      y: {
        min: 0,
        max: 300,
        grid: {
          color: "transparent",
        },
        ticks: {
          stepSize: 50,
          color: "black",
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: "#0774a3",
        borderColor: "transparent",
        borderRadius: { topRight: 15, topLeft: 15 },
        data: [205, 125, 85, 55, 87, 127, 150, 230, 280, 190, 150, 100],
      },
    ],
  };

  const conversionOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          color: "transparent",
          display: false,
        },
        ticks: { color: "transparent" },
        zeroLineColor: "transparent",
        zeroLineWidth: 0,
        borderColor: "transparent",
        borderWidth: 0,
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          color: "transparent",
          display: false,
        },
        ticks: {
          stepSize: 100,
          color: "transparent",
        },
        zeroLineColor: "transparent",
        zeroLineWidth: 0,
        borderColor: "transparent",
        borderWidth: 0, // Set borderWidth to 0 to hide x-axis origin line
      },
    },
    plugins: {
      legend: {
        align: "center",
        position: "bottom",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: "black",
          usePointStyle: true,
        },
      },
    },
  };

  const conversionData = {
    labels: [
      "7/12",
      "8/12",
      "9/12",
      "10/12",
      "11/12",
      "12/12",
      "13/12",
      "14/12",
      "15/12",
      "16/12",
      "17/12",
      "18/12",
      "19/12",
      "20/12",
      "",
    ],
    datasets: [
      {
        fill: true,
        tension: 0,
        label: "Africa",
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointStyle: "circle",
        backgroundColor: "#4EADD7",
        pointHoverBorderWidth: 5,
        borderColor: "transparent",
        pointHoverBorderColor: "white",
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: "#4EADD7",
        borderWidth: 0,
        data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
      },

      {
        fill: true,
        tension: 0,
        label: "Europe",
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: "transparent",
        backgroundColor: "#FFC93D",
        pointHoverBorderColor: "white",
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: "#FFC93D",
        borderWidth: 0, // Set the border width for "Europe" dataset
        data: [
          240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300,
          315,
        ],
      },
    ],
  };

  return (
    <div className='mx-16 my-4'>
      <div className='font-bold text-4xl py-4'>Dashboard</div>

      {/* Activity Summary */}
      <div className='h-11 text-[1.25rem] bg-[#898989] flex justify-start items-center text-white px-4'>
        Activity Summary
      </div>
      <div className='h-[1px] w-full bg-[#E0E0E0] my-6' />
      <div className='flex flex-col lg:flex-row justify-around items-center px-4 gap-4'>
        <div className='h-[9.375rem] w-96 lg:w-[15.625rem] bg-[#4EADD7] rounded-2xl overflow-hidden relative'>
          <img
            src='/images/UserBox.svg'
            alt=''
            className='h-full w-full object-cover object-center relative z-10'
          />
          <div className='h-full w-full absolute z-30 top-4 flex flex-col justify-start items-center'>
            <h3 className='font-medium text-lg'>Total Users</h3>
            <h2 className='font-medium text-[45px] leading-none relative top-10'>
              175
            </h2>
          </div>
        </div>
        <div className='h-[9.375rem] w-96 lg:w-[15.625rem] bg-[#ACE573] rounded-2xl overflow-hidden relative'>
          <img
            src='/images/AgentBox.svg'
            alt=''
            className='h-full w-full object-cover object-center relative z-10'
          />
          <div className='h-full w-full absolute z-30 top-4 flex flex-col justify-start items-center'>
            <h3 className='font-medium text-lg'>Total Agents</h3>
            <h2 className='font-medium text-[45px] leading-none relative top-10'>
              75
            </h2>
          </div>
        </div>
        <div className='h-[9.375rem] w-96 lg:w-[15.625rem] bg-[#FFC93D] rounded-2xl overflow-hidden relative'>
          <img
            src='/images/TravelersBox.svg'
            alt=''
            className='h-full w-full object-cover object-center relative z-10'
          />
          <div className='h-full w-full absolute z-30 top-4 flex flex-col justify-start items-center'>
            <h3 className='font-medium text-lg'>Total Travelers</h3>
            <h2 className='font-medium text-[45px] leading-none relative top-10'>
              75
            </h2>
          </div>
        </div>
      </div>

      {/* Usage Breakdown */}
      <div className='h-11 mt-14 text-[1.25rem] bg-[#898989] flex justify-start items-center text-white px-4'>
        Usage Breakdown
      </div>

      <div className=' flex justify-center items-start '>
        <div className='h-96 w-full md:w-[44.5rem] mt-10'>
          <Bar data={data} height={400} width={712} options={options} />
        </div>
      </div>

      {/* Conversion Rate*/}
      <div className='h-11 mt-14 text-[1.25rem] bg-[#898989] flex justify-start items-center text-white px-4'>
        Conversion Rate
      </div>

      <div className=' flex justify-center items-start '>
        <div className='h-96 w-full md:w-[44.5rem] mt-10'>
          <Line
            data={conversionData}
            height={400}
            width={712}
            options={conversionOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
