export const economia = [
  {
    id: "241",
    materia: "Análisis Matemático I",
    creditos: 0,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "245",
    materia: "Álgebra",
    creditos: 0,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "246",
    materia: "Historia Económica y Social General",
    creditos: 0,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "242",
    materia: "Economía",
    creditos: 0,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "243",
    materia: "Sociología",
    creditos: 0,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "244",
    materia: "Metodología de las Ciencias Sociales",
    creditos: 0,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC",
    materia: "Ciclo Básico Común",
    creditos: 0,
    categoria: "CBC",
    title: "Ver CBC Entero",
    level: 0,
    correlativas: "244-243-242-241-245-246",
  },
  {
    id: "261",
    materia: "Teoría Política y Derecho Público",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "247",
    materia: "Teoría Contable",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "248",
    materia: "Estadística I",
    creditos: 2,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "284",
    materia: "Análisis Matemático II",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "249",
    materia: "Historia Económica y Social Argentina",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "262",
    materia: "Macroeconomía I",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "283",
    materia: "Macroeconomía II",
    creditos: 6,
    correlativas: "262-288",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "285",
    materia: "Estadística II",
    creditos: 6,
    correlativas: "248-284",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "286",
    materia: "Microeconomía II",
    creditos: 6,
    correlativas: "288-290",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "287",
    materia: "Geografía Económica",
    creditos: 6,
    correlativas: "249",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "288",
    materia: "Matemática para Economistas",
    creditos: 4,
    correlativas: "284",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "289",
    materia: "Epistemología de la Economía",
    creditos: 6,
    correlativas: "262-290",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "290",
    materia: "Microeconomía I (para Economistas)",
    creditos: 6,
    correlativas: "284",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "551",
    materia: "Econometría",
    creditos: 4,
    correlativas: "285-288",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "552",
    materia: "Dinero, Crédito y Bancos",
    creditos: 4,
    correlativas: "283-286-288",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "553",
    materia: "Historia del Pensamiento Económico",
    creditos: 4,
    correlativas: "262-290",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "554",
    materia: "Crecimiento Económico",
    creditos: 6,
    correlativas: "283-286-288",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "555",
    materia: "Organización Industrial",
    creditos: 4,
    correlativas: "286",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "556",
    materia: "Finanzas Públicas",
    creditos: 4,
    correlativas: "261-290",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "557",
    materia: "Estructura Social Argentina",
    creditos: 6,
    correlativas: "249-561",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "558",
    materia: "Economía Internacional",
    creditos: 6,
    correlativas: "283-287-290",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "559",
    materia: "Desarrollo Económico",
    creditos: 4,
    correlativas: "557-560",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "560",
    materia: "Estructura Económica Argentina",
    creditos: 4,
    correlativas: "287-561",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "561",
    materia: "Cuentas Nacionales",
    creditos: 4,
    correlativas: "247-262",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  // Pongo como correlativa "" a las electivas sin correlativas porque por el momento no sé cuáles son sus requisitos
  {
    id: "000",
    materia: "Electivas",
    correlativas:"",
    categoria: "Materias Electivas",
    level: 6,
  },
  {
    id: "721",
    materia: "Poder Económico y Derechos Humanos",
    creditos: 4,
    correlativas: "",
    categoria: "Materias Electivas",
    level: 6,
  },
  {
    id: "724",
    materia: "Economía de la Seguridad Social",
    creditos: 6,
    correlativas: "",
    categoria: "Materias Electivas",
    level: 6,
  },
  {
    id: "734",
    materia: "Sistemas Económicos Comparados",
    creditos: 4,
    correlativas: "262-552",
    categoria: "Materias Electivas",
    level: 6,
  },
  {
    id: "764",
    materia: "Gestión en la Economía Social",
    creditos: 4,
    correlativas: "",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "765",
    materia: "Economía Ambiental",
    creditos: 6,
    correlativas: "286",
    categoria: "Materias Electivas",
    level: 7,
  },
  {
    id: "780",
    materia: "Economía Agropecuaria",
    creditos: 4,
    correlativas: "286-559",
    categoria: "Materias Electivas",
    level: 7,
  },
  {
    id: "781",
    materia: "Mercado de Capitales y Elementos de Cálculo Financiero",
    creditos: 4,
    correlativas: "286",
    categoria: "Materias Electivas",
    level: 7,
  },
  {
    id: "782",
    materia: "Economía Laboral",
    creditos: 4,
    correlativas: "283-286",
    categoria: "Materias Electivas",
    level: 8,
  },
  //Cómo se pone las optativas? Como electivas? Por el momento lo voy a poner como electivas
  {
    id: "651",
    materia: "Lógica",
    creditos: 4,
    correlativas: "91.07-91.30",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "276",
    materia: "Cálculo Financiero",
    creditos: 6,
    correlativas: "285",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "712",
    materia: "Género y Economía",
    creditos: 4,
    correlativas: "",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "713",
    materia: "Tópicos de Microeconomía",
    creditos: 6,
    correlativas: "286",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "720",
    materia: "Demografía y Seguridad Social",
    creditos: 4,
    correlativas: "",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "731",
    materia: "Econometría II",
    creditos: 4,
    correlativas: "",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "741",
    materia: "Elementos de Topología para Economía y Gestión",
    creditos: 4,
    correlativas: "288",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "745",
    materia: "Economía de la Energía",
    creditos: 6,
    correlativas: "",
    categoria: "Materias Electivas",
  },
  {
    id: "748",
    materia: "Evaluación de Proyectos",
    creditos: 4,
    correlativas: "286-556",
    categoria: "Materias Electivas",
  },
  {
    id: "760",
    materia: "Prácticas para la Inclusión Social",
    creditos: 4,
    correlativas: "",
    categoria: "Materias Electivas",
  },
  {
    id: "767",
    materia: "Economía Marxista",
    creditos: 4,
    correlativas: "553",
    categoria: "Materias Electivas",
  },
  {
    id: "779",
    materia: "Tópicos de Macroeconomía",
    creditos: 4,
    correlativas: "552",
    categoria: "Materias Electivas",
  },
  {
    id: "783",
    materia: "Historia del Pensamiento Económico II",
    creditos: 3,
    correlativas: "553",
    categoria: "Materias Electivas",
  },
  // Seminario? Se necesita estar en las últimas 5 materias
  {
    id: "562",
    materia: "Seminario de Integración y aplicación",
    creditos: 1,
    correlativas: "286-289-551-558",
    categoria: "Fin de Carrera (Obligatorio)",
  },
  {
    id: "",
    materia: "Tesis de Economía",
    creditos: 13,
    requiere: 160,
    categoria: "Fin de Carrera",
  },
];
