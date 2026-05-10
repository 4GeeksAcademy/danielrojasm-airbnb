# Identificacion de componentes de catalogo (basada en la imagen)

## Estructura general del layout

- `CatalogPageLayout`
  - Define la pagina completa en vista movil para exploracion de resultados.
  - Distribucion principal:
    - `StickyHeader` (busqueda compacta + accion de filtros)
    - `MapPreview` (mapa resumido con CTA para alternar vista)
    - `ResultsFeed` (lista vertical de propiedades)
    - `InlineSection` (bloque intermedio de recomendados)
    - `BottomNavigation` fija al borde inferior

## Componentes y props

## 1) Header compacto de resultados

### `SearchBarCompact`
- Props:
  - `location: string`
  - `dateRange: string`
  - `guestSummary: string`
  - `onClick: () => void`
  - `icon?: ReactNode`
- Relacion con layout:
  - Se ubica arriba en `StickyHeader`.
  - Muestra el criterio activo de busqueda sin abrir aun la pantalla completa.
- Comentario: comparte objetivo con `SearchBar` de inicio, pero en version resumida para catalogo.

### `FilterActionButton`
- Props:
  - `icon: ReactNode`
  - `onClick: () => void`
  - `ariaLabel?: string`
- Relacion con layout:
  - Va a la derecha de `SearchBarCompact`.
  - Activa filtros avanzados (precio, tipo, amenidades, etc.).

## 2) Preview de mapa

### `MapPreviewCard`
- Props:
  - `mapImage: string`
  - `centerLabel?: string`
  - `pricePins?: Array<{ id: string; label: string; x: number; y: number }>`
  - `onMapClick?: () => void`
- Relacion con layout:
  - Bloque inmediatamente debajo del header.
  - Resume visualmente la distribucion geografica de resultados.

### `MapViewToggle`
- Props:
  - `label: string`
  - `onClick: () => void`
- Relacion con layout:
  - CTA asociado al mapa para alternar entre lista y mapa.
  - En la imagen aparece como accion tipo "Show list homes".

## 3) Feed principal de resultados

### `ResultsFeed`
- Props:
  - `items: ListingItem[]`
  - `isLoading?: boolean`
  - `onReachEnd?: () => void`
- Relacion con layout:
  - Contenedor vertical de tarjetas en `Main`.
  - Coordina scroll infinito/paginacion del catalogo.

### `ListingCardVertical`
- Props:
  - `image: string`
  - `title: string`
  - `distanceText?: string`
  - `dateText?: string`
  - `hostInfo?: string`
  - `priceText: string`
  - `totalPriceText?: string`
  - `rating: number`
  - `reviewCount?: number`
  - `badge?: string`
  - `isFavorite?: boolean`
  - `onToggleFavorite?: () => void`
  - `onClick?: () => void`
- Relacion con layout:
  - Tarjeta repetida en columna dentro de `ResultsFeed`.
  - Es el componente dominante de esta vista.
- Comentario: mismo concepto que `ListingCard` de inicio, adaptado a variante vertical y densidad de datos mayor.

### `ListingImage`
- Props:
  - `src: string`
  - `alt: string`
  - `showDots?: boolean`
  - `isFavorite?: boolean`
  - `badge?: string`
  - `onFavoriteClick?: () => void`
- Relacion con layout:
  - Subcomponente visual de `ListingCardVertical`.
  - Incluye overlay de favorito y puntos de carrusel.
- Comentario: equivalente funcional de `CardImage` en inicio.

### `ListingDetails`
- Props:
  - `title: string`
  - `subtitle?: string`
  - `priceText: string`
  - `totalPriceText?: string`
  - `rating: number`
  - `reviewCount?: number`
- Relacion con layout:
  - Subcomponente textual de `ListingCardVertical`.
- Comentario: equivalente funcional de `CardMeta` en inicio.

### `ResultBadge`
- Props:
  - `text: string`
  - `variant?: "light" | "dark"`
- Relacion con layout:
  - Chip contextual sobre la imagen (ej: "Guest favorite", "Superhost").
- Comentario: reutilizable con el sistema de badges de inicio.

## 4) Bloque intermedio recomendado

### `InlineSection`
- Props:
  - `title: string`
  - `subtitle?: string`
  - `children: ReactNode`
  - `showArrow?: boolean`
  - `onArrowClick?: () => void`
- Relacion con layout:
  - Seccion insertada entre grupos de resultados verticales.
  - En la imagen aparece como "Featured hotels in Madrid".
- Comentario: coincide con el patron `ContentSection` de inicio.

### `HorizontalCardList`
- Props:
  - `items: any[]`
  - `renderItem: (item: any) => ReactNode`
  - `gap?: number`
  - `snap?: boolean`
- Relacion con layout:
  - Hijo de `InlineSection` para cards de recomendacion horizontal.
- Comentario: componente compartido con inicio sin cambios de concepto.

### `ListingCardCompact`
- Props:
  - `image: string`
  - `title: string`
  - `priceText: string`
  - `rating: number`
  - `isFavorite?: boolean`
  - `onToggleFavorite?: () => void`
- Relacion con layout:
  - Tarjeta de menor altura usada en carruseles intermedios.
- Comentario: deriva de `ListingCard` de inicio.

### `SectionActionButton`
- Props:
  - `label: string`
  - `onClick: () => void`
  - `variant?: "outline" | "solid"`
- Relacion con layout:
  - Boton tipo "Search hotels" al final del bloque recomendado.

## 5) Navegacion inferior fija

### `BottomNavigation`
- Props:
  - `items: Array<{ id: string; label: string; icon: ReactNode }>`
  - `activeId: string`
  - `onChange: (id: string) => void`
- Relacion con layout:
  - Barra fija al fondo en vista movil.
- Comentario: compartido con inicio.

### `BottomNavItem`
- Props:
  - `label: string`
  - `icon: ReactNode`
  - `isActive: boolean`
  - `onClick: () => void`
- Relacion con layout:
  - Elemento hijo de `BottomNavigation`.
- Comentario: compartido con inicio.

## Componentes compartidos con inicio (resumen)

- `BottomNavigation` y `BottomNavItem`
- `HorizontalCardList`
- Patron de `ContentSection`/`InlineSection`
- Modelo de tarjeta de listing: `ListingCard` + `CardImage` + `CardMeta` (en catalogo con variante vertical/compacta)
- Sistema de badge/favorito sobre imagen

## Jerarquia sugerida (resumen)

- `CatalogPageLayout`
  - `StickyHeader`
    - `SearchBarCompact`
    - `FilterActionButton`
  - `MapPreviewCard`
    - `MapViewToggle`
  - `ResultsFeed`
    - `ListingCardVertical`
      - `ListingImage`
      - `ListingDetails`
      - `ResultBadge`
  - `InlineSection`
    - `HorizontalCardList`
      - `ListingCardCompact`
    - `SectionActionButton`
  - `BottomNavigation`
    - `BottomNavItem`
