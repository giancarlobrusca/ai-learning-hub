/* Blogs, canales, podcasts, newsletters, cuentas, comunidades, herramientas y recursos en español */
window.R = window.R || [];
window.R.push(

/* ---------------- BLOGS Y PUBLICACIONES ---------------- */
{ sec:"medios", type:"blog", level:"medio", top:true, year:2025, free:true,
  title:"Lil'Log", by:"Lilian Weng",
  url:"https://lilianweng.github.io/",
  note:"Cada post es prácticamente un survey: difusión, agentes, alucinaciones, hacking de recompensas, razonamiento. La mejor escritura técnica larga del campo." },

{ sec:"medios", type:"blog", level:"intro", top:true, year:2025, free:true,
  title:"Jay Alammar — visualizaciones", by:"Jay Alammar",
  url:"https://jalammar.github.io/",
  note:"'The Illustrated Transformer', 'Illustrated GPT-2', 'Illustrated Stable Diffusion'. Si algo no se entiende, probablemente Jay ya lo dibujó." },

{ sec:"medios", type:"blog", level:"medio", top:true, year:2025,
  title:"Ahead of AI", by:"Sebastian Raschka",
  url:"https://magazine.sebastianraschka.com/",
  note:"Análisis mensual de papers y arquitecturas con implementaciones propias. El equilibrio perfecto entre profundidad y claridad." },

{ sec:"medios", type:"blog", level:"medio", top:true, year:2025,
  title:"karpathy.github.io", by:"Andrej Karpathy",
  url:"https://karpathy.github.io/",
  note:"Pocos posts, todos memorables: 'Software 2.0', 'A Recipe for Training Neural Networks', 'The Unreasonable Effectiveness of RNNs'." },

{ sec:"medios", type:"blog", level:"medio", top:true, year:2025,
  title:"Simon Willison's Weblog", by:"Simon Willison",
  url:"https://simonwillison.net/",
  note:"El mejor cronista del día a día de los LLMs aplicados: cada modelo nuevo, cada truco, cada vulnerabilidad (prompt injection). Publica casi a diario." },

{ sec:"medios", type:"blog", level:"avanzado", year:2025,
  title:"Anthropic Research & Engineering", by:"Anthropic",
  url:"https://www.anthropic.com/research",
  note:"Interpretabilidad, alineamiento y también ingeniería aplicada de agentes. transformer-circuits.pub es su publicación técnica." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"Google DeepMind Blog", by:"DeepMind",
  url:"https://deepmind.google/discover/blog/",
  note:"AlphaFold, AlphaGeometry, Gemini, world models. Ciencia de frontera bien comunicada." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"OpenAI Research", by:"OpenAI",
  url:"https://openai.com/research/",
  note:"System cards y reportes técnicos. Aunque publican menos detalle que antes, las system cards siguen siendo informativas." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"Hugging Face Blog", by:"Hugging Face",
  url:"https://huggingface.co/blog",
  note:"Probablemente la fuente con mejor relación señal/ruido para técnicas aplicadas y modelos abiertos." },

{ sec:"medios", type:"blog", level:"avanzado", year:2025,
  title:"Gwern.net", by:"Gwern Branwen",
  url:"https://gwern.net/",
  note:"Ensayos larguísimos y densos sobre escala, IA y estadística. 'The Scaling Hypothesis' es historia del pensamiento del campo." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"Chip Huyen", by:"Chip Huyen",
  url:"https://huyenchip.com/blog/",
  note:"Sistemas de ML e ingeniería de IA en producción, desde la experiencia real. Autora de 'AI Engineering' (2025)." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"One Useful Thing", by:"Ethan Mollick",
  url:"https://www.oneusefulthing.org/",
  note:"El mejor escritor sobre el uso práctico y organizacional de la IA. Menos técnico, muy útil para pensar el impacto real." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"Sebastian Ruder — NLP News", by:"Sebastian Ruder",
  url:"https://www.ruder.io/",
  note:"Panoramas de NLP, modelos multilingües y tendencias de investigación." },

{ sec:"medios", type:"blog", level:"medio", year:2025,
  title:"Deep (Learning) Focus / Cameron Wolfe", by:"Cameron R. Wolfe",
  url:"https://cameronrwolfe.substack.com/",
  note:"Repasos de papers extensos y bien estructurados, con contexto histórico." },

/* ---------------- NEWSLETTERS ---------------- */
{ sec:"medios", type:"newsletter", level:"intro", top:true, year:2025, free:true,
  title:"The Batch", by:"DeepLearning.AI / Andrew Ng",
  url:"https://www.deeplearning.ai/the-batch/",
  note:"Semanal, equilibrada, con la carta de Andrew Ng al inicio. La mejor opción si querés una sola newsletter." },

{ sec:"medios", type:"newsletter", level:"medio", top:true, year:2025, free:true,
  title:"Import AI", by:"Jack Clark (Anthropic)",
  url:"https://importai.substack.com/",
  note:"Papers relevantes con comentario político-estratégico y una ficción corta al final. Perspectiva única sobre hacia dónde va todo." },

{ sec:"medios", type:"newsletter", level:"medio", top:true, year:2025, free:true,
  title:"AI News (smol.ai)", by:"swyx y equipo",
  url:"https://news.smol.ai/",
  note:"Resumen diario de Discords, Reddit y X, generado con IA y revisado. Si querés no perderte nada, es esto." },

{ sec:"medios", type:"newsletter", level:"medio", year:2025, free:true,
  title:"The Rundown / TLDR AI", by:"varios",
  url:"https://tldr.tech/ai",
  note:"Resúmenes diarios cortos. Útiles para mantenerte al día sin invertir tiempo." },

{ sec:"medios", type:"newsletter", level:"avanzado", year:2025,
  title:"Interconnects", by:"Nathan Lambert (Ai2)",
  url:"https://www.interconnects.ai/",
  note:"Post-training, modelos abiertos y política de IA desde dentro de un laboratorio. Análisis de altísimo nivel." },

/* ---------------- CANALES DE YOUTUBE ---------------- */
{ sec:"medios", type:"canal", level:"intro", top:true, year:2025, free:true,
  title:"Andrej Karpathy", by:"YouTube",
  url:"https://www.youtube.com/@AndrejKarpathy",
  note:"Poco volumen, calidad máxima. Cada video suyo vale un curso entero." },

{ sec:"medios", type:"canal", level:"intro", top:true, year:2025, free:true,
  title:"3Blue1Brown", by:"Grant Sanderson",
  url:"https://www.youtube.com/@3blue1brown",
  note:"Matemática visual. Las series de redes neuronales, álgebra lineal y cálculo son la base de todo." },

{ sec:"medios", type:"canal", level:"medio", top:true, year:2025, free:true,
  title:"Umar Jamil", by:"YouTube",
  url:"https://www.youtube.com/@umarjamilai",
  note:"Implementa papers completos desde cero en PyTorch, línea por línea: LLaMA, Stable Diffusion, DPO, Mamba, entrenamiento distribuido. Increíblemente subestimado." },

{ sec:"medios", type:"canal", level:"medio", top:true, year:2025, free:true,
  title:"Yannic Kilcher", by:"YouTube",
  url:"https://www.youtube.com/@YannicKilcher",
  note:"Explicaciones de papers con criterio crítico. Te enseña a leer papers, no solo a entenderlos." },

{ sec:"medios", type:"canal", level:"intro", year:2025, free:true,
  title:"StatQuest with Josh Starmer", by:"YouTube",
  url:"https://www.youtube.com/@statquest",
  note:"Estadística y ML explicados con una paciencia infinita y canciones ridículas. Funciona." },

{ sec:"medios", type:"canal", level:"medio", year:2025, free:true,
  title:"AI Explained", by:"YouTube",
  url:"https://www.youtube.com/@aiexplained-official",
  note:"Análisis sobrio de lanzamientos y benchmarks, sin hype ni catastrofismo. Raro y valioso." },

{ sec:"medios", type:"canal", level:"medio", year:2025, free:true,
  title:"Machine Learning Street Talk", by:"Tim Scarfe y equipo",
  url:"https://www.youtube.com/@MachineLearningStreetTalk",
  note:"Entrevistas técnicas largas y exigentes con investigadores de primer nivel. Debate real, no promoción." },

{ sec:"medios", type:"canal", level:"intro", year:2025, free:true,
  title:"Two Minute Papers", by:"Károly Zsolnai-Fehér",
  url:"https://www.youtube.com/@TwoMinutePapers",
  note:"Resúmenes cortos y entusiastas, fuertes en gráficos y simulación. Bueno para descubrir, no para profundizar." },

{ sec:"medios", type:"canal", level:"avanzado", year:2025, free:true,
  title:"Stanford Online / MIT OpenCourseWare", by:"Stanford / MIT",
  url:"https://www.youtube.com/@stanfordonline",
  note:"Cursos universitarios completos y gratuitos: CS229, CS224n, CS25, CS336, 6.S191." },

{ sec:"medios", type:"canal", level:"medio", year:2025, free:true,
  title:"Welch Labs", by:"YouTube",
  url:"https://www.youtube.com/@WelchLabs",
  note:"Videos de calidad cinematográfica sobre backpropagation, redes neuronales y su historia." },

{ sec:"medios", type:"canal", level:"medio", year:2025, free:true,
  title:"Artem Kirsanov", by:"YouTube",
  url:"https://www.youtube.com/@ArtemKirsanov",
  note:"Neurociencia computacional e IA con animaciones excelentes. Buen puente entre cerebros y redes." },

/* ---------------- PODCASTS ---------------- */
{ sec:"medios", type:"podcast", level:"medio", top:true, year:2025, free:true,
  title:"Dwarkesh Podcast", by:"Dwarkesh Patel",
  url:"https://www.dwarkesh.com/",
  note:"Las mejores entrevistas largas del sector. Sus episodios con Sutton, Hassabis, Amodei, Sutskever y Karpathy son documentos históricos." },

{ sec:"medios", type:"podcast", level:"medio", top:true, year:2025, free:true,
  title:"Latent Space", by:"swyx & Alessio",
  url:"https://www.latent.space/",
  note:"El podcast del 'AI Engineer': práctico, técnico y muy conectado con quienes construyen productos reales." },

{ sec:"medios", type:"podcast", level:"medio", year:2025, free:true,
  title:"The TWIML AI Podcast", by:"Sam Charrington",
  url:"https://twimlai.com/podcast/twimlai/",
  note:"Más de 700 episodios con investigadores. Archivo enorme y bien indexado por tema." },

{ sec:"medios", type:"podcast", level:"intro", year:2025, free:true,
  title:"Lex Fridman Podcast", by:"Lex Fridman",
  url:"https://lexfridman.com/podcast/",
  note:"Conversaciones muy largas con figuras centrales del campo. Variable en profundidad técnica, fuerte en contexto histórico." },

{ sec:"medios", type:"podcast", level:"medio", year:2025, free:true,
  title:"No Priors / The Cognitive Revolution", by:"varios",
  url:"https://www.cognitiverevolution.ai/",
  note:"Entrevistas frecuentes con fundadores e investigadores, con foco en aplicaciones y estrategia." },

{ sec:"medios", type:"podcast", level:"avanzado", year:2025, free:true,
  title:"AXRP — the AI X-risk Research Podcast", by:"Daniel Filan",
  url:"https://axrp.net/",
  note:"Entrevistas técnicas y profundas con investigadores de alineamiento. Nada de divulgación superficial." },

/* ---------------- CUENTAS A SEGUIR ---------------- */
{ sec:"cuentas", type:"cuenta", level:"intro", top:true, year:2025, free:true,
  title:"@karpathy", by:"Andrej Karpathy (X)",
  url:"https://x.com/karpathy",
  note:"Intuiciones destiladas, hilos didácticos y observaciones que después se vuelven consenso del campo." },

{ sec:"cuentas", type:"cuenta", level:"medio", top:true, year:2025, free:true,
  title:"@rasbt", by:"Sebastian Raschka (X)",
  url:"https://x.com/rasbt",
  note:"Resúmenes de papers con figuras propias y comparaciones de arquitecturas. Consistentemente útil." },

{ sec:"cuentas", type:"cuenta", level:"medio", top:true, year:2025, free:true,
  title:"@_akhaliq y @arankomatsuzaki", by:"AK / Aran Komatsuzaki (X)",
  url:"https://x.com/_akhaliq",
  note:"Los dos agregadores de papers más rápidos. Si algo importante salió hoy, ya lo postearon." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@ylecun", by:"Yann LeCun (X)",
  url:"https://x.com/ylecun",
  note:"La voz más consistentemente escéptica sobre los LLMs desde dentro del campo. Contrapeso necesario." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@jeremyphoward", by:"Jeremy Howard (X)",
  url:"https://x.com/jeremyphoward",
  note:"fast.ai, modelos abiertos y pedagogía. Muy generoso explicando cosas difíciles." },

{ sec:"cuentas", type:"cuenta", level:"avanzado", year:2025, free:true,
  title:"@tri_dao", by:"Tri Dao (X)",
  url:"https://x.com/tri_dao",
  note:"FlashAttention y Mamba. Si te interesa el rendimiento real del hardware, seguilo." },

{ sec:"cuentas", type:"cuenta", level:"avanzado", year:2025, free:true,
  title:"@NeelNanda5", by:"Neel Nanda (X)",
  url:"https://x.com/NeelNanda5",
  note:"Interpretabilidad mecanicista, con mucha orientación para quienes recién entran al campo." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@natolambert", by:"Nathan Lambert (X)",
  url:"https://x.com/natolambert",
  note:"Post-training, RLHF y el estado real del ecosistema de modelos abiertos." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@simonw", by:"Simon Willison (X / Bluesky / Mastodon)",
  url:"https://x.com/simonw",
  note:"Experimentación constante y honesta con herramientas nuevas. Especialmente bueno en seguridad de LLMs." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@giffmana", by:"Lucas Beyer (X)",
  url:"https://x.com/giffmana",
  note:"Visión por computadora y modelos multimodales, con opiniones técnicas fuertes y bien argumentadas." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@srush_nlp", by:"Sasha Rush (X)",
  url:"https://x.com/srush_nlp",
  note:"'The Annotated Transformer', puzzles de GPU y tensores. Pedagogía de altísimo nivel." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@emollick", by:"Ethan Mollick (X)",
  url:"https://x.com/emollick",
  note:"Experimentos sobre cómo la IA cambia el trabajo y la educación, con evidencia empírica." },

{ sec:"cuentas", type:"cuenta", level:"avanzado", year:2025, free:true,
  title:"@polynoamial", by:"Noam Brown (X)",
  url:"https://x.com/polynoamial",
  note:"Razonamiento y cómputo en tiempo de inferencia, desde quien lo empujó en póker, Diplomacy y modelos o-series." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@HamelHusain y @sh_reya", by:"Hamel Husain / Shreya Shankar (X)",
  url:"https://x.com/HamelHusain",
  note:"Evaluaciones y buenas prácticas de ingeniería con LLMs. Los dos son referencias en evals." },

{ sec:"cuentas", type:"cuenta", level:"medio", year:2025, free:true,
  title:"@fchollet", by:"François Chollet (X)",
  url:"https://x.com/fchollet",
  note:"Keras y ARC-AGI. La postura más elaborada sobre por qué la generalización, no la escala, es el problema central." },

/* ---------------- COMUNIDADES ---------------- */
{ sec:"cuentas", type:"comunidad", level:"intro", top:true, year:2025, free:true,
  title:"r/LocalLLaMA", by:"Reddit",
  url:"https://www.reddit.com/r/LocalLLaMA/",
  note:"La comunidad más activa sobre modelos abiertos, cuantización, hardware y fine-tuning. Es donde las técnicas nuevas aparecen primero." },

{ sec:"cuentas", type:"comunidad", level:"medio", year:2025, free:true,
  title:"r/MachineLearning", by:"Reddit",
  url:"https://www.reddit.com/r/MachineLearning/",
  note:"Discusión de papers e investigación. Los hilos '[D]' suelen tener a los autores respondiendo." },

{ sec:"cuentas", type:"comunidad", level:"avanzado", year:2025, free:true,
  title:"EleutherAI Discord", by:"EleutherAI",
  url:"https://www.eleuther.ai/",
  note:"Investigación abierta en tiempo real. Muchos papers importantes empezaron como conversaciones en estos canales." },

{ sec:"cuentas", type:"comunidad", level:"avanzado", year:2025, free:true,
  title:"GPU MODE Discord", by:"GPU MODE",
  url:"https://discord.gg/gpumode",
  note:"Kernels, CUDA, Triton y optimización. La comunidad técnica más fuerte en rendimiento." },

{ sec:"cuentas", type:"comunidad", level:"intro", year:2025, free:true,
  title:"Hugging Face Discord y Foros", by:"Hugging Face",
  url:"https://discuss.huggingface.co/",
  note:"Muy acogedor para principiantes, con presencia constante de gente del equipo." },

{ sec:"cuentas", type:"herramienta", level:"intro", top:true, year:2025, free:true,
  title:"Hugging Face Daily Papers", by:"Hugging Face",
  url:"https://huggingface.co/papers",
  note:"Papers del día curados y votados por la comunidad. La forma más eficiente de seguir la literatura sin ahogarte." },

{ sec:"cuentas", type:"herramienta", level:"medio", year:2025, free:true,
  title:"alphaXiv / Semantic Scholar / Connected Papers", by:"varios",
  url:"https://www.alphaxiv.org/",
  note:"Discutir papers de arXiv en el margen, buscar citas y explorar grafos de literatura. Herramientas de lectura, no de descubrimiento." },

{ sec:"cuentas", type:"herramienta", level:"intro", top:true, year:2025, free:true,
  title:"Hugging Face Hub", by:"Hugging Face",
  url:"https://huggingface.co/models",
  note:"Un millón y medio de modelos, datasets y demos. Es el GitHub de la IA: si no lo usás, estás trabajando de más." },

{ sec:"cuentas", type:"herramienta", level:"intro", year:2025, free:true,
  title:"Google Colab / Kaggle Notebooks", by:"Google / Kaggle",
  url:"https://colab.research.google.com/",
  note:"GPUs gratuitas para aprender. Suficiente para todo el material educativo de esta página." },

/* ---------------- EN ESPAÑOL ---------------- */
{ sec:"espanol", type:"canal", level:"intro", top:true, year:2025, free:true, es:true,
  title:"DotCSV", by:"Carlos Santana Vega",
  url:"https://www.youtube.com/@DotCSV",
  note:"El divulgador de IA más conocido en español. Excelente para intuición y actualidad; complementalo con material técnico en inglés." },

{ sec:"espanol", type:"canal", level:"medio", year:2025, free:true, es:true,
  title:"Ringa Tech", by:"YouTube",
  url:"https://www.youtube.com/@RingaTech",
  note:"Tutoriales prácticos de redes neuronales y TensorFlow en español, muy bien explicados y con código." },

{ sec:"espanol", type:"canal", level:"medio", year:2025, free:true, es:true,
  title:"Codificando Bits", by:"Miguel Sotaquirá",
  url:"https://www.youtube.com/@CodificandoBits",
  note:"Series ordenadas de deep learning y redes neuronales en español, con enfoque de curso." },

{ sec:"espanol", type:"curso", level:"intro", year:2025, free:true, es:true,
  title:"Deep Learning Specialization con subtítulos en español", by:"DeepLearning.AI",
  url:"https://www.coursera.org/specializations/deep-learning",
  note:"Los cursos de Andrew Ng tienen subtítulos y transcripciones en español de buena calidad." },

{ sec:"espanol", type:"blog", level:"medio", year:2025, free:true, es:true,
  title:"Documentación de Hugging Face en español", by:"Hugging Face",
  url:"https://huggingface.co/docs/transformers/index",
  note:"Buena parte de los cursos y docs de HF están traducidos al español por la comunidad." },

{ sec:"espanol", type:"comunidad", level:"intro", year:2025, free:true, es:true,
  title:"SomosNLP", by:"Comunidad hispanohablante de NLP",
  url:"https://somosnlp.org/",
  note:"Comunidad que impulsa modelos, datasets y recursos de NLP en español. Hackathons y charlas propias." },

{ sec:"espanol", type:"libro", level:"intro", year:2023, es:true,
  title:"Aprende Machine Learning en Español", by:"Juan Ignacio Bagnato",
  url:"https://www.aprendemachinelearning.com/",
  note:"Blog y libro con ejercicios prácticos en español. Buen punto de partida si el inglés todavía te frena." }

);
