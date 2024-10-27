import styles from './App.module.css';
import Kalkulator from './kalkulator';

function App() {
  return (
    <>
    <div class={styles.App}>
      <h1>Kalkulator Vremena Štednje </h1>
      <Kalkulator/>
    </div>
    </>

  );
};

export default App;
