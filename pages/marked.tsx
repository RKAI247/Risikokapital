
export default function Marked() {
  return (
    <main className="min-h-screen bg-[#0e1a2b] text-white p-8">
      <h1 className="text-3xl font-semibold mb-4">📈 Marked</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr><th className="pb-2">Aksje</th><th className="pb-2">Kurs</th><th className="pb-2">Endring</th></tr>
        </thead>
        <tbody>
          <tr><td>EQNR</td><td>312.10</td><td className="text-green-500">+0.34%</td></tr>
          <tr><td>NEL</td><td>8.45</td><td className="text-red-500">-1.22%</td></tr>
          <tr><td>DNB</td><td>205.80</td><td className="text-green-500">+0.89%</td></tr>
        </tbody>
      </table>
    </main>
  );
}
