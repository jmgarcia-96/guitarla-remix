import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    { title: "GuitarLA - Sobre Nosotros" },
    { description: "Venta de guitarras, blog de música" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "imagen",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Suspendisse potenti. Nullam a nunc dolor. Suspendisse potenti. Ut
            facilisis lacinia odio sit amet sollicitudin. Praesent auctor, purus
            non egestas suscipit, ligula ipsum dapibus felis, nec dapibus velit
            tellus ac nisi. Maecenas porttitor eu quam condimentum feugiat.
          </p>
          <p>
            Phasellus euismod eu dolor nec malesuada. Mauris posuere, nisi nec
            euismod venenatis, augue magna rutrum dolor, vitae consectetur leo
            enim non metus. Vivamus at lacus ante. Praesent bibendum eget elit
            at malesuada. Maecenas porttitor eu quam condimentum feugiat.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
