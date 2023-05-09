import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server";
import { getGuitarras } from "~/models/guitarras.server";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesPosts from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";
import ListadoPosts from "../components/listado-posts";
import ListadoGuitarras from "../components/listado-guitarras";
import { getCurso } from "../models/curso.server";
import Curso from "../components/curso";

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);
  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}

export function meta() {
  // return [
  //   { title: "GuitarLA - Nuestro Blog" },
  //   { description: "GuitarLA, Blog de música, venta de guitarras" },
  // ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />{" "}
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default Index;
