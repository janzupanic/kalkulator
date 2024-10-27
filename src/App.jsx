import styles from './App.module.css';
import Kalkulator from './kalkulator';


function App() {
  return (
    <>
    <body>
    <div class={styles.App}>
      <h1>Kalkulator Vremena Štednje </h1>
      <Kalkulator/>
    </div>
    </body>
    </>

  );
};

export default App;