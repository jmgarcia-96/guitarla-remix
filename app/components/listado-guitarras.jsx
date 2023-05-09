import React from "react";
import Guitarra from "./guitarra";
import styles from "~/styles/guitarras.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function ListadoGuitarras({ guitarras }) {
  return (
    <>
      <h2 className="heading">Nuestra colección</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListadoGuitarras;
