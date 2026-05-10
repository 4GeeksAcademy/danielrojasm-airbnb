# Identificacion de componentes de producto (basada en la imagen)

## Estructura general del layout

- `ProductPageLayout`
  - Define la pagina completa en vista movil para detalle de un alojamiento.
  - Distribucion principal:
    - `StickyTopBar` (acciones rapidas sobre la galeria)
    - `Main` (contenido largo en scroll vertical)
    - `StickyBookingBar` fija al borde inferior

## Componentes y props

## 1) Header flotante sobre galeria

### `StickyTopBar`
- Props:
  - `leftAction: { icon: ReactNode; onClick: () => void; ariaLabel?: string }`
  - `rightActions: Array<{ id: string; icon: ReactNode; onClick: () => void; ariaLabel?: string }>`
  - `isTransparent?: boolean`
- Relacion con layout:
  - Se muestra sobre la imagen principal en la parte superior.
  - Mantiene accesos de volver, compartir y favorito.

### `HeroGallery`
- Props:
  - `images: Array<{ id: string; src: string; alt: string }>`
  - `activeIndex: number`
  - `onChange: (index: number) => void`
  - `showDots?: boolean`
- Relacion con layout:
  - Primer bloque visual de `Main`.
  - Presenta fotos del alojamiento en formato carrusel.
- Comentario: comparte patron visual con `ListingImage` y `CardImage` (catalogo/inicio), pero en formato hero.

## 2) Resumen del alojamiento

### `ProductHeader`
- Props:
  - `title: string`
  - `subtitle?: string`
  - `rating: number`
  - `reviewCount: number`
  - `locationText: string`
- Relacion con layout:
  - Seccion inmediatamente despues de la galeria.
  - Resume el producto antes de los detalles largos.

### `HostSummaryRow`
- Props:
  - `hostName: string`
  - `hostTypeText: string`
  - `guestCapacity: string`
  - `roomsText: string`
  - `bedsText: string`
  - `bathsText: string`
  - `hostAvatar?: string`
- Relacion con layout:
  - Bloque de datos rapidos del anfitrion y capacidad.

### `FeatureHighlights`
- Props:
  - `items: Array<{ id: string; icon: ReactNode; title: string; description?: string }>`
- Relacion con layout:
  - Lista de ventajas clave (self check-in, cancellation, etc.).

## 3) Contenido descriptivo

### `TranslationNotice`
- Props:
  - `text: string`
  - `actionLabel?: string`
  - `onActionClick?: () => void`
- Relacion con layout:
  - Aviso previo a la descripcion cuando hay traduccion automatica.

### `ExpandableDescription`
- Props:
  - `text: string`
  - `collapsedLines?: number`
  - `isExpanded: boolean`
  - `onToggle: () => void`
  - `showMoreLabel?: string`
  - `showLessLabel?: string`
- Relacion con layout:
  - Texto largo del alojamiento con control "Show more".

### `ReviewPreview`
- Props:
  - `averageScore: number`
  - `reviewCount: number`
  - `sampleReview: { author: string; date: string; text: string; avatar?: string }`
  - `onOpenAllReviews?: () => void`
- Relacion con layout:
  - Resumen social antes de amenities.

## 4) Amenidades y ubicacion

### `AmenitiesSection`
- Props:
  - `title: string`
  - `items: Array<{ id: string; label: string; icon: ReactNode }>`
  - `totalCount?: number`
  - `onShowAll?: () => void`
- Relacion con layout:
  - Lista de facilidades visibles + CTA para ver todas.

### `LocationSection`
- Props:
  - `title: string`
  - `locationLabel: string`
  - `mapImage: string`
  - `onMapClick?: () => void`
- Relacion con layout:
  - Bloque geografico con mini mapa.
- Comentario: reutiliza el enfoque de `MapPreviewCard` del catalogo.

### `StayDateSection`
- Props:
  - `title: string`
  - `checkInDate: string`
  - `checkOutDate: string`
  - `calendarMonth: string`
  - `blockedDates?: string[]`
  - `selectedRange?: { start: string; end: string }`
  - `onDateChange?: (start: string, end: string) => void`
  - `onClearDates?: () => void`
- Relacion con layout:
  - Seccion para disponibilidad del alojamiento en calendario.

## 5) Confianza y anfitrion

### `HostProfileCard`
- Props:
  - `name: string`
  - `avatar: string`
  - `yearsHosting?: number`
  - `identityVerified?: boolean`
  - `stats: Array<{ label: string; value: string }>`
  - `aboutText?: string`
  - `onMessageHost?: () => void`
- Relacion con layout:
  - Tarjeta de perfil del anfitrion con metrica y accion principal.

### `HostPolicies`
- Props:
  - `responseRate?: string`
  - `responseTime?: string`
  - `houseRules?: string[]`
  - `safetyInfo?: string[]`
- Relacion con layout:
  - Informacion de comportamiento del anfitrion y normas.

### `PlatformNotice`
- Props:
  - `text: string`
  - `linkLabel?: string`
  - `onLinkClick?: () => void`
- Relacion con layout:
  - Mensaje legal/contextual sobre privacidad y reservas.

## 6) Secciones de descubrimiento y politicas

### `NearbyStaysSection`
- Props:
  - `title: string`
  - `items: Array<{ id: string; image: string; title: string; distance?: string; priceText: string; rating?: number }>`
  - `onItemClick?: (id: string) => void`
- Relacion con layout:
  - Carrusel de propiedades similares.
- Comentario: comparte patron de `HorizontalCardList` + tarjeta compacta (inicio/catalogo).

### `ThingsToKnowSection`
- Props:
  - `items: Array<{ id: string; icon: ReactNode; title: string; description: string }>`
  - `onReportListing?: () => void`
- Relacion con layout:
  - Bloque de reglas de casa, seguridad y cancelacion.

### `LocationBreadcrumb`
- Props:
  - `items: Array<{ id: string; label: string; onClick?: () => void }>`
- Relacion con layout:
  - Navegacion contextual por ciudad/zona debajo de reglas.

### `ExploreLinksSection`
- Props:
  - `title: string`
  - `links: Array<{ label: string; href: string; sublabel?: string }>`
- Relacion con layout:
  - Bloques de enlaces para explorar otras opciones y tipos de estadia.

## 7) Barra fija de reserva

### `StickyBookingBar`
- Props:
  - `priceTotalText: string`
  - `dateSummary: string`
  - `onReserve: () => void`
  - `ctaLabel?: string`
  - `isDisabled?: boolean`
- Relacion con layout:
  - Fija al fondo de la pantalla.
  - Mantiene visible el precio total y la accion de reserva.

## Componentes compartidos con inicio/catalogo (resumen)

- Base de imagen con overlays: `HeroGallery` reutiliza ideas de `CardImage`/`ListingImage`.
- Patron de carrusel horizontal: `NearbyStaysSection` puede apoyarse en `HorizontalCardList`.
- Patron de tarjeta de listing compacta para recomendaciones.
- Patron de mapa: `LocationSection` y `MapPreviewCard` comparten estructura.

## Jerarquia sugerida (resumen)

- `ProductPageLayout`
  - `StickyTopBar`
  - `Main`
    - `HeroGallery`
    - `ProductHeader`
    - `HostSummaryRow`
    - `FeatureHighlights`
    - `TranslationNotice`
    - `ExpandableDescription`
    - `ReviewPreview`
    - `AmenitiesSection`
    - `LocationSection`
    - `StayDateSection`
    - `HostProfileCard`
    - `HostPolicies`
    - `PlatformNotice`
    - `NearbyStaysSection`
    - `ThingsToKnowSection`
    - `LocationBreadcrumb`
    - `ExploreLinksSection`
  - `StickyBookingBar`
