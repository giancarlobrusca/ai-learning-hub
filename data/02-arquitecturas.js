/* Arquitecturas, transformers, LLMs, entrenamiento desde cero, datos y scaling */
window.R = window.R || [];
window.R.push(

/* ---------------- ARQUITECTURAS ---------------- */
{ sec:"arquitecturas", type:"paper", level:"medio", top:true, year:2017,
  title:"Attention Is All You Need", by:"Vaswani et al. (Google)",
  url:"https://arxiv.org/abs/1706.03762",
  note:"El paper que define la era actual. Todo LLM de hoy es una variación de estas 15 páginas. Leelo al menos tres veces en tu vida." },

{ sec:"arquitecturas", type:"blog", level:"intro", top:true, year:2018,
  title:"The Illustrated Transformer", by:"Jay Alammar",
  url:"https://jalammar.github.io/illustrated-transformer/",
  note:"La explicación visual definitiva de self-attention, multi-head y encoder-decoder. Leelo antes del paper original." },

{ sec:"arquitecturas", type:"blog", level:"medio", top:true, year:2022,
  title:"The Annotated Transformer", by:"Sasha Rush (Harvard NLP)",
  url:"https://nlp.seas.harvard.edu/annotated-transformer/",
  note:"El paper original línea por línea, con el código PyTorch al lado de cada párrafo." },

{ sec:"arquitecturas", type:"blog", level:"medio", year:2023,
  title:"Transformers from Scratch", by:"Brandon Rohrer",
  url:"https://e2eml.school/transformers.html",
  note:"Desde matrices one-hot hasta attention completa, sin saltos. Larguísimo y excelente." },

{ sec:"arquitecturas", type:"blog", level:"medio", year:2023,
  title:"The Transformer Family v2.0", by:"Lilian Weng",
  url:"https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/",
  note:"Taxonomía completa de variantes: contexto largo, atención eficiente, recurrencia, memoria externa. Mapa mental del ecosistema." },

{ sec:"arquitecturas", type:"paper", level:"medio", year:2018,
  title:"BERT: Pre-training of Deep Bidirectional Transformers", by:"Devlin et al. (Google)",
  url:"https://arxiv.org/abs/1810.04805",
  note:"La rama encoder-only. Sigue siendo el caballo de batalla de clasificación, embeddings y búsqueda." },

{ sec:"arquitecturas", type:"paper", level:"medio", year:2019,
  title:"T5: Exploring the Limits of Transfer Learning", by:"Raffel et al. (Google)",
  url:"https://arxiv.org/abs/1910.10683",
  note:"'Todo es texto-a-texto'. Además, el estudio ablativo más sistemático que se hizo sobre decisiones de arquitectura." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2021,
  title:"RoFormer: Rotary Position Embedding (RoPE)", by:"Su et al.",
  url:"https://arxiv.org/abs/2104.09864",
  note:"Cómo casi todos los LLMs modernos codifican posición. Entender RoPE es entender por qué se puede extender el contexto." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2021,
  title:"ALiBi: Train Short, Test Long", by:"Press, Smith, Lewis",
  url:"https://arxiv.org/abs/2108.12409",
  note:"Sesgos lineales en atención que permiten extrapolar a secuencias más largas que las de entrenamiento." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2023,
  title:"GQA: Grouped-Query Attention", by:"Ainslie et al. (Google)",
  url:"https://arxiv.org/abs/2305.13245",
  note:"El compromiso entre multi-head y multi-query que usan Llama, Mistral y casi todos. Reduce el KV cache drásticamente." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2020,
  title:"GLU Variants Improve Transformer (SwiGLU)", by:"Noam Shazeer",
  url:"https://arxiv.org/abs/2002.05202",
  note:"Paper de dos páginas cuya conclusión honesta es 'no sabemos por qué funciona'. Está en casi todos los LLMs actuales." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2019,
  title:"Root Mean Square Layer Normalization (RMSNorm)", by:"Zhang & Sennrich",
  url:"https://arxiv.org/abs/1910.07467",
  note:"LayerNorm sin la media. Más barato y funciona igual. Otro estándar silencioso." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", top:true, year:2021,
  title:"Switch Transformers (Mixture of Experts a escala)", by:"Fedus, Zoph, Shazeer (Google)",
  url:"https://arxiv.org/abs/2101.03961",
  note:"MoE: activar solo una fracción de los parámetros por token. Base de casi todos los modelos frontera actuales." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2024,
  title:"Mixtral of Experts", by:"Mistral AI",
  url:"https://arxiv.org/abs/2401.04088",
  note:"El paper que hizo el MoE disperso accesible en abierto. Lectura obligada para entender MoE en la práctica." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", top:true, year:2023,
  title:"Mamba: Linear-Time Sequence Modeling with Selective State Spaces", by:"Gu & Dao",
  url:"https://arxiv.org/abs/2312.00752",
  note:"La alternativa más seria a la atención cuadrática. Modelos de espacio de estados con selectividad, complejidad lineal en la longitud." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2024,
  title:"Transformers are SSMs (Mamba-2)", by:"Dao & Gu",
  url:"https://arxiv.org/abs/2405.21060",
  note:"Unifica atención y modelos de espacio de estados bajo un mismo marco teórico. Uno de los papers conceptualmente más importantes de los últimos años." },

{ sec:"arquitecturas", type:"blog", level:"avanzado", year:2024,
  title:"The Annotated S4 / Mamba", by:"Sasha Rush y otros",
  url:"https://srush.github.io/annotated-s4/",
  note:"Modelos de espacio de estados implementados y anotados paso a paso." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2024,
  title:"Jamba: A Hybrid Transformer-Mamba Language Model", by:"AI21 Labs",
  url:"https://arxiv.org/abs/2403.19887",
  note:"Los híbridos (capas de atención + capas SSM) son hoy la apuesta más probable para contexto largo. Ver también Griffin (arXiv:2402.19427)." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2023,
  title:"RWKV: Reinventing RNNs for the Transformer Era", by:"Peng et al.",
  url:"https://arxiv.org/abs/2305.13048",
  note:"RNN entrenable en paralelo, inferencia con memoria constante. Comunidad abierta muy activa." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2024,
  title:"Mixture-of-Depths: dynamically allocating compute", by:"Raposo et al. (DeepMind)",
  url:"https://arxiv.org/abs/2404.02258",
  note:"No todos los tokens necesitan todas las capas. Cómputo adaptativo dentro del forward pass." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2024,
  title:"Byte Latent Transformer: Patches Scale Better Than Tokens", by:"Meta AI",
  url:"https://arxiv.org/abs/2412.09871",
  note:"Elimina el tokenizador y agrupa bytes dinámicamente según entropía. Una de las líneas más prometedoras para superar las limitaciones de la tokenización." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2025,
  title:"Titans: Learning to Memorize at Test Time", by:"Behrouz et al. (Google)",
  url:"https://arxiv.org/abs/2501.00663",
  note:"Memoria neuronal a largo plazo que se actualiza durante la inferencia. Empuja hacia el aprendizaje continuo." },

{ sec:"arquitecturas", type:"paper", level:"avanzado", year:2024,
  title:"Large Concept Models: Language Modeling in a Sentence Representation Space", by:"Meta AI",
  url:"https://arxiv.org/abs/2412.08821",
  note:"Predecir conceptos (oraciones en espacio de embeddings) en lugar de tokens. Apuesta de Meta contra el paradigma token-por-token." },

{ sec:"arquitecturas", type:"paper", level:"medio", year:2020,
  title:"An Image is Worth 16x16 Words (Vision Transformer)", by:"Dosovitskiy et al. (Google)",
  url:"https://arxiv.org/abs/2010.11929",
  note:"Los transformers se comen la visión por computadora. El puente hacia los modelos multimodales." },

{ sec:"arquitecturas", type:"paper", level:"medio", year:2014,
  title:"Generative Adversarial Networks", by:"Goodfellow et al.",
  url:"https://arxiv.org/abs/1406.2661",
  note:"La era pre-difusión de la generación de imágenes. Históricamente clave y aún útil conceptualmente." },

{ sec:"arquitecturas", type:"paper", level:"medio", year:2013,
  title:"Auto-Encoding Variational Bayes (VAE)", by:"Kingma & Welling",
  url:"https://arxiv.org/abs/1312.6114",
  note:"El espacio latente. Sin VAEs no hay Stable Diffusion (que difunde en latente, no en píxeles)." },

{ sec:"arquitecturas", type:"blog", level:"medio", year:2021,
  title:"A Gentle Introduction to Graph Neural Networks", by:"Distill.pub",
  url:"https://distill.pub/2021/gnn-intro/",
  note:"GNNs explicadas interactivamente. Relevantes para química, biología, grafos de conocimiento y sistemas de recomendación." },

/* ---------------- TRANSFORMERS Y LLMs ---------------- */
{ sec:"transformers-llm", type:"video", level:"intro", top:true, year:2025, free:true,
  title:"Deep Dive into LLMs like ChatGPT", by:"Andrej Karpathy",
  url:"https://www.youtube.com/watch?v=7xTGNNLPyMI",
  note:"3h30 que explican TODO el pipeline: pretraining, tokenización, alucinaciones, SFT, RLHF, modelos de razonamiento. Si solo podés ver un video, es este." },

{ sec:"transformers-llm", type:"video", level:"intro", top:true, year:2023, free:true,
  title:"[1hr Talk] Intro to Large Language Models", by:"Andrej Karpathy",
  url:"https://www.youtube.com/watch?v=zjkBMFhNj_g",
  note:"La charla que instaló la analogía 'LLM = sistema operativo'. Excelente panorama de una hora." },

{ sec:"transformers-llm", type:"video", level:"intro", year:2025, free:true,
  title:"How I Use LLMs", by:"Andrej Karpathy",
  url:"https://www.youtube.com/watch?v=EWvNQjAaOHw",
  note:"Uso práctico: cuándo razonamiento, cuándo herramientas, cuándo desconfiar. Complemento aplicado del anterior." },

{ sec:"transformers-llm", type:"video", level:"medio", top:true, year:2023, free:true,
  title:"Let's build GPT: from scratch, in code, spelled out", by:"Andrej Karpathy",
  url:"https://www.youtube.com/watch?v=kCc8FmEb1nY",
  note:"Un GPT completo, línea por línea, en dos horas. Es el rito de iniciación del campo." },

{ sec:"transformers-llm", type:"curso", level:"medio", top:true, year:2023, free:true,
  title:"Neural Networks: Zero to Hero", by:"Andrej Karpathy",
  url:"https://karpathy.ai/zero-to-hero.html",
  note:"El curso completo: micrograd → makemore → GPT → tokenizador. Gratis. Probablemente el mejor material de IA jamás publicado." },

{ sec:"transformers-llm", type:"video", level:"medio", top:true, year:2024, free:true,
  title:"Let's build the GPT Tokenizer", by:"Andrej Karpathy",
  url:"https://www.youtube.com/watch?v=zduSFxRajkE",
  note:"La tokenización es la fuente de la mitad de las rarezas de los LLMs (aritmética, deletreo, idiomas no ingleses). Este video las explica todas." },

{ sec:"transformers-llm", type:"paper", level:"medio", top:true, year:2020,
  title:"Language Models are Few-Shot Learners (GPT-3)", by:"Brown et al. (OpenAI)",
  url:"https://arxiv.org/abs/2005.14165",
  note:"El paper que demostró in-context learning y disparó la carrera de escala." },

{ sec:"transformers-llm", type:"paper", level:"medio", year:2019,
  title:"Language Models are Unsupervised Multitask Learners (GPT-2)", by:"Radford et al. (OpenAI)",
  url:"https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
  note:"El origen del decoder-only puro. Es la arquitectura que se sigue reimplementando en todos los tutoriales." },

{ sec:"transformers-llm", type:"paper", level:"medio", year:2023,
  title:"LLaMA: Open and Efficient Foundation Language Models", by:"Touvron et al. (Meta)",
  url:"https://arxiv.org/abs/2302.13971",
  note:"El paper que abrió el ecosistema open-weights. Todo el mundo local corriendo modelos empieza acá." },

{ sec:"transformers-llm", type:"paper", level:"medio", top:true, year:2024,
  title:"The Llama 3 Herd of Models", by:"Meta AI",
  url:"https://arxiv.org/abs/2407.21783",
  note:"92 páginas con detalles reales de datos, infraestructura, fallos de hardware y post-training. El reporte técnico más útil publicado por un laboratorio grande." },

{ sec:"transformers-llm", type:"paper", level:"avanzado", top:true, year:2024,
  title:"DeepSeek-V3 Technical Report", by:"DeepSeek AI",
  url:"https://arxiv.org/abs/2412.19437",
  note:"MoE de 671B, Multi-head Latent Attention, entrenamiento en FP8, predicción multi-token. Ingeniería de eficiencia de altísimo nivel, documentada en detalle." },

{ sec:"transformers-llm", type:"paper", level:"avanzado", top:true, year:2025,
  title:"DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL", by:"DeepSeek AI",
  url:"https://arxiv.org/abs/2501.12948",
  note:"Demostró en abierto que el razonamiento emerge de RL con recompensas verificables, sin SFT previo. Cambió el rumbo del campo en 2025." },

{ sec:"transformers-llm", type:"paper", level:"medio", year:2024,
  title:"OLMo: Accelerating the Science of Language Models", by:"Allen Institute for AI",
  url:"https://arxiv.org/abs/2402.00838",
  note:"Modelo verdaderamente abierto: pesos, datos, código de entrenamiento, checkpoints intermedios y logs. Oro puro para investigar." },

{ sec:"transformers-llm", type:"paper", level:"avanzado", year:2023,
  title:"Pythia: A Suite for Analyzing LLMs Across Training and Scaling", by:"EleutherAI",
  url:"https://arxiv.org/abs/2304.01373",
  note:"154 checkpoints por modelo, en 8 escalas, con el orden de datos exacto. La herramienta estándar para estudiar dinámicas de entrenamiento." },

{ sec:"transformers-llm", type:"paper", level:"medio", year:2022,
  title:"Emergent Abilities of Large Language Models", by:"Wei et al.",
  url:"https://arxiv.org/abs/2206.07682",
  note:"Leelo junto a su refutación: 'Are Emergent Abilities a Mirage?' (arXiv:2304.15004). El debate en sí enseña más que cualquiera de los dos." },

{ sec:"transformers-llm", type:"blog", level:"medio", year:2023,
  title:"Understanding Large Language Models", by:"Sebastian Raschka",
  url:"https://magazine.sebastianraschka.com/p/understanding-large-language-models",
  note:"Ruta de lectura curada de papers, ordenada pedagógicamente. Excelente punto de partida bibliográfico." },

{ sec:"transformers-llm", type:"blog", level:"avanzado", year:2023,
  title:"Transformer Inference Arithmetic", by:"Kipply Chen",
  url:"https://kipp.ly/transformer-inference-arithmetic/",
  note:"Las cuentas reales: memoria, ancho de banda, latencia, KV cache. Te enseña a estimar costos antes de gastarlos." },

{ sec:"transformers-llm", type:"blog", level:"avanzado", year:2025,
  title:"How To Scale Your Model", by:"Google DeepMind",
  url:"https://jax-ml.github.io/scaling-book/",
  note:"Libro online sobre el rendimiento real de TPUs/GPUs: paralelismo, roofline, comunicación colectiva. Muy poco material de esta calidad existe en abierto." },

/* ---------------- ENTRENAR DESDE CERO ---------------- */
{ sec:"entrenar-desde-cero", type:"curso", level:"avanzado", top:true, year:2025, free:true,
  title:"Stanford CS336: Language Modeling from Scratch", by:"Percy Liang, Tatsunori Hashimoto",
  url:"https://stanford-cs336.github.io/",
  note:"Construís un LLM completo: tokenizador, arquitectura, kernels en Triton, entrenamiento distribuido, scaling laws, datos, alineamiento. Clases en YouTube y assignments públicos. El curso más importante que se dicta hoy." },

{ sec:"entrenar-desde-cero", type:"repo", level:"medio", top:true, year:2024, free:true,
  title:"nanoGPT", by:"Andrej Karpathy",
  url:"https://github.com/karpathy/nanoGPT",
  note:"~300 líneas que reproducen GPT-2. El repositorio educativo más copiado del mundo." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", top:true, year:2025, free:true,
  title:"nanochat", by:"Andrej Karpathy",
  url:"https://github.com/karpathy/nanochat",
  note:"El pipeline COMPLETO de un ChatGPT mínimo por ~100 dólares: tokenizador, pretraining, SFT, RL, inferencia y UI web. La culminación de todo lo que enseña Karpathy." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2024, free:true,
  title:"llm.c", by:"Andrej Karpathy",
  url:"https://github.com/karpathy/llm.c",
  note:"Entrenamiento de GPT-2 en C/CUDA puro, sin PyTorch. Para entender qué hace realmente el hardware." },

{ sec:"entrenar-desde-cero", type:"libro", level:"medio", top:true, year:2024,
  title:"Build a Large Language Model (From Scratch)", by:"Sebastian Raschka",
  url:"https://www.manning.com/books/build-a-large-language-model-from-scratch",
  note:"Capítulo a capítulo: attention, GPT, pretraining, fine-tuning para clasificación e instrucciones. Todo el código es gratis en GitHub." },

{ sec:"entrenar-desde-cero", type:"repo", level:"medio", top:true, year:2025, free:true,
  title:"LLMs-from-scratch (código del libro)", by:"Sebastian Raschka",
  url:"https://github.com/rasbt/LLMs-from-scratch",
  note:"Notebooks, bonus sobre Llama/Qwen/Gemma, DPO, KV cache y MoE. Se actualiza constantemente." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2025, free:true,
  title:"Reasoning-From-Scratch", by:"Sebastian Raschka",
  url:"https://github.com/rasbt/reasoning-from-scratch",
  note:"El equivalente del anterior pero para modelos de razonamiento: cadena de pensamiento, verificadores, RL." },

{ sec:"entrenar-desde-cero", type:"blog", level:"avanzado", top:true, year:2025, free:true,
  title:"The Ultra-Scale Playbook: Training LLMs on GPU Clusters", by:"Hugging Face",
  url:"https://huggingface.co/spaces/nanotron/ultrascale-playbook",
  note:"Paralelismo de datos, tensorial, de pipeline, de contexto y de expertos, explicado con más de 4000 experimentos reales. Gratis y sin equivalente." },

{ sec:"entrenar-desde-cero", type:"blog", level:"avanzado", top:true, year:2025, free:true,
  title:"The Smol Training Playbook: The Secrets to Building World-Class LLMs", by:"Hugging Face",
  url:"https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook",
  note:"La bitácora honesta de entrenar SmolLM3: ablaciones, picos de loss, bugs de infraestructura, decisiones de datos. Lo que ningún paper te cuenta." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2025, free:true,
  title:"torchtitan", by:"PyTorch",
  url:"https://github.com/pytorch/torchtitan",
  note:"Referencia oficial de PyTorch para pretraining a gran escala: FSDP2, tensor/pipeline parallel, torch.compile, float8." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2025, free:true,
  title:"Megatron-LM", by:"NVIDIA",
  url:"https://github.com/NVIDIA/Megatron-LM",
  note:"La implementación industrial de paralelismo tensorial y de pipeline. Ver también el paper original (arXiv:1909.08053)." },

{ sec:"entrenar-desde-cero", type:"paper", level:"avanzado", year:2019,
  title:"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models", by:"Rajbhandari et al. (Microsoft)",
  url:"https://arxiv.org/abs/1910.02054",
  note:"La idea detrás de DeepSpeed y FSDP: repartir estados del optimizador, gradientes y parámetros entre GPUs." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2025, free:true,
  title:"DeepSpeed", by:"Microsoft",
  url:"https://github.com/deepspeedai/DeepSpeed",
  note:"ZeRO, offloading a CPU/NVMe, inferencia optimizada. Estándar de facto en muchos clusters." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2025, free:true,
  title:"nanotron", by:"Hugging Face",
  url:"https://github.com/huggingface/nanotron",
  note:"Pretraining 3D-parallel minimalista y legible. Ideal para leer código de escala sin ahogarte." },

{ sec:"entrenar-desde-cero", type:"repo", level:"avanzado", year:2025, free:true,
  title:"levanter / marin", by:"Stanford CRFM",
  url:"https://github.com/stanford-crfm/levanter",
  note:"Entrenamiento en JAX con foco en reproducibilidad bit a bit. Proyecto asociado: Marin, un laboratorio abierto de modelos." },

{ sec:"entrenar-desde-cero", type:"repo", level:"medio", year:2025, free:true,
  title:"modded-nanogpt (NanoGPT speedrun)", by:"Keller Jordan y comunidad",
  url:"https://github.com/KellerJordan/modded-nanogpt",
  note:"Competencia abierta por entrenar GPT-2 lo más rápido posible. Cada récord introduce un truco real (optimizador Muon, atención con ventanas, etc.). Aprendizaje por ingeniería inversa." },

/* ---------------- DATOS, TOKENIZACIÓN, SCALING ---------------- */
{ sec:"datos-scaling", type:"paper", level:"medio", top:true, year:2020,
  title:"Scaling Laws for Neural Language Models", by:"Kaplan et al. (OpenAI)",
  url:"https://arxiv.org/abs/2001.08361",
  note:"El paper que convirtió el progreso de la IA en una ecuación. Pérdida como ley de potencia de cómputo, datos y parámetros." },

{ sec:"datos-scaling", type:"paper", level:"medio", top:true, year:2022,
  title:"Training Compute-Optimal Large Language Models (Chinchilla)", by:"Hoffmann et al. (DeepMind)",
  url:"https://arxiv.org/abs/2203.15556",
  note:"Corrigió a Kaplan: los modelos estaban muy subentrenados en datos. Reescribió el presupuesto de entrenamiento de toda la industria." },

{ sec:"datos-scaling", type:"paper", level:"avanzado", year:2024,
  title:"FineWeb: decanting the web for the finest text data at scale", by:"Hugging Face",
  url:"https://arxiv.org/abs/2406.17557",
  note:"Cómo se construye realmente un corpus de 15T tokens: deduplicación, filtros, clasificadores educativos. El blog interactivo asociado es aún mejor que el paper." },

{ sec:"datos-scaling", type:"paper", level:"medio", year:2020,
  title:"The Pile: An 800GB Dataset of Diverse Text", by:"EleutherAI",
  url:"https://arxiv.org/abs/2101.00027",
  note:"El primer corpus abierto grande y documentado. Referencia histórica sobre composición de datos." },

{ sec:"datos-scaling", type:"paper", level:"medio", year:2024,
  title:"Dolma: an Open Corpus of Three Trillion Tokens", by:"Allen Institute for AI",
  url:"https://arxiv.org/abs/2402.00159",
  note:"Corpus abierto con toolkit de curación documentado. Complemento perfecto de OLMo." },

{ sec:"datos-scaling", type:"paper", level:"medio", year:2023,
  title:"Textbooks Are All You Need (phi-1)", by:"Microsoft Research",
  url:"https://arxiv.org/abs/2306.11644",
  note:"Datos sintéticos de altísima calidad superan a montañas de datos web. Inició la línea de modelos pequeños sorprendentemente capaces." },

{ sec:"datos-scaling", type:"paper", level:"avanzado", year:2015,
  title:"Neural Machine Translation of Rare Words with Subword Units (BPE)", by:"Sennrich, Haddow, Birch",
  url:"https://arxiv.org/abs/1508.07909",
  note:"El origen de Byte-Pair Encoding, el algoritmo detrás de casi todos los tokenizadores actuales." },

{ sec:"datos-scaling", type:"repo", level:"medio", year:2025, free:true,
  title:"tiktoken / tokenizers", by:"OpenAI / Hugging Face",
  url:"https://github.com/openai/tiktoken",
  note:"Los tokenizadores de producción. Jugá con tiktokenizer.vercel.app para ver cómo se parte tu texto." },

{ sec:"datos-scaling", type:"paper", level:"avanzado", year:2022,
  title:"Beyond neural scaling laws: beating power law scaling via data pruning", by:"Sorscher et al.",
  url:"https://arxiv.org/abs/2206.14486",
  note:"Curar bien los datos puede romper la ley de potencia. Uno de los resultados más accionables sobre calidad de datos." },

{ sec:"datos-scaling", type:"paper", level:"avanzado", year:2022,
  title:"Scaling Laws and Interpretability of Learning from Repeated Data", by:"Anthropic",
  url:"https://arxiv.org/abs/2205.10487",
  note:"Qué pasa cuando repetís datos (spoiler: se degrada peor de lo que pensás). Crucial ahora que los datos web de calidad escasean." },

{ sec:"datos-scaling", type:"blog", level:"medio", year:2020,
  title:"The Scaling Hypothesis", by:"Gwern Branwen",
  url:"https://gwern.net/scaling-hypothesis",
  note:"El ensayo que articuló, antes que casi nadie, por qué la escala sola iba a llevar tan lejos. Documento histórico." },

{ sec:"datos-scaling", type:"blog", level:"intro", top:true, year:2019,
  title:"The Bitter Lesson", by:"Rich Sutton",
  url:"http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
  note:"Un ensayo de una página que explica 70 años de historia de la IA: los métodos generales que escalan con cómputo siempre ganan. El texto más citado del campo." }

);
