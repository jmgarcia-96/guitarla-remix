import { useLoaderData } from "@remix-run/react";
import { getGuitarraByURL } from "~/models/guitarras.server";

export async function loader({ request, params }) {
  const guitarra = await getGuitarraByURL(params.guitarraUrl);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
    });
  }
  return guitarra.data;
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: `GuitarLA - Guitarra no encontrada` },
      {
        description: `Guitarras, venta de guitarras, guitarra no encontrada}`,
      },
    ];
  }
  return [
    { title: `GuitarLA - ${data[0].attributes.nombre}` },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`,
    },
  ];
}

function Guitarra() {
  const guitarra = useLoaderData();

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </div>
  );
}

export default Guitarra;
