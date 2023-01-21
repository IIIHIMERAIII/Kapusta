import { useMediaQuery } from '@react-hook/media-query';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const customLabelHorizontal = ({ x, y, width, value }) => {
  return (
    <text x={x + width / 2} y={y} textAnchor="middle" dy={-6}>
      {`${value} UAH`}
    </text>
  );
};

const customLabelVertical = ({ x, y, value }) => {
  return (
    <text x={x} y={y} textAnchor="start">
      {`${value} UAH`}
    </text>
  );
};
export const Chart = ({ data }) => {
  const matches = useMediaQuery('only screen and (min-width: 420px)');
  console.log(matches);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        {matches ? (
          <BarChart
            layout="horizontal"
            data={data}
            margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
            barCategoryGap={1}
          >
            <XAxis dataKey="name" type="category" />
            <CartesianGrid vertical={false} />
            <Bar
              dataKey="cost"
              fill="#FF751D"
              label={customLabelHorizontal}
              barSize={50}
            />
          </BarChart>
        ) : (
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
            barCategoryGap={1}
          >
            <YAxis dataKey="name" type="category" />
            <CartesianGrid vertical={false} />
            <Bar
              dataKey="cost"
              fill="#FF751D"
              label={customLabelVertical}
              barSize={50}
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </>
  );
};
