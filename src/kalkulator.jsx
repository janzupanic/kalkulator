import { createSignal } from "solid-js";
import styles from './App.module.css';

export default function Kalkulator() {
  
  const [ciljaniIznos, setCiljaniIznos] = createSignal("");
  const [mjesecnaStednja, setMjesecnaStednja] = createSignal("");
  const [brojMjeseci, setBrojMjeseci] = createSignal(null);
  const [error, setError] = createSignal("");

  
  function izracunajVrijeme() {
      setError(""); 
      const iznos = parseFloat(ciljaniIznos());
      const stednja = parseFloat(mjesecnaStednja());


      if ((isNaN(iznos) || iznos <= 0) && (isNaN(stednja) || stednja <= 0)) {
        setError("Molimo unesite ispravne vrijednosti za ciljani iznos i mjesečnu štednju.");
        setBrojMjeseci(null);
        return;
    }


      if (isNaN(iznos) || iznos <= 0 ) {
        setError("Molimo unesite ispravne vrijednosti za ciljani iznos.");
        setBrojMjeseci(null);
        return;
    }

    if (isNaN(stednja) || stednja <= 0 ) {
      setError("Molimo unesite ispravne vrijednosti za mjesečnu štednju.");
      setBrojMjeseci(null);
      return;
  }

     
      const mjeseci = Math.ceil(iznos / stednja);
      setBrojMjeseci(mjeseci); 
  }

  
  function submit(event) {
      event.preventDefault();
      izracunajVrijeme();
  }

  return (
      <div>
          <form onSubmit={submit}>
              <input 
                  type="number" 
                  name="ciljaniIznos" 
                  placeholder="Ciljani iznos" 
                  onInput={(event) => setCiljaniIznos(event.target.value)} 
              />

              <input 
                  type="number" 
                  name="mjesecnaStednja" 
                  placeholder="Mjesečna štednja" 
                  onInput={(event) => setMjesecnaStednja(event.target.value)} 
              />

              <input type="submit" value="Izračunaj vrijeme štednje" />
          </form>

          {error() && <div className={styles.error}>{error()}</div>}
          {brojMjeseci() !== null && <div>Potrebno vrijeme za uštedu ciljanog iznosa: {brojMjeseci()} mjeseci</div>}
      </div>
  );
}