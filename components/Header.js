export default function Header({ title }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img src="/SSLogo.png" alt="Strijp Spark Logo" className="h-24 w-24" />
      <h1 className="title text-4xl font-bold">{title}</h1>
    </div>
  )
}
