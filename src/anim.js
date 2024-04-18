/* ANIM-js CONFIG */
/*
GUIA DE USO:
1. Importa el objeto Anim en tu archivo JavaScript utilizando la instrucción "import":

    import Anim from './ruta/al/archivo/Anim.js';

   Asegúrate de proporcionar la ruta correcta al archivo Anim.js.

2. Utiliza las funciones proporcionadas por Anim para animar elementos HTML de tu página web.

   Ejemplo de uso:

    const elemento = document.getElementById('miElemento');

    // Animación fadeIn
    Anim.fadeIn({
        elemento, duracion: 1000, retraso: 0
    });

    // Animación slideLeft
    Anim.slideLeft
    ({
        elemento, 
        duracion: 500
    });

3. Puedes llamar a estas funciones en respuesta a eventos como clics de mouse, desplazamientos de scroll, etc.

   Ejemplo de uso:

    const boton = document.getElementById('miBoton');

    boton.addEventListener('click', () => {
        Anim.fadeOut
        ({
            elemento, duracion: 500
        });
    });

4. Experimenta con los parámetros de duración y otros parámetros según sea necesario para lograr el efecto deseado.

   Ten en cuenta que algunos efectos, como los que utilizan animaciones CSS, pueden necesitar definiciones adicionales en tu hoja de estilos CSS para funcionar correctamente.

*/
const Anim = {
    fadeIn: ({elemento, duracion, retraso}) => {
        elemento.style.opacity = '0';
        setTimeout(() => {
            elemento.style.transition = `opacity ${duracion}ms`;
            elemento.style.opacity = '1';
        }, retraso);
    },
    fadeOut: ({elemento, duracion}) => {
        elemento.style.transition = `opacity ${duracion}ms`;
        elemento.style.opacity = '0';
    },
    fadeInScrollDown: ({elemento, duracion}) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.lastScrollPosition || window.scrollY === 0) {
                Anim.fadeIn({elemento, duracion});
            }
            window.lastScrollPosition = window.scrollY;
        });
    },
    fadeInScrollUp: ({elemento, duracion}) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < window.lastScrollPosition) {
                Anim.fadeIn({elemento, duracion});
            }
            window.lastScrollPosition = window.scrollY;
        });
    },
    fadeInHover: ({elemento, duracion}) => {
        elemento.addEventListener('mouseenter', () => {
            Anim.fadeIn({elemento, duracion});
        });
    },
    fadeOutHover: ({elemento, duracion}) => {
        elemento.addEventListener('mouseenter', () => {
            Anim.fadeOut({elemento, duracion});
        });
    },
    slideLeft: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = 'translateX(-100%)';
    },
    slideRight: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = 'translateX(100%)';
    },
    slideLeftScroll: ({elemento, duracion}) => {
        window.addEventListener('scroll', () => {
            Anim.slideLeft({elemento, duracion});
        });
    },
    slideRightScroll: ({elemento, duracion}) => {
        window.addEventListener('scroll', () => {
            Anim.slideRight({elemento, duracion});
        });
    },
    rotate: ({elemento, grados, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotate(${grados}deg)`;
    },
    scale: ({elemento, factor, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `scale(${factor})`;
    },
    translate: ({elemento, x, y, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `translate(${x}px, ${y}px)`;
    },
    rotateHover: ({elemento, grados, duracion}) => {
        elemento.addEventListener('mouseenter', () => {
            Anim.rotate({elemento, grados, duracion});
        });
    },
    scaleHover: ({elemento, factor, duracion}) => {
        elemento.addEventListener('mouseenter', () => {
            Anim.scale({elemento, factor, duracion});
        });
    },
    translateHover: ({elemento, x, y, duracion}) => {
        elemento.addEventListener('mouseenter', () => {
            Anim.translate({elemento, x, y, duracion});
        });
    },
    pulse: ({elemento, duracion}) => {
        elemento.style.animation = `pulse ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        `;
    },
    shake: ({elemento, duracion}) => {
        elemento.style.animation = `shake ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(0); }
            75% { transform: translateX(10px); }
            100% { transform: translateX(0); }
        `;
    },
    bounce: ({elemento, duracion}) => {
        elemento.style.animation = `bounce ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
        `;
    },
    spin: ({elemento, duracion}) => {
        elemento.style.animation = `spin ${duracion}ms infinite linear`;
        elemento.style.animationKeyframes = `
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        `;
    },
    swing: ({elemento, duracion}) => {
        elemento.style.animation = `swing ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: rotate(0deg); }
            20% { transform: rotate(15deg); }
            40% { transform: rotate(-10deg); }
            60% { transform: rotate(5deg); }
            80% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
        `;
    },
    flip: ({elemento, duracion}) => {
        elemento.style.animation = `flip ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: perspective(400px) rotateY(0deg); }
            40% { transform: perspective(400px) rotateY(-180deg); }
            100% { transform: perspective(400px) rotateY(-360deg); }
        `;
    },
    heartbeat: ({elemento, duracion}) => {
        elemento.style.animation = `heartbeat ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: scale(1); }
            14% { transform: scale(1.3); }
            28% { transform: scale(1); }
            42% { transform: scale(1.3); }
            70% { transform: scale(1); }
        `;
    },
    rubberBand: ({elemento, duracion}) => {
        elemento.style.animation = `rubberBand ${duracion}ms infinite`;
        elemento.style.animationTimingFunction = 'ease-in-out';
        elemento.style.animationKeyframes = `
            0% { transform: scale(1); }
            30% { transform: scaleX(1.25) scaleY(0.75); }
            40% { transform: scaleX(0.75) scaleY(1.25); }
            50% { transform: scaleX(1.15) scaleY(0.85); }
            65% { transform: scaleX(.95) scaleY(1.05); }
            75% { transform: scaleX(1.05) scaleY(.95); }
            100% { transform: scale(1); }`;
    },
    parallaxScroll: ({elemento, velocidad}) => {
        window.addEventListener('scroll', () => {
            const desplazamiento = window.pageYOffset;
            elemento.style.transform = `translateY(${desplazamiento * velocidad}px)`;
        });
    },
    slideFromBottom: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms, opacity ${duracion}ms`;
        elemento.style.transform = 'translateY(0)';
        elemento.style.opacity = '1';
    },
    slideFromTop: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms, opacity ${duracion}ms`;
        elemento.style.transform = 'translateY(0)';
        elemento.style.opacity = '1';
    },
    zoomIn: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = 'scale(1)';
    },
    zoomOut: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = 'scale(0)';
    },
    rotate3D: ({elemento, x, y, z, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotate3d(${x}, ${y}, ${z}, 180deg)`;
    },
    perspective: ({elemento, p, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `perspective(${p}px)`;
    },
    skew: ({elemento, x, y, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `skew(${x}deg, ${y}deg)`;
    },
    rotateScale: ({elemento, grados, factor, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotate(${grados}deg) scale(${factor})`;
    },
    rotateTranslate: ({elemento, grados, x, y, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotate(${grados}deg) translate(${x}px, ${y}px)`;
    },
    scaleTranslate: ({elemento, factor, x, y, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `scale(${factor}) translate(${x}px, ${y}px)`;
    },
    rotateScaleTranslate: ({elemento, grados, factor, x, y, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotate(${grados}deg) scale(${factor}) translate(${x}px, ${y}px)`;
    },
    flip3D: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotateY(180deg)`;
    },
    cube3D: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotateX(90deg)`;
    },
    sphere3D: ({elemento, duracion}) => {
        elemento.style.transition = `transform ${duracion}ms`;
        elemento.style.transform = `rotateZ(90deg)`;
    },
    typed: function({elemento, textos, colores, velocidad, duracion}) {
        let i = 0;
        let j = 0;
        let currentText = '';
        let isDeleting = false;

        function type() {
            if (i === textos.length) {
                i = 0;
            }
            currentText = isDeleting ? textos[i].substring(0, j - 1) : textos[i].substring(0, j + 1);
            elemento.innerHTML = currentText;
            elemento.style.color = colores[i];

            if (!isDeleting && j === textos[i].length) {
                isDeleting = true;
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i++;
            }

            j = isDeleting ? j - 1 : j + 1;

            if (i === textos.length) {
                i = 0;
            }

            setTimeout(type, velocidad);
        }

        setTimeout(type, duracion);

    },
    crearCarrusel: function(elementos, intervalo, bucle) {
        let indiceActual = 0;

        // Ocultar todos los elementos excepto el primero
        elementos.forEach((elemento, indice) => {
            elemento.style.display = indice === 0 ? 'block' : 'none';
        });

        // Función para pasar al siguiente elemento
        const siguiente = () => {
            elementos[indiceActual].style.display = 'none';
            indiceActual = (indiceActual + 1) % elementos.length;
            elementos[indiceActual].style.display = 'block';
        };

        const idIntervalo = setInterval(siguiente, intervalo);

        if (!bucle) {
            setTimeout(() => {
                clearInterval(idIntervalo);
            }, intervalo * elementos.length);
        }
    }
};
export default Anim