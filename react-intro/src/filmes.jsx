
import { useState } from "react"
export default function Filmes(){
    const {filmes, setFilmes} = useState([10, 20, 30]);


    return (
        <div>
            <h1>Filmes</h1>

            {filmes.map(filme => {
                return  (
                    <div>{filme}</div>
                )
            })}
        </div>
    )
}