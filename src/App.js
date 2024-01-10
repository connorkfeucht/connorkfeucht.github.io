import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="example" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <motion.h1
        initial={{opacity: 0, y: -500}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        style={{fontWeight: '900'}}
      >
        Connor Feucht's Website
      </motion.h1>
    </div>
  );
}

export default App;
