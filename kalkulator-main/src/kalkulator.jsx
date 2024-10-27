
export default function Kalkulator() {

    const Kalkulator = ({ ciljaniIznos, mjesecnaStednja, onIzracunaj }) => {
        // Funkcija za izračunavanje vremena štednje u mjesecima
        const izracunajVrijeme = () => {
          if (!ciljaniIznos || !mjesecnaStednja || mjesecnaStednja <= 0) {
            alert('Molimo unesite ispravne vrijednosti za ciljani iznos i mjesečnu štednju');
            return;
          }
      
          const mjeseci = Math.ceil(ciljaniIznos / mjesecnaStednja);
          onIzracunaj(mjeseci); // Šaljemo rezultat nazad u App komponentu
        };
      
        return (
          <div>
            <button onClick={izracunajVrijeme}>Izračunaj</button>
          </div>
        );
      };
    }
