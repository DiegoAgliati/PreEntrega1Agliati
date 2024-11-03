# E-commerce de Juegos Blozzard

## Sobre el proyecto
    Este proyecto es una aplicación de e-commerce en React para la venta de juegos digitales de Blizzard. Permite a los usuarios explorar una lista de juegos, agregar productos al carrito y realizar una compra. La aplicación está conectada a Firebase para el almacenamiento de datos y utiliza varias tecnologías y librerías para mejorar la experiencia del usuario.

## Características
    * Navegación intuitiva: Usa React Router DOM para facilitar la navegación entre las secciones.
    * Carrito de compras: Funcionalidad para agregar, ver y eliminar productos en el carrito con actualizaciones de stock en tiempo real.
    * Gestión de stock: Verificación de stock en Firebase antes de permitir la compra de productos.
    * Checkout: Proceso de compra que almacena las órdenes en Firebase y permite al usuario copiar el ID de la orden.
    * Notificaciones personalizadas: Implementación de SweetAlert con un estilo oscuro para alertas de éxito y errores.
    * Diseño amigable y atractivo: Interfaz de usuario optimizada con una paleta de colores acorde a la temática de Blizzard y un diseño responsivo.

# Dependencias utilizadas
    * React: Librería principal para construir la interfaz de usuario.
    * Firebase: Base de datos para el almacenamiento de productos, órdenes y manejo de autenticación de usuarios.
    * SweetAlert2: Para mostrar alertas personalizadas durante el proceso de compra.
    * React Router DOM: Para la navegación entre las diferentes secciones de la aplicación.
    * React Icons: Para incluir íconos visualmente atractivos en la interfaz.

## Funcionalidades Clave
    1. Persistencia del Carrito: Los datos del carrito se guardan para que los usuarios puedan continuar su compra más tarde.
    2. Checkout con Alerta de Éxito: Al finalizar la compra, se genera una alerta personalizada con el ID de la orden.
    3. Diseño Personalizado: La aplicación cuenta con un diseño adaptado al estilo de Blizzard, con una paleta de colores única y un fondo oscuro en las alertas.