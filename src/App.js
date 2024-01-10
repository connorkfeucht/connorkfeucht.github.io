import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="example" style={{
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "flex-start",
      background: 'linear-gradient(to right, black, #6fa056)',
      // #6fa056 darker green #8fbe70 lighter green
      height: '100vh'
    }}>

      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
      }}>
        <motion.img
        src="https://avatars.githubusercontent.com/u/132318582?v=4"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 3, duration: 2}}
        style={{width: '100px', borderRadius: '50%', margin: '10px'}}
        />
        <motion.h1
          initial={{opacity: 0, y: -500}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 2}}
          style={{fontWeight: '900', margin: '10px'}}
        >
          Connor Feucht's Website
        </motion.h1>
      </div>

      <motion.div
        initial={{opacity: 0, x: -500}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 2, duration: 3}}
        style={{
        width: '600px',
        height: '600px',
        background: 'gray',
        margin: '10px',
        borderRadius: '10px'
      }}>
        <text >Hi</text>
      </motion.div>
    </div>
  );
}

export default App;
