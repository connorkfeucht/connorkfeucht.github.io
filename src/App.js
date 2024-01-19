import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="example" style={{
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "flex-start",
      background: 'linear-gradient(to right, #bebebe, #a9a9a9)',
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
        style={{width: '100px', borderRadius: '50%', margin: '10px', border: '1px solid black'}}
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
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '10px',
        width: '1000px',
        height: '1000px',
        background: '#a9a9a9',
        margin: '10px',
        borderRadius: '10px',
        border: '1px solid black'
      }}>
        <div
          style={{
          width: '500px',
          height: '250px',
          margin: '10px',
          backgroud: '#949494',
          borderRadius: '10px',
          border: '1px solid black',
          }}
        >
          <text style={{ fontWeight: 'bold', margin: '5px', fontSize: '20px'}}>About Me:</text>
          <text style={{ fontWeight: 'bold', margin: '10px',}}>My name is Connor Feucht, and I am
          a Co-op computer science student attending the University of Victoria! In my free time I like to hang out
          with my friends, play basketball, program, and play video games with my friends.</text>
        </div>

        <div
          style={{
          width: '440px',
          height: '500px',
          margin: '10px',
          backgroud: '#949494',
          borderRadius: '10px',
          border: '1px solid black',
          }}
        >
        </div>
      </motion.div>
    </div>
  );
}

export default App;
