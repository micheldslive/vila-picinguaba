import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Alimentacao from "@/pages/alimentacao";
import Acomodacao from "@/pages/acomodacao";
import Roteiros from "@/pages/roteiros";
import Eventos from "@/pages/eventos";
import Detalhes from "@/pages/detalhes";
import NotFound from "@/pages/404";

export default class Routers extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/acomodacao" element={<Acomodacao />} />
        <Route path="/roteiros" element={<Roteiros />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
