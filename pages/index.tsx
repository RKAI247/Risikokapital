
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e1a2b] text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Risikokapital</h1>
      <p className="mb-8">Dette er en foreløpig versjon med dummydata. Naviger gjerne rundt!</p>
      <ul className="space-y-2">
        <li><Link href="/chat" className="underline">💬 Gå til chat</Link></li>
        <li><Link href="/marked" className="underline">📈 Gå til marked</Link></li>
      </ul>
    </main>
  );
}
