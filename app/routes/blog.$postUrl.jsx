import { useLoaderData } from "@remix-run/react";
import { getPostByURL } from "../models/posts.server";
import { formatearFecha } from "../utils/helpers";

export async function loader({ request, params }) {
  const post = await getPostByURL(params.postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post No Encontrado",
    });
  }
  return post.data;
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: `GuitarLA - Entrada no encontrada` },
      {
        description: `Guitarras, venta de guitarras, entrada no encontrado}`,
      },
    ];
  }
  return [
    { title: `GuitarLA - ${data[0].attributes.titulo}` },
    {
      description: `Guitarras, venta de guitarras, entrada ${data[0].attributes.titulo}`,
    },
  ];
}

function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, url, publishedAt } = post[0].attributes;
  return (
    <main className="post  mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la entrada ${titulo}`}
      />

      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">${contenido}</p>
      </div>
    </main>
  );
}

export default Post;
