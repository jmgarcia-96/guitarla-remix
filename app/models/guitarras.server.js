export async function getGuitarras() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  return await respuesta.json();
}

export async function getGuitarraByURL(param) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${param}&populate=imagen`
  );
  return await respuesta.json();
}
