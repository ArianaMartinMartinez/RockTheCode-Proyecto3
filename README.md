# RockTheCode-Proyecto3

## Requisitos

En este proyecto realizaremos una réplica de pinterest. Esta página nos permitirá ver diferentes tipos de imágenes mediante la búsqueda que realice un usuario.

Será un proyecto hecho con VITE, creando componentes para repartir y reutilizar mejor nuestro código.

Utilizaremos la API de unsplash para realizar las peticiones y que nos permita obtener diferentes imágenes según al búsqueda. Esta es la documentación de la API: https://unsplash.com/developers

Lo complicado del proyecto es pelearse con la documentación de la API para encontrar el endpoint idóneo para nuestras peticiones. Todos los datos que aparecen pintados se obtienen mediante la API

TODOS los datos mostrados en el diseño propuesto, se pueden obtener mediante la propia API de Unsplash, incluidas las imágenes de los usuarios de cada foto.

DISEÑO PROPUESTO: https://www.figma.com/design/gLRrcetLfS9KkG2o43qpfB/PROYECTO3?node-id=0-1&t=mq0pGZimhN0ytHEM-1

## Criterios

[] El proyecto cumple con los requisitos mínimos del Proyecto 1 en cuanto al HTML y CSS

    -- HTML

    [] Has creado una estructura HTML semántica donde priman los section y article frente a los div siempre y cuando sea correcto su uso. Estará el contenido envuelto en un main.

    [] La web cuenta con al menos un elemento header o un elemento footer para contenido de navegación o adicional.

    [] Hay al menos un elemento de tipo ul o de tipo ol con varios productos enumerados.

    [] La web tendrá imágenes para al menos 10 productos, puedes copiar su URL de la web original haciendo click derecho > abrir imagen en nueva pestaña > copia la URL de la imagen o con el inspector del navegador.

    [] La web contendrá links a que apunten a los productos originales, recuerda usar el rel="noopener" para añadir links a web externas.

    -- CSS

    [] Se han aplicado estilos globales para añadir box-sizing: border-box; y eliminar el padding y margin del body.

    [] El posicionamiento de los elementos se ha realizado por medio de flex. En su defecto, se habrá podido una grid para esto.

    [] La web cuenta con media queries para hacerla responsive, de forma que se ve el contenido correctamente en móvil menor de 375px y en "escritorio" mayor que mobile.

    [] Punto adicional si haces la web adecuada para tablet, entre los rangos de 375px y 768px.

    [] Existen **variables de CSS** para los colores y tamaños más utilizados.

    [] Se ha configurado el texto para definir estilos generales para los h1, h2, h3, p, span.

    [] Punto adicional si ha cargado fuentes de Google Fonts.

[] Web FULL RESPONSIVE

[] Si no se encuentran imágenes con la frase introducida, se realizará otra petición con la palabra gatos y la sugerencia de utilizar otra frase o palabra para una búsqueda correcta

[] El código está correctamente repartido en componentes

[] Se recogen correctamente los datos correspondientes para conseguir un diseño como el aportado

[] Se limpiará el input después de cada búsqueda para que no moleste hacer una nueva búsqueda

[] Habrá una manera de volver al estado inicial de la página, por ejemplo haciendo click en el propio logo, y que nos muestre la primera petición que se hizo