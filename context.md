# Clon de Airbnb

## Stack y reglas
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Sin librerias de componentes preconstruidas
- Mobile first (base 375px, desktop desde 768px)


## Paginas

### 1) Home (/)
- Navbar sticky con buscador completo.
- RegionStrip horizontal con categoria activa.
- Grid responsive de ListingCard.
- Footer.
- Carga simulada inicial.
- Filtros en tiempo real por busqueda y categoria.

### 2) Catalogo (/catalog)
- Navbar sticky con buscador.
- Header con cantidad de resultados.
- Orden por precio (ascendente/descendente).
- Listado reutilizando ListingCard.
- Mapa placeholder.
- Layout responsive:
  - Movil: mapa debajo del listado.
  - Desktop: mapa al lado derecho.

### 3) Detalle de habitacion (/rooms/[id])
- Navbar sticky con buscador (mismo componente compartido).
- Carga simulada por id.
- Galeria superior con anterior/siguiente.
- Header de la habitacion (titulo, rating, reseñas, ubicacion).
- Bloque de anfitrion (avatar, nombre, años).
- Grid de amenities.
- Tarjeta de reserva (precio por noche, contador de huespedes, CTA).
- Boton para volver al catalogo.

## Componentes compartidos

### Navbar
- Estructura base:
  - Zona izquierda: logo + link a Home.
  - Zona central: buscador.
  - Zona derecha: boton de menu de usuario.
- Elementos del buscador:
  - Icono de lupa.
  - Placeholder de busqueda ("Search stays").
  - Estado focus/active visible.
  - Boton de submit con icono de lupa.
- Comportamiento:
  - Sticky en la parte superior.
  - Agrega sombra al hacer scroll.
  - Reutilizable en Home, Catalogo y Detalle.

### ListingCard
- Se reutiliza en Home y Catalogo.
- Elementos minimos:
  - Imagen principal.
  - Badge opcional (ejemplo: Guest favorite).
  - Boton favorito.
  - Titulo.
  - Texto secundario (fechas/ubicacion/host).
  - Precio.
  - Rating.
- Variantes:
  - Home: formato enfocado en descubrimiento.
  - Catalogo: formato mas informativo y vertical.

### Footer
- Se reutiliza en Home y puede mostrarse en Catalogo cuando aplique.
- Elementos:
  - Bloques de enlaces (Support, Hosting, Airbnb).
  - Idioma y moneda.
  - Redes sociales.
  - Enlaces legales.

### Estados comunes
- Loading/skeleton para cargas simuladas.
- Empty state cuando no hay resultados.
- Error state basico en caso de fallo de datos mock.