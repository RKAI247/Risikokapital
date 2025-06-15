export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 p-4">
      <nav className="space-y-4">
        <a href="/" className="block hover:underline">🏠 Forside</a>
        <a href="/chat" className="block hover:underline">💬 Chat</a>
        <a href="#" className="block hover:underline">📊 Marked</a>
      </nav>
    </aside>
  )
}
