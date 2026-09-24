/**
 * data.js — Rutina de la semana.
 *
 * Este es el ÚNICO archivo que necesitás tocar para cambiar ejercicios,
 * series, repeticiones o textos. render.js lee este arreglo y arma las
 * tarjetas automáticamente, así que no hace falta editar HTML ni CSS.
 *
 * Cada día tiene:
 *   id         — identificador interno (no se muestra)
 *   nombre     — encabezado del día ("LUNES", "MARTES"...)
 *   titulo     — subtítulo del bloque de entrenamiento
 *   categoria  — "pitch" (entreno normal) | "clay" (alta intensidad) | "rest" (descanso) | "gold" (partido)
 *                controla el color de la tarjeta y del punto en el calendario
 *   ejercicios — lista de { chip, texto }. "chip" es el dato corto (series x reps,
 *                minutos, ritmo); "texto" es la descripción del ejercicio.
 *   nota       — (opcional) línea aclaratoria al pie de la tarjeta
 *   descanso   — (opcional, solo para días de descanso) reemplaza la lista de ejercicios
 */

const ROUTINE = [
  {
    id: "lunes",
    nombre: "LUNES",
    titulo: "Cardio base · 35'",
    categoria: "pitch",
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },
      { chip: "5'", texto: "Caminata" },
      { chip: "35'", texto: "Trote de 7 series de 5 minutos con intervalos de 90 segundos de caminata." },
      { chip: "5'", texto: "Caminata" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Sesión para construir base aeróbica."
  },
  {
    id: "martes",
    nombre: "MARTES",
    titulo: "Fuerza",
    categoria: "pitch",
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },
      { chip: "3×8-12", texto: "Pecho en Banco Plano" },
      { chip: "3×8–12", texto: "Biceps" },
      { chip: "3×20", texto: "Pliometria a una pierna con barra en el piso." },
      { chip: "3×8–12", texto: "Estocada (por pierna), con una dificultad que te exija (2–3 reps en reserva)\n7kg Mancuerna" },
      { chip: "3", texto: "Saltos largos luego de hacer estocadas." },
      
      { chip: "3×20", texto: "puente de glúteo" },
      { chip: "3×15", texto: "abdominales" },
      { chip: "3×12", texto: "elevación de psoas (por lado)" },
      { chip: "3×15", texto: "abs laterales (por lado)" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Fuerza de verdad: menos repeticiones y más carga te sirve más para fútbol que series de 20."
  },
  
  {
    id: "miercoles",
    nombre: "MIÉRCOLES",
    titulo: "Descanso",
    categoria: "rest",
    descanso: "Dia de descanso entre martes y jueves.",
    nota: "Se puede hacer sesión de movilidad/core."
  },
  
  {
    id: "jueves",
    nombre: "JUEVES",
    titulo: "Velocidad + core · 30/35'",
    categoria: "pitch",
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },

      { chip: "3×8-12", texto: "Remo con barra" },
      { chip: "3×8-12", texto: "Triceps con barra o mancuerna" },
      { chip: "3×8-12", texto: "Peso muerto con mancuernas" },
      { chip: "3×8-12", texto: "Curl nordico" },
      { chip: "PLIO", texto: "Sesion de Pliometria" },
      { chip: "PLIO", texto: "Saltos con una pierna" },

      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Más adelante, tras varias semanas de adaptación, se puede pasar a esfuerzos del 90–95% y cambios de dirección."
  },
  
  {
    id: "viernes",
    nombre: "VIERNES",
    titulo: "Cardio - Resistencia",
    categoria: "pitch",    
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },
      { chip: "8–10'", texto: "trote suave" },
      { chip: "4×40–50m", texto: "progresiones al 60–70%" },
      { chip: "6×50m", texto: "al 80–85%" },
      { chip: "60–90\"", texto: "recuperación caminando entre repeticiones" },
      { chip: "3×15", texto: "abdominales" },
      { chip: "3×12", texto: "elevaciones de piernas" },
      { chip: "3×15", texto: "abdominales laterales (por lado)" },
      { chip: "5'", texto: "suave para terminar" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "La caminata es opcional, ya que hay que descansar para el partido"
  },
  
  {
    id: "sabado",
    nombre: "SÁBADO",
    titulo: "Descanso",
    categoria: "rest",
    descanso: "Descanso pre-partido",
    nota: "Se puede hacer sesión de movilidad/core."
  },
  
  {
    id: "Domingo",
    nombre: "DOMINGO",
    titulo: "Dia de Partido",
    categoria: "gold",
    partido: "⚽ Dia de partido"
  },
  
  {
    id: "Ejercicios",
    nombre: "Ejercicios Random",
    titulo: "Ejercicios Random",
    categoria: "rest",
    ejercicios: [
      { chip: "8–10'", texto: "trote suave" },
      { chip: "4×40–50m", texto: "progresiones al 60–70%" },
      { chip: "6×50m", texto: "al 80–85%" },
      { chip: "60–90\"", texto: "recuperación caminando entre repeticiones" },
      { chip: "3×15", texto: "abdominales" },
      { chip: "3×12", texto: "elevaciones de piernas" },
      { chip: "3×15", texto: "abdominales laterales (por lado)" },
      { chip: "5'", texto: "suave para terminar" },
      ],
  }
];
