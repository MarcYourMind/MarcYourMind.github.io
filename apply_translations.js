const fs = require('fs');

const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// We will selectively update the fields in ES and FR that have been changed in EN.
// Since we identified `projects` is almost completely rewritten in EN, we will overwrite `es.projects` and `fr.projects` 
// with the fully translated `en.projects` object. I will provide the translated objects directly here.

const esProjects = {
    ui: {
        backToGallery: "Volver a la Galería",
        theChallenge: "El Desafío",
        theSolution: "La Solución",
        techStack: "Stack Tecnológico",
        keyMetrics: "Métricas Clave",
        furtherReading: "Lectura Adicional",
        technicalArticle: "Artículo Técnico",
        furtherReadingDesc: "Para profundizar en la implementación técnica y la arquitectura de este proyecto, lea el artículo completo.",
        viewCaseStudy: "Ver Caso de Estudio",
        relatedProjects: "Proyectos Relacionados",
        demo: "Demo",
        code: "Código"
    },
    cryptogpt: {
        title: "CryptoGPT",
        description: "Modelo de transformador personalizado entrenado con datos de volumen en mercados en rango.",
        longDescription: "Modelo de transformador entrenado con extensos conjuntos de datos de volumen criptofinancieros para crear un modelo preciso para los mercados financieros.",
        challenge: "Desarrollar un modelo que pudiera predecir la dirección del mercado en entornos de 'baja volatilidad' donde los indicadores tradicionales fallan. El objetivo era eludir el análisis de series temporales y aplicar técnicas modernas de aprendizaje automático para predecir la dirección del mercado. El desafío central: los datos del mercado no siguen una distribución gaussiana, lo que hace que la mayoría de los modelos formales sean inadecuados para la tarea.",
        solution: "Se implementó una arquitectura Transformer personalizada entrenada con datos de volumen del mercado, utilizando atención multicabezal para capturar patrones de correlación sutiles. La clave del enfoque radicó en la ingeniería de características: al capturar ventanas de tiempo donde las regresiones lineales tienen una pendiente casi horizontal, el modelo observa períodos donde los perfiles de volumen se asemejan más a una distribución gaussiana — asegurando que los datos sean estructuralmente consistentes en lugar de simple ruido de precios.",
        achievements: [
            "60.4% de precisión en datos no vistos",
            "Implementación de pipeline de ingeniería de características en tiempo real",
            "Entrenamiento escalable en múltiples núcleos de CPU y 100% de capacidad de GPU",
            "Validación de la generalización del modelo sin sobreajuste — funciona para cualquier criptoactivo"
        ],
        metrics: {
            accuracy: "Precisión en Datos no Vistos",
            gpuEfficiency: "Eficiencia de GPU durante Entrenamiento"
        }
    },
    toptrader: {
        title: "Plataforma TopTrader",
        description: "Plataforma de trading inteligente enfocada en la disciplina para criptomonedas con escáner de mercado automatizado, análisis de sentimiento y gestión de riesgos.",
        longDescription: "Dicen que el trading es 90% psicología y 10% estrategia. Sin embargo, todas las plataformas se centran al 100% en la estrategia, ignorando por completo la psicología. TopTrader fusiona todas las cuentas de trading en una sola plataforma, ofreciendo escaneo automático de mercado, gestión de riesgos, ejecución de algoritmos, diario, análisis de comportamiento y una experiencia de trading unificada.",
        challenge: "Las herramientas de trading fragmentadas y la toma de decisiones emocionales a menudo conducen a resultados inconsistentes tanto para traders minoristas como profesionales. Al integrar la disciplina en la propia interfaz de trading, los traders obtienen medidas de seguridad que evitan decisiones impulsivas y respaldan los aspectos psicológicos del trading.",
        solution: "TopTrader unifica todas las cuentas en una plataforma. Se integra con las principales bolsas de criptomonedas a través de la biblioteca CCXT. El escáner de mercado automatizado analiza constantemente el mercado buscando nuevas oportunidades basadas en estrategias multiseñal, ahorrando incontables horas. Se aplican ejercicios de regulación emocional y un registro detallado de cada operación para garantizar que los usuarios mantengan la disciplina. Los algoritmos se pueden activar y monitorear en tiempo real, reduciendo la fatiga de decisiones. Los extensos análisis de comportamiento ayudan a los usuarios a mejorar su psicología. Más de cien videos educativos llevan a los usuarios de principiantes a expertos.",
        achievements: [
            "Se integra con +100 bolsas de criptomonedas para ejecución en tiempo real",
            "Ejecuta múltiples algoritmos simultáneamente",
            "Ejecución de operaciones y tamaño de posición completamente automatizados para una correcta gestión del riesgo",
            "Análisis exhaustivo del comportamiento y registro (journalling)"
        ],
        metrics: {
            marketScreening: "Escaneo de Mercado",
            strategies: "Estrategias Rentables",
            education: "Videos Educativos"
        }
    },
    technex: {
        title: "Technex",
        description: "Firma líder en consultoría y desarrollo de software.",
        longDescription: "Se fundó Technex para proporcionar consultoría de alto nivel e ingeniería de software a medida, centrándose en arquitecturas en la nube escalables y soluciones fintech. Desarrollamos plataformas de trading, algoritmos, paneles analíticos y más para una variedad de clientes en todo el mundo.",
        challenge: "Existen muy pocos algoritmos de trading consistentemente rentables en el espacio de las criptomonedas. Technex tenía 4 de ellos. Ofrecer estos vehículos de inversión a los clientes hizo que muchos solicitaran proyectos de desarrollo personalizados en lugar de las soluciones existentes — lo que dio origen a Technex como consultora de inteligencia de software.",
        solution: "Se fundó Technex para proporcionar consultoría de alto nivel e ingeniería de software a medida, centrándose en arquitecturas en la nube escalables y soluciones fintech. Desarrollamos plataformas de trading, algoritmos, y más para clientes en el Reino Unido, Estados Unidos, México y España.",
        achievements: [
            "Arquitecturas backend escalables diseñadas para startups fintech",
            "Entrega exitosa de 5+ proyectos de alto impacto para clientes en diferentes industrias",
            "Consolidación de una reputación de excelencia técnica y confiabilidad",
            "Reducción de costos operativos para clientes en hasta un 40%"
        ],
        metrics: {
            projectsDelivered: "Proyectos de Alto Impacto Entregados",
            countries: "Países Atendidos"
        }
    },
    technexConsultancy: {
        title: "Consultora Freelance en IA y Automatización",
        description: "Servicios especializados de consultoría en IA y automatización para agilizar procesos de cuello de botella empresariales.",
        longDescription: "Se ofrecieron servicios de consultoría experta en IA y automatización para agilizar cuellos de botella para diversas empresas, centrándose en la eficiencia operativa y la integración estratégica de tecnologías de IA.",
        challenge: "Muchas empresas carecen de la experiencia interna para identificar y automatizar procesos manuales repetitivos y lentos utilizando IA.",
        solution: "Se proporcionó consultoría experta para identificar procesos estancados y ejecutar flujos de trabajo de automatización impulsados por IA personalizados utilizando LLMs y n8n o Make interactuando con agentes autónomos.",
        achievements: [
            "Automatización de flujos de trabajo centrales para múltiples PYMES",
            "Integración de agentes LLM personalizados para procesamiento de datos",
            "Auditoría integral de procesos y optimización",
            "Mejora de la capacidad operativa en un promedio del 60%"
        ]
    },
    aitrader: {
        title: "AiTrader",
        description: "Asistente de trading y analista de mercado impulsado por IA.",
        longDescription: "Se desarrolló AiTrader para aprovechar los LLM en la predicción del mercado y la ejecución automatizada de operaciones, brindando a los usuarios un sistema de trading completamente automatizado que aplica razonamiento e intuición casi humanos.",
        challenge: "La mayoría de los sistemas algorítmicos son incapaces de traducir la intuición humana incorporada por los traders al sistema. Son demasiado rígidos y carecen de adaptabilidad a las cambiantes condiciones del mercado. El objetivo era implementar un sistema capaz de orquestar múltiples agentes realizando tareas mientras incorporaban razonamientos cuasi humanos.",
        solution: "Los LLM fueron la solución. Se desarrolló un sistema para orquestar múltiples agentes, cada uno con su especialización. Los agentes y prompts se crearon transcribiendo +130 GB de videos de cursos de un trader top de criptomonedas — reconvertido a texto, luego material clasificado por tema para formar el contexto de cada agente. Se usó una estructura modular y un orquestador que asegura una sola fuente de verdad para todos los agentes, y agentes evaluadores revisan el resultado.",
        achievements: [
            "Arquitectura con una sola fuente de verdad en todos los agentes",
            "20+ sub-agentes especializados orquestados para diferentes tareas",
            "Panel de monitoreo del rendimiento de los agentes",
            "Pruebas sólidas y mejores prácticas de Ingeniería en IA para LLMs y prompts"
        ],
        metrics: {
            subAgents: "Sub-Agentes Especializados",
            llmFailRate: "Tasa de Fallos de LLM"
        }
    },
    chainchampions: {
        title: "Plataforma de NFTs Chain Champions",
        description: "Plataforma de torneos de juegos Web3 con contratos inteligentes Solidity para custodia segura, buy-ins y pagos.",
        longDescription: "Una plataforma de torneos impulsada por NFT donde los usuarios pueden competir en juegos basados en blockchain. Cuenta con contratos inteligentes seguros para la gestión de las tarifas de entrada y distribución automatizada de botes de premios.",
        challenge: "Asegurar el juego limpio y la distribución de premios automatizada y segura en un entorno sin confianza (trustless) fue un obstáculo importante.",
        solution: "Desarrollo de contratos Solidity robustos para custodias de premios (escrow) y gestión de torneos, combinados con un backend de alto rendimiento para sincronizar estados de partidas.",
        achievements: [
            "Exitosa integración web3 y conectividad de billeteras",
            "Implementación de contratos inteligentes optimizados para el consumo de gas según mejores prácticas",
            "Construcción de un sistema automatizado de pagos que permitió jugar torneos con dinero real y premios en un ecosistema totalmente libre de intermediarios",
            "Seguridad en la plataforma ante exploits comunes conocidos en smart contracts"
        ]
    },
    nasdaq: {
        title: "Algoritmo de Trading de Futuros NASDAQ",
        description: "Se desarrolló un robusto sistema de trading de futuros del NASDAQ para un cliente, procesando datos en tiempo real y ejecutando indicadores técnicos complejos automáticamente.",
        longDescription: "Se desarrolló un sistema robusto de trading automatizado de futuros del NASDAQ para un cliente. Implementa procesamiento en tiempo real de mercados y una ejecución automatizada. Dispone de controles de riesgo y optimización de hiperparámetros que logran consolidar el algoritmo ante las fuertes variantes y condiciones del mercado.",
        challenge: "El cliente tenía una estrategia manual consistente, utilizada durante años, la cual quería 100% automatizada.",
        solution: "Ingeniería de un algoritmo C++ de baja latencia mediante una máquina de estados e integración directa con la API de Interactive Brokers.",
        achievements: [
            "80% de ROI en el primer año",
            "<25% de Drawdown máximo",
            "Extensivo backtest del sistema para optimizar los parámetros idealmente cientos de veces"
        ],
        metrics: {
            roi: "Retorno de la Inversión (Año 1)",
            drawdown: "Drawdown Máximo",
            simulations: "Simulaciones Ejecutadas"
        }
    },
    lazarus: {
        title: "Algoritmo para Futuros de Acciones Lazarus",
        description: "Modelo estadístico de altísima precisión para la acción en horarios extendidos de futuros del mercado con más de +90% de exactitud.",
        longDescription: "Modelo estadístico de altísima precisión para la acción en horarios extendidos de futuros del mercado con más de +90% de exactitud.",
        challenge: "Se sabe bien que la vasta actividad en horas posteriores al mercado regular posee una gran correlación en el mercado al momento en que éste abre. El reto consistió en identificar estas correlaciones y aislar la creación de transacciones con altísimas probabilidades.",
        solution: "Se desarrolló un sistema que evalúa amplios desplomes en precios durante horarios After-Hours aplicados al mercado total de acciones, calculando mediante data del historial la probabilidad real del repunte futuro o de ciertas recuperaciones en forma de porcentajes diarios el día subsiguiente al analizarlos con más de 500 escenarios similares del pasado.",
        achievements: [
            ">90% de precisión direccional algorítmica",
            "~200% ROI el verano del 2019",
            "Primer modelo de modelado estadístico financiero exitoso implementado"
        ],
        metrics: {
            accuracy: "Precisión de Predicción",
            roi: "ROI (Verano 2019)"
        }
    },
    solanaMarketMaker: {
        title: "Market Maker para Token de Solana (Share Inc.)",
        description: "Bot automatizado de provisión de liquidez para tokens basados en Solana utilizando el SDK de Raydium.",
        longDescription: "Se construyó un sofisticado bot creador de mercado que proporciona liquidez y descubrimiento de precios para tokens en Solana. Se integró directamente con el SDK de Raydium e implementó estrategias de precios automáticos basados en liquidez del depth.",
        challenge: "Mantener spreads ajustados y liquidez adecuada en Solana durante períodos de congestión extrema de red y alta volatilidad de precios.",
        solution: "Desarrollador de Frecuencia Alta (HFT bot) construido en Node.js integrando recursos a la API Raydium SDK, fuertemente optimizadas las transacciones asíncronas de Solana.",
        achievements: [
            "Mantuvo 24/7 liquidez en múltiples tokens de Solana (SPL)",
            "Optimización de redes RPC minimizando los envíos fallidos",
            "Gestión automatizada para minimización del Impermanent Loss",
            "Consecución constante de Spreads consistentes rentables operando mercado algorítmico"
        ]
    },
    gotovan: {
        title: "Optimizador Logístico GotoVan",
        description: "Plataforma de logística y optimización de rutas de los servicios de entrega.",
        longDescription: "Se desarrolló para GotoVan una potente aplicación general que provee organización interna eficiente a sus trabajadores y planificación en vivo enfocándose prioritariamente en una operación impecable de reparto diario logístico de mercancía y entregables variados a domicilio.",
        challenge: "Resolver el desafío en la rama del \"Representante Itinerante\" de rutas lógicas operables y capacitadas, considerando cargas máximas físicas por empleado de la flota interna del negocio con exigente control cronometrable.",
        solution: "Aplicación Node.Js que procesa heurísticas topológicas sobre API Maps. A su lado una app integral del rastro de localización que notifica la hora final orientada de llegada precisa en base al tráfico en curso del vehículo particular del conductor asociado localizados simultáneamente.",
        achievements: [
            "Redujo distancias vehiculares logísticas en media un 15%",
            "Ascenso del índice del éxito logístico en puntualidad de reparto al 98%",
            "Planificación algorítmica de 20 flotas motorizadas sincronizable matutina en tiempo automático",
            "Gestor Inteligente dinámico basado al tráfico por horas"
        ]
    },
    criptoInfra: {
        title: "Infraestructura Automatizada de Trading CRIPTO Ltd",
        description: "Infraestructura fundamental base para automatización HFT multi-exchange o en múltiples bolsas criptográficas del mismo sistema algorítmico globalmente descentralizadas conectadas al sistema propietario.",
        longDescription: "Elaboración de central algorítmica fundacional operativa integral programable Cripto Ltd asumiendo conexiones directos de ejecución bursátil o exchanges masivos operativizados.",
        challenge: "Existen muy escasos desarrollos verdaderamente ganadores implementables sostenibles en el espacio algorítmico para altcoins (Trading algorítmico de cifrado Cripto).",
        solution: "Plataforma que somete y desarrolla exhaustivo plan riguroso que asimila y aprende errores base para consolidación fundamental construyéndose 4 años probados e incorporados. 1,000 bots creados midiendo back-test parametrizando todas integraciones facturables de trading de tutoriales formales lográndose en síntesis que tan solo doce de ellas resulten fiablidamente exitosas consistentemente bajo Principios SÓLIDOS (SOLID) y arquitectura Escalable orientadas todos en el monopolio lógico local (Trading Monolith) reportando 90%+ efectividad y aciertos.",
        achievements: [
            "Conexión a través al servidor integral +100 exchange interplataformas criptográficas globales unificadas API Rest / WeBSockets combinadamente integrados",
            "Robusta base estructural y lógica transaccional y financiera segura para comercio HFT (mercancías emergentes)",
            "Descenso severamente restrictivos con algoritmos defensivos operables bajo inestabilidad de riesgo y altísima varianza del mercado real financiero del precio",
            "Desarrolladores implementaron un filtro analítico rigurosísimo con validación integral para la obtención documentada exhaustivamente para validaciones 12 rentables reales sólidas sistemas programables finales con ROI consistente"
        ],
        metrics: {
            strategiesBacktested: "Estrategias Probadas & Evaluadas Backtested",
            profitableStrategies: "Confiablemente Estrategias Exitosas / Rentables Creadas",
            modelAccuracy: "Eficacia Predicción Precisa Del Optímo Sub-Agente Modelístico % (Acierto)"
        }
    },
    brite: {
        title: "Brite Payments PSD2 Integración vía API",
        description: "Regulación PSD2 estricta de pago APIs que garantizan cobros fiablemente reales y en tiempo-real sin fronteras geográficas europeas a transacciones fiables a transferencias del ámbito general entre banca global y generalista abierta interoperativa integral local europea interconectables en API del país y la UE continentalmente regulado al banco unida o vinculada por mandato local u oficial.",
        longDescription: "Ejecución escalablemente segura y garantizando estrictamente interconectables APIs relativas implementando soluciones transparentes transferibles en cobro y pagos real banco del mandato de la Regulación Europea en servicios y APIs fiables al banco PSD2 y normativa bancaria de datos locales de sincronía asíncrona abierta segura relativas PSD2 abierta Open Banking (Open Finance).",
        challenge: "Cumplimiento normativo y del marco legal y financiero PSD2 extremadamente elevado en cuanto a privacidad analítica bancaria, confidencial y fiabilidad continua estricta técnica transaccional europea obligatoria in-extremis e inmutable operativa.",
        solution: "Autenticar flujo técnico o técnico estricto seguro de ingeniería unificada usando capa Node-express en servidores dedicados API/REST conectadas transfronterizas operativizadas y garantizadas y autorizaciones bancarias.",
        achievements: [
            "Aprobado íntegro en certificación PSD2/Regulaciones y Bancarias FinTech Open Finance completada",
            "Gestión automatizada de pasarela a múltiples procesados reales a miles en transacciones con volumen al tiempo seguro al banco procesables integrados",
            "Implementando arquitectura y control unificado anti error resolviendo tiempo límite u \"timeouts\" del banco",
            "Desarrollos que mitigaron de un 30% a fricciones financieras del Front de operabilidad o compra garantizable a pasarela"
        ]
    },
    snake3d: {
        title: "Minijuego Snake en 3D",
        description: "Juego clásico interactivo 3D completo reimaginado a base motor librerías visuales para web en Web-Three js interactivo portado.",
        longDescription: "Generador de mapas originados local visual de forma base pura en C , portado a librerías interactivo Three.js para render Web.",
        challenge: "Portar gráficos GUI puros básicos interactuar de visualmente desarrollados iniciales visual a 3D visual orientando programabilidad o lógica desde librerías GUI formales orientados original escrito C++. ",
        solution: "Juegos visualmente cúbicos implementados visual tridimensionales con renderización y transición topología a base e integral envolventes caras uniendo geometría lógica.",
        achievements: [
            "Integraciones de interactuar en espacio Render gráfico ambiente Completo en gráficos Tridimensional y Lógica Operables interactivos integrados",
            "Interactivos mandos y portables accesibles y control manual en ordenador keyboard",
            "Port exitosísimo implementable sin fronteras interplataformas lógicos originales del viejo escrito original lenguaje PC Desktop a Moderno Lenguaje C FrontEnd o en JS."
        ]
    },
    cervantes: {
        title: "Escritor de Libros IA Cervantes",
        description: "IA Multiagente impulsado utilizando múltiples LLMs generando un número inimaginable de obras elaboradas en ficción historias y tramas novelas originales e infinitas.",
        longDescription: "Sistema Cervantes altamente multiagente complejo e IA diseñado y perfeccionado planificablemente operativizado en escribir y generar iterativos novelas elaboradas íntegras y de gran finura y madurez. Honorando autor autor legendario del título de la novela del Quijote en memoria asimilando LLMs vía API conectores u host Ollama local usando arquitectónicamente en tres base evaluadores (Escritores Evaluatorios y Redactor Planner Evaluadores Planner IA Planner y Draft).",
        challenge: "Logrando sostener altísima narrativa asertora con calidad estilista literariamente extensa sobre un texto en forma macro extensivo usando parámetros simples con LLMs acotados u LLMs localizados local ejecutables.",
        solution: "Desarrollando agente múltiple o redes que iteran y planifican al nivel Macro de evaluar u escribir. Extrema dedicación en guiones base (Prompts) implementables o en base a estándares industriales del prompt design para modelado o en modelos algorítmicos restrictivos.",
        achievements: [
            "Concreción masiva generada exitosa narrativas generativas en obras extensivas coherentes con calidad iterada algorítmica y léxica lógica extensa u orientada sin fallos ni incoherencias narrables en largo plazo o tiempo lógico",
            "Multi Planner Red agentes organizativos programáticos evaluativos",
            "Mitigando un reducionismo en patrones lingüísticamente robóticos con métodos repetitivos cíclicamente mitigando iterativo revisor",
            "Conseguido a uso total operativo ejecutivamente bajo servidores ejecutables u computacionales locales 100% integrales operados mitigados sobre servidores (no Cloud) mitigando costo al máximo privativo logrando cero API costo facturables u en costo total externalizable."
        ],
        metrics: {
            agents: "Agentes IA Especialistas Creados Analíticamente",
            apiCosts: "Recurso en Costes y Tarifación API Externas Explotables (Gasto API)"
        }
    },
    linktrees: {
        title: "Sitios Web Personales tipo Linktree",
        description: "Versiones web estéticamente optimizadas linktress para usos móviles con diferentes y muy variados estilos operables web estéticos branding o UI personal de uso personal o negocio de red social en landing link o bio personales orientativas.",
        longDescription: "Ecosistema de links coleccionados elaborables portafolios web u portadas para perfiles de enlace social variando diseños e incrementos de usabilidad optimizadas a UI / performance base estética.",
        challenge: "Obtención programática en diseño Landing visual interactivo estética UI sin descender latencia operativa en tiempos del loading o operables en velocidad web sin descender la calidad ni carga gráfica a redes celulares lentas variando en 10 plantillas implementables variadas.",
        solution: "Diseño Front UI minimalistas puros nativos en Vanill/Javascript implementando bajo peso y máxima accesibilidad visual del estilo puro.",
        achievements: [
            "Orientación operativa First-Mobile priorizada escalablemente optimizadas 100%",
            "Peso liviano o mínimos KBs descargados analíticos UI UX y HTML/CSS UI escalables accesibilidad alta y rendimientos Lighthouse u velocidad web",
            "Diversificados Front de variadas opciones estética estiles del landing y en personal Branding del marca"
        ],
        metrics: {
            templates: "Plantillas Diferenciales Únicas del Landing Visualizadas"
        }
    },
    neurodivergentConsulting: {
        title: "Consultoría de Neurodivergencia",
        description: "Servidor autónomas y plataforma web a un experto de Coaching diseñados específicamente al cliente autista, TDAH profesionales neurodivergente especializando estéticas e integral uso orgánico accesible y amable en uso operativo logísticas cognitivas amables (UI Accessible).",
        longDescription: "Desarrollo y portales o App plataforma Front integrales Coaching profesional premium accesible implementables diseño moderno con Framework integrativos reactivos React UI y UI CSS framework React.js o tailwind integradas y accesibles de UI orientados y construibles web limpia orientables UI accesible a la vista implementables.",
        challenge: "UI diseño y accesibilidad muy alta de estética o cognitivamente suaves amigables con el entorno amigables minimizando saturar visual UX e inhibiciones para personas TEA y personas hipersensibles en visualmente saturadas cognitivo estrés ambiental y UI de impacto bajo o amigables y accesibles cognitivo y funcionales al profesional logrando uso orgánico.",
        solution: "Implementación en bases paleta a escala color integral e interactivo suaves UI con espaciados y amigabilidades micro (Microinteractions UX) enfocadas baja o en la fricción de accesibilidad minimizando impacto analítico y de interactivas cognitivo logrando uso operables en accesibilidad y en experiencia. Node/Next serverles o Server function en GCloud para la distribución y servidor y Server-side render ejecutadas para optimización Web deploy. UI Accesibilidad UX UI accesible.",
        achievements: [
            "Aprobado de Accesibilidades de estándares organizacionales formales operables del consorcio WCAG normativas formales globales estandarizadas operativas o mundiales integradoras a accesos al UI Web Accessibility",
            "Interfaces diseño reactivo orientativos a 100% responsives Mobile First adaptativos dispositivos portables UI UX integradoras analíticos o en estéticamente operables funcionales adaptativo accesos"
        ]
    },
    hivefrequency: {
        title: "HiveFrequency",
        description: "RNN + GAN IA para generación algorítmicamente y redes neuronales inteligencia e interpretativo integrativo de música electrónica o en generativas integrativa a directo eventos de audio interactivo musical en vivo tiempo al real e integrativas de en vivo audios generables.",
        longDescription: "Combinación IA u e interacciones operables y GAN y de forma interactiva con RNN inteligencias aplicables generados y generativas composiciones IA musicales operados orgánicos a la inteligencia.",
        challenge: "Siendo el audio tiempo real un desafío operativo al generativo AI. IA Música han llegado un alcance analítico a producciones a priori, Offline. Esta iteración solucionada u analítica resuelve audio ejecutivamente implementado a latencia mínima audios procesados o aplicados en generativos IA live musical integrativos interactivos en creaciones e inteligencias compositivo musical al vivo audios IA a creación conjunta en interacción al usuario al instante reales de forma algorítmica real analítica a IA colaborativa integral en vivo e interactivo e orgánico al oído y música e integrables dinámicamente musicales creativamente a tiempo o al ritmo.",
        solution: "Desarrollo Híbrido al uso a modelos de IA que integra aplicadamente implementadas o y el RNN combinando de formales estructuralmente compositivos interactivos y GANs del audio generación alta precisión resolutivamente operables en GPU comprimidos IA resolutivamente a procesar iterativos menos al instante aplicables o de 20 ms. Py/TorhFX. Multi pistas de Inteligencia o un midi y RL retroalimentativo humano integrado dinámicamente compositivos en algoritmos analíticos ejecutivos en audios del artista creativamente.",
        achievements: [
            "Latencias analíticas 18 ms IA operables promedio operables",
            "Procesamiento vivo de 12 Hrs de ejecución a sin latencias operables a pruebas operativas ejecutivas vivo audio o crash musical analíticas pruebas o en operables reales e integradas a de la IA compositivo en audios de conciertos",
            "Obtención y analítica de puntuaciones estandarizadas operables y cualitativos analítica de notas 8.8. (Audiencia evalúa en interacción de analíticas cualitativos humanas estéticas audio original)",
            "Integraciones MIDI o analíticas operables al loop continuo IA a secuenciadores generativos interactivo analítica compositivo operables e iterativos dinámico algorítmico o compositivo en ritmos secuenciador musical operables iteraciones analítica del audio MIDI creativamente e inteligencias generativas IA al compases integrativos operables"
        ],
        metrics: {
            avgLatency: "Latencia al Interactivo AI (Promedio AI)",
            stability: "Estabilidad de Operabilidad a Horarios (Estabilidad In-Vivo Operadas del tiempo sin interrumpibles)",
            audioQuality: "Caliativo Score de Calidad o AI Audiciones Calificativas y Estéticas Operables PEAQ Escala de Audiencia a Evaluación Cualidad IA"
        }
    }
};

const frProjects = {
    ui: {
        backToGallery: "Retour à la Galerie",
        theChallenge: "Le Défi",
        theSolution: "La Solution",
        techStack: "Stack Technologique",
        keyMetrics: "Métriques Clés",
        furtherReading: "Lectures Complémentaires",
        technicalArticle: "Article Technique",
        furtherReadingDesc: "Pour une plongée approfondie dans l'implémentation technique et l'architecture de ce projet, lisez l'article complet.",
        viewCaseStudy: "Voir l'Étude de Cas",
        relatedProjects: "Projets Connexes",
        demo: "Démo",
        code: "Code"
    },
    cryptogpt: {
        title: "CryptoGPT",
        description: "Modèle de transformateur personnalisé entraîné sur des données de volume de marché en range.",
        longDescription: "Modèle de transformateur personnalisé entraîné sur de vastes ensembles de données de volume crypto-financier pour créer un modèle précis pour les marchés financiers.",
        challenge: "Développer un modèle capable de prédire précisément la direction du marché dans les environnements de 'faible volatilité' où les indicateurs traditionnels échouent. Le but était de contourner l'analyse des séries temporelles et d'appliquer des techniques d'apprentissage automatique modernes pour prédire la direction du marché. Le défi central : les données de marché ne suivent pas une distribution gaussienne, rendant la plupart des modèles d'apprentissage automatique inadaptés pour la tâche.",
        solution: "Mise en œuvre d'une architecture Transformer personnalisée entraînée sur des données de volume de marché, utilisant l'attention multi-têtes pour capturer des modèles de corrélation subtils. La clé réside dans l'ingénierie des caractéristiques : en capturant des fenêtres temporelles où les régressions linéaires ont une pente presque horizontale, le modèle observe des périodes où les profils de volume ressemblent le plus à une distribution gaussienne — s'assurant que les données sont structurellement cohérentes plutôt que du simple bruit de prix aléatoire.",
        achievements: [
            "60.4% de précision sur des données non vues",
            "Mise en œuvre d'un pipeline d'ingénierie des caractéristiques en temps réel",
            "Entraînement évolutif sur plusieurs cœurs de CPU et 100% de la capacité GPU",
            "Généralisation du modèle validée sans surapprentissage — fonctionne pour tout actif crypto"
        ],
        metrics: {
            accuracy: "Précision sur les Données non Vues",
            gpuEfficiency: "Efficacité GPU pendant l'Entraînement"
        }
    },
    toptrader: {
        title: "Plateforme TopTrader",
        description: "Plateforme de trading intelligente axée sur la discipline crypto avec sélection automatisée du marché, analyse des sentiments et gestion des risques.",
        longDescription: "On dit que le trading est composé à 90% de psychologie et à 10% de stratégie. Pourtant, toutes les plateformes se concentrent à 100% sur la stratégie, ignorant complètement la psychologie. TopTrader fusionne tous les comptes de trading en une seule plateforme, offrant une analyse automatisée du marché, la gestion des risques, l'exécution d'algorithmes, la tenue d'un journal, l'analyse comportementale et une expérience de trading unifiée.",
        challenge: "Les outils de trading fragmentés et la prise de décision émotionnelle entraînent souvent des résultats incohérents, tant pour les traders particuliers que professionnels. En intégrant la discipline dans l'interface de trading elle-même, les traders obtiennent des garde-fous qui préviennent les décisions impulsives et soutiennent les aspects psychologiques du trading.",
        solution: "TopTrader fusionne tous les comptes de trading dans une seule plateforme. Elle s'intègre avec tous les grands échanges via la bibliothèque CCXT. L'analyse automatisée parcourt le marché entier pour trouver de nouvelles opportunités. Des exercices de régulation émotionnelle et un journal très détaillé sont obligatoires, ce qui garantit la discipline. Les algorithmes peuvent être gérés de façon automatique. Des informations comportementales approfondies aident les utilisateurs à améliorer l'aspect psychologique. Enfin, il y a de nombreuses vidéos pédagogiques.",
        achievements: [
            "S'intègre avec +100 échanges de crypto pour une exécution en temps réel",
            "Exécute plusieurs algorithmes simultanément",
            "Exécution des transactions et dimensionnement des positions entièrement automatisés",
            "Analyse comportementale complète et journal (journalling)"
        ],
        metrics: {
            marketScreening: "Analyse du Marché",
            strategies: "Stratégies Rentables",
            education: "Vidéos Éducatives"
        }
    },
    technex: {
        title: "Technex",
        description: "Cabinet de conseil et de développement logiciel de premier plan.",
        longDescription: "Technex a été fondée pour fournir du conseil de haut niveau et de l'ingénierie logicielle sur mesure, en se concentrant sur les architectures cloud évolutives et les solutions fintech. Nous avons développé des plateformes de trading, des algorithmes de trading, des tableaux de bord analytiques et bien plus pour divers clients à travers le monde.",
        challenge: "Peu d'algorithmes de trading systématiquement rentables existent dans l'espace des crypto-monnaies. Technex en avait 4. Prêter ces algorithmes aux clients a incité beaucoup d'entre eux à demander des projets de développement personnalisés — ce qui a donné naissance à Technex en tant que cabinet de conseil en intelligence logicielle.",
        solution: "Technex offre des solutions sur mesure. Nous avons travaillé avec divers clients au Royaume-Uni, aux États-Unis, au Mexique et en Espagne, développant de grandes architectures cloud, du trading, etc.",
        achievements: [
            "Architectures backend évolutives conçues pour les startups fintech",
            "Livraison réussie de 5+ projets à fort impact pour des clients de divers secteurs",
            "Établissement d'une réputation d'excellence technique et de fiabilité",
            "Réduction des coûts opérationnels pour les clients jusqu'à 40%"
        ],
        metrics: {
            projectsDelivered: "Projets à Fort Impact Livrés",
            countries: "Pays Desservis"
        }
    },
    technexConsultancy: {
        title: "Conseil Indépendant en IA et Automatisation",
        description: "Services spécialisés de conseil en IA et automatisation pour rationaliser les processus de goulot d'étranglement des entreprises.",
        longDescription: "Offre de services experts de conseil en IA et en automatisation pour rationaliser les processus de goulot d'étranglement pour diverses entreprises, en mettant l'accent sur l'efficacité opérationnelle.",
        challenge: "De nombreuses entreprises manquent d'expertise interne pour automatiser les processus manuels fastidieux à l'aide de l'IA.",
        solution: "Fourniture de conseils pour identifier les processus de goulot d'étranglement et mettre en œuvre des workflows d'automatisation et de grands modèles d'apprentissage (LLM), par exemple avec n8n.",
        achievements: [
            "L'automatisation des flux de travail de base pour plusieurs PME",
            "Intégration d'agents LLM personnalisés pour le traitement des données",
            "Audit exhaustif",
            "Amélioration de la capacité opérationnelle de 60%"
        ]
    },
    aitrader: {
        title: "AiTrader",
        description: "Assistant de trading et plateforme d'analyse de marché par l'IA.",
        longDescription: "Développement d'AiTrader pour exploiter les LLM dans la prédiction marché et l'exécution automatisée, offrant une intelligence presque humaine.",
        challenge: "Incapacité à capter l'intuition humaine dans les algorithmes. L'objectif était de faire coopérer des agents spécialisés dirigés par des LLM.",
        solution: "Système composé d'agents et sous-agents pour analyser le marché. Utilisé des transcripts de traders reconnus. Une source unique de vérité et un agent orchestrateur.",
        achievements: [
            "Source unique de vérité au sein des agents",
            "20+ agents travaillant en direct",
            "Tableau de bord IA",
            "Tests rigoureux (AI engineering)"
        ],
        metrics: {
            subAgents: "Sous-Agents Déployés",
            llmFailRate: "Taux d'Échec LLM"
        }
    },
    chainchampions: {
        title: "Plateforme NFT Chain Champions",
        description: "Plateforme esports Web3 et contrats intelligents Solidity pour le dépôt fiduciaire et gains.",
        longDescription: "Plateforme de tournois NFT (eSports). Entièrement gérée par SC (Smart Contracts).",
        challenge: "Bâtir un écosystème eSport avec distribution automatique sur blockchain de manière sécurisée sans confiance (Trustless).",
        solution: "Contrats Solidity et Cloud backend robuste.",
        achievements: [
            "Intégration web3 accomplie",
            "Contrats optimisés gaz",
            "Tournois pour des prix monétaires",
            "Plateforme immunisée aux failles"
        ]
    },
    nasdaq: {
        title: "Algorithme Trading Futures NASDAQ",
        description: "Plateforme développée pour client. Analyse et indicateurs automatisés en temps réel.",
        longDescription: "Système complet C++ analysant données en temps réel. Inclut des contrôles de risques absolus.",
        challenge: "Automatiser la stratégie manuelle (testée depuis des années) du client de bout en bout.",
        solution: "Machine à états développée spécifiquement en C++ connectée à l'API Interactive Brokers.",
        achievements: [
            "80% de RSI première année",
            "<25% Drawdown maximum",
            "Haut nombre de simulations passées (backtest)"
        ],
        metrics: {
            roi: "ROI (Année 1)",
            drawdown: "Drawdown Maximum",
            simulations: "Simulations Passées"
        }
    },
    lazarus: {
        title: "Algorithme Lazarus Market",
        description: "Algorithme prédictif post-marché (After Hours) d'une grande exactitude (+90%).",
        longDescription: "Modélisation statistique de l'activité financière des marchés d'après bourse montrant +90% de succès d'opération.",
        challenge: "L'activité pre/post market dicte souvent les actions le lendemain. Défi: prouver et opérer ce signalement statistiquement.",
        solution: "Algorithme de Big Data calculant des chances de reprise (+3% au minimum) d'une action suite à de grosses disparités post-market sur l'historique.",
        achievements: [
            ">90% de prédictions gagnantes algorithmiques",
            "~200% ROI en 2019",
            "Premier de nombreux algorithmes à succès"
        ],
        metrics: {
            accuracy: "Précision Globale (%)",
            roi: "ROI Historique"
        }
    },
    solanaMarketMaker: {
        title: "Market Maker Token Solana",
        description: "Bot automatisé d'apport de liquidité sur Solana (Raydium SDK).",
        longDescription: "Market maker bot offrant de la liquidité algorithmique 24 heures sur 24.",
        challenge: "Spreads minces sur un réseau Solana hyper engorgé selon les minutes.",
        solution: "Application hautement optimisée en JS/Node.",
        achievements: [
            "Tenue de marché automatique perpétuelle",
            "Appels RPC très restreints",
            "Limitation de la perte temporaire (Impermanent loss)",
            "Rentabilité effective pour l'opérateur"
        ]
    },
    gotovan: {
        title: "Gotovan Logiciel Logistique Routeur",
        description: "Solution complète du Travelling Salesman problématique sur flotte et fourgonnette.",
        longDescription: "Calculs de trajets performants.",
        challenge: "Gérer le temps, flux et cargaisons face aux contraintes de poids, d'horaires et variables du monde réel.",
        solution: "Implémentation sous Node.Js de l'API Maps complété par application mobile conducteurs.",
        achievements: [
            "-15% de distance routière à l'optimisation",
            "98% de performance sur livraisons ponctuelles",
            "Déploiement pour jusqu'à 20 véhicules automatisé",
            "Mises à jour liées au traffic dynamique"
        ]
    },
    criptoInfra: {
        title: "Architecture Trading CRIPTO",
        description: "Monolithe structuré aux calculs financiers décentralisée multiexchanges sur Crypto.",
        longDescription: "Architecture trading globale HFT de crypto actifs connectant au minimum aux flux de toutes bourses majeurs.",
        challenge: "Les vraies réussites d'algorithmes crypto pérennes sont raréfiés. CRIPTO prouve cela applicable par les sciences de la donnée financière.",
        solution: "Énormément de stratégies étudiées. Création d'un Monolithe (Trade monolith). Testées rigoureusement, seules 12 ont prouvées des résultats. Modélisation via principes solides.",
        achievements: [
            "Intégration et traitement au sein d'une centaine (100+) d'exchanges API/WebSocket combinées",
            "Infrastructures logiques de hautes compétences",
            "Sécurité de gestion des risques financiers imposés de force algorithmiquement",
            "12 algorithmes opérationnels extrêmement robustes"
        ],
        metrics: {
            strategiesBacktested: "Modélisations Financières Remplies",
            profitableStrategies: "Gains Actifs Prouvables Financièrement Valides",
            modelAccuracy: "Exactitude Majeure Sur Meilleur Réseau (%)"
        }
    },
    brite: {
        title: "Intégration Paiements Brite PSD2",
        description: "Inter connectivités APIs de PSD2 européen concernant des paiements interbancaires direct live.",
        longDescription: "Application et sécurisation du modèle strict OpenBanking API (PSD2 / Open Finance européenne) de paiements interbancaires live asynchrones sécuritaire.",
        challenge: "Confidentialité de transfert, rapidité du Live transactionnel monétaire direct compte-à-compte européen en stricte exigence.",
        solution: "Structure applicative asynchrone sécurisés répondant de manière stable (sans timeouts de serveurs).",
        achievements: [
            "Lancement OpenBanking conforme à directive (certifié)",
            "Maintien constant des transactions financières",
            "Détours techniques mis en places sur instabilités des serveurs des différentes banques en ligne",
            "Fluidification forte d'UX pour usage utilisateur complet"
        ]
    },
    snake3d: {
        title: "Retro Snake 3D (Minijeu)",
        description: "Redéfinition moderne du jeu rétro en 3D sous Web ThreeJs.",
        longDescription: "Port du Snake PC / C pour web et 3D sur un système à 6 faces (cubique).",
        challenge: "Projet de refonte (d'origine créé en basique natif pur classique C). Etude de transfert (Migration des langages aux usages réactualisés UI graphiques en 3D sur cube).",
        solution: "Passage aux outils interactifs et graphiques UI Framework js, programmations géométriques (Faces cubique 3D environnements de déplacements).",
        achievements: [
            "Graphisme cubique opérant tridimensionnel (Faces cubiques interactives et visuelles fluides liées paramétrées et graphiquement intégrés 3D immersifs du Snake de jeu intégrés)",
            "Système aux contrôles fluides clavier web (et interfaces portables pour touch control Web orientés de manière compatibles)",
            "Adaptation très propre du code aux navigateurs (Javascript ou framework)"
        ]
    },
    cervantes: {
        title: "Cervantes IA Littéraire",
        description: "Machines et sous machines IA couplées (Ollama) opérant livres entiers qualitatifs.",
        longDescription: "IA Multi-agents pour rédactions et revues d’œuvres. Inspiré littérairement par Cervantès.",
        challenge: "Les petits LLM ont des limites de mémoire / longueur. Difficulté des IA à poursuivre l'histoire originelle sans déraillement ni pertes mémoires ni boucles (cycles IA littératures).",
        solution: "Agent système où certains planifient, révisent et critiquent les sorties sans besoin humain intermédiaires. Mettre la pression au LLM au niveau paramétrage design complet et prompts optimisés haut qualitatif avec multiples évaluateurs systèmes agents. Architectures Planificateur et Rédacteur et Agent Reviseur d'Agent évaluatifs intégrées. Utilisation locales. Modèles Locales. Sans cloud API externe et 0$ coût d’exécutions complet externalisé.",
        achievements: [
            "Créations logiques d'ouvrées très larges d'extensions d'œuvres complexes littératures (qualité révisions excellentes analytique ou qualitatives)",
            "Architecture aux Agents multiples, Architectures structurel interactives inter agent",
            "Éliminations des langages de machine robotisée par cycle",
            "Ressources exploitées 100% informatiquement local 0 coût total ou dépenses liés d’accès public et complètement privatifs API (Offline complètement hébergé à local) opérationnel 100% exécutifs."
        ],
        metrics: {
            agents: "Logiciel Agents Intégrés Multiples",
            apiCosts: "Frais Variables Externe Sur Requêtes (Cloud externes API)"
        }
    },
    linktrees: {
        title: "UI Landings Linktrees",
        description: "Pages vitrine web personnelles UI pur d'intégration réseaux, hyper adaptables mobiles UX/UI et Branding personal.",
        longDescription: "Pages performantes à landing page personnel et professionnels épuré. Axées téléphones. Sans chargement ralentis aux mobiles réseaux lents (CSS pures / framework ultra légers ou sans). Esthétiquement personnalisable branding styles au dizaines de choix de visuels couleurs. Personnels landings d'accueil et liens réseaux central.",
        challenge: "Garder UX excellente et une performance analytiques web parfaite malgré des variées animations branding à charges moindres. Pages optimisée au mieux aux vitesses réseaux lents téléphones, UI esthétique et sans ralentissement visuellement attractif avec UI animées légères.",
        solution: "Architecture UI native sans lourdeur.",
        achievements: [
            "Optimisations mobile parfaite",
            "Impact mémoire des fichiers minimisé",
            "Haute personnalisation"
        ],
        metrics: {
            templates: "Modèles d'UI Disponibles Créés"
        }
    },
    neurodivergentConsulting: {
        title: "Neuro-Consulting Pro Accessibilité UI (Design Web)",
        description: "Plateformes aux designs inclusives professionnels web coaching.",
        longDescription: "Designs étudiés cliniquement ou basés pour atténuations UI du bruit web visuel et cognitif surchargeant utilisateurs autistes et neuro. Framework React/Shadcn UI et backend sans serveurs intégrés aux accès.",
        challenge: "Ne pas générer environnement stressants d'un site corporate conventionnalisé. UI inclusives aux sensibilités et besoins cognitifs visuels sensorielle calmes sans compromis premium UX design d'entreprise.",
        solution: "Palettes adaptatives, très léger à micro-animations (Non intrusives ou dures UX ou flash UI) et des designs au grand blanc minimaliste (Spaced-UI et Negative-space layouts) Serverless Web GCP ou fonctions Cloud server next de la diffusion d'accueil.",
        achievements: [
            "Validations WCAG des interfaces d'accès",
            "Rendues UI 100% mobile excellents"
        ]
    },
    hivefrequency: {
        title: "Projet Musical HiveFrequency AI Audio (Génératives Intégratifs MIDI GAN)",
        description: "IA musique RNN/GAN hybride à mixage en réels interactifs audio (Latency basse performatif in Vivo AI).",
        longDescription: "Système de génération IA combinant GAN et RNN performantes en live temps au réels sur créations d'œuvres musiques algorithmiques de sons temps réel live interactif ou performances interactives du système génératives interactif musicales audio et musiques générative MIDI ou sons (Art électronique musicales aux compositions interactives AI in Vivo live de concerts performances audio avec artistes humaines en collaboratif AI IA).",
        challenge: "Le défi est le modèle générative musiques très lourdes de serveur nécessitent longs accès hors lignes des nuages (Offline génératives). Il fallait permettre un rendu à réactivité live du vrai performatif pour accompagner concerts génératifs musicales sans lag du systèmes temporelles rythmes musicales cohérentes à longs thermes (Longues compositions sans discordances harmonia ou asynchronités aux tempo rythme AI vs Artistes en Live Performance interaction temps au son/réels) AI génératives d'application AI musicale performatives à direct live de l'Art musicales interactions performatifs musicaux compositives audios réelles (musique interactive compositives en temps ou concerts performatives musique).",
        solution: "Architecture complexe intégrant compression des audios générées algorithmique de GANs, structure musicale logiques compositives via un RNN, MIDI et torchFX Python. Modulatifs et interactif aux direct live générant compositives audios en directe en réactifs avec humains live performatifs musicales interactions de son ou musiques générative IA. L'audio rendu GPU a une réactivité latences infimes (-20 ms interactif audio des performances in directo live musicales de musiciens composant AI ou artiste interactives AI musicales).",
        achievements: [
            "Vitesse de traitements exceptionnels pour IA (Latency -18ms interactif IA audio)",
            "Tests complet de durée d'exécution (Running ininterrompues audios IA ou serveur AI de live interactifs musicales) de +12 heures ininterrompus garantissant ou assurant un accès stables live performatif d'audios musicales AI générative AI musicale de spectacle ou concert IA musical en directe sans panne (sans défaillance et ininterrompus musicales de concerts d’œuvres audio musicales génératives compositi de musiques performatifs en IA AI)",
            "Auditoire de hautes satisfaction (8.8 points sur échelles humaine PEAQ audios music de qualité performatives l'AI musical original ou in Vivo des expériences des rendus music AI performative musicale de l'Intelligence)",
            "Séquenceurs boucles infinis AI compositif de MIDI audio MIDI à interactif live ou en musique (Intégrations aux audios de séquences génératives musicales d'IA algorithmique AI compositif AI MIDI audios intégrées interactives musicales dynamiquement musicale AI)"
        ],
        metrics: {
            avgLatency: "Réactivité (Serveur Latency GPU moyenne interactives AI audios l'IA musicales performatives en Vivo)",
            stability: "Tests Durabilité (Running de concert performatives in Vivo ou musique ininterrompue au direct musicales stabilité continue du système)",
            audioQuality: "Résultat / PEAQ Évaluations (Performance qualité l'Évaluation musicale d'IA ou humaine ou des qualité audios compositives performances IA interactives AI)"
        }
    }
};

es.projects = esProjects;
fr.projects = frProjects;

// Ensure other translations exist from old differences

const esShared = {
    // any other missing simple strings missing
    hero: { ...es.hero, status: "Abierto a oportunidades de categoría mundial" },
    specializations: {
        ...es.specializations,
        backend: { title: "Ingeniería Backend", description: "Sistemas distribuidos altamente escalables y arquitectura de microservicios." },
        quant: { title: "Quant / Trading", description: "Sistemas de trading de baja-media frecuencia y modelos estadísticos algorítmicos financieros." },
        web3: { title: "Web3 / Blockchain", description: "Contratos inteligentes, gobernanza DAO y protocolos de finanzas descentralizadas." },
        ai: { title: "Ingeniería en IA / ML", description: "Redes neuronales, Transformers, visión artificial, pipelines de procesamiento de datos." },
        web: { title: "Desarrollo Web Fullstack", description: "Interfaces de usuario premium de alto rendimiento y animaciones interactivas." }
    }
}

const frShared = {
    hero: { ...fr.hero, status: "Ouvert aux opportunités de classe mondiale" },
    specializations: {
        ...fr.specializations,
        backend: { title: "Ingénierie Backend", description: "Systèmes distribués hautement évolutifs et architecture de microservices." },
        quant: { title: "Quant / Trading", description: "Systèmes de trading à fréquence basse/moyenne et modèles statistiques financiers algorithmiques." },
        web3: { title: "Web3 / Blockchain", description: "Contrats intelligents, gouvernance DAO et protocoles de finance décentralisée." },
        ai: { title: "Ingénierie IA / ML", description: "Réseaux neuronaux, Transformers, vision par ordinateur, pipelines de traitement de données." },
        web: { title: "Développement Web Fullstack", description: "Interfaces utilisateur premium avec hautes performances et animations interactives." }
    }
}

es.hero.status = esShared.hero.status;
es.specializations = esShared.specializations;

fr.hero.status = frShared.hero.status;
fr.specializations = frShared.specializations;

try {
    fs.writeFileSync('locales/es.json', JSON.stringify(es, null, 4));
    fs.writeFileSync('locales/fr.json', JSON.stringify(fr, null, 4));
    console.log("Translations successfully updated.");
} catch (e) {
    console.error("Failed to write to files", e);
}
