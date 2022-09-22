export default function TextBox({ icon, title, subtitle, children, classes }) {
  return (
    <div
      className={`self-start border-blackish border-4 p-4 grid gap-4 grid-cols-icon ${classes}`}
    >
      <h1 className="text-5xl self-start">{icon}</h1>
      <div>
        <h2 className="pb-4 text-3xl font-bold">{title}</h2>
        <p className="text-xl leading-tight">{subtitle}</p>
        <div className="text-xl leading-tight">{children}</div>
      </div>
    </div>
  )
}
