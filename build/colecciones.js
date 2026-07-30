/* Colecciones: páginas que cortan los mismos 336 recursos por otro eje.

   No son duplicados de las páginas de tema: responden a búsquedas distintas.
   Quien busca "cursos de IA gratis" no está buscando "matemática para IA", aunque
   varios recursos aparezcan en las dos páginas. Cada una tiene texto propio y
   ordena por un criterio propio.

   `filtro` corre sobre cada recurso; `orden` es opcional. */

const COLECCIONES = [
  {
    slug: "cursos-de-ia-gratis",
    icon: "🎓",
    filtro: r => (r.type === "curso" || r.type === "video") && r.free,
    nav: "Cursos gratis",
    h1: "Cursos de inteligencia artificial gratis",
    title: "Cursos de IA gratis: los mejores, curados y en orden",
    description: "Los mejores cursos gratuitos de inteligencia artificial y machine learning: Stanford, MIT, fast.ai, Karpathy. Sin registro, sin trampa, ordenados por nivel.",
    intro: `
      <p>
        La parte que sorprende a quien viene de otras disciplinas: en inteligencia artificial el
        material gratuito no es la versión recortada. Es el mejor material que existe. Los cursos de
        Stanford y del MIT están publicados enteros, fast.ai es gratis, y la serie de Karpathy —que
        buena parte de la industria considera el mejor curso práctico del campo— está en YouTube.
      </p>
      <p>
        Acá están todos los cursos y series en video de este sitio que no cuestan nada, ordenados con
        los imprescindibles primero. No hay ninguno que esté acá solo por ser gratis: están porque
        son buenos y además no cuestan.
      </p>
      <p>
        Si no sabés por cuál empezar, la respuesta corta es: 3Blue1Brown para la intuición visual y
        después «Neural Networks: Zero to Hero» de Karpathy escribiendo el código vos. Si querés el
        recorrido completo con un orden pensado, mirá las
        <a href="/rutas/">rutas de aprendizaje</a>.
      </p>`,
    faq: [
      { q: "¿Cuáles son los mejores cursos de IA gratis?",
        a: "«Neural Networks: Zero to Hero» de Andrej Karpathy para construir desde cero, la serie de redes neuronales de 3Blue1Brown para intuición visual, fast.ai para aprender haciendo, y Stanford CS336 si querés el pipeline completo de un modelo de lenguaje. Los cuatro son gratuitos y completos, sin versión paga escondida." },
      { q: "¿Los cursos gratis de IA dan certificado?",
        a: "Casi ninguno de esta lista, y conviene decirlo claro: son cursos universitarios publicados o material de autores independientes. En este campo el portafolio pesa mucho más que el certificado — un repositorio con un modelo que entrenaste vos vale más que cualquier constancia de asistencia." },
      { q: "¿Se puede aprender IA sin pagar nada?",
        a: "Sí, de punta a punta. Los cursos están publicados, los libros de referencia tienen PDF libre, el código de los modelos abiertos está en GitHub, y Google Colab y Kaggle regalan GPUs suficientes para todo el recorrido de aprendizaje." },
    ],
    related: ["matematicas", "deep-learning", "programacion"],
  },

  {
    slug: "libros-de-ia",
    icon: "📚",
    filtro: r => r.type === "libro",
    nav: "Libros",
    h1: "Libros para aprender inteligencia artificial",
    title: "Libros de inteligencia artificial: los que valen la pena",
    description: "Los libros de referencia sobre IA y machine learning, con los que tienen PDF gratuito señalados: Murphy, Prince, Bishop, Mathematics for Machine Learning y más.",
    intro: `
      <p>
        Los libros ocupan un lugar raro en este campo. Envejecen más rápido que en cualquier otra
        disciplina técnica, y sin embargo los buenos siguen siendo la única forma de construir una
        base ordenada, porque un video de YouTube no puede darte la estructura que da un libro.
      </p>
      <p>
        La forma correcta de usarlos casi nunca es leerlos de punta a punta. Son referencia de
        escritorio: se abren cuando algo quedó a medias en un curso o en un paper. Murphy en
        particular está pensado así, y quien intenta leerlo lineal suele abandonarlo en el capítulo
        cuatro.
      </p>
      <p>
        Varios de los mejores tienen PDF gratuito publicado por los propios autores — están marcados
        con la etiqueta «gratis».
      </p>`,
    faq: [
      { q: "¿Cuál es el mejor libro para empezar con machine learning?",
        a: "«Mathematics for Machine Learning» si te falta la base matemática, y «Understanding Deep Learning» de Simon Prince para deep learning moderno. Los dos tienen PDF gratuito y están escritos para que se puedan leer sin un curso de posgrado encima." },
      { q: "¿Hay libros de inteligencia artificial en PDF gratis?",
        a: "Sí, y no son piratería: varios autores de referencia publican el PDF completo en su sitio. Mathematics for Machine Learning, los dos tomos de Kevin Murphy, Understanding Deep Learning y Dive into Deep Learning están disponibles legalmente y gratis." },
      { q: "¿Conviene leer libros o hacer cursos?",
        a: "Cursos para avanzar, libros para consultar. La secuencia que funciona es curso más proyecto propio, con el libro al lado para cuando algo no cierra. Empezar por el libro y leerlo lineal es el camino más frecuente al abandono." },
    ],
    related: ["matematicas", "deep-learning", "ml-clasico"],
  },

  {
    slug: "canales-de-youtube-de-ia",
    icon: "📺",
    filtro: r => r.type === "canal" || r.type === "video",
    nav: "Canales y videos",
    h1: "Canales de YouTube y videos para aprender IA",
    title: "Canales de YouTube de IA: los mejores para aprender",
    description: "Los canales y series en video que realmente enseñan inteligencia artificial: 3Blue1Brown, Karpathy, Yannic Kilcher y más, con qué mirar primero en cada uno.",
    intro: `
      <p>
        YouTube es donde está el mejor material de entrada al campo, y también donde está la mayor
        cantidad de ruido. La diferencia entre un canal que enseña y uno que entretiene con novedades
        es enorme, y no se nota hasta que intentás usar lo que viste.
      </p>
      <p>
        Estos son los canales y series que aguantan: explican mecanismos, no titulares. La mayoría
        tiene subtítulos automáticos en español, que para material técnico funcionan bastante bien
        porque el vocabulario es limitado y repetitivo.
      </p>
      <p>
        Una advertencia que vale más que la lista: mirar videos da una sensación de progreso que no
        siempre se corresponde con aprendizaje. La regla práctica es una hora de código por cada hora
        de video.
      </p>`,
    faq: [
      { q: "¿Cuál es el mejor canal de YouTube para aprender IA?",
        a: "3Blue1Brown para entender visualmente qué es una red neuronal, y Andrej Karpathy para construir una desde cero escribiendo el código. Son los dos más recomendados por gente que efectivamente aprendió, y los dos son gratuitos y completos." },
      { q: "¿Hay canales de IA en español?",
        a: "Sí, hay divulgación técnica de buena calidad en castellano, sobre todo para fundamentos y práctica. Están reunidos en la sección de recursos en español. Para material de punta vas a terminar en canales en inglés, pero los subtítulos automáticos funcionan razonablemente bien con vocabulario técnico." },
    ],
    related: ["medios", "espanol", "cuentas"],
  },

  {
    slug: "papers-de-ia",
    icon: "📄",
    filtro: r => r.type === "paper",
    orden: (a, b) => (a.year || 0) - (b.year || 0),
    nav: "Papers",
    h1: "Papers de IA: los que hay que leer",
    title: "Papers de inteligencia artificial que hay que leer",
    description: "Los papers que definieron la IA moderna, en orden cronológico y con el contexto de por qué importó cada uno. De AlexNet a los modelos de razonamiento.",
    intro: `
      <p>
        Leer papers asusta más de lo que cuesta. El inglés técnico es limitado y repetitivo, la
        estructura es siempre la misma, y después de diez papers el vocabulario deja de ser un
        obstáculo. Lo difícil no es el idioma: es saber cuáles vale la pena leer, porque se publican
        miles por mes y la mayoría no cambia nada.
      </p>
      <p>
        Estos están ordenados <strong>cronológicamente</strong>, que es la forma en que más rinde
        leerlos: cada uno resuelve un problema que dejó abierto el anterior, y esa cadena explica por
        qué el campo tomó las decisiones que tomó. Si querés esa historia narrada en vez de la lista
        cruda, está en la <a href="/temas/papers-clave/">línea de tiempo</a>.
      </p>
      <p>
        Si vas a leer uno solo: «Attention Is All You Need». Si vas a leer cinco, sumá el de GPT-3
        con las leyes de escalado, Chinchilla, InstructGPT y DeepSeek-R1.
      </p>`,
    faq: [
      { q: "¿Por dónde empiezo a leer papers de IA?",
        a: "Por «Attention Is All You Need», pero acompañado: leelo junto a The Illustrated Transformer y The Annotated Transformer, que lo explican visualmente y con código. Leer el paper solo, sin apoyo, es innecesariamente difícil la primera vez." },
      { q: "¿Cómo se lee un paper de machine learning?",
        a: "En tres pasadas. Primero resumen, introducción y conclusiones para saber si te sirve. Después figuras y tablas de resultados, que suelen contar la historia completa. Recién entonces el método en detalle, y solo si vas a implementarlo o a criticarlo. Casi nadie lee papers de forma lineal." },
      { q: "¿Dónde se publican los papers de IA?",
        a: "Mayoritariamente en arXiv, en abierto y antes de cualquier revisión por pares. Las conferencias que importan son NeurIPS, ICML y ICLR, pero en la práctica el campo se mueve por arXiv y por los reportes técnicos que publican los laboratorios." },
    ],
    related: ["papers-clave", "transformers-llm", "arquitecturas"],
  },

  {
    slug: "imprescindibles",
    icon: "★",
    filtro: r => r.top,
    nav: "Imprescindibles",
    h1: "Los recursos imprescindibles para aprender IA",
    title: "Recursos imprescindibles de IA: la lista corta",
    description: "La lista corta: los recursos que elegiría si solo pudiera recomendar unos pocos para aprender inteligencia artificial. Uno o dos por tema, sin relleno.",
    intro: `
      <p>
        Una lista de 336 recursos tiene un problema evidente: es demasiado para empezar. Esta es la
        respuesta a la pregunta que hace todo el mundo — «sí, pero ¿cuáles <em>en serio</em>?».
      </p>
      <p>
        Son los marcados con ★ en el resto del sitio: uno o dos por tema, los que recomendaría alguien
        que ya recorrió el camino si solo pudiera nombrar unos pocos. El criterio no es popularidad,
        es densidad: cuánto entendés por cada hora invertida.
      </p>
      <p>
        Sigue siendo bastante material. Si querés algo todavía más acotado y con un orden,
        elegí una de las <a href="/rutas/">cuatro rutas de aprendizaje</a>: son estos mismos
        recursos, pero secuenciados.
      </p>`,
    faq: [
      { q: "Si solo puedo estudiar una cosa, ¿cuál elijo?",
        a: "«Neural Networks: Zero to Hero» de Andrej Karpathy, escribiendo el código vos en vez de mirarlo. Ninguna otra cosa sola cambia tanto la comprensión de cómo funcionan estos modelos, y es gratis." },
      { q: "¿Cómo se eligieron los recursos imprescindibles?",
        a: "Por densidad de aprendizaje por hora invertida, no por popularidad ni por antigüedad. Se prioriza el material que explica por qué algo funciona sobre el que muestra qué botón apretar, porque el primero sigue siendo válido cinco años después y el segundo caduca en seis meses." },
    ],
    related: ["deep-learning", "transformers-llm", "matematicas"],
  },
];

module.exports = { COLECCIONES };
