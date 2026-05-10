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
- Navbar compacto (busqueda + filtros).
- Header con cantidad de resultados.
- Orden por precio (ascendente/descendente).
- Listado reutilizando ListingCard.
- Mapa placeholder.
- Layout responsive:
  - Movil: mapa debajo del listado.
  - Desktop: mapa al lado derecho.

### 3) Detalle de habitacion (/rooms/[id])
- Navbar de acciones (volver, compartir, favorito).
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
  - Zona derecha: boton de menu de usuario y acciones rapidas.
- Elementos del buscador:
  - Icono de lupa.
  - Placeholder de busqueda.
  - Estado focus/active visible.
  - Boton limpiar texto (cuando hay valor).
- Comportamiento:
  - Sticky en la parte superior.
  - Mantiene altura compacta en scroll.
  - Debe ser reutilizable con variantes por pagina.
- Variantes por pagina:
  - Home: buscador completo.
  - Catalogo: buscador compacto + acceso a filtros.
  - Detalle: barra superior de acciones (volver, compartir, favorito).

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