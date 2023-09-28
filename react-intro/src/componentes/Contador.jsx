import { useEffect, useState } from "react";

export default function Contador({ inicial }) {
    let numero = inicial;
    const [cont, setCont] = useState(inicial); // setCont permite mudar a variavel
    const [saldo, setSaldo] = useState("POSITIVO");

    // Efeito Colateral 
    useEffect(() => {
        // O que vai acontecer
        if (cont >= 0) {
            setSaldo("POSITIVO");
        } else {
            setSaldo("NEGATIVO");
        }
    }, [cont]); // <- Quem vai disparar

    function aumentar() {
        numero = numero + 1
        console.log("Aumentou:", numero);
        setCont(cont + 1)
    }

    function diminuir() {
        numero = numero -1
        console.log("Diminuiu:", numero);
        setCont(cont - 1);
    }

    return (

        <div>
            Número: {numero} <br />
            Contador: {cont} <br />
            Saldo: {saldo} <br />

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
        
    )
}