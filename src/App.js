import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <TextForm heading="Enter The Text To Analyze Below :"/>
    </>
  );
}

export default App;