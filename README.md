# Frontend Developer – Prueba Técnica (30 minutos)
 
## Objetivo
 
Construir un mini‑MVP en **Next.js 14+ (App o Pages Router)** con **TypeScript** que consuma una **API pública real**, que renderice:
- Lista de productos (PLP)
- Detalle de producto (PDP)
- Carrito en estado del cliente
 
Tiempo estimado: **30 minutos**.
 
---
 
## Alcance mínimo requerido
 
### 1) PLP – `/products`
- Consumir una API pública real (elige una):
  - Fake Store API: https://fakestoreapi.com/products
  - OpenFoodFacts: https://world.openfoodfacts.org/api/v2/search?categories_tags_en=snacks&page_size=20
- Renderizado SSR o ISR (`revalidate`).
- Mostrar:
  - Imagen
  - Título
  - Precio
- Paginación simple (client-side o server-side).
 
---
 
### 2) PDP – `/products/[id]`
- Cargar datos desde API real, SSR/ISR.
- Mostrar:
  - Imagen
  - Título
  - Precio
  - Descripción
- Incluir:
  - Breadcrumb básico
  - SEO usando `generateMetadata` (title, description, canonical)
  - JSON‑LD tipo `Product`
 
---
 
### 3) Add to Cart (estado del cliente)
- Botón “Add to cart” en PDP.
- Estado en cliente (Context, Zustand o `useState` en layout).
- Header debe mostrar:
  - Cantidad total
  - Total acumulado
 
---
 
## Estilos & Accesibilidad
- Estilos libres: CSS Modules, Tailwind, styled-components, etc.
- UI legible y responsiva básica.
- Accesibilidad mínima:
  - Alt text
  - Semántica HTML correcta
  - `aria-live="polite"` para notificaciones del carrito
 
---
 
## Estructura sugerida
 
```
app/
  layout.tsx
  products/
    page.tsx
    [id]/
      page.tsx
components/
  ProductCard.tsx
  MiniCart.tsx
  AddToCartButton.tsx
lib/
  api.ts
  cart.tsx
  seo.ts
styles/
  globals.css
```
 
La estructura puede modificarse si lo consideras mejor.
 
---
 
## Cómo correr
 
```
npm install
npm run dev
```
 
Abrir:  
**http://localhost:3000**
 
Opcional: definir  
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
 
---
 
## Qué debes entregar
- Repositorio (GitHub, GitLab o ZIP).
- Este README incluido.
- Al menos **3 commits** con mensajes entendibles.
- Opcional: GIF o screenshot mostrando PLP → PDP → Add to cart.
 
---
 
## Criterios de evaluación (100 pts)
 
| Área | Puntos | Evaluación |
|------|--------|------------|
| Arquitectura Next.js | 20 | Uso correcto de App Router, SSR/ISR y estructura |
| Consumo de API real | 20 | Fetch SSR, tipado, manejo de errores |
| SEO & JSON‑LD | 15 | `generateMetadata`, canonical, JSON‑LD válido |
| UI/UX + Accesibilidad | 15 | Claridad visual, responsive básico, alt/aria |
| Carrito | 15 | Estado consistente, contador, suma correcta |
| Código, TS & Git | 15 | Tipos estrictos, orden, commits claros |
| Bonus | +10 | Paginación SSR, headers de caché, test E2E simple |
 
---
 
## Checklist de validación rápida
 
- [ ] PLP carga productos desde API real  
- [ ] PDP funciona con SSR/ISR  
- [ ] SEO implementado correctamente  
- [ ] JSON‑LD válido en PDP  
- [ ] Add to cart actualiza el header  
- [ ] Código limpio, TS estricto  
- [ ] Commits claros  
 
---
 