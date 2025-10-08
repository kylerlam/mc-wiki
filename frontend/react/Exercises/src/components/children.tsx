function Box({ children }) {
  return <div className="box">{children}</div>;
}

export default function App() {
  return (
    <Box>
      <h1>Hello World</h1>
      <p>This is inside the box.</p>
      <h2>Hello palapala</h2>
    </Box>
  );
}
