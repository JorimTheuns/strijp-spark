export default function Logos({ children }) {
  return React.Children.forEach(children, (child) => {
    return <img src="child"></img>
  })
}
