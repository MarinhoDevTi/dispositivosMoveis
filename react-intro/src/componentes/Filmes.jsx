import { useEffect, useState } from "react";
import Filme from "./Filme";

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);

    // Efeito colateral chamado UMA ÚNICA VEZ quando o componente é criado
    useEffect(() => {
        let api = "https://api.tvmaze.com/search/shows?q=csi";

        fetch(api)
            .then(resposta => resposta.json())
            .then(filmes => setFilmes(filmes))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <div>
            <h1>Filmes</h1>

            {filmes.map(filme => {
                return (
                    <Filme 
                        data={filme.show}
                    />
                )
            })}
        </div>
    )
}