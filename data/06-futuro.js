/* Lecturas sobre el futuro: proyecciones, disputas abiertas y señales a vigilar */
window.R = window.R || [];
window.R.push(

{ sec:"futuro", type:"paper", level:"medio", top:true, year:2025,
  title:"Welcome to the Era of Experience", by:"David Silver & Richard Sutton",
  url:"https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf",
  note:"Los dos padres del RL moderno argumentan que los datos humanos se agotaron y que la próxima era será de agentes que aprenden de su propia experiencia. Si tenés que apostar a una sola tesis sobre el futuro, esta es la más respaldada por trayectoria." },

{ sec:"futuro", type:"paper", level:"medio", top:true, year:2025,
  title:"Measuring AI Ability to Complete Long Tasks", by:"METR",
  url:"https://arxiv.org/abs/2503.14499",
  note:"El 'horizonte temporal' de las tareas que un modelo completa se duplica cada ~7 meses. Es la métrica de progreso más informativa que existe hoy, porque mide autonomía y no conocimiento." },

{ sec:"futuro", type:"paper", level:"medio", year:2022,
  title:"Will we run out of data? Limits of LLM scaling based on human-generated data", by:"Villalobos et al. (Epoch AI)",
  url:"https://arxiv.org/abs/2211.04325",
  note:"Proyección cuantitativa del agotamiento del texto humano de calidad. La razón por la que datos sintéticos y RL pasaron al centro de la escena." },

{ sec:"futuro", type:"blog", level:"medio", top:true, year:2024,
  title:"Machines of Loving Grace", by:"Dario Amodei (Anthropic)",
  url:"https://www.darioamodei.com/essay/machines-of-loving-grace",
  note:"El escenario optimista escrito con seriedad: biología, salud mental, desarrollo económico, gobernanza. Explícitamente especulativo, y por eso mismo útil." },

{ sec:"futuro", type:"blog", level:"medio", year:2024,
  title:"Situational Awareness: The Decade Ahead", by:"Leopold Aschenbrenner",
  url:"https://situational-awareness.ai/",
  note:"La tesis de despegue rápido más difundida, con foco en cómputo, seguridad nacional y carrera geopolítica. Muy discutida y muy discutible: leela como argumento, no como pronóstico." },

{ sec:"futuro", type:"blog", level:"medio", year:2025,
  title:"AI 2027", by:"Daniel Kokotajlo, Scott Alexander y otros",
  url:"https://ai-2027.com/",
  note:"Un escenario detallado, trimestre a trimestre, de cómo podría verse un despegue. Es ficción razonada con supuestos explícitos; el valor está en las cadenas causales, no en las fechas." },

{ sec:"futuro", type:"blog", level:"medio", top:true, year:2025,
  title:"AI as Normal Technology", by:"Arvind Narayanan & Sayash Kapoor (Princeton)",
  url:"https://knightcolumbia.org/content/ai-as-normal-technology",
  note:"El contrapunto riguroso a los escenarios de despegue: la difusión de una tecnología está limitada por instituciones, no por capacidad del modelo. Leelo junto a los dos anteriores." },

{ sec:"futuro", type:"libro", level:"intro", year:2024,
  title:"AI Snake Oil", by:"Narayanan & Kapoor",
  url:"https://www.aisnakeoil.com/",
  note:"Distingue entre IA predictiva (mayormente sobrevendida) e IA generativa (real pero malentendida). Buen calibrador de expectativas." },

{ sec:"futuro", type:"blog", level:"medio", top:true, year:2025,
  title:"On the Measure of Intelligence / ARC Prize", by:"François Chollet",
  url:"https://arxiv.org/abs/1911.01547",
  note:"La definición de inteligencia como eficiencia en la adquisición de habilidades. El argumento más sólido de por qué escalar memorización no basta." },

{ sec:"futuro", type:"paper", level:"avanzado", year:2025,
  title:"The Illusion of Thinking / debates sobre razonamiento en LLMs", by:"Apple ML Research y respuestas",
  url:"https://machinelearning.apple.com/research/illusion-of-thinking",
  note:"Sostiene que los modelos de razonamiento colapsan al aumentar la complejidad. Provocó respuestas técnicas fuertes: el intercambio completo es el mejor material sobre qué significa 'razonar'." },

{ sec:"futuro", type:"herramienta", level:"medio", top:true, year:2025, free:true,
  title:"Epoch AI — Data on AI", by:"Epoch AI",
  url:"https://epoch.ai/data",
  note:"Tendencias de cómputo, costos, tamaños de modelos y capacidades, con metodología pública. La forma correcta de discutir el futuro: con datos." },

{ sec:"futuro", type:"paper", level:"medio", year:2025,
  title:"International AI Safety Report", by:"Bengio et al.",
  url:"https://internationalaisafetyreport.org/",
  note:"Consenso científico internacional sobre qué sabemos y qué no sobre capacidades y riesgos. La referencia neutral cuando la discusión se polariza." },

{ sec:"futuro", type:"paper", level:"avanzado", year:2025,
  title:"Continual learning y catastrophic forgetting (línea de investigación)", by:"varios",
  url:"https://arxiv.org/abs/2302.00487",
  note:"Los modelos actuales no aprenden después de entrenados. Resolverlo es probablemente la próxima gran ruptura: seguí esta literatura de cerca." },

{ sec:"futuro", type:"blog", level:"medio", year:2025,
  title:"Charla: Richard Sutton en el Dwarkesh Podcast", by:"Dwarkesh Patel",
  url:"https://www.dwarkesh.com/p/richard-sutton",
  note:"Sutton argumenta que los LLMs son un desvío respecto del aprendizaje por experiencia. Uno de los desacuerdos más productivos que se hicieron públicos." }

);
