/*
🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto
Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

Cosa deve fare?

Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
Ritorna true quando il tasto è premuto e false quando viene rilasciato.
Usa event listener su keydown e keyup.
Esempio di utilizzo:
import useKeyPress from "./useKeyPress";

function App() {
  const isEnterPressed = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
  );
}

export default App;

*/


import useKeyPress from "./assets/useKeyPress";



function App() {
  const isEnterPressed = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
  );
}

export default App
