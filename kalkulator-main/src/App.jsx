import { createSignal } from 'solid-js';
import Kalkulator from './kalkulator';

const App = () => {
  const [ciljaniIznos, setCiljaniIznos] = createSignal('');
  const [mjesecnaStednja, setMjesecnaStednja] = createSignal('');
  const [rezultat, setRezultat] = createSignal(null);

  // Funkcija koja će primiti rezultat iz Kalkulator komponente
  const handleIzracunaj = (mjeseci) => {
    setRezultat(mjeseci);
  };

  return (
    <div>
      <h1>Kalkulator Vremena Štednje</h1>
      <div>
        <label>Ciljani iznos: </label>
        <input
          type="number"
          value={ciljaniIznos()}
          onInput={(e) => setCiljaniIznos(e.target.value)}
          placeholder="Unesite ciljani iznos"
        />
      </div>
      <div>
        <label>Mjesečna štednja: </label>
        <input
          type="number"
          value={mjesecnaStednja()}
          onInput={(e) => setMjesecnaStednja(e.target.value)}
          placeholder="Unesite mjesečnu štednju"
        />
      </div>
      <Kalkulator
        ciljaniIznos={ciljaniIznos()}
        mjesecnaStednja={mjesecnaStednja()}
        onIzracunaj={handleIzracunaj}
      />
      {rezultat() && (
        <div>
          <h2>Za uštedu iznosa bit će potrebno: {rezultat()} mjeseci</h2>
        </div>
      )}
    </div>
  );
};

export default App;