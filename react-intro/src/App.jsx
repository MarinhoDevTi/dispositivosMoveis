import Contador from "./componentes/Contador";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";

// Exportando o componente App
export default function App() {

  return (
    <div>
      <Menu />

      <Contador inicial={10} />

      <Rodape />
    </div>
  )
}