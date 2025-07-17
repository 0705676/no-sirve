const materias = [
  // I semestre
  { nombre: "Matemáticas", abre: ["Estadística I"] },
  { nombre: "Bases Sociológicas para el Trabajo Social", abre: ["Antropología Social"] },
  { nombre: "Fundamentos del trabajo social", abre: ["Trabajo Social como disciplina y profesión"] },
  { nombre: "Expresión Oral y escrita" },
  { nombre: "Autodesarrollo" },

  // II semestre
  { nombre: "Estadística I", abre: ["Estadística II", "Estudios de Población"] },
  { nombre: "Epistemología de las ciencias sociales", abre: ["Investigación Social I"] },
  { nombre: "Trabajo Social como disciplina y profesión", abre: ["Métodos de Intervención Profesional en el Trabajo Social"] },
  { nombre: "Antropología Social" },
  { nombre: "Psicología General", abre: ["Psicología Social"] },
  { nombre: "Informática Básica" },

  // III semestre
  { nombre: "Estadística II", abre: ["Investigación Social II"] },
  { nombre: "Investigación Social I", abre: ["Investigación Social II"] },
  { nombre: "Métodos de Intervención Profesional en el Trabajo Social", abre: ["Trabajo Social con Grupo", "Planificación Social"] },
  { nombre: "Ecología Humana" },
  { nombre: "Psicología Social" },
  { nombre: "Teoría Socio-política" },

  // IV semestre
  { nombre: "Comunicación" },
  { nombre: "Estudios de Población", abre: ["Indicadores Sociales"] },
  { nombre: "Trabajo Social con Grupo", abre: ["Trabajo Social en el ámbito comunitario"] },
  { nombre: "Técnicas Grupales" },
  { nombre: "Economía Política", abre: ["Estado y Política Social"] },
  { nombre: "Historia Contemporánea de Venezuela" },

  // V semestre
  { nombre: "Investigación Social II", abre: ["Investigación Social III"] },
  { nombre: "Legislación Social" },
  { nombre: "Trabajo Social en el ámbito comunitario", abre: ["Prácticas de Trabajo Social I"] },
  { nombre: "Planificación Social", abre: ["Formulación y Evaluación de Proyectos Sociales", "Indicadores Sociales"] },
  { nombre: "Estado y Política Social", abre: ["Administración y Gerencia Social", "Seguridad Social"] },
  { nombre: "Inglés" },

  // VI semestre
  { nombre: "Investigación Social III", abre: ["Computación Aplicada a las Ciencias Sociales"] },
  { nombre: "Administración y Gerencia Social", abre: ["Prácticas de Trabajo Social I"] },
  { nombre: "Trabajo Social con Individuo y Familia", abre: ["Orientación Familiar"] },
  { nombre: "Formulación y Evaluación de Proyectos Sociales" },
  { nombre: "Indicadores Sociales" },
  { nombre: "Electiva I" },

  // VII semestre
  { nombre: "Prácticas de Trabajo Social I", abre: ["Prácticas de Trabajo Social II"] },
  { nombre: "Seguridad Social" },
  { nombre: "Electiva II" },

  // VIII semestre
  { nombre: "Computación Aplicada a las Ciencias Sociales" },
  { nombre: "Prácticas de Trabajo Social II", abre: ["Prácticas de Trabajo Social III"] },
  { nombre: "Orientación Familiar", abre: ["Prácticas de Trabajo Social III"] },

  // IX semestre
  { nombre: "Prácticas de Trabajo Social III" },

  // X semestre
  { nombre: "Trabajo de Grado" },
  { nombre: "Seminario Servicio Comunitario" }
];

document.getElementById("reiniciar").addEventListener("click", () => {
  localStorage.removeItem("aprobadas");
  actualizarMalla();
});

actualizarMalla();
