# Identificacion de componentes de inicio (basada en la imagen)

## Estructura general del layout

- `HomePageLayout`
  - Define la pagina completa en vista movil.
  - Distribucion principal:
    - `Header` (busqueda + tabs superiores)
    - `Main` (bloques de contenido en scroll vertical)
    - `Footer` (enlaces corporativos)
    - `BottomNavigation` fija al borde inferior

## Componentes y props

## 1) Header y navegacion superior

### `SearchBar`
- Props:
  - `placeholder: string`
  - `icon: ReactNode`
  - `onClick: () => void`
  - `ariaLabel?: string`
- Relacion con layout:
  - Va en la parte superior dentro del `Header`.
  - Componente de entrada principal para navegacion por busqueda.

### `TopCategoryTabs`
- Props:
  - `items: Array<{ id: string; label: string; isNew?: boolean }>`
  - `activeId: string`
  - `onChange: (id: string) => void`
- Relacion con layout:
  - Debajo de `SearchBar` en el `Header`.
  - Define el contexto global de contenido (Homes, Experiences, Services).

### `TopCategoryTab`
- Props:
  - `label: string`
  - `isActive: boolean`
  - `isNew?: boolean`
  - `onClick: () => void`
- Relacion con layout:
  - Elemento hijo de `TopCategoryTabs`.

## 2) Cuerpo principal por secciones

### `ContentSection`
- Props:
  - `title: string`
  - `subtitle?: string`
  - `showArrow?: boolean`
  - `onArrowClick?: () => void`
  - `children: ReactNode`
- Relacion con layout:
  - Bloque reutilizable en `Main` para agrupar listas horizontales.
  - Se usa en "Popular homes in Madrid", "Featured hotels in Madrid", "Stay in Granada", "Popular experiences nearby".

### `HorizontalCardList`
- Props:
  - `items: any[]`
  - `renderItem: (item: any) => ReactNode`
  - `gap?: number`
  - `snap?: boolean`
- Relacion con layout:
  - Hijo de `ContentSection`.
  - Implementa carruseles desplazables horizontalmente.

### `ListingCard`
- Props:
  - `image: string`
  - `title: string`
  - `date?: string`
  - `typeLabel?: string`
  - `priceText: string`
  - `rating: number`
  - `isFavorite?: boolean`
  - `badge?: string`
  - `onToggleFavorite?: () => void`
  - `onClick?: () => void`
- Relacion con layout:
  - Tarjeta principal dentro de `HorizontalCardList` para alojamientos/experiencias.

### `CardImage`
- Props:
  - `src: string`
  - `alt: string`
  - `badge?: string`
  - `isFavorite?: boolean`
  - `onFavoriteClick?: () => void`
- Relacion con layout:
  - Subcomponente visual de `ListingCard`.
  - Controla overlay de "heart" y chips como "Guest favorite" o "Popular".

### `CardMeta`
- Props:
  - `title: string`
  - `subtitle?: string`
  - `priceText: string`
  - `rating: number`
- Relacion con layout:
  - Subcomponente textual de `ListingCard` debajo de la imagen.

## 3) Seccion de inspiracion

### `InspirationSection`
- Props:
  - `title: string`
  - `tabs: Array<{ id: string; label: string }>`
  - `activeTab: string`
  - `onTabChange: (id: string) => void`
  - `destinations: Array<{ name: string; category: string }>`
  - `onShowMore?: () => void`
- Relacion con layout:
  - Seccion completa dentro de `Main` tras los carruseles.
  - Combina tabs secundarios y grid/lista de destinos.

### `SimpleTabs`
- Props:
  - `items: Array<{ id: string; label: string }>`
  - `activeId: string`
  - `onChange: (id: string) => void`
- Relacion con layout:
  - Subcomponente de `InspirationSection` para filtro por tema.

### `DestinationList`
- Props:
  - `items: Array<{ name: string; category: string }>`
  - `columns?: 2 | 3`
  - `showMoreLabel?: string`
  - `onShowMore?: () => void`
- Relacion con layout:
  - Lista de destinos en columnas dentro de `InspirationSection`.

## 4) Footer informativo

### `FooterLinkGroup`
- Props:
  - `title: string`
  - `links: Array<{ label: string; href: string }>`
- Relacion con layout:
  - Grupo de enlaces dentro del `Footer`.
  - En la imagen aparecen grupos como Support, Hosting y Airbnb.

### `LocaleCurrencySelector`
- Props:
  - `language: string`
  - `currency: string`
  - `onLanguageClick?: () => void`
  - `onCurrencyClick?: () => void`
- Relacion con layout:
  - Zona inferior del `Footer` para configuracion regional.

### `SocialLinks`
- Props:
  - `items: Array<{ platform: string; href: string; icon: ReactNode }>`
- Relacion con layout:
  - Parte baja del `Footer`, junto a copyright/legal.

## 5) Navegacion inferior fija

### `BottomNavigation`
- Props:
  - `items: Array<{ id: string; label: string; icon: ReactNode }>`
  - `activeId: string`
  - `onChange: (id: string) => void`
- Relacion con layout:
  - Barra fija al fondo del viewport movil.
  - Permanece visible mientras `Main` hace scroll.

### `BottomNavItem`
- Props:
  - `label: string`
  - `icon: ReactNode`
  - `isActive: boolean`
  - `onClick: () => void`
- Relacion con layout:
  - Elemento hijo de `BottomNavigation`.

## Jerarquia sugerida (resumen)

- `HomePageLayout`
  - `Header`
    - `SearchBar`
    - `TopCategoryTabs`
      - `TopCategoryTab`
  - `Main`
    - `ContentSection`
      - `HorizontalCardList`
        - `ListingCard`
          - `CardImage`
          - `CardMeta`
    - `InspirationSection`
      - `SimpleTabs`
      - `DestinationList`
  - `Footer`
    - `FooterLinkGroup` (x3)
    - `LocaleCurrencySelector`
    - `SocialLinks`
  - `BottomNavigation`
    - `BottomNavItem` (x3)
