![alt text](src/nimT.png)

# Animt-js

**animt-js** es una biblioteca de animaciones en JavaScript diseñada para llevar tus proyectos web al siguiente nivel. Con mas 50 de efectos de animación y una fácil integración, animt-js te ofrece:

1. **Variedad de efectos:** Desde deslumbrantes transiciones hasta sorprendentes efectos visuales, animt-js ofrece una amplia variedad de efectos de animación para adaptarse a cualquier proyecto.
2. **Fácil de usar:** Con una sintaxis simple y clara, integrar animaciones en tu proyecto nunca ha sido tan sencillo. Simplemente importa la biblioteca y comienza a añadir vida a tu sitio web.
3. **Personalización:** Personaliza cada animación para que se adapte perfectamente a tus necesidades. Controla la duración, el retraso y otros parámetros para obtener el efecto deseado.
4. **Experiencia del usuario mejorada:** Con animaciones suaves y envolventes, animt-js mejora la experiencia del usuario al hacer que tu sitio web sea más atractivo y dinámico.

## Instalación

Puedes instalar **animt-js** utilizando npm. Para ello, ejecuta el siguiente comando en la terminal:

```bash
npm install animt-js
```

## Uso

Para comenzar a utilizar **animt-js** en tu proyecto, simplemente importa la biblioteca en tu archivo JavaScript y comienza a utilizar las funciones de animación según tus necesidades.

```javascript
import AnimtJS from "animt-js";

const miElemento = document.querySelector(".contenedor");

// Ejemplo de uso de la función fadeIn
AnimtJS.fadeIn({
  elemento: miElemento,
  duracion: 1000,
  retraso: 500,
});
```

## Características principales

- Amplia gama de efectos de animación: **animt-js** proporciona una variedad de efectos de animación, incluidos fadeIn, fadeOut, slideLeft, slideRight, rotate, scale, entre otros, para adaptarse a diferentes necesidades de diseño.

- Fácil integración: Con una simple importación, puedes comenzar a agregar animaciones a tu proyecto sin problemas.

- Personalizable: Las animaciones pueden personalizarse con diferentes duraciones, retrasos y otros parámetros para adaptarse a tus necesidades específicas de diseño y UX.

## Contribuciones

¡Las contribuciones son bienvenidas y apreciadas! Si deseas contribuir a **animt-js**, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y realiza commit de ellos (`git commit -am 'Agrega una nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

Por favor, asegúrate de seguir las pautas de contribución del proyecto.

## Licencia

**animt-js** está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
