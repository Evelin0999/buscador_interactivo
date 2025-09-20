import { useState } from "react";
import usuariosData from "./db.json";
import card from "./components/card";
import searchinput from "./components/searchinput";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = usuariosData.usuarios.filter((u) =>
    [u.nombre, u.apellidos, u.correo, u.perfil, u.intereses]
      .join(" ")
      .toLowerCase()
      // ...existing code...
  );
  // ...existing code...
}