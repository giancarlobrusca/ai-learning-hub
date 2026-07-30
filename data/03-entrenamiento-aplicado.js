/* Post-training, RL, fine-tuning, inferencia, infraestructura, RAG y agentes */
window.R = window.R || [];
window.R.push(

/* ---------------- POST-TRAINING / RL / RAZONAMIENTO ---------------- */
{ sec:"post-training", type:"paper", level:"medio", top:true, year:2022,
  title:"Training language models to follow instructions with human feedback (InstructGPT)", by:"Ouyang et al. (OpenAI)",
  url:"https://arxiv.org/abs/2203.02155",
  note:"El paper que convirtió un modelo de texto en un asistente. SFT + modelo de recompensa + PPO. Es la receta que dio origen a ChatGPT." },

{ sec:"post-training", type:"paper", level:"medio", top:true, year:2023,
  title:"Direct Preference Optimization (DPO)", by:"Rafailov et al. (Stanford)",
  url:"https://arxiv.org/abs/2305.18290",
  note:"Alineamiento por preferencias sin modelo de recompensa ni RL. Simple, estable y hoy el punto de partida por defecto." },

{ sec:"post-training", type:"paper", level:"avanzado", top:true, year:2024,
  title:"DeepSeekMath: GRPO", by:"DeepSeek AI",
  url:"https://arxiv.org/abs/2402.03300",
  note:"Group Relative Policy Optimization: elimina la red de valor de PPO. Es el algoritmo que entrena la mayoría de los modelos de razonamiento actuales." },

{ sec:"post-training", type:"paper", level:"medio", year:2017,
  title:"Proximal Policy Optimization (PPO)", by:"Schulman et al. (OpenAI)",
  url:"https://arxiv.org/abs/1707.06347",
  note:"El algoritmo de RL sobre el que se construyó todo el RLHF. Vale entenderlo aunque hoy uses GRPO o DPO." },

{ sec:"post-training", type:"paper", level:"medio", top:true, year:2022,
  title:"Chain-of-Thought Prompting Elicits Reasoning in LLMs", by:"Wei et al. (Google)",
  url:"https://arxiv.org/abs/2201.11903",
  note:"'Pensemos paso a paso'. La observación más simple y más rentable de la historia reciente de los LLMs." },

{ sec:"post-training", type:"paper", level:"medio", year:2023,
  title:"Let's Verify Step by Step (process supervision)", by:"Lightman et al. (OpenAI)",
  url:"https://arxiv.org/abs/2305.20050",
  note:"Recompensar cada paso del razonamiento, no solo el resultado. Antecedente directo de los modelos tipo o1/o3." },

{ sec:"post-training", type:"paper", level:"avanzado", top:true, year:2024,
  title:"Scaling LLM Test-Time Compute Optimally", by:"Snell et al. (DeepMind/Berkeley)",
  url:"https://arxiv.org/abs/2408.03314",
  note:"El paper que formalizó el segundo eje de escalado: pensar más en inferencia puede valer más que un modelo más grande." },

{ sec:"post-training", type:"paper", level:"avanzado", year:2022,
  title:"STaR: Self-Taught Reasoner", by:"Zelikman et al. (Stanford)",
  url:"https://arxiv.org/abs/2203.14465",
  note:"Bootstrap del razonamiento: el modelo genera cadenas, filtrás las correctas, reentrenás. Base de casi todo el auto-mejoramiento actual." },

{ sec:"post-training", type:"paper", level:"medio", year:2022,
  title:"Constitutional AI: Harmlessness from AI Feedback", by:"Anthropic",
  url:"https://arxiv.org/abs/2212.08073",
  note:"RLAIF: reemplazar parte del feedback humano por principios explícitos + crítica del propio modelo." },

{ sec:"post-training", type:"paper", level:"medio", year:2022,
  title:"Self-Consistency Improves Chain of Thought Reasoning", by:"Wang et al. (Google)",
  url:"https://arxiv.org/abs/2203.11171",
  note:"Muestrear varias cadenas y votar por mayoría. La técnica de inferencia con mejor relación esfuerzo/beneficio." },

{ sec:"post-training", type:"paper", level:"avanzado", year:2023,
  title:"Tree of Thoughts", by:"Yao et al. (Princeton/DeepMind)",
  url:"https://arxiv.org/abs/2305.10601",
  note:"Búsqueda deliberada sobre estados de razonamiento en lugar de una sola cadena lineal." },

{ sec:"post-training", type:"blog", level:"medio", top:true, year:2025,
  title:"Interconnects — RLHF y post-training", by:"Nathan Lambert",
  url:"https://www.interconnects.ai/",
  note:"El mejor seguimiento continuo de post-training, RLVR y modelos abiertos. Lambert está dentro del proceso, no comentándolo desde afuera." },

{ sec:"post-training", type:"libro", level:"avanzado", top:true, year:2025, free:true,
  title:"RLHF Book: A Little Bit of Reinforcement Learning from Human Feedback", by:"Nathan Lambert",
  url:"https://rlhfbook.com/",
  note:"Libro abierto y en evolución sobre RLHF: modelos de recompensa, PPO/GRPO, evaluación, fallos conocidos. No hay nada equivalente." },

{ sec:"post-training", type:"libro", level:"medio", top:true, year:2018, free:true,
  title:"Reinforcement Learning: An Introduction (2ª ed.)", by:"Sutton & Barto",
  url:"http://incompleteideas.net/book/the-book-2nd.html",
  note:"La biblia del RL. PDF gratis. Si vas a hacer post-training en serio, los capítulos 3-6 y 13 son obligatorios." },

{ sec:"post-training", type:"curso", level:"avanzado", year:2024, free:true,
  title:"CS285: Deep Reinforcement Learning", by:"Sergey Levine (Berkeley)",
  url:"https://rail.eecs.berkeley.edu/deeprlcourse/",
  note:"El curso de posgrado de referencia en deep RL. Clases completas en YouTube." },

{ sec:"post-training", type:"curso", level:"intro", year:2025, free:true,
  title:"Deep RL Course", by:"Hugging Face",
  url:"https://huggingface.co/learn/deep-rl-course/unit0/introduction",
  note:"RL práctico con entornos reales y modelos que subís al Hub. La entrada más amable al tema." },

{ sec:"post-training", type:"repo", level:"medio", top:true, year:2025, free:true,
  title:"TRL — Transformer Reinforcement Learning", by:"Hugging Face",
  url:"https://github.com/huggingface/trl",
  note:"SFT, DPO, GRPO, PPO, reward modeling con una API consistente. La forma más rápida de hacer post-training real." },

{ sec:"post-training", type:"repo", level:"avanzado", year:2025, free:true,
  title:"verl / OpenRLHF", by:"ByteDance / OpenRLHF",
  url:"https://github.com/volcengine/verl",
  note:"Frameworks de RL a escala para LLMs, pensados para clusters. Lo que se usa cuando TRL se queda corto." },

{ sec:"post-training", type:"repo", level:"medio", year:2025, free:true,
  title:"open-r1", by:"Hugging Face",
  url:"https://github.com/huggingface/open-r1",
  note:"Reproducción abierta y documentada del pipeline de DeepSeek-R1. La mejor forma de aprender RLVR leyendo código." },

/* ---------------- FINE-TUNING ---------------- */
{ sec:"fine-tuning", type:"paper", level:"medio", top:true, year:2021,
  title:"LoRA: Low-Rank Adaptation of Large Language Models", by:"Hu et al. (Microsoft)",
  url:"https://arxiv.org/abs/2106.09685",
  note:"Entrenar matrices de rango bajo en vez del modelo entero. Es la razón por la que podés hacer fine-tuning en una sola GPU." },

{ sec:"fine-tuning", type:"paper", level:"medio", top:true, year:2023,
  title:"QLoRA: Efficient Finetuning of Quantized LLMs", by:"Dettmers et al.",
  url:"https://arxiv.org/abs/2305.14314",
  note:"LoRA sobre un modelo base en 4 bits. Democratizó el fine-tuning de modelos de 65B en hardware de consumo." },

{ sec:"fine-tuning", type:"repo", level:"intro", top:true, year:2025, free:true,
  title:"PEFT", by:"Hugging Face",
  url:"https://github.com/huggingface/peft",
  note:"LoRA, DoRA, IA³, prompt tuning y compañía en una línea de código. El punto de entrada estándar." },

{ sec:"fine-tuning", type:"repo", level:"intro", top:true, year:2025, free:true,
  title:"Unsloth", by:"Unsloth AI",
  url:"https://github.com/unslothai/unsloth",
  note:"2-5× más rápido y con mucha menos memoria mediante kernels Triton propios. Sus notebooks gratuitos en Colab son el camino más corto para tu primer fine-tune." },

{ sec:"fine-tuning", type:"docs", level:"intro", year:2025, free:true,
  title:"Unsloth Docs — guías de fine-tuning", by:"Unsloth AI",
  url:"https://docs.unsloth.ai/",
  note:"Guías paso a paso por modelo (Llama, Qwen, Gemma, gpt-oss), incluyendo GRPO y datasets. Documentación práctica excelente." },

{ sec:"fine-tuning", type:"repo", level:"medio", year:2025, free:true,
  title:"Axolotl", by:"Axolotl AI",
  url:"https://github.com/axolotl-ai-cloud/axolotl",
  note:"Fine-tuning declarativo por YAML: cambiás config, no código. El favorito de la comunidad open-weights." },

{ sec:"fine-tuning", type:"repo", level:"medio", year:2025, free:true,
  title:"LLaMA-Factory", by:"hiyouga",
  url:"https://github.com/hiyouga/LLaMA-Factory",
  note:"100+ modelos soportados, con interfaz web. Muy usado para experimentar rápido sin escribir código." },

{ sec:"fine-tuning", type:"repo", level:"medio", year:2025, free:true,
  title:"torchtune", by:"PyTorch",
  url:"https://github.com/pytorch/torchtune",
  note:"Recetas de fine-tuning nativas de PyTorch, sin abstracciones pesadas. Ideal si querés leer y modificar el código." },

{ sec:"fine-tuning", type:"blog", level:"medio", top:true, year:2024,
  title:"Practical Tips for Finetuning LLMs Using LoRA", by:"Sebastian Raschka",
  url:"https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms",
  note:"Experimentos reales sobre rank, alpha, qué capas tocar y cuándo LoRA empata con full fine-tuning." },

{ sec:"fine-tuning", type:"blog", level:"medio", top:true, year:2024,
  title:"Fine-tuning: guías y notas de campo", by:"Hamel Husain",
  url:"https://hamel.dev/blog/posts/evals/",
  note:"Hamel es la voz más sensata sobre cuándo NO hacer fine-tuning y por qué las evaluaciones importan más que el entrenamiento." },

{ sec:"fine-tuning", type:"paper", level:"avanzado", year:2024,
  title:"DoRA: Weight-Decomposed Low-Rank Adaptation", by:"Liu et al. (NVIDIA)",
  url:"https://arxiv.org/abs/2402.09353",
  note:"Descompone magnitud y dirección. Suele superar a LoRA con el mismo presupuesto de parámetros." },

{ sec:"fine-tuning", type:"paper", level:"medio", year:2015,
  title:"Distilling the Knowledge in a Neural Network", by:"Hinton, Vinyals, Dean",
  url:"https://arxiv.org/abs/1503.02531",
  note:"La destilación es hoy la técnica más rentable de la industria: modelos chicos que imitan a los grandes." },

/* ---------------- INFERENCIA Y OPTIMIZACIÓN ---------------- */
{ sec:"inferencia", type:"paper", level:"avanzado", top:true, year:2022,
  title:"FlashAttention: Fast and Memory-Efficient Exact Attention", by:"Tri Dao et al.",
  url:"https://arxiv.org/abs/2205.14135",
  note:"No aproxima nada: solo reordena el cómputo para respetar la jerarquía de memoria de la GPU. La optimización más importante de la década. Ver también FlashAttention-2 (2307.08691) y -3 (2407.08608)." },

{ sec:"inferencia", type:"paper", level:"avanzado", top:true, year:2023,
  title:"Efficient Memory Management for LLM Serving with PagedAttention (vLLM)", by:"Kwon et al. (Berkeley)",
  url:"https://arxiv.org/abs/2309.06180",
  note:"Memoria virtual paginada aplicada al KV cache. Multiplicó por 24 el throughput de servir modelos y se volvió el estándar." },

{ sec:"inferencia", type:"repo", level:"medio", top:true, year:2025, free:true,
  title:"vLLM", by:"vLLM Project",
  url:"https://github.com/vllm-project/vllm",
  note:"El motor de inferencia de referencia: continuous batching, prefix caching, tensor parallel, API compatible con OpenAI." },

{ sec:"inferencia", type:"repo", level:"avanzado", year:2025, free:true,
  title:"SGLang", by:"LMSYS",
  url:"https://github.com/sgl-project/sglang",
  note:"RadixAttention para reutilizar prefijos + un lenguaje de programación de prompts. Muy fuerte en cargas agénticas y estructuradas." },

{ sec:"inferencia", type:"repo", level:"medio", top:true, year:2025, free:true,
  title:"llama.cpp", by:"Georgi Gerganov y comunidad",
  url:"https://github.com/ggml-org/llama.cpp",
  note:"Inferencia en C/C++ que corre en cualquier cosa: CPU, Mac, Raspberry Pi. Creó el formato GGUF y todo el ecosistema local." },

{ sec:"inferencia", type:"herramienta", level:"intro", top:true, year:2025, free:true,
  title:"Ollama", by:"Ollama",
  url:"https://ollama.com/",
  note:"`ollama run qwen3` y ya tenés un modelo local. La forma más simple de empezar a experimentar sin nube ni tarjeta de crédito." },

{ sec:"inferencia", type:"herramienta", level:"intro", year:2025, free:true,
  title:"LM Studio", by:"LM Studio",
  url:"https://lmstudio.ai/",
  note:"Interfaz gráfica para correr modelos locales, con servidor compatible con OpenAI incluido. Ideal para no-programadores." },

{ sec:"inferencia", type:"repo", level:"medio", year:2025, free:true,
  title:"MLX", by:"Apple",
  url:"https://github.com/ml-explore/mlx",
  note:"Framework para Apple Silicon con memoria unificada. Si tenés una Mac con M-series, esto cambia lo que podés correr localmente." },

{ sec:"inferencia", type:"paper", level:"avanzado", year:2022,
  title:"Fast Inference from Transformers via Speculative Decoding", by:"Leviathan et al. (Google)",
  url:"https://arxiv.org/abs/2211.17192",
  note:"Un modelo chico propone tokens, el grande los verifica en paralelo. 2-3× de aceleración sin perder calidad." },

{ sec:"inferencia", type:"paper", level:"avanzado", year:2022,
  title:"GPTQ: Accurate Post-Training Quantization", by:"Frantar et al.",
  url:"https://arxiv.org/abs/2210.17323",
  note:"Cuantización a 3-4 bits en una pasada. Junto a AWQ (2306.00978), la base de todos los modelos cuantizados que descargás." },

{ sec:"inferencia", type:"paper", level:"avanzado", year:2022,
  title:"LLM.int8() y el problema de los outliers", by:"Tim Dettmers et al.",
  url:"https://arxiv.org/abs/2208.07339",
  note:"Por qué la cuantización ingenua falla en modelos grandes y cómo se resuelve. Fundamento de bitsandbytes." },

{ sec:"inferencia", type:"curso", level:"avanzado", top:true, year:2025, free:true,
  title:"MIT 6.5940: TinyML and Efficient Deep Learning Computing", by:"Song Han (MIT)",
  url:"https://hanlab.mit.edu/courses/2024-fall-65940",
  note:"Pruning, cuantización, NAS, destilación, sistemas de inferencia para LLMs y difusión. El curso más completo sobre eficiencia." },

{ sec:"inferencia", type:"blog", level:"avanzado", year:2023,
  title:"Making Deep Learning Go Brrrr From First Principles", by:"Horace He",
  url:"https://horace.io/brrr_intro.html",
  note:"Compute-bound vs memory-bound vs overhead-bound. Después de leerlo vas a diagnosticar cuellos de botella en vez de adivinar." },

{ sec:"inferencia", type:"repo", level:"medio", year:2025, free:true,
  title:"Text Generation Inference (TGI) y TensorRT-LLM", by:"Hugging Face / NVIDIA",
  url:"https://github.com/huggingface/text-generation-inference",
  note:"Las otras dos pilas de serving de producción. TensorRT-LLM exprime al máximo el hardware NVIDIA." },

/* ---------------- INFRAESTRUCTURA / GPUs ---------------- */
{ sec:"infra", type:"curso", level:"avanzado", top:true, year:2025, free:true,
  title:"GPU MODE (antes CUDA MODE) — lecturas y comunidad", by:"GPU MODE",
  url:"https://github.com/gpu-mode/lectures",
  note:"Serie de charlas sobre CUDA, Triton, kernels y rendimiento, con un Discord muy activo. El mejor lugar para aprender programación de GPUs aplicada a IA." },

{ sec:"infra", type:"docs", level:"avanzado", year:2025, free:true,
  title:"Triton — lenguaje de kernels", by:"OpenAI",
  url:"https://triton-lang.org/main/index.html",
  note:"Escribir kernels de GPU en Python. Es cómo se implementan hoy FlashAttention, Unsloth y medio ecosistema." },

{ sec:"infra", type:"libro", level:"avanzado", year:2022,
  title:"Programming Massively Parallel Processors (PMPP)", by:"Hwu, Kirk, El Hajj",
  url:"https://www.elsevier.com/books/programming-massively-parallel-processors/hwu/978-0-323-91231-0",
  note:"El libro canónico de CUDA. GPU MODE organiza grupos de lectura sobre él." },

{ sec:"infra", type:"blog", level:"avanzado", top:true, year:2025,
  title:"SemiAnalysis", by:"Dylan Patel y equipo",
  url:"https://semianalysis.com/",
  note:"Análisis profundo de hardware, datacenters, cadena de suministro y economía real del cómputo de IA. Nadie más hace este trabajo con este nivel de detalle." },

{ sec:"infra", type:"blog", level:"medio", year:2024,
  title:"Which GPU(s) to Get for Deep Learning", by:"Tim Dettmers",
  url:"https://timdettmers.com/2023/01/30/which-gpu-for-deep-learning/",
  note:"La guía de referencia para elegir hardware, con razonamiento sobre ancho de banda y memoria, no solo benchmarks." },

{ sec:"infra", type:"herramienta", level:"medio", year:2025,
  title:"Weights & Biases", by:"W&B",
  url:"https://wandb.ai/site",
  note:"Tracking de experimentos, sweeps de hiperparámetros y reportes. Gratis para uso personal y estándar en investigación." },

{ sec:"infra", type:"herramienta", level:"medio", year:2025, free:true,
  title:"MLflow", by:"Linux Foundation",
  url:"https://mlflow.org/",
  note:"La alternativa open source y self-hosted para tracking, registro de modelos y despliegue." },

{ sec:"infra", type:"herramienta", level:"medio", year:2025,
  title:"Modal / RunPod / Lambda", by:"varios",
  url:"https://modal.com/",
  note:"GPUs por hora sin administrar infraestructura. Modal es especialmente cómodo para entrenar o servir desde Python puro." },

{ sec:"infra", type:"libro", level:"medio", top:true, year:2022,
  title:"Designing Machine Learning Systems", by:"Chip Huyen",
  url:"https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
  note:"El libro de referencia para llevar ML a producción: datos, features, despliegue, monitoreo, deriva de datos." },

{ sec:"infra", type:"repo", level:"medio", year:2025, free:true,
  title:"ML Engineering Open Book", by:"Stas Bekman",
  url:"https://github.com/stas00/ml-engineering",
  note:"Notas de campo de alguien que entrenó modelos grandes de verdad: debugging de NCCL, picos de loss, fallas de hardware, tuning de throughput." },

/* ---------------- RAG, AGENTES, CONTEXTO ---------------- */
{ sec:"rag-agentes", type:"paper", level:"medio", top:true, year:2020,
  title:"Retrieval-Augmented Generation for Knowledge-Intensive NLP", by:"Lewis et al. (Meta)",
  url:"https://arxiv.org/abs/2005.11401",
  note:"El paper que nombró RAG. Vale leerlo para ver cuánto se desvió la práctica actual de la propuesta original." },

{ sec:"rag-agentes", type:"paper", level:"medio", top:true, year:2022,
  title:"ReAct: Synergizing Reasoning and Acting in Language Models", by:"Yao et al.",
  url:"https://arxiv.org/abs/2210.03629",
  note:"Razonar y actuar alternadamente. Es el patrón base de prácticamente todo agente que exista hoy." },

{ sec:"rag-agentes", type:"paper", level:"medio", year:2023,
  title:"Toolformer: Language Models Can Teach Themselves to Use Tools", by:"Meta AI",
  url:"https://arxiv.org/abs/2302.04761",
  note:"Los modelos aprenden solos cuándo llamar a una API. Antecedente del tool use nativo actual." },

{ sec:"rag-agentes", type:"paper", level:"medio", year:2023,
  title:"Generative Agents: Interactive Simulacra of Human Behavior", by:"Park et al. (Stanford)",
  url:"https://arxiv.org/abs/2304.03442",
  note:"Memoria, reflexión y planificación en agentes que conviven. El paper más influyente sobre arquitectura de memoria agéntica." },

{ sec:"rag-agentes", type:"blog", level:"medio", top:true, year:2023,
  title:"LLM Powered Autonomous Agents", by:"Lilian Weng",
  url:"https://lilianweng.github.io/posts/2023-06-23-agent/",
  note:"El mapa conceptual de referencia: planificación, memoria, uso de herramientas. Sigue siendo la mejor síntesis del tema." },

{ sec:"rag-agentes", type:"blog", level:"medio", top:true, year:2025,
  title:"Building Effective Agents", by:"Anthropic",
  url:"https://www.anthropic.com/engineering/building-effective-agents",
  note:"La distinción clave entre workflows y agentes, y por qué la mayoría de los problemas se resuelven mejor con lo primero. Lectura corta y obligatoria." },

{ sec:"rag-agentes", type:"blog", level:"medio", top:true, year:2025,
  title:"Effective context engineering for AI agents", by:"Anthropic",
  url:"https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
  note:"El 'prompt engineering' evolucionó a gestionar el contexto como recurso escaso: compactación, memoria externa, sub-agentes." },

{ sec:"rag-agentes", type:"blog", level:"medio", year:2025,
  title:"Agentic Design Patterns / cómo construimos agentes", by:"varios (Anthropic, OpenAI, Google)",
  url:"https://cookbook.openai.com/examples/gpt4-1_prompting_guide",
  note:"Las guías de prompting y agentes de cada laboratorio son documentación técnica de primer nivel, no marketing. Leé las tres." },

{ sec:"rag-agentes", type:"docs", level:"medio", top:true, year:2025, free:true,
  title:"Model Context Protocol (MCP)", by:"Anthropic",
  url:"https://modelcontextprotocol.io/",
  note:"El estándar abierto para conectar modelos con herramientas y datos. Adoptado por toda la industria: si construís agentes, tenés que conocerlo." },

{ sec:"rag-agentes", type:"curso", level:"intro", top:true, year:2025, free:true,
  title:"AI Agents Course", by:"Hugging Face",
  url:"https://huggingface.co/learn/agents-course/unit0/introduction",
  note:"Curso gratuito y práctico: fundamentos, frameworks, evaluación y un proyecto final certificable." },

{ sec:"rag-agentes", type:"repo", level:"medio", year:2025, free:true,
  title:"smolagents", by:"Hugging Face",
  url:"https://github.com/huggingface/smolagents",
  note:"Agentes en ~1000 líneas, con foco en agentes que escriben código en vez de emitir JSON. Simple de leer entero." },

{ sec:"rag-agentes", type:"repo", level:"medio", top:true, year:2025, free:true,
  title:"DSPy", by:"Stanford NLP (Omar Khattab et al.)",
  url:"https://github.com/stanfordnlp/dspy",
  note:"Programar el comportamiento del modelo y dejar que los prompts se optimicen solos. El cambio de paradigma más interesante frente al prompt-crafting manual." },

{ sec:"rag-agentes", type:"repo", level:"medio", year:2025, free:true,
  title:"LangGraph / LangChain", by:"LangChain",
  url:"https://github.com/langchain-ai/langgraph",
  note:"Orquestación de agentes como grafos de estados. Muy usado en producción; LangGraph es bastante mejor que el LangChain clásico." },

{ sec:"rag-agentes", type:"repo", level:"medio", year:2025, free:true,
  title:"LlamaIndex", by:"LlamaIndex",
  url:"https://github.com/run-llama/llama_index",
  note:"El framework más completo para ingesta, indexado y recuperación sobre datos propios." },

{ sec:"rag-agentes", type:"repo", level:"medio", year:2025, free:true,
  title:"Pydantic AI / OpenAI Agents SDK", by:"Pydantic / OpenAI",
  url:"https://ai.pydantic.dev/",
  note:"Agentes con tipado estricto y validación. La opción sensata si venís de ingeniería de software tradicional." },

{ sec:"rag-agentes", type:"paper", level:"avanzado", year:2024,
  title:"From Local to Global: A Graph RAG Approach", by:"Microsoft Research",
  url:"https://arxiv.org/abs/2404.16130",
  note:"Cuando la pregunta es sobre el corpus entero y no sobre un pasaje, el RAG por similitud falla. GraphRAG es la respuesta más elaborada." },

{ sec:"rag-agentes", type:"blog", level:"medio", top:true, year:2024,
  title:"What We Learned from a Year of Building with LLMs", by:"Yan, Bernstein, Husain, Shankar y otros",
  url:"https://applied-llms.org/",
  note:"Lecciones tácticas, operativas y estratégicas de gente que puso LLMs en producción. Antídoto contra el hype." },

{ sec:"rag-agentes", type:"herramienta", level:"medio", year:2025, free:true,
  title:"Bases vectoriales: FAISS, Qdrant, Chroma, pgvector, Milvus", by:"varios",
  url:"https://github.com/facebookresearch/faiss",
  note:"Empezá con FAISS o pgvector. La mayoría de los proyectos no necesitan una base vectorial dedicada, y conviene saberlo antes de elegir una." },

{ sec:"rag-agentes", type:"blog", level:"medio", year:2025,
  title:"Notas sobre RAG y sistemas de recomendación", by:"Eugene Yan",
  url:"https://eugeneyan.com/writing/",
  note:"Escritura técnica clara sobre evaluación, RAG, recomendadores y patrones de diseño con LLMs." }

);
