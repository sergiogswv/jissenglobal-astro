# Jissen Global - Astro Project

Este proyecto es un sitio web desarrollado con [Astro](https://astro.build/) para **Jissen Global**, una empresa especializada en logística internacional. El sitio está diseñado para ser rápido, eficiente y fácil de mantener, utilizando tecnologías modernas como Astro, TailwindCSS y Resend para la gestión de formularios de contacto.

## 🚀 Características

- **Astro Framework**: Generación de sitios estáticos con un enfoque en el rendimiento.
- **TailwindCSS**: Estilos modernos y personalizables.
- **Gestión de formularios**: Envío de correos electrónicos con la API de Resend.
- **SEO Optimizado**: Metadatos y configuraciones para mejorar la visibilidad en motores de búsqueda.
- **Diseño Responsivo**: Adaptado para dispositivos móviles y de escritorio.

## 📂 Estructura del Proyecto

```plaintext
/
├── public/                # Archivos públicos (favicon, imágenes, etc.)
├── src/                   # Código fuente del proyecto
│   ├── assets/            # Fuentes y otros recursos estáticos
│   ├── components/        # Componentes reutilizables
│   ├── layouts/           # Plantillas de diseño
│   ├── pages/             # Páginas del sitio
│   └── styles/            # Estilos globales
├── .astro/                # Archivos generados por Astro
├── .vscode/               # Configuración de Visual Studio Code
├── node_modules/          # Dependencias instaladas
├── package.json           # Configuración del proyecto y scripts
├── tsconfig.json          # Configuración de TypeScript
├── astro.config.mjs       # Configuración de Astro
└── README.md              # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework para la construcción de sitios web rápidos.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework de CSS para estilos rápidos y personalizables.
- **[Resend](https://resend.com/)**: API para el envío de correos electrónicos.
- **TypeScript**: Tipado estático para JavaScript.
- **Node.js**: Entorno de ejecución para JavaScript.

## 📦 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/jissenglobal-astro.git
   cd jissenglobal-astro
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:

   ```env
   RESEND_API_KEY=tu_clave_api_de_resend
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:4321`.

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera el sitio para producción en la carpeta `dist/`.
- `npm run preview`: Previsualiza el sitio generado.

## 🌐 Páginas Principales

- **Inicio**: Página principal con información sobre los servicios y sectores clave.
- **Sobre Nosotros**: Información sobre la misión, visión e historia de la empresa.
- **Contacto**: Formulario para enviar mensajes y obtener soporte.

## 📧 Gestión de Formularios

El formulario de contacto utiliza la API de Resend para enviar correos electrónicos. El archivo relevante es [`src/pages/api/contact.ts`](src/pages/api/contact.ts).

## 🖼️ Componentes Clave

- **Welcome**: Banner principal con animaciones.
- **Services**: Sección que muestra los servicios ofrecidos.
- **Footer**: Pie de página con información adicional.
- **Form**: Formulario de contacto con validación.

## 🌟 Estilos

Los estilos globales están definidos en [`src/styles/global.css`](src/styles/global.css) y utilizan TailwindCSS para una personalización rápida y eficiente.

## 🛡️ Configuración de SEO

El archivo [`src/layouts/Layout.astro`](src/layouts/Layout.astro) incluye metadatos para optimizar el SEO del sitio, como etiquetas `meta` para Open Graph y Twitter Cards.

## 🗺️ Sitemap

El proyecto genera automáticamente un sitemap utilizando la integración de Astro con `@astrojs/sitemap`.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz un push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Contacto

Si tienes preguntas o necesitas soporte, por favor contacta a [soporte@jissenglobal.com](mailto:soporte@jissenglobal.com).

¡Gracias por visitar nuestro proyecto!