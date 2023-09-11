import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

  const chartDataPoints = [
    {
      key:'Jan',
      value:0,
      label:'Jan'
    },
    {
      key:'Feb',
      value:0,
      label:'Feb'
    },
    {
      key:'Mar',
      value:0,
      label:'Mar'
    },
    {
      key:'Apr',
      value:0,
      label:'Apr'
    },
    {
      key:'May',
      value:0,
      label:'May'
    },
    {
      key:'Jun',
      value:0,
      label:'Jun'
    },
    {
      key:'Jul',
      value:0,
      label:'Jul'
    },
    {
      key:'Aug',
      value:0,
      label:'Aug'
    },
    {
      key:'Sep',
      value:0,
      label:'Sep'
    },
    {
      key:'Oct',
      value:0,
      label:'Oct'
    },
    {
      key:'Nov',
      value:0,
      label:'Nov'
    },
    {
      key:'Dec',
      value:0,
      label:'Dec'
    }
  ]

  for(const expense of props.expenses){
    const expenseMonth = expense.date.getMonth(); // Jan = 0, Feb = 1 and so on...
    chartDataPoints[expenseMonth].value+=expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;