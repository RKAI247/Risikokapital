export default function MessageList() {
  const messages = [
    { user: "OlaInvestor", time: "12:03", text: "EQNR ser sterk ut i dag! $EQNR" },
    { user: "SaraAksje", time: "12:05", text: "NEL faller på lavt volum... Hmm" },
    { user: "BørsBjørn", time: "12:10", text: "Har noen sett nyheter om DNB?" },
  ]

  return (
    <div className="space-y-3">
      {messages.map((msg, idx) => (
        <div key={idx} className="p-3 rounded bg-slate-700">
          <div className="text-sm text-gray-300">{msg.user} • {msg.time}</div>
          <div>{msg.text}</div>
        </div>
      ))}
    </div>
  )
}
