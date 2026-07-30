/* Copy SEO por sección: título de página, meta description, introducción propia y
   preguntas frecuentes. Esto NO viaja al navegador — solo lo usa el generador.

   Cada página tiene texto único: es la diferencia entre 22 páginas que compiten
   entre sí y 22 páginas que cubren 22 intenciones de búsqueda distintas. */

const COPY = {

  matematicas: {
    h1: "Matemática para aprender inteligencia artificial",
    title: "Matemática para IA: qué necesitás saber de verdad",
    description: "Qué matemática hace falta para aprender IA: álgebra lineal, cálculo, probabilidad y optimización. Cursos y libros gratis, explicados sin misticismo.",
    intro: `
      <p>
        La pregunta que más frena a la gente que empieza es "¿cuánta matemática necesito para aprender
        inteligencia artificial?". La respuesta honesta: mucha menos de la que se teme, pero más de cero.
        No hace falta una licenciatura. Hacen falta cuatro cosas, y se pueden aprender en paralelo con el
        resto en vez de antes que el resto.
      </p>
      <p>
        <strong>Álgebra lineal</strong> para entender qué es un tensor y por qué las dimensiones nunca cierran.
        <strong>Cálculo</strong> hasta la regla de la cadena, que literalmente <em>es</em> backpropagation.
        <strong>Probabilidad</strong> porque un modelo generativo no es otra cosa que una distribución.
        Y <strong>optimización</strong>, que es el descenso por gradiente y sus variantes. Con eso ya podés
        leer la mayoría de los papers sin que parezcan magia.
      </p>
      <p>
        El error clásico es querer completar un plan de estudios matemático entero antes de escribir la
        primera línea de código. Se abandona siempre. La ruta que funciona es al revés: entrená algo chico,
        chocate con lo que no entendés y volvé a buscar exactamente esa pieza acá.
      </p>`,
    faq: [
      { q: "¿Necesito saber matemática avanzada para aprender IA?",
        a: "No para empezar. Para usar modelos y construir aplicaciones alcanza con programación y buen criterio. La matemática se vuelve indispensable cuando querés entender por qué un modelo funciona, leer papers o entrenar algo propio: ahí necesitás álgebra lineal, cálculo hasta la regla de la cadena, probabilidad básica y nociones de optimización." },
      { q: "¿Por dónde empiezo si hace años que no veo matemática?",
        a: "Por la serie de redes neuronales de 3Blue1Brown y por «Essence of Linear Algebra» del mismo canal: dan intuición geométrica antes que formalismo. Después, «Mathematics for Machine Learning» (PDF gratis) cubre exactamente lo que ML necesita y nada más." },
      { q: "¿Hay recursos de matemática para IA en español?",
        a: "Los mejores materiales están en inglés, pero los videos de 3Blue1Brown tienen subtítulos en español y su canal hermano publica versiones traducidas. En la sección de recursos en español encontrás alternativas en castellano para los fundamentos." },
    ],
    related: ["programacion", "deep-learning", "ml-clasico"],
  },

  programacion: {
    h1: "Programación y herramientas para trabajar con IA",
    title: "Python, PyTorch y JAX: programación para IA",
    description: "Las herramientas con las que vas a pasar el 90% del tiempo: Python, PyTorch, JAX, notebooks y debugging de tensores. Cursos y documentación curados.",
    intro: `
      <p>
        Aprender inteligencia artificial es, en la práctica, aprender a mover tensores sin equivocarse de
        dimensión. Esta sección junta lo necesario para llegar a ese punto: Python con soltura, NumPy con
        foco en <em>shapes</em>, y después PyTorch, que es el framework donde ocurre casi toda la
        investigación y buena parte de la producción.
      </p>
      <p>
        Una habilidad muy poco enseñada y enormemente rentable: saber debuggear. Imprimir formas, verificar
        que el gradiente fluye, aislar la capa que rompe. Si nunca peleaste contra un <em>shape mismatch</em>
        a las dos de la mañana, todavía no aprendiste el tema. Vale más que memorizar el diagrama de una
        arquitectura.
      </p>
      <p>
        JAX aparece más adelante, sobre todo si te acercás a investigación o a entrenamiento distribuido.
        No es un prerrequisito: es una segunda herramienta cuando ya entendés qué está haciendo la primera.
      </p>`,
    faq: [
      { q: "¿Qué lenguaje se usa para inteligencia artificial?",
        a: "Python, con enorme distancia sobre cualquier otro. Todo el ecosistema (PyTorch, JAX, Hugging Face, vLLM) está en Python. C++ y CUDA aparecen cuando bajás a optimizar kernels, y Rust empieza a asomar en herramientas de inferencia, pero para aprender solo necesitás Python." },
      { q: "¿PyTorch o TensorFlow en 2026?",
        a: "PyTorch. La investigación se publica en PyTorch, los modelos abiertos se distribuyen en PyTorch y las herramientas modernas asumen PyTorch. TensorFlow sigue existiendo en sistemas heredados, pero no es por donde conviene empezar hoy." },
      { q: "¿Cuánto Python necesito antes de tocar deep learning?",
        a: "Funciones, clases, listas por comprensión y saber leer un stack trace. No hace falta ser experto: NumPy y PyTorch se aprenden mejor con un proyecto en la mano que con un curso de Python de cuarenta horas." },
    ],
    related: ["matematicas", "deep-learning", "infra"],
  },

  "ml-clasico": {
    h1: "Machine learning clásico: la base que sigue vigente",
    title: "Machine learning clásico: cursos y recursos",
    description: "Regresión, árboles, validación cruzada y bias-variance: el machine learning clásico resuelve la mayoría de los problemas reales. Los mejores cursos, curados.",
    intro: `
      <p>
        Hay una confusión frecuente entre "inteligencia artificial" y "modelos de lenguaje". La mayoría de
        los problemas que una empresa resuelve con datos siguen resolviéndose mejor con un gradient boosting
        sobre una tabla que con un LLM. El machine learning clásico no es una etapa histórica: es la
        herramienta correcta para una porción enorme de los casos reales.
      </p>
      <p>
        Además, los conceptos de generalización —sobreajuste, bias-variance, validación cruzada, fuga de
        datos— se entienden mucho mejor con modelos chicos que se entrenan en segundos que con redes
        gigantes. Quien salta directo a los transformers suele arrastrar huecos conceptuales que después
        aparecen como resultados que no se pueden explicar.
      </p>`,
    faq: [
      { q: "¿Vale la pena aprender machine learning clásico si quiero trabajar con LLMs?",
        a: "Sí, por dos motivos. Primero, porque muchos problemas de producción no necesitan un LLM y saber distinguirlos te ahorra costos absurdos. Segundo, porque la disciplina de evaluación —train/test, validación, fuga de datos— viene de acá y es exactamente lo que separa un prototipo de un producto." },
      { q: "¿Cuál es el mejor curso de machine learning para empezar?",
        a: "La Machine Learning Specialization de Andrew Ng si preferís entender la teoría primero, o fast.ai si aprendés mejor construyendo desde el primer día. Son enfoques opuestos y los dos funcionan: elegí según cómo estudiás vos, no según cuál es más famoso." },
    ],
    related: ["matematicas", "deep-learning", "evaluacion"],
  },

  "deep-learning": {
    h1: "Deep learning: cómo aprenden las redes neuronales",
    title: "Deep learning: recursos para entender redes neuronales",
    description: "Redes profundas, backpropagation, optimización y regularización. Cursos, libros y videos para entender de verdad cómo aprende una red neuronal.",
    intro: `
      <p>
        Acá está el corazón conceptual de todo lo demás. Una red neuronal profunda es una función enorme
        con millones de parámetros que se ajusta bajando por el gradiente de un error. Suena simple porque
        lo es; lo difícil es que funcione: inicialización, normalización, tasas de aprendizaje, regularización
        y una cantidad de decisiones que la literatura justifica a posteriori.
      </p>
      <p>
        Esta sección incluye también los fenómenos que todavía no entendemos bien —doble descenso, grokking,
        la hipótesis de la lotería— porque son la mejor vacuna contra la idea de que el campo es una ciencia
        cerrada. Buena parte de lo que sabemos es empírico y provisorio, y conviene aprenderlo sabiendo eso.
      </p>
      <p>
        El mejor uso de esta sección: mirar la serie <em>Neural Networks: Zero to Hero</em> de Karpathy
        escribiendo el código vos, no copiándolo. Construir un motor de autodiff en cien líneas hace por la
        comprensión lo que ningún video puede hacer solo.
      </p>`,
    faq: [
      { q: "¿Cuál es la diferencia entre machine learning y deep learning?",
        a: "El deep learning es una rama del machine learning que usa redes neuronales con muchas capas y aprende las representaciones directamente de los datos crudos, en vez de depender de features diseñadas a mano. Todo deep learning es machine learning; no al revés." },
      { q: "¿Qué es backpropagation, en simple?",
        a: "Es la aplicación de la regla de la cadena del cálculo para saber cuánto contribuyó cada parámetro al error final. Con esa información, el optimizador ajusta cada peso en la dirección que reduce el error. Es el mecanismo que hace posible entrenar redes profundas." },
      { q: "¿Cuánto tiempo lleva aprender deep learning?",
        a: "Con dedicación sostenida de unas diez horas semanales, tres a seis meses alcanzan para entender los fundamentos y entrenar modelos propios. Llegar a leer papers con comodidad suele llevar un año. La variable que más pesa no es la inteligencia: es la constancia y la cantidad de código propio escrito." },
    ],
    related: ["matematicas", "arquitecturas", "entrenar-desde-cero"],
  },

  arquitecturas: {
    h1: "Arquitecturas de modelos de IA",
    title: "Arquitecturas de IA: transformers, MoE y alternativas",
    description: "El mapa completo de arquitecturas: transformers, mezcla de expertos, modelos de espacio de estados, híbridos, difusión y GNNs. Qué cambia y qué se mantiene.",
    intro: `
      <p>
        El transformer domina, pero no es el final de la historia y conviene no estudiarlo como si lo fuera.
        Esta sección arma el mapa: las piezas que casi todos los modelos actuales comparten (RoPE, RMSNorm,
        SwiGLU, atención agrupada), las apuestas de eficiencia (mezcla de expertos, profundidad variable) y
        las alternativas que dejaron de ser curiosidades académicas.
      </p>
      <p>
        Los modelos de espacio de estados aparecen hoy como capas intercaladas dentro de modelos de
        producción, no como reemplazos completos. Es el patrón típico del campo: las ideas nuevas entran
        como híbridos antes de ganar o desaparecer. Entender esa dinámica vale más que memorizar el diagrama
        de cada variante.
      </p>`,
    faq: [
      { q: "¿Qué arquitectura usan los modelos de IA actuales?",
        a: "Casi todos los modelos de lenguaje frontera son transformers de tipo decoder, con mezcla de expertos para activar solo una fracción de los parámetros por token, embeddings posicionales rotatorios y atención agrupada. Los modelos de imagen y video usan mayoritariamente difusión, cada vez más sobre un backbone transformer." },
      { q: "¿Va a reemplazar algo al transformer?",
        a: "Es una de las discusiones abiertas del campo. La inercia de hardware y software es enorme y el transformer se sigue modificando por dentro sin cambiar de nombre. Las apuestas más serias hoy son los híbridos con capas de espacio de estados y los modelos sin tokenizador." },
    ],
    related: ["transformers-llm", "multimodal", "inferencia"],
  },

  "transformers-llm": {
    h1: "Transformers y modelos de lenguaje (LLMs)",
    title: "Transformers y LLMs: cómo funcionan de verdad",
    description: "De «Attention Is All You Need» a los reportes técnicos de los modelos frontera. Papers, cursos y explicaciones visuales para entender cómo funciona un LLM.",
    intro: `
      <p>
        Si tuvieras que entender una sola arquitectura, es esta. El transformer reemplazó la recurrencia por
        atención pura en 2017 y desde entonces es el sustrato de casi todo: texto, código, imagen, audio y
        los sistemas de agentes que se construyen encima.
      </p>
      <p>
        El camino que mejor funciona es en tres pasos. Primero la intuición visual —The Illustrated
        Transformer y los videos de Karpathy—, después el paper original leído en serio, y recién entonces
        los reportes técnicos de los modelos actuales. Esos reportes, los de Llama y DeepSeek especialmente,
        enseñan más sobre cómo se construye un modelo real que la mayoría de los cursos, porque documentan
        las decisiones y no solo el resultado.
      </p>
      <p>
        Un detalle que suele omitirse: un modelo de lenguaje pre-entrenado no es un asistente. Es un
        autocompletador de internet. Todo lo que lo vuelve conversacional y útil ocurre después, en el
        post-entrenamiento.
      </p>`,
    faq: [
      { q: "¿Cómo funciona un LLM en pocas palabras?",
        a: "Un modelo de lenguaje predice el siguiente token de una secuencia. Entrenado sobre cantidades enormes de texto, esa tarea aparentemente trivial lo obliga a representar gramática, hechos, estilo y razonamiento parcial. La generación es repetir esa predicción una y otra vez, realimentando lo generado." },
      { q: "¿Qué es el mecanismo de atención?",
        a: "Es la operación que permite que cada token mire a todos los demás y decida de cuáles tomar información, ponderando según su relevancia. Reemplazó a la recurrencia porque se paraleliza: todas las posiciones se calculan a la vez en vez de una por una." },
      { q: "¿Qué es un token?",
        a: "Es la unidad mínima que el modelo procesa: aproximadamente entre media palabra y una palabra en inglés, y algo menos en español, porque los tokenizadores están entrenados mayoritariamente sobre texto en inglés. Por eso el mismo texto en castellano suele costar más tokens —y más dinero— que su equivalente en inglés." },
    ],
    related: ["arquitecturas", "post-training", "entrenar-desde-cero"],
  },

  "entrenar-desde-cero": {
    lista: "{n} recursos para entrenar un modelo desde cero",
    h1: "Entrenar un modelo de IA desde cero",
    title: "Entrenar un modelo desde cero: el pipeline completo",
    description: "Pre-entrenamiento de punta a punta: código, paralelismo, clusters y los detalles que ningún paper cuenta. nanoGPT, CS336 y los playbooks de entrenamiento a escala.",
    intro: `
      <p>
        Nunca vas a entrenar un modelo frontera solo, y no es el objetivo. Pero entrenar uno chico de punta
        a punta —tokenizador, arquitectura, datos, bucle de entrenamiento, evaluación— cambia
        irreversiblemente cómo entendés a los grandes. Deja de ser una caja negra y pasa a ser un sistema
        con partes que ya tocaste.
      </p>
      <p>
        El recorrido canónico está bien establecido: nanoGPT para reproducir GPT-2 a escala manejable,
        Stanford CS336 para el pipeline completo con paralelismo y kernels, y los playbooks de entrenamiento
        a escala para la parte que los papers omiten: qué se rompe en un cluster, cómo se detectan
        divergencias y cuánto del trabajo real es infraestructura y no ciencia.
      </p>`,
    faq: [
      { q: "¿Cuánto cuesta entrenar un modelo de lenguaje?",
        a: "Reproducir algo del tamaño de GPT-2 cuesta hoy decenas de dólares en GPUs alquiladas, con código abierto disponible. Un modelo abierto competitivo de tamaño medio está en el orden de cientos de miles a millones. Los modelos frontera están en cientos de millones. La curva de costo por unidad de capacidad viene bajando muy rápido." },
      { q: "¿Puedo entrenar un modelo con una sola GPU?",
        a: "Un modelo chico, sí, y es el mejor ejercicio de aprendizaje que existe. Para adaptar un modelo grande ya entrenado a una tarea propia con una sola GPU está el fine-tuning con LoRA o QLoRA, que es otra cosa y mucho más barata." },
    ],
    related: ["datos-scaling", "infra", "fine-tuning"],
  },

  "datos-scaling": {
    h1: "Datos, tokenización y leyes de escalado",
    title: "Datos, tokenización y scaling laws en IA",
    description: "Cómo se arma un corpus de entrenamiento, cómo se tokeniza el texto y cómo predecir el resultado antes de gastar el presupuesto. Papers y herramientas.",
    intro: `
      <p>
        La parte menos glamorosa y más determinante. La calidad del corpus explica más varianza entre
        modelos que la arquitectura: dos equipos con el mismo diseño y presupuesto distinto de curación de
        datos terminan con modelos muy distintos. Casi nadie publica su receta completa, y esa opacidad es
        en sí misma un dato sobre dónde está el valor.
      </p>
      <p>
        Las leyes de escalado son lo que convirtió el entrenamiento en ingeniería predecible: permiten
        estimar qué desempeño vas a obtener con determinado cómputo, datos y parámetros antes de gastar el
        presupuesto. Chinchilla corrigió el equilibrio hacia más datos; después el eje se corrió otra vez,
        esta vez hacia el cómputo en tiempo de inferencia.
      </p>`,
    faq: [
      { q: "¿Qué son las scaling laws o leyes de escalado?",
        a: "Son relaciones empíricas —típicamente leyes de potencia— entre la pérdida de un modelo y el cómputo, los datos y los parámetros usados para entrenarlo. Permiten extrapolar desde experimentos chicos y baratos qué va a pasar a escala grande, y son el hallazgo empírico más robusto que tiene el campo." },
      { q: "¿Se están agotando los datos para entrenar IA?",
        a: "El stock de texto público de alta calidad tiene margen estrecho según las proyecciones más citadas. La respuesta de la industria son datos sintéticos, currículums curados, entornos verificables y aprendizaje por refuerzo: si no quedan datos humanos nuevos, el aprendizaje tiene que venir de la interacción." },
    ],
    related: ["entrenar-desde-cero", "post-training", "evaluacion"],
  },

  "post-training": {
    h1: "Post-training, RLHF y modelos de razonamiento",
    title: "Post-training y RLHF: cómo se alinea un modelo",
    description: "SFT, modelos de recompensa, DPO, GRPO y RL con recompensas verificables. Dónde se decide hoy la calidad real de un modelo de lenguaje.",
    intro: `
      <p>
        Un modelo pre-entrenado no es un asistente: es un autocompletador de internet. Todo lo que lo vuelve
        útil ocurre en esta etapa. Ajuste supervisado sobre ejemplos de conversación, modelos de recompensa
        que capturan preferencias humanas, y después optimización contra esa señal.
      </p>
      <p>
        Desde 2025 esta fase concentra la mayor parte de las ganancias visibles. El aprendizaje por refuerzo
        con recompensas verificables —matemática, código, tareas donde la respuesta se puede chequear
        automáticamente— produjo los modelos de razonamiento, y DeepSeek-R1 hizo público que se podía a un
        costo mucho menor del que se creía necesario.
      </p>
      <p>
        Sigue abierta una discusión de fondo que conviene tener presente al leer: si el RL enseña
        capacidades nuevas o simplemente amplifica lo que el modelo base ya podía hacer con suficiente
        muestreo. Hay evidencia y gente seria de los dos lados.
      </p>`,
    faq: [
      { q: "¿Qué es RLHF?",
        a: "Aprendizaje por refuerzo a partir de retroalimentación humana. Se recolectan comparaciones entre respuestas, se entrena un modelo de recompensa que predice qué preferiría una persona, y luego se optimiza el modelo de lenguaje contra esa recompensa. Es lo que convirtió a los modelos base en asistentes conversacionales." },
      { q: "¿Cuál es la diferencia entre DPO y RLHF clásico?",
        a: "DPO optimiza directamente sobre pares de preferencias, sin entrenar un modelo de recompensa separado ni correr un algoritmo de refuerzo completo. Es mucho más simple y barato de implementar, y por eso se volvió el punto de partida habitual fuera de los laboratorios grandes." },
      { q: "¿Cómo aprenden a razonar los modelos?",
        a: "Con aprendizaje por refuerzo sobre tareas de respuesta verificable: el modelo genera cadenas de razonamiento largas, se comprueba automáticamente si el resultado final es correcto y se refuerzan las trayectorias que funcionaron. El razonamiento emerge de ese proceso más que de ejemplos etiquetados a mano." },
    ],
    related: ["transformers-llm", "fine-tuning", "seguridad"],
  },

  "fine-tuning": {
    h1: "Fine-tuning práctico: LoRA, QLoRA y cuándo no hacerlo",
    title: "Fine-tuning de LLMs: LoRA y QLoRA en la práctica",
    description: "Cómo adaptar un modelo de lenguaje con una sola GPU usando LoRA y QLoRA, con qué herramientas, y por qué muchas veces conviene no hacer fine-tuning.",
    intro: `
      <p>
        El fine-tuning es la puerta de entrada más accesible al entrenamiento: con LoRA o QLoRA se puede
        adaptar un modelo de varios miles de millones de parámetros en una sola GPU de consumo, entrenando
        una fracción mínima de los pesos.
      </p>
      <p>
        La advertencia que repite todo el mundo que lo hace a diario merece estar arriba y no al final: la
        mayoría de los problemas que se intentan resolver con fine-tuning se resuelven mejor con mejores
        prompts, con recuperación de contexto o —sobre todo— con evaluaciones decentes que muestren cuál es
        el problema real. El fine-tuning sirve para enseñar formato, estilo o un dominio muy específico; no
        para agregar conocimiento factual, que es el uso equivocado más frecuente.
      </p>`,
    faq: [
      { q: "¿Qué es LoRA?",
        a: "Es una técnica de adaptación de bajo rango: en vez de modificar todos los pesos del modelo, se entrenan matrices chicas que se suman a las capas existentes. Reduce la memoria necesaria en órdenes de magnitud y permite guardar y combinar adaptadores de pocos megabytes." },
      { q: "¿Cuándo conviene hacer fine-tuning y cuándo no?",
        a: "Conviene cuando necesitás un formato de salida consistente, un estilo particular o un dominio muy cerrado, y tenés evaluaciones que demuestran que el prompting no alcanza. No conviene para incorporar conocimiento factual actualizable: para eso está la recuperación de contexto (RAG), que además se puede corregir sin reentrenar." },
      { q: "¿Qué GPU necesito para hacer fine-tuning?",
        a: "Con QLoRA, una GPU de 16 GB alcanza para modelos de 7 a 8 mil millones de parámetros, y hay quien lo hace en el nivel gratuito de Colab con modelos más chicos. Sin cuantización los requisitos suben rápido." },
    ],
    related: ["post-training", "inferencia", "rag-agentes"],
  },

  inferencia: {
    h1: "Inferencia y optimización de modelos",
    title: "Inferencia de LLMs: cuantización, KV cache y serving",
    description: "FlashAttention, KV cache, cuantización, decodificación especulativa y motores de serving. Acá se define el costo real de un producto con IA.",
    intro: `
      <p>
        Entrenar se hace una vez; servir se hace millones de veces. Por eso el costo real de un producto con
        IA se define en esta etapa, y por eso es una de las áreas con mayor demanda laboral concreta y menos
        material didáctico decente.
      </p>
      <p>
        El concepto que reordena todo lo demás: en inferencia autorregresiva el cuello de botella casi
        nunca es el cómputo, es el ancho de banda de memoria. Entender eso explica de golpe por qué existen
        el KV cache, la cuantización, el batching continuo y la decodificación especulativa. No son trucos
        sueltos: son respuestas al mismo problema.
      </p>`,
    faq: [
      { q: "¿Qué es la cuantización de un modelo?",
        a: "Es representar los pesos con menos bits —de 16 a 8 o 4— para que el modelo ocupe menos memoria y se lea más rápido. La pérdida de calidad, con métodos modernos, suele ser mucho menor de lo que sugiere la reducción de tamaño, y es lo que permite correr modelos grandes en hardware de consumo." },
      { q: "¿Qué es el KV cache?",
        a: "Al generar texto token por token, el modelo recalcularía la atención sobre todo lo anterior en cada paso. El KV cache guarda las claves y valores ya calculados para no repetir ese trabajo. Es lo que hace viable la generación, y también lo que consume la mayor parte de la memoria en contextos largos." },
      { q: "¿Cómo corro un modelo de IA en mi computadora?",
        a: "Con Ollama o llama.cpp para uso local simple, o con vLLM si necesitás servir a varios usuarios con buen rendimiento. Un modelo cuantizado de 7 a 8 mil millones de parámetros corre bien en una máquina con 16 GB de memoria, incluso sin GPU dedicada aunque más lento." },
    ],
    related: ["infra", "fine-tuning", "arquitecturas"],
  },

  infra: {
    h1: "Infraestructura, GPUs y cómputo para IA",
    title: "Infraestructura y GPUs para IA: CUDA, Triton y clusters",
    description: "CUDA, Triton, clusters, tracking de experimentos y la economía del cómputo. Saber leer un roofline te ahorra semanas de optimizar lo que no era el problema.",
    intro: `
      <p>
        Debajo de todo modelo hay hardware con límites muy concretos, y una parte enorme del trabajo real en
        IA es pelear con esos límites. Esta sección cubre desde escribir kernels con CUDA o Triton hasta
        entender la economía del cómputo: cuánto cuesta una hora de GPU, qué se alquila, qué se compra y por
        qué el suministro condiciona el ritmo del campo.
      </p>
      <p>
        La habilidad más rentable acá es diagnóstica: saber si estás limitado por cómputo o por memoria
        antes de empezar a optimizar. Un análisis de roofline de media hora ahorra semanas de trabajo
        dedicado a acelerar lo que no era el cuello de botella.
      </p>`,
    faq: [
      { q: "¿Qué GPU necesito para aprender IA?",
        a: "Ninguna, para empezar. Colab y Kaggle ofrecen GPUs gratis suficientes para todos los ejercicios de aprendizaje, y alquilar por hora sale más barato que comprar si el uso es intermitente. Una GPU propia se justifica cuando entrenás de forma sostenida o necesitás privacidad sobre los datos." },
      { q: "¿Hace falta saber CUDA para trabajar con IA?",
        a: "No para la mayoría de los roles. Se vuelve necesario si te dedicás a optimizar inferencia o entrenamiento a bajo nivel, y ahí es una habilidad escasa y muy bien pagada. Triton bajó bastante la barrera: permite escribir kernels eficientes en Python." },
    ],
    related: ["inferencia", "entrenar-desde-cero", "programacion"],
  },

  "rag-agentes": {
    h1: "RAG, agentes de IA e ingeniería de contexto",
    title: "RAG y agentes de IA: recuperación, herramientas y memoria",
    description: "Recuperación aumentada, uso de herramientas, memoria, orquestación y el arte de administrar el contexto como recurso escaso. Guías y frameworks.",
    intro: `
      <p>
        Esta es la sección más directamente aplicable si tu objetivo es construir productos y no entrenar
        modelos. Recuperación aumentada para que el modelo trabaje sobre datos propios y actualizables, uso
        de herramientas para que haga cosas y no solo hable, memoria para que sostenga tareas largas, y
        orquestación para que todo eso no se caiga.
      </p>
      <p>
        El término "prompt engineering" quedó chico. Lo que importa hoy es la <strong>ingeniería de
        contexto</strong>: decidir qué información entra a la ventana en cada paso y qué se descarta. El
        contexto es un recurso escaso y caro, y administrarlo bien es la diferencia entre un agente que
        funciona y uno que se pierde a los diez pasos.
      </p>
      <p>
        Una regla que ahorra meses: escribí las evaluaciones antes que el sistema. Sin una forma de medir si
        una versión es mejor que la anterior, iterar sobre un agente es adivinar con más pasos.
      </p>`,
    faq: [
      { q: "¿Qué es RAG?",
        a: "Retrieval-Augmented Generation: recuperación aumentada. En vez de esperar que el modelo sepa algo, se busca la información relevante en una base propia y se la inserta en el contexto antes de generar la respuesta. Permite trabajar con datos privados o actualizados sin reentrenar nada." },
      { q: "¿Qué es un agente de IA?",
        a: "Un sistema donde el modelo no solo responde, sino que decide qué acción tomar, ejecuta herramientas, observa el resultado y vuelve a decidir, en un bucle, hasta completar una tarea. La unidad de análisis deja de ser el modelo y pasa a ser el sistema completo: modelo, herramientas, memoria y bucle de control." },
      { q: "¿RAG o fine-tuning?",
        a: "RAG para conocimiento: es actualizable, auditable y no requiere reentrenar. Fine-tuning para comportamiento: formato, estilo, o un dominio muy específico. No compiten, resuelven problemas distintos, y en sistemas serios suelen convivir." },
    ],
    related: ["fine-tuning", "evaluacion", "inferencia"],
  },

  multimodal: {
    lista: "{n} recursos de IA multimodal y modelos generativos",
    h1: "IA multimodal y modelos generativos",
    title: "IA multimodal: visión, difusión, audio y video",
    description: "Visión por computadora, modelos de difusión, audio, video y modelos del mundo. Los modelos frontera hoy nacen multimodales: acá están los recursos para entenderlos.",
    intro: `
      <p>
        Durante años lo multimodal fue un anexo del texto. Dejó de serlo: los modelos frontera hoy nacen
        entrenados sobre texto, imagen y audio a la vez, y la generación de imagen y video pasó de curiosidad
        a industria en cinco años.
      </p>
      <p>
        El concepto central de esta sección es la difusión: en vez de generar de una vez, se parte de ruido
        puro y se lo va limpiando paso a paso, guiado por una condición. Es un cambio de paradigma respecto
        de los modelos autorregresivos, y entenderlo abre la puerta a imagen, audio, video y buena parte de
        lo que se investiga en modelos del mundo.
      </p>`,
    faq: [
      { q: "¿Cómo funcionan los modelos que generan imágenes?",
        a: "La mayoría usa difusión: se entrena una red para quitar ruido de una imagen paso a paso. Al generar, se parte de ruido puro y se aplica ese proceso muchas veces, condicionado por el texto del prompt, hasta obtener una imagen coherente con la descripción." },
      { q: "¿Qué significa que un modelo sea multimodal?",
        a: "Que procesa más de un tipo de dato en el mismo espacio de representación: texto e imagen, o texto, imagen y audio. En la práctica significa que puede razonar sobre una foto, escuchar y responder, o generar en una modalidad a partir de otra." },
    ],
    related: ["arquitecturas", "transformers-llm", "evaluacion"],
  },

  evaluacion: {
    h1: "Evaluación de modelos de IA y benchmarks",
    title: "Evaluación de LLMs: benchmarks, evals y contaminación",
    description: "Sin evaluaciones no hay ingeniería. Qué mide cada benchmark, cómo se contaminan, y cómo armar tus propias evaluaciones para un producto real.",
    intro: `
      <p>
        Es la habilidad más subestimada del campo y la que más rápido separa a alguien que construye
        prototipos de alguien que construye productos. Sin evaluaciones no hay ingeniería: hay intuición
        disfrazada de criterio.
      </p>
      <p>
        Todo benchmark público tiende a contaminarse —termina, de una u otra forma, dentro de los datos de
        entrenamiento— o a saturarse. Por eso lo importante nunca es el número que se anuncia, sino entender
        qué mide exactamente y qué deja afuera. Y por eso, para cualquier producto real, las evaluaciones
        que importan son las propias: construidas sobre tus casos, con tus criterios y revisadas a mano al
        menos una vez.
      </p>`,
    faq: [
      { q: "¿Cómo se mide si un modelo de IA es bueno?",
        a: "Con benchmarks estandarizados para comparar modelos entre sí, y con evaluaciones propias para decidir si sirve para tu caso. Las segundas importan mucho más: un modelo puede liderar tablas públicas y fallar en tu tarea específica. La práctica mínima es un conjunto de casos representativos con criterios explícitos de acierto." },
      { q: "¿Qué es la contaminación de benchmarks?",
        a: "Que los datos de evaluación hayan quedado, directa o indirectamente, dentro del corpus de entrenamiento. El modelo entonces no generaliza: recuerda. Es una de las razones por las que los puntajes públicos hay que leerlos con escepticismo, sobre todo en benchmarks viejos y muy citados." },
    ],
    related: ["rag-agentes", "post-training", "interpretabilidad"],
  },

  interpretabilidad: {
    h1: "Interpretabilidad: mirar adentro de un modelo",
    title: "Interpretabilidad de modelos de IA: circuitos y SAEs",
    description: "Circuitos, superposición, autoencoders dispersos y grafos de atribución. Cómo se abre un modelo para entender qué está haciendo por dentro.",
    intro: `
      <p>
        La interpretabilidad intenta responder una pregunta incómoda: sabemos que estos modelos funcionan,
        pero no sabemos bien por qué. Abrirlos y mirar adentro —encontrar circuitos, características,
        patrones de atribución— es el intento más serio de convertir eso en conocimiento.
      </p>
      <p>
        Es además una de las pocas áreas donde alguien con una GPU y buenas ideas todavía puede producir
        resultados relevantes, porque el cuello de botella es conceptual y no de cómputo. En los últimos
        años pasó de resultados en modelos de juguete a encontrar características manipulables en modelos de
        producción y a trazar grafos de atribución que muestran planificación anticipada y racionalización a
        posteriori.
      </p>`,
    faq: [
      { q: "¿Se puede saber por qué un modelo de IA responde lo que responde?",
        a: "Parcialmente, y es un área de investigación muy activa. Existen técnicas para identificar qué características internas se activan y trazar cómo influyen en la salida. Todavía está lejos de ser una auditoría confiable y completa, pero dejó de ser puramente académica." },
      { q: "¿Qué son los autoencoders dispersos (SAE)?",
        a: "Son modelos auxiliares que descomponen las activaciones internas de una red en muchas características individuales e interpretables. Atacan el problema de la superposición: que una misma neurona representa varios conceptos a la vez, lo que hace ilegible el modelo si se lo mira neurona por neurona." },
    ],
    related: ["seguridad", "deep-learning", "evaluacion"],
  },

  seguridad: {
    h1: "Alineamiento y seguridad de la inteligencia artificial",
    title: "Seguridad y alineamiento de la IA: recursos y papers",
    description: "Alineamiento, red-teaming, reward hacking, supervisión escalable, gobernanza y regulación. Recursos técnicos y no técnicos, incluyendo posiciones enfrentadas.",
    intro: `
      <p>
        Esta sección incluye deliberadamente autores que están en desacuerdo entre sí. La discusión sobre
        riesgos de la IA está poblada de gente inteligente con posiciones incompatibles, y leer solo un lado
        —el que más te resuene— es la forma más rápida de terminar con una opinión firme y mal informada.
      </p>
      <p>
        Va desde problemas técnicos concretos y verificables hoy —reward hacking, jailbreaks, supervisión
        escalable de sistemas que superan al evaluador humano— hasta gobernanza, políticas de escalado
        responsable y regulación. Los dos planos importan y suelen discutirse por separado cuando en
        realidad se condicionan.
      </p>`,
    faq: [
      { q: "¿Qué es el alineamiento de la IA?",
        a: "El problema de lograr que un sistema haga lo que sus operadores pretenden, incluyendo situaciones que nadie especificó de antemano. No es solo filtrar respuestas dañinas: es que los objetivos que el sistema optimiza efectivamente coincidan con los objetivos que quisimos darle." },
      { q: "¿Qué es el reward hacking?",
        a: "Que un modelo encuentre una forma de maximizar la métrica de recompensa sin cumplir el objetivo real que esa métrica intentaba capturar. Es el ejemplo más concreto y verificable hoy de por qué especificar objetivos es difícil, y aparece constantemente en entrenamiento con refuerzo." },
    ],
    related: ["interpretabilidad", "post-training", "futuro"],
  },

  medios: {
    lista: "{n} blogs, canales, newsletters y podcasts seleccionados",
    h1: "Blogs, canales y podcasts de IA que vale la pena seguir",
    title: "Blogs, canales de YouTube y podcasts de IA",
    description: "Las fuentes que vale la pena seguir de forma sostenida para mantenerse al día en inteligencia artificial: blogs, canales, newsletters y podcasts, ordenados por tipo.",
    intro: `
      <p>
        El campo se mueve más rápido que los libros, así que una parte del aprendizaje es sostener un flujo
        de fuentes decentes. Acá están las que aguantan el paso del tiempo: blogs técnicos con criterio,
        canales que explican en serio y podcasts con invitados que efectivamente construyen cosas.
      </p>
      <p>
        La advertencia importa más que la lista: con dos newsletters y tres blogs alcanza. Seguir todo es
        una forma elegante de no aprender nada, porque el consumo de novedades da una sensación de progreso
        que no se corresponde con ningún aprendizaje. Elegí pocas fuentes, leelas bien y dedicá el resto del
        tiempo a escribir código.
      </p>`,
    faq: [
      { q: "¿Cómo me mantengo actualizado en IA sin volverme loco?",
        a: "Eligiendo dos o tres fuentes de síntesis en vez de seguir el flujo diario. Una newsletter semanal y un par de blogs técnicos cubren lo que importa; lo demás es ruido que se resuelve solo. Reservá la mayor parte del tiempo para practicar, no para leer novedades." },
      { q: "¿Cuáles son los mejores canales de YouTube para aprender IA?",
        a: "3Blue1Brown para intuición matemática visual, Andrej Karpathy para construir desde cero, y Yannic Kilcher para lectura de papers. Los tres tienen subtítulos automáticos en español y son el punto de partida más citado por gente que efectivamente aprendió." },
    ],
    related: ["cuentas", "espanol", "futuro"],
  },

  cuentas: {
    lista: "{n} cuentas y comunidades que vale la pena seguir",
    h1: "Cuentas y comunidades de IA",
    title: "A quién seguir en IA y dónde se discute de verdad",
    description: "Las cuentas y comunidades donde se discute inteligencia artificial semanas antes de que llegue a los papers: X, Discord, Reddit y foros técnicos.",
    intro: `
      <p>
        Buena parte de la discusión real ocurre en X, Discord y Reddit semanas antes de llegar a un paper, y
        meses antes de llegar a un curso. Saber dónde mirar es una ventaja concreta, sobre todo en un campo
        donde la distancia entre un resultado y su publicación formal se acortó tanto.
      </p>
      <p>
        El criterio de esta lista es relación señal/ruido, no cantidad de seguidores. Hay cuentas enormes
        que no aportan nada y cuentas chicas de gente que entrena modelos todos los días. Estas son las
        segundas.
      </p>`,
    faq: [
      { q: "¿Dónde se discute inteligencia artificial en español?",
        a: "Hay comunidades activas en Discord y Telegram, además de grupos regionales en X. La sección de recursos en español reúne las opciones en castellano, aunque conviene asumir que la discusión técnica de punta va a seguir siendo mayoritariamente en inglés." },
      { q: "¿Vale la pena estar en X para aprender IA?",
        a: "Sirve para enterarte temprano y para ver cómo piensa gente que trabaja en el tema, pero es también la forma más eficiente de perder tres horas sintiendo que aprendiste. Seguí pocas cuentas, con criterio, y tratalo como fuente de punteros, no como material de estudio." },
    ],
    related: ["medios", "espanol", "seguridad"],
  },

  espanol: {
    lista: "{n} recursos de IA en español, curados uno por uno",
    h1: "Recursos de IA en español",
    title: "Recursos de IA en español: cursos, canales y comunidades",
    description: "Los mejores recursos para aprender inteligencia artificial en español: cursos, canales de YouTube, libros y comunidades en castellano, curados uno por uno.",
    intro: `
      <p>
        Esta es la sección más buscada y la más honesta de armar. Sí, hay material de calidad en castellano
        para aprender inteligencia artificial, y está acá. También es cierto que es bastante menos que en
        inglés y que suele ir algo atrasado respecto de lo que se publica.
      </p>
      <p>
        La recomendación práctica para quien estudia desde Argentina, México, Colombia, Chile, España o
        cualquier país hispanohablante: usá el material en español para construir intuición y vocabulario,
        que es donde más rinde, y aceptá que en algún momento vas a leer papers en inglés. No hay atajo, y
        tampoco es tan grave: el inglés técnico de los papers es limitado y repetitivo, mucho más accesible
        que el inglés conversacional. Con un traductor al lado y algo de paciencia, se destraba en semanas.
      </p>
      <p>
        Un detalle que casi nadie menciona: los tokenizadores de los modelos están entrenados
        mayoritariamente sobre texto en inglés, así que el mismo contenido en español consume más tokens.
        Si vas a construir productos para el mercado hispanohablante, eso se traduce en costos más altos por
        respuesta, y conviene tenerlo en la cuenta desde el principio.
      </p>`,
    faq: [
      { q: "¿Se puede aprender inteligencia artificial en español?",
        a: "Sí. Hay cursos, canales de YouTube, libros y comunidades de buena calidad en castellano, y alcanzan de sobra para los fundamentos y para construir aplicaciones. Para investigación de punta vas a necesitar leer inglés, pero es un inglés técnico limitado que se aprende leyendo, no un obstáculo real." },
      { q: "¿Cuáles son los mejores cursos de IA gratis en español?",
        a: "Los canales de divulgación técnica en castellano cubren muy bien fundamentos y práctica, y varios cursos internacionales importantes tienen subtítulos en español. Todos los recursos de esta página están marcados como gratuitos o no, así que podés filtrar por eso." },
      { q: "¿Conviene estudiar en español o directamente en inglés?",
        a: "En español al principio, para construir intuición y vocabulario más rápido, y en inglés en cuanto empieces a necesitar material actualizado. Forzarse al inglés desde el día uno agrega una dificultad que no aporta nada cuando todavía estás entendiendo los conceptos." },
    ],
    related: ["medios", "cuentas", "matematicas"],
  },

  "papers-clave": {
    faqTitulo: "Preguntas frecuentes sobre los papers clave de la IA",
    h1: "Línea de tiempo de la IA: los papers que definieron el campo",
    title: "Historia de la IA moderna: papers clave en orden",
    description: "De AlexNet a los modelos de razonamiento: los momentos que definieron la inteligencia artificial moderna, en orden, con el contexto de por qué cada uno importó.",
    intro: `
      <p>
        Entender cómo llegamos hasta acá explica muchísimo de por qué los modelos son como son. Cada
        decisión de diseño que hoy parece obvia fue en su momento una apuesta entre varias, y el orden
        cronológico deja ver la lógica: qué problema resolvía cada paper y qué problema nuevo creaba.
      </p>
      <p>
        Leer estos trabajos en secuencia es, para mucha gente, la forma más eficiente de entrar al campo.
        Trece momentos, de 2012 a hoy.
      </p>`,
    faq: [
      { q: "¿Cuál es el paper más importante de la IA moderna?",
        a: "«Attention Is All You Need» (2017), que introdujo el transformer. Reemplazó la recurrencia por atención pura y es la base de prácticamente todos los modelos de lenguaje actuales, además de buena parte de los modelos de imagen y audio." },
      { q: "¿Qué papers leer para entender los LLMs?",
        a: "En orden: «Attention Is All You Need», el paper de GPT-3 con las leyes de escalado, Chinchilla para la corrección sobre datos, InstructGPT para el ajuste por instrucciones y DeepSeek-R1 para razonamiento con refuerzo. Con esos cinco tenés la columna vertebral." },
    ],
    related: ["transformers-llm", "futuro", "arquitecturas"],
  },

  futuro: {
    faqTitulo: "Preguntas frecuentes sobre el futuro de la IA",
    h1: "Qué se viene en inteligencia artificial",
    title: "El futuro de la IA: apuestas seguras y disputas abiertas",
    description: "Qué es apuesta segura, qué está cambiando ahora mismo y qué está genuinamente en disputa en inteligencia artificial. Separando evidencia de especulación.",
    intro: `
      <p>
        Esta sección envejece más rápido que el resto, así que está escrita separando tres cosas que suelen
        mezclarse: lo que es apuesta segura y conviene estudiar aunque cambie todo, lo que está cambiando
        ahora mismo, y lo que está genuinamente en disputa entre gente que sabe.
      </p>
      <p>
        La distinción importa porque el discurso público sobre IA mezcla las tres categorías todo el tiempo,
        y casi todos los pronósticos vienen de gente con incentivos: laboratorios que necesitan capital,
        críticos que construyeron su identidad sobre el escepticismo, inversores con posiciones tomadas. La
        forma útil de leerlos es en pares opuestos, quedándose con los mecanismos causales que proponen y no
        con las fechas.
      </p>`,
    faq: [
      { q: "¿Qué conviene estudiar hoy que siga sirviendo en diez años?",
        a: "La matemática de base, el descenso por gradiente y la diferenciación automática, la lección amarga como criterio para evaluar propuestas nuevas, y la evaluación como disciplina. Regla práctica: si un recurso te enseña por qué algo funciona, probablemente siga vigente; si te enseña qué botón apretar en una librería, va a estar obsoleto en seis meses." },
      { q: "¿Cuándo llega la inteligencia artificial general?",
        a: "Es una de las preguntas genuinamente en disputa, y desconfiá de cualquiera que la presente como resuelta en cualquier dirección. Hay posiciones serias que la ubican en esta década por extrapolación de curvas de capacidad, y posiciones igual de serias que señalan que la definición misma es confusa y que la difusión real la limitan las instituciones, no la capacidad técnica." },
    ],
    related: ["seguridad", "papers-clave", "medios"],
  },
};

/* Las cuatro rutas de aprendizaje. Cada una es una página propia porque responden
   a intenciones de búsqueda distintas ("aprender ia desde cero" vs "aprender a
   entrenar modelos" son dos personas diferentes buscando dos cosas diferentes). */
const RUTAS = [
  {
    slug: "desde-cero",
    icon: "🌱",
    h1: "Cómo aprender IA desde cero",
    nav: "Nunca entrené un modelo",
    title: "Aprender IA desde cero: ruta paso a paso",
    description: "Ruta de aprendizaje de inteligencia artificial desde cero, sin experiencia previa: qué estudiar, en qué orden y con qué recursos gratuitos. Explicado paso a paso.",
    para: "Sabés programar poco o nada. Meta: entender qué es una red neuronal y entrenar una.",
    intro: `
      <p>
        Esta es la ruta para quien arranca sin base. No asume programación previa más allá de lo mínimo, no
        asume matemática universitaria fresca y no asume que tengas una GPU. Asume una sola cosa:
        constancia, unas horas por semana durante algunos meses.
      </p>
      <p>
        El orden importa más de lo que parece. El error que hace abandonar a casi todo el mundo es empezar
        por todos lados a la vez: un curso de matemática, un tutorial de PyTorch, un video sobre
        transformers y una newsletter, todo la misma semana. Elegí esta ruta, seguila en orden, y recién
        después dispersate.
      </p>`,
    pasos: [
      { t: "Intuición visual primero", d: "La serie de redes neuronales de 3Blue1Brown, completa. Antes de cualquier fórmula, entender geométricamente qué hace una red. Son unas cuatro horas que ahorran meses de confusión.", sec: "matematicas" },
      { t: "Python y NumPy con foco en shapes", d: "Lo mínimo para escribir código propio. La habilidad concreta que necesitás es manipular arreglos y entender por qué las dimensiones no cierran, que es el 80% de los errores reales.", sec: "programacion" },
      { t: "Un curso de machine learning completo", d: "La Machine Learning Specialization de Andrew Ng si preferís teoría primero, o fast.ai si aprendés haciendo. Los dos funcionan; elegí según cómo estudiás vos.", sec: "ml-clasico" },
      { t: "micrograd de Karpathy", d: "Construí un motor de diferenciación automática en cien líneas. Es el momento en que backpropagation deja de ser una palabra y pasa a ser algo que escribiste.", sec: "deep-learning" },
      { t: "Un proyecto propio con datos que te importen", d: "Sin proyecto no se consolida nada. Que sea chico, que sea tuyo y que llegue hasta el final, incluso si el resultado es mediocre. Terminar importa más que la métrica.", sec: "deep-learning" },
    ],
    tiempo: "3 a 6 meses con unas 10 horas semanales",
    faq: [
      { q: "¿Puedo aprender IA desde cero sin saber programar?",
        a: "Sí, pero vas a necesitar aprender Python en el camino: no hay forma de evitarlo si querés entender cómo funcionan los modelos. Calculá unas semanas extra al principio. Si tu objetivo es solo usar herramientas de IA sin construir nada, no hace falta programar." },
      { q: "¿Cuánto tiempo lleva aprender inteligencia artificial desde cero?",
        a: "Con unas diez horas semanales sostenidas, tres a seis meses alcanzan para entender los fundamentos y entrenar modelos propios. Un año para leer papers con comodidad. La constancia pesa mucho más que el punto de partida." },
      { q: "¿Necesito una GPU o pagar algo para empezar?",
        a: "No. Google Colab y Kaggle ofrecen GPUs gratis más que suficientes para todo el recorrido de aprendizaje, y prácticamente todos los recursos de esta ruta son gratuitos." },
    ],
  },
  {
    slug: "construir-con-llms",
    icon: "🔨",
    h1: "Cómo construir productos con LLMs",
    nav: "Quiero construir con LLMs",
    title: "Construir con LLMs: ruta para desarrolladores",
    description: "Ruta para desarrolladores que quieren construir productos con modelos de lenguaje: prompting, evaluaciones, RAG, agentes e inferencia. Sin entrenar modelos.",
    para: "Sos desarrollador. Meta: construir productos con modelos, no entrenarlos desde cero.",
    intro: `
      <p>
        Si ya programás, esta es la ruta más corta hacia algo que funcione en producción. No necesitás
        entrenar nada: necesitás entender lo suficiente del modelo para usarlo bien, y bastante de
        ingeniería para que el sistema alrededor no se caiga.
      </p>
      <p>
        El orden acá es deliberadamente contraintuitivo en un punto: las evaluaciones van antes que las
        funcionalidades. Es lo que separa un demo que impresiona de un producto que se puede mejorar. Sin
        una forma de medir si la versión de hoy es mejor que la de ayer, iterar es adivinar.
      </p>`,
    pasos: [
      { t: "Deep Dive into LLMs de Karpathy", d: "Tres horas y media que dan el modelo mental completo: qué es pre-entrenamiento, qué es post-entrenamiento, por qué el modelo alucina y qué se puede esperar razonablemente de él.", sec: "transformers-llm" },
      { t: "Prompting e ingeniería de contexto", d: "Las guías de Anthropic y OpenAI, más «Building Effective Agents». El contexto es un recurso escaso: qué entra en la ventana y qué se descarta es la decisión de diseño central.", sec: "rag-agentes" },
      { t: "Evaluaciones, antes que nada más", d: "El material de Hamel Husain sobre evals. Armá un conjunto de casos con criterios explícitos y revisalos a mano al menos una vez. Esto separa juguetes de productos.", sec: "evaluacion" },
      { t: "RAG y agentes", d: "Recuperación sobre datos propios, uso de herramientas, memoria y orquestación. El Model Context Protocol para conectar el modelo con sistemas reales.", sec: "rag-agentes" },
      { t: "Inferencia y costos", d: "vLLM u Ollama, cuantización y las cuentas de costo real por token. Acá se define si el producto cierra económicamente o no.", sec: "inferencia" },
      { t: "Fine-tuning al final, y solo si hace falta", d: "Únicamente cuando las evaluaciones demuestren que prompting y recuperación no alcanzan. La mayoría de las veces no hace falta.", sec: "fine-tuning" },
    ],
    tiempo: "1 a 3 meses si ya programás",
    faq: [
      { q: "¿Necesito saber machine learning para construir con LLMs?",
        a: "No en profundidad. Necesitás entender qué hace el modelo, por qué alucina y cómo se comporta el contexto, pero no hace falta saber entrenar. La mayor parte del trabajo es ingeniería de software clásica alrededor de una API." },
      { q: "¿Qué se necesita para hacer un chatbot con IA sobre mis propios datos?",
        a: "Recuperación aumentada (RAG): indexás tus documentos, buscás los fragmentos relevantes según la consulta y se los pasás al modelo en el contexto. No hace falta entrenar ni hacer fine-tuning, y tiene la ventaja de que actualizar la información es actualizar el índice." },
    ],
  },
  {
    slug: "entrenar-modelos",
    icon: "🧪",
    h1: "Cómo aprender a entrenar modelos de IA",
    nav: "Quiero entrenar modelos",
    title: "Aprender a entrenar modelos de IA: ruta completa",
    description: "Ruta para entender y modificar el pipeline completo de entrenamiento: de Zero to Hero a CS336, nanoGPT, entrenamiento distribuido y post-training.",
    para: "Tenés base de programación y matemática. Meta: entender y modificar el pipeline completo.",
    intro: `
      <p>
        Esta ruta asume que ya programás con soltura y que la matemática no te asusta. El objetivo no es
        entrenar un modelo frontera —eso no lo hace nadie solo— sino entender el pipeline completo lo
        suficiente como para modificarlo: tokenizador, arquitectura, datos, paralelismo, evaluación y
        post-entrenamiento.
      </p>
      <p>
        Es la ruta más larga y la que más cómputo pide, aunque bastante menos del que la gente supone:
        reproducir GPT-2 hoy cuesta decenas de dólares en GPUs alquiladas.
      </p>`,
    pasos: [
      { t: "Neural Networks: Zero to Hero, completo", d: "Escribiendo el código vos, no mirándolo. De micrograd a un transformer funcionando. Es el mejor material que existe sobre el tema, y es gratis.", sec: "deep-learning" },
      { t: "Understanding Deep Learning como referencia", d: "El libro de Prince en paralelo, para consultar cada vez que un concepto quede a medias. PDF gratuito.", sec: "deep-learning" },
      { t: "El transformer en serio", d: "«Attention Is All You Need» + The Annotated Transformer + The Illustrated Transformer. Los tres juntos: paper, código anotado e intuición visual.", sec: "transformers-llm" },
      { t: "Stanford CS336", d: "Tokenizador, arquitectura, kernels, entrenamiento distribuido y leyes de escalado. Es el curso más completo que hay sobre construir un modelo de lenguaje desde cero.", sec: "entrenar-desde-cero" },
      { t: "nanoGPT y después nanochat", d: "Reproducí GPT-2 y luego el pipeline completo incluyendo post-entrenamiento. Acá se junta todo lo anterior en algo que funciona.", sec: "entrenar-desde-cero" },
      { t: "Los playbooks de entrenamiento a escala", d: "Ultra-Scale Playbook y Smol Training Playbook: la realidad de los clusters, lo que se rompe y lo que ningún paper documenta.", sec: "infra" },
      { t: "Post-training", d: "InstructGPT, DPO, GRPO y open-r1 para leer código real de aprendizaje por refuerzo con recompensas verificables.", sec: "post-training" },
    ],
    tiempo: "6 a 12 meses con base previa",
    faq: [
      { q: "¿Qué necesito saber antes de empezar a entrenar modelos?",
        a: "Python con soltura, PyTorch básico, álgebra lineal y cálculo hasta la regla de la cadena, y haber entrenado al menos una red chica de punta a punta. Sin esa base, esta ruta se vuelve frustrante muy rápido." },
      { q: "¿Se puede aprender a entrenar modelos sin trabajar en un laboratorio?",
        a: "Sí. Todo el material de esta ruta es público y gratuito, el código es abierto y el cómputo necesario para los ejercicios se alquila por decenas de dólares. Lo que no vas a poder replicar en casa es la escala, pero los conceptos y el pipeline son los mismos." },
    ],
  },
  {
    slug: "investigar",
    icon: "🔬",
    h1: "Cómo entrar a investigar en IA",
    nav: "Quiero investigar",
    title: "Investigar en IA: ruta a interpretabilidad y alineamiento",
    description: "Ruta para llegar a investigar en inteligencia artificial: base matemática, ARENA, papers de interpretabilidad, reproducción de resultados y escritura pública.",
    para: "Meta: contribuir a interpretabilidad, alineamiento o arquitecturas.",
    intro: `
      <p>
        Esta ruta apunta a producir conocimiento nuevo, no a aplicar el existente. Es la más exigente en
        matemática y la que más tolerancia a la frustración pide, porque la mayor parte de lo que se intenta
        no funciona.
      </p>
      <p>
        La buena noticia es que interpretabilidad y alineamiento son áreas donde el cuello de botella es
        conceptual y no de cómputo. Alguien con una GPU, buenas ideas y constancia todavía puede producir
        resultados relevantes, y el campo tiene una tradición fuerte de tomar en serio trabajo de gente sin
        credenciales formales.
      </p>`,
    pasos: [
      { t: "Base matemática sólida", d: "Mathematics for Machine Learning como piso y Murphy como referencia de escritorio. Acá sí conviene invertir de verdad: es lo que permite leer y escribir papers.", sec: "matematicas" },
      { t: "ARENA, completo", d: "Es el currículum más directo que existe hacia investigación técnica en seguridad e interpretabilidad. Denso, práctico y muy bien diseñado.", sec: "interpretabilidad" },
      { t: "Los papers de circuitos, en orden cronológico", d: "Con TransformerLens abierto al lado, reproduciendo lo que se pueda. Leer interpretabilidad sin ejecutar código no sirve de mucho.", sec: "interpretabilidad" },
      { t: "Reproducí un paper chico de punta a punta", d: "Es el filtro real entre leer investigación y hacer investigación. Vas a descubrir cuánto de un paper no está escrito en el paper.", sec: "papers-clave" },
      { t: "Escribí en público lo que encontrás", d: "Blog, LessWrong, Alignment Forum. Así se entra al campo hoy: mucha gente llegó a posiciones de investigación por lo que publicó, no por su título.", sec: "seguridad" },
      { t: "Elegí un problema abierto concreto", d: "Los «200 Concrete Open Problems» de Neel Nanda son un buen catálogo para no quedarse en la etapa de leer indefinidamente.", sec: "interpretabilidad" },
    ],
    tiempo: "1 a 2 años, dependiendo de la base previa",
    faq: [
      { q: "¿Hace falta un doctorado para investigar en IA?",
        a: "No es un requisito formal en interpretabilidad y alineamiento, donde varias personas llegaron a posiciones de investigación por trabajo publicado en abierto. Ayuda mucho para posiciones académicas tradicionales y para algunos laboratorios, pero el portafolio público pesa más que en otros campos." },
      { q: "¿Por dónde empiezo si quiero investigar en interpretabilidad?",
        a: "Por ARENA, que es el currículum más directo, y por los papers de circuitos leídos en orden cronológico con TransformerLens al lado. Después, reproducir un resultado chico completo: ahí se aprende lo que ningún paper documenta." },
    ],
  },
];

module.exports = { COPY, RUTAS };
