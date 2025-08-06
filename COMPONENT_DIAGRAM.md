# 🏗️ Diagrama de Arquitectura de Componentes - E-commerce App

## 📊 Diagrama Visual de la Aplicación

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                    🚀 APP.JSX                                    │
│                              (Componente Principal)                              │
│                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────┐ │
│  │                    🔄 REACT ROUTER (Browser Router)                       │ │
│  │                                                                           │ │
│  │  ┌─────────────────────────────────────────────────────────────────────┐ │ │
│  │  │                    🏪 CONTEXT PROVIDERS                             │ │ │
│  │  │                                                                     │ │ │
│  │  │  ┌─────────────────────┐    ┌─────────────────────────────────────┐ │ │ │
│  │  │  │  🛒 CartContext     │    │  👤 UserProgressContext            │ │ │ │
│  │  │  │  - products[]       │    │  - progress (cart/checkout)        │ │ │ │
│  │  │  │  - addToCart()      │    │  - showCart()                      │ │ │ │
│  │  │  │  - removeFromCart() │    │  - hideCart()                      │ │ │ │
│  │  │  │  - clearCart()      │    │  - showCheckout()                  │ │ │ │
│  │  │  └─────────────────────┘    └─────────────────────────────────────┘ │ │ │
│  │  │                                                                     │ │ │
│  │  └─────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                🏠 ROOT.JSX                                       │
│                              (Layout Principal)                                  │
│                                                                                 │
│  ┌─────────────────────┐                                                       │
│  │    📋 HEADER        │                                                       │
│  │  - Logo             │                                                       │
│  │  - Search Bar       │                                                       │
│  │  - Cart Button      │                                                       │
│  │  - FontAwesome      │                                                       │
│  └─────────────────────┘                                                       │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                            📱 OUTLET                                     │   │
│  │                      (React Router Outlet)                              │   │
│  │                                                                         │   │
│  │    📄 HomePage.jsx          OR          📦 ProductDetail.jsx            │   │
│  │                                                                         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────┐                                                       │
│  │    🦶 FOOTER        │                                                       │
│  │  - Links            │                                                       │
│  │  - Copyright        │                                                       │
│  └─────────────────────┘                                                       │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                          🛒 CART (Modal)                                │   │
│  │                     (Conditional Rendering)                             │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              🏠 HOMEPAGE.JSX                                     │
│                            (Página Principal)                                    │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                          🎯 HERO SECTION                                │   │
│  │                      - Banner Principal                                 │   │
│  │                      - Call to Action                                   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      📦 PRODUCTS SECTION                                │   │
│  │                                                                         │   │
│  │  ┌─────────────────────┐    ┌─────────────────────────────────────────┐ │   │
│  │  │   🔍 FILTERS        │    │         🛍️ PRODUCTS GRID               │ │   │
│  │  │   SIDEBAR           │    │                                         │ │   │
│  │  │                     │    │  ┌─────────────────────────────────────┐ │ │   │
│  │  │ - FilterBar         │    │  │        📋 Products.jsx              │ │ │   │
│  │  │ - Categories        │    │  │                                     │ │ │   │
│  │  │ - Price Range       │    │  │  [Product] [Product] [Product]      │ │ │   │
│  │  │ - Brand Filter      │    │  │  [Product] [Product] [Product]      │ │ │   │
│  │  │                     │    │  │  [Product] [Product] [Product]      │ │ │   │
│  │  └─────────────────────┘    │  │                                     │ │ │   │
│  │                             │  └─────────────────────────────────────┘ │ │   │
│  │                             └─────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            🛍️ PRODUCTS.JSX                                      │
│                        (Lista de Productos)                                     │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      🌐 API INTEGRATION                                  │   │
│  │                                                                         │   │
│  │  📡 api.jsx                                                             │   │
│  │  - getFashionProducts()                                                 │   │
│  │  - getProducts()                                                        │   │
│  │  - DummyJSON API                                                        │   │
│  │                                                                         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    📦 PRODUCT GRID                                      │   │
│  │                                                                         │   │
│  │  [Product Card] [Product Card] [Product Card]                          │   │
│  │  [Product Card] [Product Card] [Product Card]                          │   │
│  │  [Product Card] [Product Card] [Product Card]                          │   │
│  │                                                                         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            📦 PRODUCT.JSX                                       │
│                          (Tarjeta Individual)                                   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                       🖼️ PRODUCT CARD                                   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────┐                                               │   │
│  │  │   📸 Image          │                                               │   │
│  │  │   - Thumbnail       │                                               │   │
│  │  └─────────────────────┘                                               │   │
│  │                                                                         │   │
│  │  📝 Product Info:                                                       │   │
│  │  - Title                                                                │   │
│  │  - Price                                                                │   │
│  │  - Description                                                          │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                🔘 BUTTON COMPONENT                              │   │   │
│  │  │                                                                 │   │   │
│  │  │  🛒 "Agregar al Carrito"                                        │   │   │
│  │  │  - Primary Variant                                              │   │   │
│  │  │  - onClick: addProductToCart()                                  │   │   │
│  │  │  - Integrates with CartContext                                  │   │   │
│  │  │                                                                 │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                            🛒 CART.JSX                                          │
│                         (Modal de Carrito)                                      │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      🪟 MODAL WRAPPER                                   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                    📋 CART HEADER                               │   │   │
│  │  │  🛒 "Shopping Cart"                                             │   │   │
│  │  │  ❌ Close Button                                                │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                  📦 CART PRODUCTS LIST                          │   │   │
│  │  │                                                                 │   │   │
│  │  │  [CartProduct Item]                                             │   │   │
│  │  │  [CartProduct Item]                                             │   │   │
│  │  │  [CartProduct Item]                                             │   │   │
│  │  │                                                                 │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                   💰 CART TOTAL                                 │   │   │
│  │  │  Total: $XXX.XX                                                 │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                  🔘 ACTION BUTTONS                              │   │   │
│  │  │                                                                 │   │   │
│  │  │  [Close] [Clear Cart] [Checkout]                                │   │   │
│  │  │                                                                 │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        🛍️ CARTPRODUCT.JSX                                      │
│                       (Item Individual del Carrito)                            │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                     📦 CART ITEM CARD                                   │   │
│  │                                                                         │   │
│  │  ┌─────────────┐  📝 Product Info          🔢 Quantity Controls         │   │
│  │  │   📸 Image  │  - Name                   [−] [2] [+]                  │   │
│  │  │   Thumbnail │  - Price                                               │   │
│  │  │             │  - Quantity                                            │   │
│  │  └─────────────┘                                                        │   │
│  │                                                                         │   │
│  │  🗑️ Remove Option                                                       │   │
│  │                                                                         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                          🔧 SHARED COMPONENTS                                   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        🔘 BUTTON.JSX                                    │   │
│  │                      (Componente Reutilizable)                          │   │
│  │                                                                         │   │
│  │  🎨 Variants:                                                           │   │
│  │  - primary (azul)                                                       │   │
│  │  - secondary (gris)                                                     │   │
│  │  - danger (rojo)                                                        │   │
│  │  - success (verde)                                                      │   │
│  │                                                                         │   │
│  │  ⚙️ Props:                                                              │   │
│  │  - variant, size, disabled, onClick, children                          │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        🪟 MODAL.JSX                                     │   │
│  │                      (Componente Reutilizable)                          │   │
│  │                                                                         │   │
│  │  🔧 Features:                                                           │   │
│  │  - HTML5 Dialog Element                                                 │   │
│  │  - React Portal                                                         │   │
│  │  - Backdrop Click to Close                                              │   │
│  │  - ESC Key Support                                                      │   │
│  │  - Custom Styling                                                       │   │
│  │                                                                         │   │
│  │  ⚙️ Props:                                                              │   │
│  │  - open, onClose, title, showCloseButton, children                     │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 🏗️ Arquitectura de Datos y Estado

```
📊 STATE MANAGEMENT FLOW

┌─────────────────────────────────────────────────────────────────────────────────┐
│                            🔄 CONTEXT API FLOW                                  │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      🛒 CartContext.jsx                                 │   │
│  │                                                                         │   │
│  │  📦 State (useReducer):                                                 │   │
│  │  - products: []                                                         │   │
│  │                                                                         │   │
│  │  🔧 Actions:                                                            │   │
│  │  - ADD_PRODUCT    → Agrega producto al carrito                         │   │
│  │  - REMOVE_PRODUCT → Remueve producto del carrito                       │   │
│  │  - CLEAR_CART     → Limpia todo el carrito                             │   │
│  │                                                                         │   │
│  │  🎯 Functions:                                                          │   │
│  │  - addToCart()                                                          │   │
│  │  - removeFromCart()                                                     │   │
│  │  - clearCart()                                                          │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                  👤 UserProgressContext.jsx                            │   │
│  │                                                                         │   │
│  │  📦 State:                                                              │   │
│  │  - progress: '' | 'cart' | 'checkout'                                  │   │
│  │                                                                         │   │
│  │  🎯 Functions:                                                          │   │
│  │  - showCart()    → progress = 'cart'                                   │   │
│  │  - hideCart()    → progress = ''                                       │   │
│  │  - showCheckout() → progress = 'checkout'                              │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘

📡 API INTEGRATION

┌─────────────────────────────────────────────────────────────────────────────────┐
│                              🌐 api.jsx                                         │
│                                                                                 │
│  🔗 Base URL: https://dummyjson.com/products                                   │
│                                                                                 │
│  📋 Functions:                                                                  │
│  - getProducts()        → Fetch all products                                   │
│  - getFashionProducts() → Fetch fashion category products                      │
│                                                                                 │
│  🎯 Used by:                                                                    │
│  - Products.jsx (useEffect hook)                                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 📁 Estructura de Archivos Organizada

```
src/
├── 🚀 App.jsx                    # Componente principal con routing
├── 🎯 main.jsx                   # Entry point
├── 🎨 App.module.css             # Estilos globales
├── 🌍 global.css                 # CSS global reset
│
├── 📄 pages/
│   ├── HomePage.jsx              # Página principal
│   └── ProductDetail.jsx         # Página de detalle de producto
│
├── 🏗️ layout/
│   └── Root.jsx                  # Layout principal con Header/Footer
│
├── 🗃️ store/
│   ├── CartContext.jsx           # Estado global del carrito
│   └── UserProgressContext.jsx   # Estado de navegación/modals
│
├── 🌐 services/
│   └── api.jsx                   # Servicios de API
│
└── 🧩 components/
    ├── Button/
    │   ├── Button.jsx            # Componente button reutilizable
    │   └── Button.module.css
    │
    ├── CartComponent/
    │   ├── Cart.jsx              # Modal del carrito
    │   └── Cart.module.css
    │
    ├── CartProduct/
    │   ├── CartProduct.jsx       # Item individual del carrito
    │   └── CartProduct.module.css
    │
    ├── Footer/
    │   └── Footer.jsx            # Footer de la aplicación
    │
    ├── Header/
    │   ├── Header.jsx            # Header con navegación
    │   └── Header.module.css
    │
    ├── Hero/
    │   ├── Hero.jsx              # Sección hero de la homepage
    │   └── HomePage.module.css   # Estilos compartidos
    │
    ├── Modal/
    │   ├── Modal.jsx             # Componente modal reutilizable
    │   └── Modal.module.css
    │
    ├── Product/
    │   └── Product.jsx           # Tarjeta de producto individual
    │
    ├── products/
    │   └── Products.jsx          # Lista/grid de productos
    │
    └── filters/
        ├── FilterBar.jsx         # Barra de filtros
        └── FilterBar.module.css
```

## 🔄 Flujo de Datos

```
USER INTERACTION FLOW:

1. 👤 Usuario → 🏠 HomePage
2. 📦 Products.jsx → 🌐 API Call (getFashionProducts)
3. 🛍️ Product Cards → 🔘 "Agregar al Carrito" Button
4. 🛒 CartContext → ADD_PRODUCT Action
5. 📋 Header → Cart Button (shows cart count)
6. 🪟 Modal → Cart.jsx (lista de CartProduct)
7. 🧮 CartProduct → Quantity Controls
8. 💳 Checkout Process (futuro)
```

Este diagrama muestra la estructura completa de tu aplicación e-commerce con todos los componentes, el flujo de datos, y la organización de archivos actual. ¡Tu aplicación tiene una arquitectura muy bien estructurada! 🎉
