export default function StockTicker() {
  const stocks = [
    { name: "EQNR", change: "+2.4%" },
    { name: "NEL", change: "-1.1%" },
    { name: "DNB", change: "+0.7%" },
  ]

  return (
    <div className="bg-slate-800 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Aksjekurser (dummy)</h2>
      <ul className="space-y-1">
        {stocks.map((stock, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{stock.name}</span>
            <span>{stock.change}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
