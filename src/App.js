// import logo from "./logo.svg";
// import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#03cafc",
        height: "100vh",
      }}
    >
      <h1>Counter App</h1>
      
      <Counter />
    </div>
  );
}

export default App;
