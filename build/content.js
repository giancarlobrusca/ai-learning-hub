/* Contenido largo escrito a mano: portada, línea de tiempo, sección de futuro y la
   guía pilar. Vive acá y no en el HTML porque el HTML ahora se genera. */

/* --------------------------------------------------------------------------
   PORTADA
   -------------------------------------------------------------------------- */

const HOME = {
  h1: `Recursos para aprender<br><em>inteligencia artificial</em>`,
  title: "Recursos para aprender IA en español | AI Learning Hub",
  description: "336 recursos curados para aprender inteligencia artificial en español: cursos gratis, papers, libros y rutas paso a paso, de la matemática básica a entrenar modelos.",
  lede: `
    Una colección curada de <strong>recursos para aprender inteligencia artificial</strong>: desde la
    matemática que hay debajo hasta cómo se entrena un modelo frontera, cómo se lo alinea, cómo se lo sirve
    y qué se discute hoy sobre lo que viene. Cada recurso está acá porque alguien lo usó para aprender de
    verdad, no porque aparezca en una lista de listas.`,

  /* Bloque de texto bajo el hero: es el que carga las palabras clave principales
     de forma natural y le dice a Google exactamente de qué se trata el sitio. */
  intro: `
    <h2>Qué vas a encontrar acá</h2>
    <p>
      Aprender IA en 2026 no tiene un problema de escasez: tiene un problema de exceso. Hay miles de cursos,
      cientos de canales y una cantidad absurda de listas que se copian entre sí. El resultado es que
      empezar se volvió más difícil, no más fácil. Este sitio existe para resolver ese problema concreto:
      <strong>336 recursos revisados uno por uno</strong>, organizados en 22 temas y cuatro rutas de
      aprendizaje según de dónde venís.
    </p>
    <p>
      Está pensado para el público hispanohablante —Argentina, México, Colombia, Chile, España y donde sea
      que estés leyendo esto— y todo el material propio está en castellano. Los recursos enlazados están
      mayoritariamente en inglés, porque ahí está lo mejor, pero hay una
      <a href="/temas/espanol/">sección completa de recursos de IA en español</a> y podés filtrar por idioma
      en cualquier momento.
    </p>
    <h2>Cómo usar este sitio</h2>
    <ul>
      <li><strong>Si estás empezando:</strong> elegí una de las <a href="/rutas/">cuatro rutas de aprendizaje</a> y seguila en orden. El error más común es estudiar por todos lados a la vez.</li>
      <li><strong>Si buscás algo puntual:</strong> usá el buscador (tecla <kbd>/</kbd>) o filtrá por tipo, nivel, gratuidad o idioma.</li>
      <li><strong>Si querés orientarte primero:</strong> leé la <a href="/guia/como-aprender-ia-desde-cero/">guía sobre cómo aprender IA desde cero</a>, que explica el método antes que el material.</li>
      <li><strong>Si ya sabés y querés profundizar:</strong> filtrá por nivel avanzado, o entrá directo al tema que te interesa desde el menú lateral.</li>
    </ul>`,

  faq: [
    { q: "¿Cuáles son los mejores recursos para aprender inteligencia artificial?",
      a: "Depende de tu punto de partida, pero hay un consenso bastante sólido: la serie de redes neuronales de 3Blue1Brown para intuición visual, «Neural Networks: Zero to Hero» de Andrej Karpathy para construir desde cero, fast.ai o la especialización de Andrew Ng para un curso completo, y «Attention Is All You Need» junto a The Illustrated Transformer para entender los modelos actuales. Este sitio reúne esos y otros 330 recursos organizados por tema y nivel." },
    { q: "¿Se puede aprender IA gratis?",
      a: "Sí, y no como versión recortada: buena parte del mejor material del campo es gratuito. Los cursos de Stanford y el MIT están publicados, los libros de referencia tienen PDF libre, el código de los modelos abiertos está en GitHub y las GPUs de Colab y Kaggle alcanzan para aprender. En este sitio podés filtrar por recursos gratuitos." },
    { q: "¿Cuánto tiempo lleva aprender inteligencia artificial?",
      a: "Con unas diez horas semanales sostenidas: tres a seis meses para entender los fundamentos y entrenar modelos propios, alrededor de un año para leer papers con comodidad, y uno a dos años para contribuir con investigación. Si tu objetivo es construir productos con modelos ya entrenados y ya programás, uno a tres meses alcanzan." },
    { q: "¿Necesito saber programar para aprender IA?",
      a: "Para entender cómo funcionan los modelos y construir cosas, sí: Python es imprescindible y no hay forma de esquivarlo. Para usar herramientas de IA de forma competente, no hace falta programar nada. Son dos objetivos distintos y conviene tener claro cuál es el tuyo antes de elegir por dónde empezar." },
    { q: "¿Qué matemática hace falta para aprender IA?",
      a: "Álgebra lineal, cálculo hasta la regla de la cadena, probabilidad básica y nociones de optimización. No hace falta una licenciatura, y conviene aprenderla en paralelo con la práctica en vez de intentar completarla antes de escribir la primera línea de código." },
    { q: "¿Es tarde para empezar a aprender inteligencia artificial?",
      a: "No. El campo se reordena cada pocos años y buena parte de lo que hoy define el estado del arte —modelos de razonamiento, agentes, interpretabilidad aplicada— tiene menos de tres años. Alguien que empieza hoy y estudia en serio llega a la frontera de varios subcampos en un año." },
  ],
};

/* --------------------------------------------------------------------------
   GUÍA PILAR
   -------------------------------------------------------------------------- */

const GUIA = {
  slug: "como-aprender-ia-desde-cero",
  h1: "Cómo aprender inteligencia artificial: guía completa",
  title: "Cómo aprender IA desde cero: guía completa 2026",
  description: "Qué estudiar y en qué orden para aprender IA desde cero, cuánto tiempo lleva de verdad, qué matemática hace falta y los cinco errores que hacen abandonar.",
  lede: `Qué estudiar, en qué orden y cuánto tiempo lleva. Una guía sobre el método, no sobre la lista de
    materiales: eso está en el resto del sitio.`,
  body: `
    <p>
      Casi todas las guías para aprender IA son listas de cursos. El problema es que la lista no es el
      cuello de botella: el material bueno está disponible y es mayoritariamente gratuito. Lo que hace
      abandonar a la mayoría no es la falta de recursos, es la falta de un orden y de un criterio para
      decidir qué ignorar. De eso trata esta guía.
    </p>

    <h2>1. Decidí primero qué querés poder hacer</h2>
    <p>
      "Aprender IA" describe cuatro objetivos muy distintos, y confundirlos es la causa número uno de
      frustración. Antes de elegir un curso, elegí cuál de estos es el tuyo:
    </p>
    <ul>
      <li><strong>Usar herramientas de IA bien.</strong> No requiere programar. Requiere entender qué hace un modelo, por qué alucina y cómo escribir buenas instrucciones. Semanas, no meses.</li>
      <li><strong>Construir productos con modelos existentes.</strong> Requiere programar. Es ingeniería de software alrededor de una API, más evaluaciones. Uno a tres meses si ya programás.</li>
      <li><strong>Entender cómo funcionan los modelos por dentro.</strong> Requiere matemática y bastante código propio. Tres a doce meses.</li>
      <li><strong>Investigar y producir conocimiento nuevo.</strong> Requiere lo anterior más tolerancia a que la mayoría de lo que intentes no funcione. Uno a dos años.</li>
    </ul>
    <p>
      Las <a href="/rutas/">cuatro rutas de aprendizaje</a> de este sitio corresponden exactamente a esos
      objetivos, con el material concreto de cada una.
    </p>

    <h2>2. El orden que funciona</h2>
    <p>
      Hay un patrón que se repite en la gente que efectivamente aprendió: <strong>intuición, después
      práctica, después formalismo</strong>. En ese orden y no en otro.
    </p>
    <p>
      Empezar por el formalismo —un curso completo de álgebra lineal antes de tocar código— es la forma más
      confiable de abandonar en la semana cinco, porque no hay ninguna recompensa intermedia. Empezar por la
      intuición visual y entrenar algo chico enseguida genera preguntas concretas, y esas preguntas hacen
      que el formalismo se vuelva interesante en vez de una obligación abstracta.
    </p>
    <p>
      La regla práctica más citada, y la más útil: <strong>por cada hora de consumo, una hora escribiendo
      código que rompe, se debuguea y funciona</strong>. Mirar videos y leer papers da una sensación de
      progreso que no siempre se corresponde con aprendizaje. Si nunca peleaste contra un error de
      dimensiones a las dos de la mañana, todavía no aprendiste el tema.
    </p>

    <h2>3. Qué matemática hace falta (y cuál no)</h2>
    <p>
      Menos de la que se teme, más que cero. Cuatro áreas, y ninguna a nivel licenciatura:
      <strong>álgebra lineal</strong> para entender tensores y dimensiones, <strong>cálculo</strong> hasta
      la regla de la cadena —que literalmente <em>es</em> backpropagation—, <strong>probabilidad</strong>
      porque un modelo generativo es una distribución, y <strong>optimización</strong>, que en la práctica
      es descenso por gradiente y sus variantes.
    </p>
    <p>
      Lo que <em>no</em> hace falta: análisis real, topología, álgebra abstracta. Aparecen en papers
      específicos y se aprenden cuando ese paper aparece.
      La <a href="/temas/matematicas/">sección de matemática para IA</a> tiene el material ordenado por nivel.
    </p>

    <h2>4. Cuánto tiempo lleva, en serio</h2>
    <p>
      Con unas diez horas semanales sostenidas —que es mucho menos de lo que suena y mucho más difícil de
      lo que parece—, los plazos realistas son: tres a seis meses para entender los fundamentos y entrenar
      modelos propios, cerca de un año para leer papers con comodidad, uno a dos años para contribuir con
      investigación.
    </p>
    <p>
      La variable que más pesa no es la inteligencia ni la formación previa: es la constancia. Cuatro horas
      por semana durante un año rinden muchísimo más que veinte horas durante un mes y después nada.
    </p>

    <h2>5. ¿En español o en inglés?</h2>
    <p>
      En español al principio, para construir intuición y vocabulario más rápido; en inglés en cuanto
      necesites material actualizado. Forzarse al inglés desde el día uno agrega una dificultad que no
      aporta nada mientras todavía estás entendiendo los conceptos.
    </p>
    <p>
      Dicho eso, en algún momento vas a leer papers en inglés y no hay atajo. La buena noticia es que el
      inglés técnico de los papers es limitado, repetitivo y mucho más accesible que el inglés
      conversacional: se destraba en semanas.
      La <a href="/temas/espanol/">sección de recursos en español</a> reúne lo mejor que hay en castellano.
    </p>

    <h2>6. Los cinco errores que hacen abandonar</h2>
    <ol>
      <li><strong>Estudiar por todos lados a la vez.</strong> Un curso de matemática, un tutorial de PyTorch, un video sobre transformers y tres newsletters la misma semana. Elegí una ruta, seguila en orden, dispersate después.</li>
      <li><strong>Consumir sin producir.</strong> Cincuenta horas de video sin una línea de código propio es cero aprendizaje consolidado, aunque se sienta distinto.</li>
      <li><strong>Esperar a estar listo.</strong> Nadie se siente listo. Se empieza el proyecto sabiendo la mitad y se aprende la otra mitad haciéndolo.</li>
      <li><strong>Perseguir lo último.</strong> El modelo que salió esta semana no cambia lo que tenés que estudiar. Los fundamentos de 2017 siguen siendo los fundamentos.</li>
      <li><strong>Saltar la evaluación.</strong> Sin una forma de medir si algo mejoró, no hay ingeniería posible: hay intuición disfrazada de criterio. Vale tanto para tus modelos como para tu propio progreso.</li>
    </ol>

    <h2>7. Cómo saber si estás avanzando</h2>
    <p>
      Tres señales concretas, en orden de aparición: podés explicarle a alguien qué hace backpropagation sin
      leer nada; podés tomar un modelo de Hugging Face y adaptarlo a un problema tuyo sin seguir un
      tutorial; podés leer el resumen de un paper y anticipar cuál va a ser el resultado antes de llegar a
      la sección de experimentos.
    </p>
    <p>
      Si ninguna de las tres se cumple todavía, no significa que vayas mal: significa que estás en el
      camino. Todas llegan con horas de código, no con horas de video.
    </p>`,
  faq: [
    { q: "¿Cómo empiezo a aprender IA desde cero?",
      a: "Con intuición visual antes que formalismo: la serie de redes neuronales de 3Blue1Brown, después Python y NumPy con foco en dimensiones, después un curso completo de machine learning, y en cuanto puedas un proyecto propio por chico que sea. Ese orden —intuición, práctica, formalismo— es el que evita el abandono." },
    { q: "¿Qué es mejor para aprender IA: un curso pago o material gratuito?",
      a: "El material gratuito es, en este campo, tan bueno o mejor que el pago: los cursos de Stanford y el MIT están publicados, los libros de referencia tienen PDF libre y el mejor material práctico que existe (Zero to Hero, fast.ai) es gratis. Un curso pago aporta sobre todo estructura y obligación externa, que para algunas personas es exactamente lo que falta." },
    { q: "¿Sirve un título universitario para trabajar en IA?",
      a: "Ayuda, pero pesa menos que en otros campos. Lo que más se mira es el portafolio: proyectos propios, código público, papers reproducidos, escritura técnica. Varias personas llegaron a posiciones de investigación en interpretabilidad y alineamiento por lo que publicaron en abierto." },
    { q: "¿Qué computadora necesito para aprender inteligencia artificial?",
      a: "Cualquiera que corra un navegador. Google Colab y Kaggle dan GPUs gratis suficientes para todo el recorrido de aprendizaje, y alquilar cómputo por hora sale más barato que comprar si el uso es intermitente. Una GPU propia se justifica recién cuando entrenás de forma sostenida." },
  ],
};

/* --------------------------------------------------------------------------
   SOBRE EL SITIO
   Página de autoría y método. Existe por dos razones: la gente que llega desde
   una búsqueda quiere saber quién armó la lista, y Google evalúa exactamente eso
   (quién escribe, con qué criterio, con qué transparencia) en contenido educativo.
   -------------------------------------------------------------------------- */

const SOBRE = {
  slug: "sobre",
  h1: "Quién armó esto y con qué criterio",
  title: "Sobre el sitio: quién lo hace y cómo se curan los recursos",
  description: "Quién está detrás de esta guía de recursos de IA, con qué criterio se eligió cada material, qué se deja afuera a propósito y cómo se mantiene actualizada.",
  lede: `Una lista curada sin criterio explícito es una lista de enlaces. Acá está el criterio.`,
  body: `
    <h2>Quién</h2>
    <p>
      Me llamo <strong>Giancarlo Brusca</strong>, soy desarrollador de software y vivo en Buenos
      Aires. Armé este sitio porque lo necesitaba yo: cada vez que quería entender algo del campo
      terminaba con veinte pestañas abiertas, tres listas que se copiaban entre sí y ninguna
      indicación de por dónde empezar.
    </p>
    <p>
      No soy investigador ni trabajo en un laboratorio de IA, y me parece importante decirlo. Esto no
      es una autoridad académica: es el mapa que fui armando mientras aprendía, ordenado para que a
      otro le cueste menos. Todo el mérito del material es de sus autores; lo único mío acá es la
      selección, el orden y las notas.
    </p>
    <p>
      Si querés corregir algo, discutir una elección o proponer un recurso, el sitio es
      <a href="https://github.com/giancarlobrusca/ai-learning-hub" rel="noopener">abierto en GitHub</a>
      y también me podés escribir en <a href="https://x.com/giancarlobrusca" rel="noopener me">X</a>.
    </p>

    <h2>Con qué criterio entra un recurso</h2>
    <p>
      La regla que ordena todo lo demás: <strong>alguien tiene que haberlo usado para aprender de
      verdad</strong>. No entra material porque aparezca en otras listas, ni porque el autor sea
      famoso, ni porque sea reciente.
    </p>
    <ul>
      <li><strong>Densidad sobre cobertura.</strong> Cuánto entendés por hora invertida. Un video de
        cuatro horas que cambia cómo pensás vale más que diez tutoriales de veinte minutos.</li>
      <li><strong>Por qué antes que cómo.</strong> El material que explica por qué algo funciona sigue
        siendo válido en cinco años; el que muestra qué botón apretar en una librería caduca en seis
        meses. Cuando hay que elegir, gana el primero.</li>
      <li><strong>Fuente original.</strong> Todos los enlaces apuntan al autor, nunca a un resumen de
        un resumen ni a una versión reempaquetada.</li>
      <li><strong>Desacuerdo incluido.</strong> En las secciones donde hay discusión genuina —seguridad,
        futuro, si escalar alcanza— hay deliberadamente autores que se contradicen entre sí. Leer un
        solo lado es la forma más rápida de tener una opinión firme y mal informada.</li>
    </ul>

    <h2>Qué se deja afuera a propósito</h2>
    <ul>
      <li><strong>Cursos que prometen resultados por tiempo.</strong> "IA en 30 días" describe un plan
        de marketing, no un plan de estudio.</li>
      <li><strong>Contenido que envejece en semanas.</strong> Comparativas de modelos, tutoriales de la
        última librería, hilos de novedades. Es legítimo, pero no es material de estudio.</li>
      <li><strong>Listas de listas.</strong> Si un recurso es principalmente un índice de otros
        recursos, no aporta acá.</li>
      <li><strong>Material detrás de registro obligatorio</strong> cuando existe un equivalente abierto,
        que en este campo casi siempre existe.</li>
    </ul>

    <h2>Cómo se mantiene</h2>
    <p>
      Los recursos viven en archivos de datos versionados en Git, así que cada cambio queda
      registrado con fecha y motivo. Las secciones de fundamentos —matemática, deep learning,
      arquitecturas— envejecen muy lento y casi no se tocan. Las de post-training, agentes,
      evaluación y futuro se revisan cada pocos meses, porque ahí sí cambia el estado del arte.
    </p>
    <p>
      La fecha de última revisión aparece al pie de cada página. Si ves un enlace caído o un recurso
      que quedó viejo, avisá: es el tipo de aporte más útil que puede recibir un sitio así.
    </p>

    <h2>Sobre el sitio en sí</h2>
    <p>
      Es HTML estático generado con un script de Node sin dependencias. No hay analítica, no hay
      cookies, no hay rastreo y no hay publicidad. Tampoco hay enlaces de afiliado: no gano nada si
      hacés clic en un curso, lo cual es justamente lo que hace que la lista sea confiable.
    </p>`,
  faq: [
    { q: "¿Quién escribe AI Learning Hub?",
      a: "Giancarlo Brusca, desarrollador de software radicado en Buenos Aires, Argentina. No es un sitio institucional ni comercial: es una colección personal curada, publicada en abierto y con el código disponible en GitHub." },
    { q: "¿Cómo se eligen los recursos de la lista?",
      a: "El criterio principal es que alguien lo haya usado para aprender de verdad, no que aparezca en otras listas. Se prioriza densidad de aprendizaje por hora, material que explica por qué algo funciona antes que qué botón apretar, y siempre se enlaza a la fuente original." },
    { q: "¿El sitio tiene publicidad o enlaces de afiliado?",
      a: "No. No hay publicidad, enlaces de afiliado, analítica ni cookies. Ningún recurso está en la lista por un acuerdo comercial, y esa es la condición para que la selección signifique algo." },
    { q: "¿Cómo propongo un recurso o corrijo un error?",
      a: "Por GitHub, abriendo un issue o un pull request sobre los archivos de la carpeta data, o escribiendo por X. Los aportes más útiles son los enlaces caídos y los recursos que quedaron desactualizados." },
  ],
};

/* --------------------------------------------------------------------------
   LÍNEA DE TIEMPO
   -------------------------------------------------------------------------- */

const TIMELINE = [
  { year: "2012", title: "AlexNet — el deep learning se vuelve inevitable",
    text: "Una CNN entrenada en GPUs pulveriza ImageNet. Empieza la era en la que el cómputo, y no el diseño manual de features, define el estado del arte." },
  { year: "2014-2015", title: "Seq2seq, atención y ResNets",
    text: "Bahdanau introduce la atención para traducción; las conexiones residuales permiten entrenar redes muy profundas. Las dos piezas que faltaban para lo que vendría." },
  { year: "2017", title: "Attention Is All You Need",
    text: "Se tira la recurrencia por la ventana y queda solo la atención. Paralelizable, escalable, y todavía hoy la base de casi todo." },
  { year: "2018-2019", title: "BERT y GPT-2 — el pre-entrenamiento se impone",
    text: "Se bifurcan las dos ramas: encoder bidireccional para comprensión, decoder autorregresivo para generación. Gana la segunda." },
  { year: "2020", title: "Scaling laws + GPT-3",
    text: "El progreso se vuelve predecible: una ley de potencia en cómputo, datos y parámetros. Y aparece el aprendizaje en contexto, que nadie había pedido explícitamente." },
  { year: "2020-2021", title: "Difusión y CLIP",
    text: "La generación de imágenes cambia de paradigma. Alinear texto e imagen en un mismo espacio abre la puerta a todo lo multimodal." },
  { year: "2022 (marzo)", title: "Chinchilla e InstructGPT",
    text: "Dos correcciones el mismo mes: los modelos estaban subentrenados en datos, y el problema real no era la capacidad sino seguir instrucciones." },
  { year: "2022 (noviembre)", title: "ChatGPT",
    text: "Ninguna novedad técnica mayor: una interfaz. Y sin embargo es el momento en que el campo deja de ser un asunto académico." },
  { year: "2023", title: "LLaMA, LoRA y el ecosistema abierto",
    text: "Pesos abiertos + adaptación barata = miles de personas entrenando modelos en su casa. FlashAttention hace que todo eso además sea rápido." },
  { year: "2024", title: "Contexto largo, MoE y agentes",
    text: "Ventanas de un millón de tokens, mezcla de expertos como estándar de facto, y los primeros agentes que hacen trabajo real de varios pasos." },
  { year: "2024 (septiembre)", title: "o1 y el cómputo en tiempo de inferencia",
    text: "Aparece el segundo eje de escalado: pensar más tiempo antes de responder. El entrenamiento deja de ser la única palanca." },
  { year: "2025 (enero)", title: "DeepSeek-R1",
    text: "El razonamiento emerge de RL con recompensas verificables, se publica en abierto y a un costo mucho menor del que se creía necesario. El campo entero se reorganiza alrededor de esto." },
  { year: "2025-2026", title: "Agentes, memoria y arquitecturas híbridas",
    text: "El foco se corre de «responder bien» a «completar tareas largas de forma autónoma». Vuelven a discutirse en serio el aprendizaje continuo, los modelos del mundo y las alternativas a la atención pura." },
];

/* --------------------------------------------------------------------------
   QUÉ SE VIENE
   -------------------------------------------------------------------------- */

const FUTURO_HTML = `
  <h2>1. Apuestas seguras: lo que estudiar hoy sigue valiendo en diez años</h2>
  <p>
    Si tu tiempo de estudio es limitado, invertilo acá. Nada de esto depende de qué modelo esté de moda.
  </p>
  <ul>
    <li><strong>La matemática de base.</strong> Álgebra lineal, cálculo, probabilidad y optimización no cambiaron y no van a cambiar. Toda arquitectura futura se va a describir con este vocabulario.</li>
    <li><strong>El descenso por gradiente y la diferenciación automática.</strong> Podemos cambiar de arquitectura, de optimizador o de precisión numérica; el esquema de "definir una pérdida y bajar por el gradiente" lleva seis décadas resistiendo.</li>
    <li><strong>La lección amarga.</strong> Los métodos generales que aprovechan más cómputo terminan superando a los que codifican conocimiento humano. Se cumplió tantas veces que conviene tratarla como un prior fuerte al evaluar cualquier propuesta nueva.</li>
    <li><strong>Que el progreso escala con recursos de forma predecible.</strong> Las constantes cambian y los ejes se mueven (parámetros → datos → cómputo de inferencia), pero la existencia de curvas de escalado predecibles es el hallazgo empírico más robusto del campo.</li>
    <li><strong>La destilación.</strong> Modelos grandes que entrenan modelos chicos: es la técnica con mejor retorno económico de la industria y no hay razón para que deje de serlo.</li>
    <li><strong>La evaluación como disciplina.</strong> A medida que los sistemas se vuelven más autónomos, medir bien se vuelve <em>más</em> difícil y más valioso. Es la habilidad más subestimada del campo.</li>
    <li><strong>Los conceptos, no las implementaciones.</strong> Representaciones distribuidas, atención como mecanismo de enrutamiento de información, cuellos de botella de memoria, sobreajuste. Sobreviven a cualquier cambio de arquitectura.</li>
  </ul>

  <div class="callout good">
    <div class="callout-title">Regla práctica</div>
    <p>
      Si un recurso te enseña <em>por qué</em> algo funciona, casi seguro sigue siendo válido dentro de cinco años.
      Si te enseña <em>qué botón apretar</em> en una librería, probablemente esté obsoleto en seis meses. Priorizá el primero
      y aprendé el segundo cuando lo necesites.
    </p>
  </div>

  <h2>2. Lo que está cambiando ahora mismo (2025-2026)</h2>
  <p>
    Estas transiciones ya ocurrieron o están ocurriendo. No son predicciones: son el estado actual del campo,
    y explican por qué material de 2023 puede sonar viejo.
  </p>

  <h3>El escalado se corrió del pre-entrenamiento</h3>
  <p>
    Durante años, "mejorar el modelo" significaba entrenar uno más grande con más datos. Hoy la mayor parte de las
    ganancias viene del post-entrenamiento y del cómputo en tiempo de inferencia: RL con recompensas verificables,
    cadenas de razonamiento largas, búsqueda y verificación. DeepSeek-R1 lo volvió público y reproducible, y
    desde entonces el gasto se corrió hacia esa etapa.
  </p>

  <h3>De modelos a agentes</h3>
  <p>
    La unidad de análisis dejó de ser "el modelo" y pasó a ser el sistema completo: modelo + herramientas + memoria +
    bucle de control. Buena parte del progreso visible del último año viene del andamiaje alrededor del modelo, no de
    los pesos. La métrica que mejor captura esto es el horizonte temporal de tareas que un sistema completa de forma
    autónoma, que viene duplicándose aproximadamente cada siete meses.
  </p>

  <h3>Arquitecturas híbridas y eficiencia</h3>
  <p>
    La mezcla de expertos es hoy el estándar de facto en modelos frontera: activar una fracción de los parámetros por
    token. En paralelo, los modelos de espacio de estados dejaron de ser una curiosidad y aparecen como capas
    intercaladas con atención en modelos de producción. La atención cuadrática pura ya no es la única opción seria.
  </p>

  <h3>Los datos humanos de calidad se están agotando</h3>
  <p>
    Las proyecciones sobre el stock de texto público de alta calidad convergen en que el margen es estrecho. La
    respuesta de la industria son datos sintéticos, currículums cuidados, entornos verificables y RL. Esto conecta
    directamente con la tesis de la "era de la experiencia": si no quedan datos humanos que consumir, el aprendizaje
    tiene que venir de la interacción.
  </p>

  <h3>Modelos chicos sorprendentemente capaces</h3>
  <p>
    Destilación más datos curados hicieron que modelos de 3B a 30B parámetros hagan hoy lo que en 2023 requería
    cientos de miles de millones. Consecuencia práctica: cada vez más casos de uso se resuelven local, barato y
    sin enviar datos a ningún lado.
  </p>

  <h3>La interpretabilidad empezó a ser útil</h3>
  <p>
    Pasó de resultados en modelos de juguete a encontrar características manipulables en modelos de producción y
    a trazar grafos de atribución que muestran planificación anticipada y racionalización a posteriori.
    Todavía está lejos de ser una herramienta de auditoría confiable, pero dejó de ser puramente académica.
  </p>

  <h2>3. Lo que está genuinamente en disputa</h2>
  <p>
    Acá hay gente muy inteligente en desacuerdo profundo. Desconfiá de quien te presente cualquiera de estos
    puntos como resuelto, en cualquier dirección.
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>La pregunta</th><th>Una posición</th><th>La otra</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>¿Alcanza con escalar?</td>
          <td>Las curvas siguen sin quebrarse; falta ingeniería, no ideas nuevas.</td>
          <td>Los LLMs interpolan sobre lo visto; falta un mecanismo de generalización que no tenemos (Chollet, LeCun).</td>
        </tr>
        <tr>
          <td>¿Los modelos "razonan"?</td>
          <td>Las cadenas largas resuelven problemas genuinamente nuevos y verificables.</td>
          <td>Es búsqueda sobre patrones memorizados que colapsa al subir la complejidad estructural.</td>
        </tr>
        <tr>
          <td>¿El RL crea capacidades o las revela?</td>
          <td>El RL con recompensas verificables enseña habilidades nuevas de razonamiento.</td>
          <td>Solo amplifica lo que el modelo base ya podía hacer con muestreo suficiente.</td>
        </tr>
        <tr>
          <td>¿Sobrevive el transformer?</td>
          <td>La inercia de hardware y software es enorme; se seguirá modificando por dentro.</td>
          <td>Los híbridos, los modelos sin tokenizador y los modelos del mundo lo van a desplazar en 3-5 años.</td>
        </tr>
        <tr>
          <td>¿Cuándo llega el aprendizaje continuo?</td>
          <td>Memoria en tiempo de test y arquitecturas tipo Titans ya apuntan en esa dirección.</td>
          <td>El olvido catastrófico sigue sin resolverse y puede requerir un cambio de paradigma.</td>
        </tr>
        <tr>
          <td>¿Cuándo llega la IA general?</td>
          <td>Esta década, por extrapolación de las curvas de capacidad y autonomía.</td>
          <td>La definición misma es confusa y la difusión real la limitan las instituciones, no la capacidad.</td>
        </tr>
        <tr>
          <td>¿La inversión actual es sostenible?</td>
          <td>El capex se justifica: la demanda de inferencia crece más rápido que la oferta.</td>
          <td>Hay una brecha grande entre gasto en cómputo e ingresos; una corrección afectaría el ritmo del campo.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>4. Qué mirar para actualizar tus creencias</h2>
  <p>
    En vez de seguir opiniones, seguí indicadores. Estas son las señales que efectivamente distinguen entre los
    escenarios de la tabla anterior:
  </p>
  <ol>
    <li><strong>Benchmarks resistentes a la memorización</strong> (ARC-AGI-2 y sucesores, FrontierMath, Humanity's Last Exam). Si estos ceden rápido, la posición escaladora se fortalece mucho.</li>
    <li><strong>Horizonte temporal de tareas autónomas</strong> (METR). Si la duplicación cada ~7 meses se sostiene, los agentes económicamente relevantes llegan antes de lo que sugiere la intuición.</li>
    <li><strong>Costo por unidad de capacidad.</strong> El precio de alcanzar un nivel dado de desempeño viene cayendo de forma brutal; es lo que determina qué se vuelve viable en la práctica.</li>
    <li><strong>Publicaciones de aprendizaje continuo y modelos del mundo.</strong> Un resultado sólido acá sería el cambio cualitativo más grande desde los modelos de razonamiento.</li>
    <li><strong>Adopción real medida, no anunciada.</strong> Estudios de productividad y datos de uso, no comunicados de prensa.</li>
    <li><strong>Datos de Epoch AI.</strong> Es la fuente que convierte esta discusión en algo empírico en lugar de retórico.</li>
  </ol>

  <div class="callout">
    <div class="callout-title">Cómo leer a los que predicen</div>
    <p>
      Casi todos los pronósticos públicos vienen de gente con incentivos: laboratorios que necesitan capital,
      críticos que construyeron su identidad sobre el escepticismo, inversores con posiciones tomadas.
      Eso no los invalida, pero conviene leer siempre en pares opuestos —"Situational Awareness" junto a
      "AI as Normal Technology", Sutton junto a los escaladores— y quedarse con los mecanismos causales
      que cada uno propone, no con las fechas.
    </p>
  </div>

  <h2>5. Recursos sobre el futuro</h2>`;

/* Advertencia que cierra la página de rutas. */
const CALLOUT_PASIVO = `
  <div class="callout warn">
    <div class="callout-title">Una advertencia sobre el consumo pasivo</div>
    <p>
      Mirar videos y leer papers da una sensación de progreso que no siempre se corresponde con aprendizaje.
      La regla práctica: por cada hora de consumo, una hora escribiendo código que rompe, se debuguea y funciona.
      Si nunca te peleaste con un <em>shape mismatch</em>, todavía no aprendiste el tema.
    </p>
  </div>`;

module.exports = { HOME, GUIA, SOBRE, TIMELINE, FUTURO_HTML, CALLOUT_PASIVO };
