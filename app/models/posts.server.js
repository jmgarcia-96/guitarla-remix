export async function getPosts() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  return await respuesta.json();
}

export async function getPostByURL(param) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${param}&populate=imagen`
  );
  return await respuesta.json();
}
