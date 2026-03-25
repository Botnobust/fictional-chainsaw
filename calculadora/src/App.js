import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <Display />

      <div className="buttons">
        <Button label="AC" />
        <Button label="9" />
        <Button label="8" />
        <Button label="/" />

        <Button label="7" />
        <Button label="6" />
        <Button label="5" />
        <Button label="*" />

        <Button label="4" />
        <Button label="3" />
        <Button label="2" />
        <Button label="-" />

        <Button label="1" />
        <Button label="0" />
        <Button label="." />
        <Button label="+" />

        <Button label="=" />
      </div>
    </div>
  );
}

export default App;