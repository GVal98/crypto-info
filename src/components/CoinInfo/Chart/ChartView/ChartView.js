import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

const timestampToDate = (timestamp) => (new Date(timestamp)).toLocaleDateString()
const formatTooltipPrice = (price) => [`$${+price.toPrecision(5)}`, 'Price']

export default function ChartView({ prices }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        fontFamily="Roboto, sans-serif"
        fontSize={14}
        data={prices}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" minTickGap="1" tickFormatter={timestampToDate} />
        <YAxis tickFormatter={(price) => `$${price}`} />
        <Tooltip
          contentStyle={{ fontFamily: 'Roboto, sans-serif' }}
          formatter={formatTooltipPrice}
          labelFormatter={timestampToDate}
        />
        <Line type="monotone" dataKey="price" dot="" strokeWidth={2} stroke="#42a5f5" />
      </LineChart>
    </ResponsiveContainer>
  )
}
