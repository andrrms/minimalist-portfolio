import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  useEffect(() => {
    console.log(
      "Olá, tudo bem? Espero que sim! Se você está vendo isso, é porque está interessado em saber como eu fiz esse site. Então, fique à vontade para dar uma olhada no código-fonte do site, que está disponível no meu GitHub. Se você quiser, pode me mandar um e-mail também, estou sempre aberto a novos desafios e oportunidades. Abraços!"
    );
  }, []);

  return <LandingPage />;
}

export default App;
