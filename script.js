const materias = [
  { id: "matematicas", nombre: "Matemáticas", prerequisitos: [] },
  { id: "bases_sociologicas", nombre: "Bases Sociológicas para el Trabajo Social", prerequisitos: [] },
  { id: "fund_trabajo_social", nombre: "Fundamentos del Trabajo Social", prerequisitos: [] },
  { id: "expresion_oral", nombre: "Expresión Oral y Escrita", prerequisitos: [] },
  { id: "autodesarrollo", nombre: "Autodesarrollo", prerequisitos: [] },

  { id: "estadistica_1", nombre: "Estadística I", prerequisitos: ["matematicas"] },
  { id: "epistemologia", nombre: "Epistemología de las Ciencias Sociales", prerequisitos: [] },
  { id: "ts_disciplina", nombre: "Trabajo Social como Disciplina y Profesión", prerequisitos: ["fund_trabajo_social"] },
  { id: "antropologia", nombre: "Antropología Social", prerequisitos: ["bases_sociologicas"] },
  { id: "psicologia_general", nombre: "Psicología General", prerequisitos: [] },
  { id: "informatica", nombre: "Informática Básica", prerequisitos: [] },

  { id: "estadistica_2", nombre: "Estadística II", prerequisitos: ["estadistica_1"] },
  { id: "investigacion_1", nombre: "Investigación Social I", prerequisitos: ["epistemologia"] },
  { id: "metodos_intervencion", nombre: "Métodos de Intervención Profesional en el Trabajo Social", prerequisitos: ["ts_disciplina"] },
  { id: "ecologia", nombre: "Ecología Humana", prerequisitos: [] },
  { id: "psicologia_social", nombre: "Psicología Social", prerequisitos: ["psicologia_general"] },
  { id: "teoria_sociopolitica", nombre: "Teoría Socio-política", prerequisitos: [] },

  { id: "comunicacion", nombre: "Comunicación", prerequisitos: [] },
  { id: "estudios_poblacion", nombre: "Estudios de Población", prerequisitos: ["estadistica_1"] },
  { id: "ts_grupo", nombre: "Trabajo Social con Grupo", prerequisitos: ["metodos_intervencion"] },
  { id: "tecnicas_grupales", nombre: "Técnicas Grupales", prerequisitos: [] },
  { id: "economia", nombre: "Economía Política", prerequisitos: [] },
  { id: "historia_venezuela", nombre: "Historia Contemporánea de Venezuela", prerequisitos: [] },

  { id: "investigacion_2", nombre: "Investigación Social II", prerequisitos: ["investigacion_1", "estadistica_2"] },
  { id: "legislacion", nombre: "Legislación Social", prerequisitos: [] },
  { id: "ts_comunidad", nombre: "Trabajo Social en el Ámbito Comunitario", prerequisitos: ["ts_grupo"] },

{ id: "planificacion", nombre: "Planificación Social", prerequisitos: ["metodos_intervencion"] },
  { id: "estado_politica", nombre: "Estado y Política Social", prerequisitos: ["economia"] },
  { id: "ingles", nombre: "Inglés", prerequisitos: [] },

  { id: "investigacion_3", nombre: "Investigación Social III", prerequisitos: ["investigacion_2"] },
  { id: "admin_gerencia", nombre: "Administración y Gerencia Social", prerequisitos: ["estado_politica"] },
  { id: "ts_individuo_familia", nombre: "Trabajo Social con Individuo y Familia", prerequisitos: [] },
  { id: "formulacion_proyectos", nombre: "Formulación y Evaluación de Proyectos Sociales", prerequisitos: ["planificacion"] },
  { id: "indicadores", nombre: "Indicadores Sociales", prerequisitos: ["planificacion", "estudios_poblacion"] },
  { id: "electiva_1", nombre: "Electiva I", prerequisitos: [] },

  { id: "practica_1", nombre: "Prácticas de Trabajo Social I", prerequisitos: ["ts_comunidad", "admin_gerencia"] },
  { id: "seguridad_social", nombre: "Seguridad Social", prerequisitos: [] },
  { id: "electiva_2", nombre: "Electiva II", prerequisitos: [] },

  { id: "computacion_social", nombre: "Computación Aplicada a las Ciencias Sociales", prerequisitos: ["investigacion_3"] },
  { id: "practica_2", nombre: "Prácticas de Trabajo Social II", prerequisitos: ["practica_1"] },
  { id: "orientacion_familiar", nombre: "Orientación Familiar", prerequisitos: ["ts_individuo_familia"] },

  { id: "practica_3", nombre: "Prácticas de Trabajo Social III", prerequisitos: ["practica_2", "orientacion_familiar"] },

  { id: "trabajo_grado", nombre: "Trabajo de Grado", prerequisitos: [] },
  { id: "servicio_comunitario", nombre: "Seminario Servicio Comunitario", prerequisitos: [] },
];

const container = document.getElementById("malla-container");

function crearMalla() {
  container.innerHTML = "";
  materias.forEach((m) => {
    const div = document.createElement("div");
    div.classList.add("materia");
    div.id = m.id;
    div.textContent = m.nombre;

    const aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];

    if (aprobadas.includes(m.id)) {
      div.classList.add("aprobada");
    } else if (
      m.prerequisitos.length > 0 &&
      !m.prerequisitos.every((p) => aprobadas.includes(p))
    ) {
      div.classList.add("bloqueada");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueada")) return;

      div.classList.toggle("aprobada");

      let nuevasAprobadas = Array.from(
        document.querySelectorAll(".materia.aprobada")
      ).map((d) => d.id);

      localStorage.setItem("aprobadas", JSON.stringify(nuevasAprobadas));
      crearMalla(); // Re-render
    });

    container.appendChild(div);
  });
}

document.getElementById("reiniciar").addEventListener("click", () => {
  localStorage.removeItem("aprobadas");
  crearMalla();
});

crearMalla();
