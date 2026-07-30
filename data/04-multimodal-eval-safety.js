/* Multimodal y generativos, evaluación, interpretabilidad, alineamiento y seguridad */
window.R = window.R || [];
window.R.push(

/* ---------------- MULTIMODAL Y GENERATIVOS ---------------- */
{ sec:"multimodal", type:"paper", level:"medio", top:true, year:2021,
  title:"CLIP: Learning Transferable Visual Models From Natural Language Supervision", by:"Radford et al. (OpenAI)",
  url:"https://arxiv.org/abs/2103.00020",
  note:"Alinear imágenes y texto en un mismo espacio de embeddings. Es el ladrillo sobre el que se apoya casi todo lo multimodal." },

{ sec:"multimodal", type:"paper", level:"medio", top:true, year:2020,
  title:"Denoising Diffusion Probabilistic Models (DDPM)", by:"Ho, Jain, Abbeel",
  url:"https://arxiv.org/abs/2006.11239",
  note:"El paper que hizo funcionar la difusión. Agregar ruido y aprender a quitarlo: la idea que reemplazó a las GANs." },

{ sec:"multimodal", type:"paper", level:"medio", top:true, year:2021,
  title:"High-Resolution Image Synthesis with Latent Diffusion Models", by:"Rombach et al.",
  url:"https://arxiv.org/abs/2112.10752",
  note:"Difusión en espacio latente en vez de píxeles: es Stable Diffusion. Hizo la generación de imágenes accesible a cualquiera." },

{ sec:"multimodal", type:"blog", level:"medio", top:true, year:2021,
  title:"What are Diffusion Models?", by:"Lilian Weng",
  url:"https://lilianweng.github.io/posts/2021-07-11-diffusion-models/",
  note:"La derivación matemática más clara que hay en abierto sobre difusión. Denso pero completo." },

{ sec:"multimodal", type:"blog", level:"medio", year:2022,
  title:"The Illustrated Stable Diffusion", by:"Jay Alammar",
  url:"https://jalammar.github.io/illustrated-stable-diffusion/",
  note:"La versión visual e intuitiva del anterior. Leelo primero." },

{ sec:"multimodal", type:"curso", level:"medio", year:2025, free:true,
  title:"Diffusion Models Course", by:"Hugging Face",
  url:"https://huggingface.co/learn/diffusion-course/unit0/1",
  note:"Curso práctico con la librería `diffusers`: entrenar desde cero, fine-tuning, guidance, ControlNet." },

{ sec:"multimodal", type:"paper", level:"avanzado", year:2022,
  title:"Classifier-Free Diffusion Guidance", by:"Ho & Salimans",
  url:"https://arxiv.org/abs/2207.12598",
  note:"El truco que hace que los modelos de imagen obedezcan al prompt. El parámetro `guidance_scale` sale de acá." },

{ sec:"multimodal", type:"paper", level:"avanzado", year:2022,
  title:"Flow Matching for Generative Modeling", by:"Lipman et al. (Meta)",
  url:"https://arxiv.org/abs/2210.02747",
  note:"La formulación que reemplazó a la difusión clásica en los modelos de imagen y video más recientes. Más simple y más rápida." },

{ sec:"multimodal", type:"paper", level:"medio", year:2023,
  title:"Visual Instruction Tuning (LLaVA)", by:"Liu et al.",
  url:"https://arxiv.org/abs/2304.08485",
  note:"La receta abierta para convertir un LLM en un modelo de visión: encoder + proyector + instrucciones. Base de casi todo VLM abierto." },

{ sec:"multimodal", type:"paper", level:"medio", year:2022,
  title:"Flamingo: a Visual Language Model for Few-Shot Learning", by:"DeepMind",
  url:"https://arxiv.org/abs/2204.14198",
  note:"Cómo intercalar imágenes y texto con cross-attention. Diseño arquitectónico influyente." },

{ sec:"multimodal", type:"paper", level:"medio", year:2022,
  title:"Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)", by:"OpenAI",
  url:"https://arxiv.org/abs/2212.04356",
  note:"El modelo que resolvió el reconocimiento de voz en abierto, incluido el español. Pesos libres." },

{ sec:"multimodal", type:"curso", level:"medio", year:2025, free:true,
  title:"Audio Course", by:"Hugging Face",
  url:"https://huggingface.co/learn/audio-course/chapter0/introduction",
  note:"Transformers aplicados a audio: clasificación, ASR, síntesis de voz." },

{ sec:"multimodal", type:"paper", level:"avanzado", year:2024,
  title:"Video generation models as world simulators (Sora)", by:"OpenAI",
  url:"https://openai.com/index/video-generation-models-as-world-simulators/",
  note:"El reporte técnico que instaló la idea de 'modelos del mundo' como camino hacia el razonamiento físico." },

{ sec:"multimodal", type:"paper", level:"avanzado", year:2024,
  title:"Genie: Generative Interactive Environments", by:"DeepMind",
  url:"https://arxiv.org/abs/2402.15391",
  note:"Mundos jugables generados a partir de video sin etiquetas de acción. Una de las líneas más ambiciosas hacia agentes encarnados." },

{ sec:"multimodal", type:"blog", level:"avanzado", year:2022,
  title:"A Path Towards Autonomous Machine Intelligence (JEPA)", by:"Yann LeCun",
  url:"https://openreview.net/forum?id=BZ5a1r-kVsf",
  note:"La apuesta contrapuesta a los LLMs: predecir en espacio de representaciones, no tokens. Base de I-JEPA y V-JEPA." },

{ sec:"multimodal", type:"paper", level:"avanzado", year:2023,
  title:"Segment Anything (SAM)", by:"Meta AI",
  url:"https://arxiv.org/abs/2304.02643",
  note:"Modelo fundacional de segmentación. Ejemplo modelo de cómo diseñar una tarea + motor de datos + modelo a la vez." },

{ sec:"multimodal", type:"curso", level:"medio", year:2024, free:true,
  title:"Stanford CS231n: Deep Learning for Computer Vision", by:"Fei-Fei Li y equipo",
  url:"https://cs231n.stanford.edu/",
  note:"El curso de visión por computadora de referencia. Las notas públicas son un libro de texto en sí mismas." },

/* ---------------- EVALUACIÓN Y BENCHMARKS ---------------- */
{ sec:"evaluacion", type:"blog", level:"medio", top:true, year:2024,
  title:"Your AI Product Needs Evals", by:"Hamel Husain",
  url:"https://hamel.dev/blog/posts/evals/",
  note:"El artículo más importante sobre evaluación aplicada. Sin evals no estás haciendo ingeniería, estás adivinando." },

{ sec:"evaluacion", type:"repo", level:"medio", top:true, year:2025, free:true,
  title:"lm-evaluation-harness", by:"EleutherAI",
  url:"https://github.com/EleutherAI/lm-evaluation-harness",
  note:"El estándar de facto para evaluar modelos de lenguaje. Es lo que corre detrás de casi todos los leaderboards." },

{ sec:"evaluacion", type:"repo", level:"medio", year:2025, free:true,
  title:"Inspect AI", by:"UK AI Security Institute",
  url:"https://inspect.aisi.org.uk/",
  note:"Framework de evaluaciones de nivel gubernamental: agentes, herramientas, scorers, sandboxing. Muy bien diseñado." },

{ sec:"evaluacion", type:"herramienta", level:"medio", top:true, year:2025,
  title:"LMArena (antes Chatbot Arena)", by:"LMSYS / UC Berkeley",
  url:"https://lmarena.ai/",
  note:"Ranking por comparación ciega entre modelos, votada por humanos. El benchmark menos contaminable que existe, aunque mide preferencia, no capacidad." },

{ sec:"evaluacion", type:"herramienta", level:"medio", year:2025, free:true,
  title:"HELM: Holistic Evaluation of Language Models", by:"Stanford CRFM",
  url:"https://crfm.stanford.edu/helm/",
  note:"Evaluación multidimensional: precisión, calibración, robustez, sesgo, toxicidad, eficiencia. No solo un número." },

{ sec:"evaluacion", type:"benchmark", level:"medio", year:2024,
  title:"SWE-bench y SWE-bench Verified", by:"Princeton / OpenAI",
  url:"https://www.swebench.com/",
  note:"Resolver issues reales de GitHub. Se convirtió en el benchmark que define el progreso de los agentes de programación." },

{ sec:"evaluacion", type:"benchmark", level:"medio", top:true, year:2025,
  title:"ARC-AGI", by:"François Chollet / ARC Prize",
  url:"https://arcprize.org/",
  note:"Diseñado explícitamente para resistir la memorización: mide adquisición de habilidades nuevas, no conocimiento almacenado. El benchmark conceptualmente más interesante." },

{ sec:"evaluacion", type:"benchmark", level:"medio", year:2025,
  title:"GPQA, MMLU-Pro, FrontierMath, Humanity's Last Exam", by:"varios",
  url:"https://epoch.ai/frontiermath",
  note:"Benchmarks 'a prueba de Google' para conocimiento experto y matemática de investigación. Reemplazaron a MMLU cuando este se saturó." },

{ sec:"evaluacion", type:"herramienta", level:"medio", year:2025, free:true,
  title:"LiveBench / LiveCodeBench", by:"varios",
  url:"https://livebench.ai/",
  note:"Benchmarks con preguntas nuevas cada mes para evitar contaminación de datos de entrenamiento. Cada vez más necesarios." },

{ sec:"evaluacion", type:"herramienta", level:"medio", year:2025,
  title:"Epoch AI — datos y tendencias", by:"Epoch AI",
  url:"https://epoch.ai/",
  note:"La mejor fuente de datos duros sobre cómputo, costos de entrenamiento, tendencias de capacidad y proyecciones. Rigurosa y sin hype." },

{ sec:"evaluacion", type:"repo", level:"medio", year:2025, free:true,
  title:"Ragas / DeepEval / promptfoo", by:"varios",
  url:"https://github.com/promptfoo/promptfoo",
  note:"Herramientas prácticas para evaluar aplicaciones LLM y RAG: red-teaming, comparación de prompts, métricas de recuperación." },

{ sec:"evaluacion", type:"paper", level:"medio", year:2023,
  title:"Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", by:"Zheng et al. (LMSYS)",
  url:"https://arxiv.org/abs/2306.05685",
  note:"Usar modelos como jueces funciona, pero con sesgos medibles (posición, verbosidad, auto-preferencia). Leé esto antes de confiar en tu LLM-judge." },

{ sec:"evaluacion", type:"paper", level:"medio", year:2018,
  title:"Model Cards for Model Reporting", by:"Mitchell et al. (Google)",
  url:"https://arxiv.org/abs/1810.03993",
  note:"Y 'Datasheets for Datasets' (arXiv:1803.09010). Documentar qué hace un modelo y con qué datos es parte del oficio." },

/* ---------------- INTERPRETABILIDAD ---------------- */
{ sec:"interpretabilidad", type:"paper", level:"avanzado", top:true, year:2021,
  title:"A Mathematical Framework for Transformer Circuits", by:"Anthropic",
  url:"https://transformer-circuits.pub/2021/framework/index.html",
  note:"El texto fundacional de la interpretabilidad mecanicista. Cabezas de atención como operaciones componibles sobre el residual stream." },

{ sec:"interpretabilidad", type:"paper", level:"avanzado", top:true, year:2022,
  title:"In-context Learning and Induction Heads", by:"Anthropic",
  url:"https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html",
  note:"Encontraron el circuito concreto que hace posible el aprendizaje en contexto. Uno de los resultados más satisfactorios del campo." },

{ sec:"interpretabilidad", type:"paper", level:"avanzado", top:true, year:2022,
  title:"Toy Models of Superposition", by:"Anthropic",
  url:"https://transformer-circuits.pub/2022/toy_model/index.html",
  note:"Por qué las neuronas representan más conceptos que dimensiones tienen. Explica por qué interpretar redes es tan difícil." },

{ sec:"interpretabilidad", type:"paper", level:"avanzado", top:true, year:2024,
  title:"Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet", by:"Anthropic",
  url:"https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html",
  note:"Autoencoders dispersos aplicados a un modelo de producción: millones de características identificables y manipulables." },

{ sec:"interpretabilidad", type:"paper", level:"avanzado", top:true, year:2025,
  title:"On the Biology of a Large Language Model / Circuit Tracing", by:"Anthropic",
  url:"https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
  note:"Grafos de atribución que muestran planificación anticipada, razonamiento multilingüe y racionalizaciones a posteriori dentro del modelo. Fascinante." },

{ sec:"interpretabilidad", type:"blog", level:"medio", top:true, year:2025, free:true,
  title:"Neel Nanda — guías de interpretabilidad mecanicista", by:"Neel Nanda (DeepMind)",
  url:"https://www.neelnanda.io/mechanistic-interpretability/getting-started",
  note:"La hoja de ruta más honesta para entrar al campo, incluyendo qué NO hacer. Además: '200 Concrete Open Problems'." },

{ sec:"interpretabilidad", type:"repo", level:"avanzado", year:2025, free:true,
  title:"TransformerLens", by:"Neel Nanda y comunidad",
  url:"https://github.com/TransformerLensOrg/TransformerLens",
  note:"La librería estándar para hacer cirugía sobre activaciones: hooks, patching, ablaciones." },

{ sec:"interpretabilidad", type:"repo", level:"avanzado", year:2025, free:true,
  title:"nnsight & NDIF", by:"Northeastern / David Bau",
  url:"https://nnsight.net/",
  note:"Interpretabilidad sobre modelos gigantes que no entran en tu GPU, ejecutados remotamente. Abre la investigación a quien no tiene cluster." },

{ sec:"interpretabilidad", type:"curso", level:"avanzado", top:true, year:2025, free:true,
  title:"ARENA: Alignment Research Engineer Accelerator", by:"Callum McDougall y equipo",
  url:"https://learn.arena.education/",
  note:"Currículum completo y gratuito: fundamentos de deep learning, interpretabilidad de transformers, RL y evaluaciones de LLMs. El mejor camino estructurado hacia investigación en seguridad." },

{ sec:"interpretabilidad", type:"libro", level:"medio", year:2025, free:true,
  title:"Interpretable Machine Learning", by:"Christoph Molnar",
  url:"https://christophm.github.io/interpretable-ml-book/",
  note:"El lado clásico de la interpretabilidad: SHAP, LIME, importancia de features, modelos intrínsecamente interpretables." },

{ sec:"interpretabilidad", type:"blog", level:"medio", year:2020,
  title:"Zoom In: An Introduction to Circuits", by:"Olah et al. (Distill)",
  url:"https://distill.pub/2020/circuits/zoom-in/",
  note:"El origen del programa de circuitos, aplicado a visión. Las visualizaciones siguen sin ser superadas." },

/* ---------------- ALINEAMIENTO Y SEGURIDAD ---------------- */
{ sec:"seguridad", type:"paper", level:"medio", top:true, year:2016,
  title:"Concrete Problems in AI Safety", by:"Amodei, Olah et al.",
  url:"https://arxiv.org/abs/1606.06565",
  note:"El paper que convirtió la seguridad de IA en agenda técnica: efectos colaterales, reward hacking, supervisión escalable, exploración segura." },

{ sec:"seguridad", type:"paper", level:"medio", year:2021,
  title:"Unsolved Problems in ML Safety", by:"Hendrycks et al.",
  url:"https://arxiv.org/abs/2109.13916",
  note:"Robustez, monitoreo, alineamiento y riesgo sistémico como cuatro problemas separados. Buen marco mental." },

{ sec:"seguridad", type:"paper", level:"avanzado", top:true, year:2024,
  title:"Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training", by:"Anthropic",
  url:"https://arxiv.org/abs/2401.05566",
  note:"Puertas traseras que sobreviven al SFT, RLHF y al entrenamiento adversarial. Resultado incómodo y muy importante." },

{ sec:"seguridad", type:"paper", level:"avanzado", top:true, year:2024,
  title:"Alignment Faking in Large Language Models", by:"Anthropic & Redwood Research",
  url:"https://arxiv.org/abs/2412.14093",
  note:"Un modelo que finge estar alineado durante el entrenamiento para preservar sus preferencias. Evidencia empírica de un riesgo que era teórico." },

{ sec:"seguridad", type:"paper", level:"avanzado", year:2023,
  title:"Weak-to-Strong Generalization", by:"OpenAI (Superalignment)",
  url:"https://arxiv.org/abs/2312.09390",
  note:"¿Puede un supervisor débil alinear a un modelo más capaz que él? La pregunta central de la supervisión escalable." },

{ sec:"seguridad", type:"paper", level:"medio", year:2022,
  title:"Red Teaming Language Models to Reduce Harms", by:"Anthropic",
  url:"https://arxiv.org/abs/2209.07858",
  note:"Metodología de red-teaming con datos publicados. Base práctica para evaluar riesgos de un modelo." },

{ sec:"seguridad", type:"paper", level:"medio", year:2023,
  title:"Universal and Transferable Adversarial Attacks on Aligned LMs", by:"Zou et al. (CMU)",
  url:"https://arxiv.org/abs/2307.15043",
  note:"Sufijos adversariales que rompen el alineamiento y transfieren entre modelos. Lectura obligada antes de confiar en filtros de seguridad." },

{ sec:"seguridad", type:"docs", level:"medio", top:true, year:2025,
  title:"Responsible Scaling Policy / Frontier Safety Framework / Preparedness", by:"Anthropic, DeepMind, OpenAI",
  url:"https://www.anthropic.com/rsp",
  note:"Los compromisos públicos de los laboratorios sobre qué capacidades exigen qué salvaguardas. Documentos que definen la política real de la industria." },

{ sec:"seguridad", type:"curso", level:"intro", top:true, year:2025, free:true,
  title:"AI Safety Fundamentals", by:"BlueDot Impact",
  url:"https://bluedot.org/",
  note:"Cursos gratuitos y guiados sobre alineamiento y gobernanza, con cohortes y facilitadores. La puerta de entrada más común al campo." },

{ sec:"seguridad", type:"blog", level:"medio", year:2024,
  title:"AI Alignment Forum / LessWrong", by:"comunidad",
  url:"https://www.alignmentforum.org/",
  note:"Donde se discute la investigación de alineamiento en tiempo real. Calidad muy variable, pero lo mejor es excelente." },

{ sec:"seguridad", type:"paper", level:"medio", year:2021,
  title:"On the Dangers of Stochastic Parrots", by:"Bender, Gebru, McMillan-Major, Mitchell",
  url:"https://dl.acm.org/doi/10.1145/3442188.3445922",
  note:"La crítica más influyente desde el otro lado del debate: costos ambientales, sesgo, opacidad de datos. Leelo aunque no coincidas." },

{ sec:"seguridad", type:"docs", level:"medio", year:2025,
  title:"AI Act (UE) y NIST AI Risk Management Framework", by:"UE / NIST",
  url:"https://artificialintelligenceact.eu/",
  note:"El marco regulatorio que ya afecta a cualquiera que despliegue IA en Europa, más el estándar de gestión de riesgos de EE.UU." },

{ sec:"seguridad", type:"paper", level:"medio", year:2025,
  title:"International AI Safety Report", by:"Yoshua Bengio y 100+ expertos",
  url:"https://internationalaisafetyreport.org/",
  note:"El informe de consenso científico internacional sobre capacidades y riesgos, respaldado por 30+ países. La síntesis más equilibrada disponible." }

);
