# MariFarma

## Indice
1. [Introducción](#introducción)
2. [Tecnologías](#tecnologías)
3. [Funcionalidades](#funcionalidades)
4. [Uso](#uso)
5. [Licencia](#licencia)

## Introducción
Este proyecto es un sitio web llamado MariFarma, que proporciona información y acceso a varios productos relacionados con la salud y el bienestar. Ofrece categorías como Medicamentos, Cuidado Natural, Hierbas y Ortopedia. El sitio web ofrece funcionalidades como selección de idioma, búsqueda de productos y añadir productos a favoritos y al carrito de compras.

## Tecnologías
- HTML
- CSS
- JavaScript
- Font Awesome (para iconos)
- i18next (para internacionalización)
- Figma
- Trello
- Visual studio code
- linux
- Git
- Github
- SCRUM

## Funcionalidades
1. Menú de Navegación
   - Permite a los usuarios navegar por diferentes secciones del sitio web.
   - Incluye opciones para Productos, Medicamentos, Cuidado Natural, Hierbas, Ortopedia y Contacto.

2. Selección de Idioma
   - Permite a los usuarios cambiar entre los idiomas inglés y castellano.
   - Implementado utilizando JavaScript y la biblioteca i18next.

3. Listado de Productos
   - Muestra varios productos disponibles en el sitio web, categorizados bajo diferentes secciones.
   - Los usuarios pueden ver los detalles del producto y añadir productos a sus favoritos o al carrito de compras.

4. Filtros Por categorias
   - Los filtros por categorias se pueden realizar desde la pagina principal y desde el menu hamburgesa en version movil.

5. Carrito de Compras

En esta sección del sitio web, los usuarios pueden revisar los productos que han agregado al carrito de compras. A continuación se detallan los elementos principales de esta parte:

- **Navegación y Volver:** El usuario puede volver a la página principal haciendo clic en el botón "Seguir comprando".
- **Contenido Principal:** Se muestra el título "Carrito" seguido de la lista de productos seleccionados por el usuario.
- **Acciones del Carrito:**
  - **Vaciar Carrito:** Permite al usuario eliminar todos los productos del carrito.
  - **Total:** Muestra el precio total de los productos en el carrito.
  - **Pagar Ahora:** Botón que permite al usuario proceder al pago de los productos en el carrito.
- **Mensaje de Confirmación:** Una vez que se realiza la compra, se muestra un mensaje de agradecimiento al usuario.

6. Navegación y Categorías de Productos

En esta sección del sitio web, los usuarios pueden navegar por diferentes categorías de productos y ver los productos disponibles en cada una. A continuación se describe la estructura de esta parte:

- **Navegación de Categorías:** En el panel lateral, los usuarios pueden encontrar botones que representan diferentes categorías de productos, como Medicamentos, Cuidado natural, Herbolario, y Ortopedia. Al hacer clic en cada botón, se filtran los productos según la categoría seleccionada.
- **Título Principal:** Se muestra el título "Todos los productos" que indica la sección en la que se encuentra el usuario.
- **Contenido de Productos:** En esta sección principal, se muestran los productos disponibles según la categoría seleccionada. Los productos se muestran en forma de tarjetas con su nombre, precio e imagen correspondiente.

7. Proceso de Checkout

En esta sección del sitio web, los usuarios pueden completar el proceso de checkout para realizar una compra. A continuación se describe la estructura de esta parte:

- **Modo de Envío:** Los usuarios pueden seleccionar entre diferentes modos de envío, como Recogida en tienda, Envío 24h, y Envío 48h/72h. Al seleccionar una opción, se pueden realizar acciones adicionales según la elección.

- **Formulario de Dirección de Entrega:** Se presenta un formulario donde los usuarios deben ingresar su nombre, dirección, código postal, ciudad, provincia y país para la entrega de los productos. Además, hay un botón para guardar los datos ingresados en el localstorage.

- **Forma de Pago:** Se ofrecen varias opciones de pago, incluyendo Tarjeta, Contrareembolso, PayPal y Transferencia. Para algunas opciones como Tarjeta y Transferencia, se presentan ventanas modales para ingresar detalles adicionales.

- **Resumen del Pedido:** Se muestra un resumen del pedido que incluye la cantidad de productos, el subtotal, los gastos de envío y el total a pagar.

- **Botones de Acción:** Los usuarios pueden volver al carrito para revisar los productos, continuar con la compra o realizar acciones específicas según la situación. También se utilizan ventanas modales para confirmar la compra.


8. Creación de Cuenta

En esta sección, los usuarios pueden crear una nueva cuenta proporcionando la siguiente información:

- **Nombre de Usuario:** Los usuarios deben ingresar un nombre de usuario para identificarse en el sistema.

- **Correo Electrónico:** Se requiere una dirección de correo electrónico válida para la comunicación y la recuperación de la cuenta si es necesario.

- **Contraseña:** Se debe proporcionar una contraseña segura para proteger la cuenta.

- **Confirmar Contraseña:** Para garantizar la precisión, se solicita a los usuarios que confirmen su contraseña ingresándola nuevamente.

Una vez que se completan todos los campos, los usuarios pueden confirmar la creación de la cuenta haciendo clic en el botón "Confirmar".

En caso de que ocurra algún error durante el proceso de creación de la cuenta, se mostrará un mensaje de error apropiado para informar al usuario sobre el problema.



9. Pie de Página
   - Contiene enlaces a políticas de privacidad, términos de uso y otra información legal.

## Uso

Para utilizar el sitio web, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

...
$ git clone https://github.com/A-Goffard/Marifarma.git
...

2. Abre el archivo `index.html` en tu navegador web preferido.

3. Navega por las diferentes secciones del sitio web utilizando el menú de navegación ubicado en la parte superior o lateral, según la resolución de la pantalla.

4. Explora los productos disponibles en las distintas categorías como Medicamentos, Cuidado Natural, Herbolario y Ortopedia.

5. Utiliza la función de búsqueda para encontrar productos específicos según tus necesidades.

6. Añade productos a tus favoritos o al carrito de compras haciendo clic en los botones correspondientes.

7. Cambia el idioma del sitio web según tu preferencia utilizando el selector de idioma en la parte superior o lateral, dependiendo de la versión.

8. Completa el proceso de checkout si deseas realizar una compra. Ingresa la información requerida, selecciona el método de pago y confirma la compra.

9. Si deseas crear una cuenta, ve a la sección correspondiente y completa el formulario de registro con tu nombre de usuario, correo electrónico y contraseña.

¡Disfruta explorando MariFarma y descubre una amplia gama de productos para tu salud y bienestar!

## Licencia

Este proyecto está disponible bajo la [Licencia MIT](LICENSE), que es una licencia permisiva que permite el uso, la copia, la modificación, la fusión, la publicación, la distribución, la sublicencia y/o la venta de copias del software, y permite que las personas a las que se les entregue el software lo hagan bajo los siguientes términos:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del software.

## Equipo

* * **Oussama Brahni(SCRUM Master)**
    
   [LinkedIn](https://www.linkedin.com/in/oussama-brahmi-b1551a280/)
  [Github]
 
* **Aintzane Goffard (Product Owner)**
   [LinkedIn](https://www.linkedin.com/in/aintzane-goffard-sevillano/)

  [Github](https://github.com/A-Goffard)
  
* **Tina Calleja (Software Developer)**
  
   [LinkedIn](www.linkedin.com/in/tina-calleja-91a07460/)

  [Github](https://github.com/usertina)
  
* **Johan Sebastian Rodríguez  (Software Developer)**
    [LinkedIn](https://www.linkedin.com/in/johan-sebastian-rodriguez-g/)
  [Github]
  
* **Abderrahmane Hichou (Software Developer)**
  
  [LinkedIn](https://www.linkedin.com/in/abderrahmane-hichou-95818a2ab/)
  [Github]

