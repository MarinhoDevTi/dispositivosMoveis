// Contador.jsx

import { useState } from "react";

export default function Contador({ inicial }) {
    let numero = inicial;
    const [cont, setCont] = useState(inicial);

    function aumentar() {
        numero = numero + 1;
        console.log("Aumentou:", numero);
        setCont(cont + 1);
    }

    function diminuir() {
        numero = numero - 1;
        console.log("Diminuiu:", numero);
        setCont(cont - 1);
    }

    return (
        <div>
            Número: {numero} <br />
            Contador: {cont} <br />

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}