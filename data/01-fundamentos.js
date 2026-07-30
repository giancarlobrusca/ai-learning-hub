/* Fundamentos: matemática, programación, ML clásico, deep learning base */
window.R = window.R || [];
window.R.push(

/* ---------------- MATEMÁTICAS ---------------- */
{ sec:"matematicas", type:"video", level:"intro", top:true, year:2017,
  title:"Neural Networks (serie)", by:"3Blue1Brown",
  url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
  note:"La mejor intuición visual que existe sobre qué es una red neuronal, backpropagation y gradiente. Actualizada con capítulos sobre transformers y attention. Empezá acá, siempre." },

{ sec:"matematicas", type:"video", level:"intro", top:true, year:2016,
  title:"Essence of Linear Algebra", by:"3Blue1Brown",
  url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
  note:"Vectores, matrices, autovalores y cambio de base explicados geométricamente. Es el prerequisito real de todo lo demás." },

{ sec:"matematicas", type:"video", level:"intro", year:2017,
  title:"Essence of Calculus", by:"3Blue1Brown",
  url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
  note:"Derivadas y regla de la cadena. La regla de la cadena ES backpropagation." },

{ sec:"matematicas", type:"libro", level:"medio", top:true, year:2020, free:true,
  title:"Mathematics for Machine Learning", by:"Deisenroth, Faisal, Ong",
  url:"https://mml-book.github.io/",
  note:"PDF gratis. Álgebra lineal, cálculo vectorial, probabilidad y optimización con foco exclusivo en lo que ML necesita. El puente entre 'sé programar' y 'entiendo los papers'." },

{ sec:"matematicas", type:"curso", level:"medio", year:2010, free:true,
  title:"MIT 18.06 Linear Algebra", by:"Gilbert Strang",
  url:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
  note:"El curso canónico de álgebra lineal. Strang enseña como si te estuviera contando un secreto." },

{ sec:"matematicas", type:"curso", level:"medio", year:2019, free:true,
  title:"Statistics 110: Probability", by:"Joe Blitzstein (Harvard)",
  url:"https://projects.iq.harvard.edu/stat110/home",
  note:"Probabilidad desde cero hasta cadenas de Markov. Fundamental para entender modelos generativos y difusión." },

{ sec:"matematicas", type:"curso", level:"avanzado", year:2023, free:true,
  title:"Probabilistic Machine Learning", by:"Philipp Hennig (Tübingen)",
  url:"https://www.youtube.com/playlist?list=PL05umP7R6ij2YE8rRJSb-olDNbntAQ_Bx",
  note:"El enfoque bayesiano completo: procesos gaussianos, inferencia variacional, cuantificación de incertidumbre." },

{ sec:"matematicas", type:"libro", level:"avanzado", year:2023, free:true,
  title:"Probabilistic Machine Learning: An Introduction / Advanced Topics", by:"Kevin Murphy",
  url:"https://probml.github.io/pml-book/",
  note:"Los dos tomos más completos que existen. Referencia de escritorio, no lectura lineal. PDFs gratis." },

{ sec:"matematicas", type:"blog", level:"medio", year:2020,
  title:"The Matrix Calculus You Need For Deep Learning", by:"Parr & Howard",
  url:"https://explained.ai/matrix-calculus/",
  note:"Jacobianos y derivadas matriciales explicados para gente que programa, no para matemáticos." },

{ sec:"matematicas", type:"blog", level:"medio", year:2018,
  title:"Seeing Theory", by:"Brown University",
  url:"https://seeing-theory.brown.edu/",
  note:"Probabilidad y estadística con visualizaciones interactivas. Ideal para intuición rápida." },

/* ---------------- PROGRAMACIÓN / HERRAMIENTAS BASE ---------------- */
{ sec:"programacion", type:"curso", level:"intro", top:true, year:2024, free:true,
  title:"PyTorch Tutorials oficiales — Learn the Basics", by:"PyTorch",
  url:"https://pytorch.org/tutorials/beginner/basics/intro.html",
  note:"Tensores, autograd, datasets, loop de entrenamiento. Hacelo con las manos, no leyéndolo." },

{ sec:"programacion", type:"docs", level:"medio", year:2025,
  title:"PyTorch — documentación", by:"Meta / PyTorch Foundation",
  url:"https://pytorch.org/docs/stable/index.html",
  note:"El framework por defecto de la investigación en IA. Saber leer estos docs es una habilidad en sí misma." },

{ sec:"programacion", type:"docs", level:"avanzado", year:2025,
  title:"JAX — documentación", by:"Google",
  url:"https://docs.jax.dev/en/latest/",
  note:"Programación funcional + autodiff + XLA. Domina en TPUs y en investigación de escala (DeepMind). jit/vmap/pmap cambian cómo pensás el cómputo." },

{ sec:"programacion", type:"repo", level:"medio", year:2025,
  title:"Flax NNX", by:"Google",
  url:"https://flax.readthedocs.io/en/latest/",
  note:"La librería de redes neuronales sobre JAX. Si vas a JAX, vas a pasar por acá." },

{ sec:"programacion", type:"video", level:"intro", top:true, year:2022, free:true,
  title:"The spelled-out intro to neural networks and backpropagation: building micrograd", by:"Andrej Karpathy",
  url:"https://www.youtube.com/watch?v=VMj-3S1tku0",
  note:"Construye un motor de autodiff en 100 líneas de Python puro. Después de esto, PyTorch deja de ser magia. Es el video más valioso de esta lista." },

{ sec:"programacion", type:"repo", level:"intro", year:2020,
  title:"micrograd", by:"Andrej Karpathy",
  url:"https://github.com/karpathy/micrograd",
  note:"El código del video anterior. 100 líneas. Leelo entero." },

{ sec:"programacion", type:"curso", level:"intro", year:2024, free:true,
  title:"Python for Everybody", by:"Charles Severance",
  url:"https://www.py4e.com/",
  note:"Si todavía no programás en Python, empezá acá antes que en cualquier curso de IA." },

{ sec:"programacion", type:"curso", level:"intro", year:2025, free:true,
  title:"NumPy: the absolute basics for beginners", by:"NumPy",
  url:"https://numpy.org/doc/stable/user/absolute_beginners.html",
  note:"Broadcasting y shapes. El 80% de los bugs de ML son errores de shape." },

{ sec:"programacion", type:"blog", level:"medio", year:2019,
  title:"Einsum is All You Need", by:"Tim Rocktäschel",
  url:"https://rockt.ai/2018/04/30/einsum",
  note:"einsum/einops te ahorran años de sufrimiento con reshapes y transposes." },

{ sec:"programacion", type:"repo", level:"medio", year:2024,
  title:"einops", by:"Alex Rogozhnikov",
  url:"https://github.com/arogozhnikov/einops",
  note:"Operaciones de tensores legibles. `rearrange(x, 'b h n d -> b n (h d)')` en vez de tres líneas ilegibles." },

{ sec:"programacion", type:"blog", level:"medio", top:true, year:2019,
  title:"A Recipe for Training Neural Networks", by:"Andrej Karpathy",
  url:"https://karpathy.github.io/2019/04/25/recipe/",
  note:"Por qué tu red no entrena y qué hacer al respecto, en orden. Releelo cada vez que algo falle." },

{ sec:"programacion", type:"blog", level:"intro", year:2017,
  title:"Yes you should understand backprop", by:"Andrej Karpathy",
  url:"https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b",
  note:"Por qué tratar backprop como caja negra te va a costar caro: gradientes que mueren, saturación, exploding gradients." },

/* ---------------- ML CLÁSICO ---------------- */
{ sec:"ml-clasico", type:"curso", level:"intro", top:true, year:2022,
  title:"Machine Learning Specialization", by:"Andrew Ng / DeepLearning.AI",
  url:"https://www.coursera.org/specializations/machine-learning-introduction",
  note:"La puerta de entrada canónica. Regresión, clasificación, redes neuronales, clustering, sistemas de recomendación. Auditable gratis." },

{ sec:"ml-clasico", type:"curso", level:"intro", year:2025, free:true,
  title:"Machine Learning Crash Course", by:"Google",
  url:"https://developers.google.com/machine-learning/crash-course",
  note:"~15 horas, muy bien producido, con ejercicios interactivos. Actualizado con módulos de LLMs y embeddings." },

{ sec:"ml-clasico", type:"libro", level:"medio", top:true, year:2023, free:true,
  title:"An Introduction to Statistical Learning (ISL)", by:"James, Witten, Hastie, Tibshirani",
  url:"https://www.statlearning.com/",
  note:"PDF gratis, versiones en R y Python. El mejor libro para entender de verdad bias-variance, regularización, validación cruzada y árboles." },

{ sec:"ml-clasico", type:"libro", level:"avanzado", year:2009, free:true,
  title:"The Elements of Statistical Learning (ESL)", by:"Hastie, Tibshirani, Friedman",
  url:"https://hastie.su.domains/ElemStatLearn/",
  note:"La versión pesada de ISL. Referencia estadística rigurosa. PDF gratis." },

{ sec:"ml-clasico", type:"libro", level:"intro", top:true, year:2022,
  title:"Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow (3ª ed.)", by:"Aurélien Géron",
  url:"https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/",
  note:"El libro práctico más recomendado de la última década. Notebooks gratis en GitHub. Traducido al español." },

{ sec:"ml-clasico", type:"repo", level:"intro", year:2025, free:true,
  title:"handson-ml3 (notebooks)", by:"Aurélien Géron",
  url:"https://github.com/ageron/handson-ml3",
  note:"Todo el código del libro anterior, gratis y ejecutable en Colab." },

{ sec:"ml-clasico", type:"docs", level:"intro", year:2025,
  title:"scikit-learn — User Guide", by:"scikit-learn",
  url:"https://scikit-learn.org/stable/user_guide.html",
  note:"La guía de usuario es, de hecho, un curso de ML clásico bien escrito. Subestimadísima." },

{ sec:"ml-clasico", type:"curso", level:"intro", year:2025, free:true,
  title:"Kaggle Learn", by:"Kaggle",
  url:"https://www.kaggle.com/learn",
  note:"Micro-cursos de 3-5 horas: Python, pandas, ML intro, feature engineering, deep learning, explicabilidad. Muy buen retorno por hora invertida." },

{ sec:"ml-clasico", type:"libro", level:"intro", year:2019,
  title:"The Hundred-Page Machine Learning Book", by:"Andriy Burkov",
  url:"https://themlbook.com/",
  note:"Modelo 'leer primero, pagar después'. Panorama honesto y comprimido de todo el campo." },

{ sec:"ml-clasico", type:"curso", level:"avanzado", year:2024, free:true,
  title:"Stanford CS229: Machine Learning", by:"Andrew Ng / Tengyu Ma",
  url:"https://cs229.stanford.edu/",
  note:"La versión con toda la matemática que CS229 omite en Coursera. Notas y problem sets públicos." },

/* ---------------- DEEP LEARNING BASE ---------------- */
{ sec:"deep-learning", type:"curso", level:"intro", top:true, year:2025, free:true,
  title:"Practical Deep Learning for Coders", by:"fast.ai (Jeremy Howard)",
  url:"https://course.fast.ai/",
  note:"Enfoque top-down: entrenás un modelo útil en la lección 1 y recién después bajás a la teoría. Si los cursos tradicionales te aburren, este es tu camino." },

{ sec:"deep-learning", type:"curso", level:"intro", top:true, year:2025, free:true,
  title:"MIT 6.S191: Introduction to Deep Learning", by:"Alexander & Ava Amini (MIT)",
  url:"http://introtodeeplearning.com/",
  note:"Se actualiza cada año en enero. Denso, moderno y gratis: CNNs, RNNs, transformers, generativos, RL, LLMs. Todas las clases en YouTube." },

{ sec:"deep-learning", type:"curso", level:"medio", top:true, year:2023,
  title:"Deep Learning Specialization", by:"Andrew Ng / DeepLearning.AI",
  url:"https://www.coursera.org/specializations/deep-learning",
  note:"Cinco cursos: redes profundas, hiperparámetros/regularización, estructuración de proyectos, CNNs, secuencias. Sigue siendo la mejor base ordenada." },

{ sec:"deep-learning", type:"libro", level:"medio", top:true, year:2023, free:true,
  title:"Understanding Deep Learning", by:"Simon J.D. Prince",
  url:"https://udlbook.github.io/udlbook/",
  note:"PDF gratis + notebooks + slides. El mejor libro de deep learning escrito en los últimos años: cubre transformers, difusión, GNNs y RL con figuras excelentes." },

{ sec:"deep-learning", type:"libro", level:"intro", top:true, year:2024, free:true,
  title:"Dive into Deep Learning (D2L)", by:"Zhang, Lipton, Li, Smola",
  url:"https://d2l.ai/",
  note:"Libro interactivo: cada concepto viene con código ejecutable en PyTorch, JAX y TensorFlow. Usado en 500+ universidades. Hay traducción al español parcial." },

{ sec:"deep-learning", type:"libro", level:"medio", year:2016, free:true,
  title:"Deep Learning (el 'libro de flores')", by:"Goodfellow, Bengio, Courville",
  url:"https://www.deeplearningbook.org/",
  note:"El clásico de 2016. Anterior a los transformers, pero la Parte I (matemática) y la Parte II (fundamentos) siguen siendo insuperables." },

{ sec:"deep-learning", type:"libro", level:"intro", year:2015, free:true,
  title:"Neural Networks and Deep Learning", by:"Michael Nielsen",
  url:"http://neuralnetworksanddeeplearning.com/",
  note:"Online y gratis. La mejor explicación escrita de por qué backprop funciona, con demos interactivas." },

{ sec:"deep-learning", type:"libro", level:"intro", year:2023, free:true,
  title:"The Little Book of Deep Learning", by:"François Fleuret",
  url:"https://fleuret.org/francois/lbdl.html",
  note:"~180 páginas formateadas para leer en el teléfono. Densidad de información altísima. Ideal como repaso." },

{ sec:"deep-learning", type:"libro", level:"medio", year:2024,
  title:"Deep Learning: Foundations and Concepts", by:"Christopher Bishop & Hugh Bishop",
  url:"https://www.bishopbook.com/",
  note:"El sucesor del legendario 'Pattern Recognition and Machine Learning'. Lectura online gratis. Rigor bayesiano + contenido moderno." },

{ sec:"deep-learning", type:"libro", level:"medio", year:2024, free:true,
  title:"Alice's Adventures in a Differentiable Wonderland", by:"Simone Scardapane",
  url:"https://www.sscardapane.it/alice-book/",
  note:"Deep learning contado como diseño de programas diferenciables. Enfoque fresco y muy bien escrito." },

{ sec:"deep-learning", type:"curso", level:"medio", year:2023, free:true,
  title:"UvA Deep Learning Tutorials", by:"Universidad de Ámsterdam",
  url:"https://uvadlc-notebooks.readthedocs.io/en/latest/",
  note:"Notebooks de altísima calidad en PyTorch y JAX: optimización, inicialización, transformers, GNNs, energy-based models, difusión." },

{ sec:"deep-learning", type:"curso", level:"medio", year:2021, free:true,
  title:"NYU Deep Learning (DS-GA 1008)", by:"Yann LeCun & Alfredo Canziani",
  url:"https://atcold.github.io/NYU-DLSP21/",
  note:"Perspectiva de LeCun: energy-based models, self-supervised learning, arquitecturas para percepción. Con transcripciones en varios idiomas." },

{ sec:"deep-learning", type:"curso", level:"avanzado", year:2024, free:true,
  title:"CMU 11-785: Introduction to Deep Learning", by:"Bhiksha Raj (CMU)",
  url:"https://deeplearning.cs.cmu.edu/",
  note:"Uno de los cursos más exigentes y completos, con homeworks reales de implementación desde cero." },

{ sec:"deep-learning", type:"paper", level:"avanzado", year:2015,
  title:"Deep Residual Learning for Image Recognition (ResNet)", by:"He, Zhang, Ren, Sun",
  url:"https://arxiv.org/abs/1512.03385",
  note:"Las conexiones residuales son la razón por la que hoy podemos entrenar redes de 100+ capas. Están dentro de todo transformer." },

{ sec:"deep-learning", type:"paper", level:"medio", year:2014,
  title:"Adam: A Method for Stochastic Optimization", by:"Kingma & Ba",
  url:"https://arxiv.org/abs/1412.6980",
  note:"El optimizador por defecto durante una década. Entender momento y varianza adaptativa te explica el 90% de los problemas de entrenamiento." },

{ sec:"deep-learning", type:"paper", level:"medio", year:2015,
  title:"Batch Normalization", by:"Ioffe & Szegedy",
  url:"https://arxiv.org/abs/1502.03167",
  note:"Y su primo LayerNorm (arXiv:1607.06450), que es el que realmente usan los transformers." },

{ sec:"deep-learning", type:"paper", level:"avanzado", year:2019,
  title:"Deep Double Descent", by:"Nakkiran et al. (OpenAI)",
  url:"https://arxiv.org/abs/1912.02292",
  note:"Rompe la intuición clásica de bias-variance: más parámetros pueden mejorar la generalización. Base conceptual del escalado moderno." },

{ sec:"deep-learning", type:"paper", level:"avanzado", year:2018,
  title:"The Lottery Ticket Hypothesis", by:"Frankle & Carbin",
  url:"https://arxiv.org/abs/1803.03635",
  note:"Dentro de una red grande hay subredes chicas que entrenan igual de bien. Fundamento conceptual del pruning." },

{ sec:"deep-learning", type:"paper", level:"avanzado", year:2022,
  title:"Grokking: Generalization Beyond Overfitting", by:"Power et al. (OpenAI)",
  url:"https://arxiv.org/abs/2201.02177",
  note:"Modelos que memorizan y mucho después 'entienden'. Uno de los fenómenos más raros y estudiados del deep learning." },

{ sec:"deep-learning", type:"blog", level:"medio", year:2015, top:true,
  title:"Understanding LSTM Networks", by:"Christopher Olah",
  url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
  note:"El post que enseñó LSTMs a una generación entera. Aún hoy es la referencia para entender memoria en secuencias." },

{ sec:"deep-learning", type:"blog", level:"medio", year:2015,
  title:"The Unreasonable Effectiveness of Recurrent Neural Networks", by:"Andrej Karpathy",
  url:"https://karpathy.github.io/2015/05/21/rnn-effectiveness/",
  note:"El post que anticipó todo lo que vino después. Contexto histórico esencial: qué se podía hacer antes de los transformers." },

{ sec:"deep-learning", type:"blog", level:"medio", year:2020, free:true,
  title:"Distill.pub", by:"varios",
  url:"https://distill.pub/",
  note:"Publicación (en pausa) de artículos con visualizaciones interactivas. 'Feature Visualization', 'Building Blocks of Interpretability' y 'Momentum' son obligatorios." }

);
