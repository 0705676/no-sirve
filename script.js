const materias = [
// I semestre
{ nombre: "Matemáticas", codigo: "MAT", prerequisitos: [] },
{ nombre: "Bases Sociológicas para el Trabajo Social", codigo: "SOC", prerequisitos: [] },
{ nombre: "Fundamentos del trabajo social", codigo: "FUN", prerequisitos: [] },
{ nombre: "Expresión Oral y escrita", codigo: "EXP", prerequisitos: [] },
{ nombre: "Autodesarrollo", codigo: "AUT", prerequisitos: [] },

// II semestre
{ nombre: "Estadística I", codigo: "EST1", prerequisitos: ["MAT"] },
{ nombre: "Epistemología de las ciencias sociales", codigo: "EPI", prerequisitos: [] },
{ nombre: "Trabajo social como disciplina y profesión", codigo: "TSD", prerequisitos: ["FUN"] },
{ nombre: "Antropología Social", codigo: "ANT", prerequisitos: ["SOC"] },
{ nombre: "Psicología General", codigo: "PSIG", prerequisitos: [] },
{ nombre: "Informática Básica", codigo: "INF", prerequisitos: [] },

// III semestre
{ nombre: "Estadística II", codigo: "EST2", prerequisitos: ["EST1"] },
{ nombre: "Investigación Social I", codigo: "INV1", prerequisitos: ["EPI"] },
{ nombre: "Métodos de Intervención Profesional en el Trabajo Social", codigo: "METINT", prerequisitos: ["TSD"] },
{ nombre: "Ecología Humana", codigo: "ECOH", prerequisitos: [] },
{ nombre: "Psicología Social", codigo: "PSS", prerequisitos: ["PSIG"] },
{ nombre: "Teoría Socio-política", codigo: "TSOC", prerequisitos: [] },

// IV semestre
{ nombre: "Comunicación", codigo: "COM", prerequisitos: [] },
{ nombre: "Estudios de Población", codigo: "POP", prerequisitos: ["EST1"] },
{ nombre: "Trabajo Social con Grupo", codigo: "TSG", prerequisitos: ["METINT"] },
{ nombre: "Técnicas Grupales", codigo: "TG", prerequisitos: [] },
{ nombre: "Economía Política", codigo: "ECO", prerequisitos: [] },
{ nombre: "Historia Contemporánea de Venezuela", codigo: "HCV", prerequisitos: [] },

// V semestre
{ nombre: "Investigación Social II", codigo: "INV2", prerequisitos: ["INV1", "EST2"] },
{ nombre: "Legislación Social", codigo: "LEG", prerequisitos: [] },
{ nombre: "Trabajo Social en el ámbito comunitario", codigo: "TSCOM", prerequisitos: ["TSG"] },
{ nombre: "Planificación Social", codigo: "PLS", prerequisitos: ["METINT"] },
{ nombre: "Estado y Política Social", codigo: "EPS", prerequisitos: ["ECO"] },
{ nombre: "Inglés", codigo: "ING", prerequisitos: [] },

// VI semestre
{ nombre: "Investigación Social III", codigo: "INV3", prerequisitos: ["INV2"] },
{ nombre: "Administración y Gerencia Social", codigo: "AGS", prerequisitos: ["EPS"] },
{ nombre: "Trabajo Social con Individuo y Familia", codigo: "TSF", prerequisitos: [] },
{ nombre: "Formulación y Evaluación de Proyectos Sociales", codigo: "FEP", prerequisitos: ["PLS"] },
{ nombre: "Indicadores Sociales", codigo: "IND", prerequisitos: ["POP", "PLS"] },
{ nombre: "Electiva I", codigo: "ELEC1", prerequisitos: [] },

// VII semestre
{ nombre: "Prácticas de Trabajo Social I", codigo: "PRA1", prerequisitos: ["TSCOM", "AGS"] },
{ nombre: "Seguridad Social", codigo: "SEG", prerequisitos: ["EPS"] },
{ nombre: "Electiva II", codigo: "ELEC2", prerequisitos: [] },

// VIII semestre
{ nombre: "Computación Aplicada a las Ciencias Sociales", codigo: "COMP", prerequisitos: ["INV3"] },
{ nombre: "Prácticas de Trabajo Social II", codigo: "PRA2", prerequisitos: ["PRA1"] },
{ nombre: "Orientación Familiar", codigo: "ORI", prerequisitos: ["TSF"] },

// IX semestre
{ nombre: "Prácticas de Trabajo Social III", codigo: "PRA3", prerequisitos: ["PRA2", "ORI"] },

// X semestre
{ nombre: "Trabajo de Grado", codigo: "TG", prerequisitos: [] },
{ nombre: "Seminario Servicio Comunitario", codigo: "SSC", prerequisitos: [] }
];

const container = document.getElementById("malla-container");

function estaAprobada(codigo) {
  const aprobadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");
  return aprobadas.includes(codigo);
}

function guardarAprobadas(aprobadas) {
  localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
}

function obtenerAprobadas() {
  return JSON.parse(localStorage.getItem("aprobadas") || "[]");
}

function actualizarMalla() {
  container.innerHTML = "";
  const aprobadas = obtenerAprobadas();

  materias.forEach(m => {
    const div = document.createElement("div");
    div.classList.add("materia");
    div.textContent = m.nombre;

    const bloqueada = m.prerequisitos.some(pr => !aprobadas.includes(pr));
    if (bloqueada && !aprobadas.includes(m.codigo)) {
      div.classList.add("bloqueada");
    } else if (aprobadas.includes(m.codigo)) {
      div.classList.add("aprobada");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueada")) return;

      const index = aprobadas.indexOf(m.codigo);
      if (index >= 0) {
        aprobadas.splice(index, 1);
      } else {
        aprobadas.push(m.codigo);
      }
      guardarAprobadas(aprobadas);
      actualizarMalla();
    });

    container.appendChild(div);
  });
}

document.getElementById("reiniciar").addEventListener("click", () => {
  localStorage.removeItem("aprobadas");
  actualizarMalla();
});

actualizarMalla();
