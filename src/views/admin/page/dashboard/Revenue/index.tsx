import { axisClasses, BarChart } from "@mui/x-charts";
import { memo, FC, NamedExoticComponent } from "react";

interface IProps{
  children: FC;
}
const otherSetting = {
    height: 500,
    yAxis: [{ label: 'Amount ($)' }],
    grid: { horizontal: true },
    sx: {
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};
const dataset =[
    { amount: 21, month: 'January' },
    { amount: 28, month: 'February' },
    { amount: 41, month: 'March' },
    { amount: 73, month: 'April' },
    { amount: 99, month: 'May' },
    { amount: 144, month: 'June' },
    { amount: 319, month: 'July' },
    { amount: 249, month: 'August' },
    { amount: 131, month: 'September' },
    { amount: 55, month: 'October' },
    { amount: 48, month: 'November' },
    { amount: 25, month: 'December' }
]
const valueFormatter = (value: number | null) => `${value}$`;
const RevenuePage: NamedExoticComponent<IProps> = memo(
  function( props: IProps ){

    return (
      <BarChart
      dataset={dataset}
      xAxis={[
          {
              scaleType: 'band',
              dataKey: 'month',
              valueFormatter: (month, context) =>
                context.location === 'tick'
                  ? `${month.slice(0, 3)} \n2023`
                  : `${month} 2023`,
          },
      ]}
      series={[{ dataKey: 'amount', label: 'Revenue', valueFormatter }]}
      {...otherSetting}
    />);
  }
);
export default RevenuePage;