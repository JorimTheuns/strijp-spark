export default function Header({ title }) {
    return (
      <div className="flex items-center space-x-4 sticky top-0 left-0 p-4 border-b-2">
        <img src="/SSLogo.svg" alt="Strijp Spark Logo" className="h-12 w-12" />
        <h1 className="title text-2xl">{title}</h1>
      </div>
    )
  }
  