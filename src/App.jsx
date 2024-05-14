import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience.jsx";

function App() {
  return (
    <Canvas>
      <Experience></Experience>
    </Canvas>
  );
}

export default App;
