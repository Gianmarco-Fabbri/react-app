import "./App.css";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Button
        label={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Button>
    </>
  );
};

export default App;
