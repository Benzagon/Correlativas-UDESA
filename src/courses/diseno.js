import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const year_labels = [{
    id: 'a1',
    type: 'year',
    data: {
        label: (
            <>1er Año</>
        ),
    },
    position: { x: 100, y: 0 },
},
{
    id: 'a2',
    type: 'year',
    data: {
        label: (
            <>2do Año</>
        ),
    },
    position: { x: 500, y: 0 },
},
{
    id: 'a3',
    type: 'year',
    data: {
        label: (
            <>3er Año</>
        ),
    },
    position: { x: 900, y: 0 },
},
{
    id: 'a4',
    type: 'year',
    data: {
        label: (
            <>4to Año</>
        ),
    },
    position: { x: 1300, y: 0 },
},
]

export const nodes = [{
    id: '1',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Electiva de Historia</>
        ),
    },
    position: { x: 0, y: 400 },
},
{
    id: '2',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Electiva de Literatura</>
        ),
    },
    position: { x: 0, y: 300 },
},
{
    id: '3',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Introducción a los métodos cuantitativos</>
        ),
    },
    position: { x: 0, y: 200 },
},
{
    id: '4',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Iteración</>
        ),
    },
    position: { x: 0, y: 100 },
},
{
    id: '5',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Seminario profundización tecnológica I</>
        ),
    },
    position: { x: 0, y: 500 },
},
{
    id: '6',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Economía I</>
        ),
    },
    position: { x: 200, y: 300 },
},
{
    id: '7',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Electiva de Filosofía</>
        ),
    },
    position: { x: 200, y: 400 },
},
{
    id: '8',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Fundamentos de Administración</>
        ),
    },
    position: { x: 200, y: 200 },
},
{
    id: '9',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Interacción</>
        ),
    },
    position: { x: 200, y: 100 },
},
{
    id: '10',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Seminario profundización tecnológica II</>
        ),
    },
    position: { x: 200, y: 500 },
},
{
    id: '11',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Sustentabilidad</>
        ),
    },
    position: { x: 400, y: 200 },
},
{
    id: '12',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: true,
        label: (
            <>Escritura y Oratoria</>
        ),
    },
    position: { x: 400, y: 300 },
},
{
    id: '13',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Pensamiento Proyectual</>
        ),
    },
    position: { x: 400, y: 100 },
},
{
    id: '14',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Electiva de Arte o Electiva de Ciencias</>
        ),
    },
    position: { x: 400, y: 400 },
},
{
    id: '15',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Seminario profundización tecnológica III</>
        ),
    },
    position: { x: 400, y: 500 },
},
{
    id: '16',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Prospectiva</>
        ),
    },
    position: { x: 600, y: 100 },
},
{
    id: '17',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Teoría Sociológica Contemporánea</>
        ),
    },
    position: { x: 600, y: 300 },
},
{
    id: '18',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Introducción a la Psicología</>
        ),
    },
    position: { x: 600, y: 200 },
},
{
    id: '19',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Electiva de Arte o Electiva de Ciencias</>
        ),
    },
    position: { x: 600, y: 400 },
},
{
    id: '20',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Seminario profundización tecnológica IV</>
        ),
    },
    position: { x: 600, y: 500 },
},
{
    id: '21',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Mercado</>
        ),
    },
    position: { x: 800, y: 100 },
},
{
    id: '22',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Diseño de Información</>
        ),
    },
    position: { x: 800, y: 200 },
},
{
    id: '23',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Etnografía y Diseño</>
        ),
    },
    position: { x: 800, y: 300 },
},
{
    id: '24',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#8B1A1A',
        done: false,
        label: (
            <>Materia Optativa I</>
        ),
    },
    position: { x: 800, y: 400 },
},
{
    id: '25',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Narrativas</>
        ),
    },
    position: { x: 1000, y: 100 },
},
{
    id: '26',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Escenarios Futuros</>
        ),
    },
    position: { x: 1000, y: 200 },
},
{
    id: '27',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Estudios de Tendencias</>
        ),
    },
    position: { x: 1000, y: 300 },
},
{
    id: '28',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#8B1A1A',
        done: false,
        label: (
            <>Materia Optativa II</>
        ),
    },
    position: { x: 1000, y: 400 },
},
{
    id: '29',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7A2F08',
        done: false,
        label: (
            <>Portafolio</>
        ),
    },
    position: { x: 1200, y: 100 },
},
{
    id: '30',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7A2F08',
        done: false,
        label: (
            <>Usabilidad y Factores Humanos</>
        ),
    },
    position: { x: 1200, y: 200 },
},
{
    id: '31',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7A2F08',
        done: false,
        label: (
            <>Sistema Industrial y Modelos de Negocio</>
        ),
    },
    position: { x: 1200, y: 300 },
},
{
    id: '32',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#8B1A1A',
        done: false,
        label: (
            <>Materia Optativa III</>
        ),
    },
    position: { x: 1200, y: 400 },
},
{
    id: '33',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7A2F08',
        done: false,
        label: (
            <>Entornos Complejos</>
        ),
    },
    position: { x: 1400, y: 200 },
},
{
    id: '34',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7A2F08',
        done: false,
        label: (
            <>Métodos de Diagnóstico</>
        ),
    },
    position: { x: 1400, y: 100 },
},
{
    id: '35',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7A2F08',
        done: false,
        label: (
            <>Taller Trabajo de Graduación</>
        ),
    },
    position: { x: 1400, y: 300 },
},
{
    id: '36',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#8B1A1A',
        done: false,
        label: (
            <>Materia Optativa IV</>
        ),
    },
    position: { x: 1400, y: 400 },
}]

export const edges = [
    { id: '4-23', source: '4', target: '23', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Etno
    { id: '9-23', source: '9', target: '23', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Etno

    { id: '4-26', source: '4', target: '26', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Futuros
    { id: '9-26', source: '9', target: '26', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Futuros

    { id: '4-27', source: '4', target: '27', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Tendencias
    { id: '9-27', source: '9', target: '27', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Tendencias
    { id: '16-27', source: '16', target: '27', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp - Tendencias

    { id: '4-22', source: '4', target: '22', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Informacion
    { id: '9-22', source: '9', target: '22', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Informacion
    { id: '13-22', source: '13', target: '22', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Informacion

    { id: '4-25', source: '4', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Narrativas
    { id: '9-25', source: '9', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Narrativas
    { id: '13-25', source: '13', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Narrativas

    { id: '4-21', source: '4', target: '21', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Mercado
    { id: '9-21', source: '9', target: '21', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Mercado
    { id: '13-21', source: '13', target: '21', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Mercado

    { id: '4-35', source: '4', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Taller de Grad
    { id: '9-35', source: '9', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Taller de Grad
    { id: '13-35', source: '13', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Taller de Grad
    { id: '16-35', source: '16', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp. - Taller de Grad
    { id: '11-35', source: '11', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Sust. - Taller de Grad
    { id: '2-35', source: '2', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Liter. - Taller de Grad
    { id: '14-35', source: '14', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Taller de Grad
    { id: '19-35', source: '19', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Taller de Grad
    { id: '7-35', source: '7', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Filo. - Taller de Grad
    { id: '6-35', source: '6', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco. - Taller de Grad
    { id: '3-35', source: '3', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Metodos. - Taller de Grad
    { id: '12-35', source: '12', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Escritura. - Taller de Grad
    { id: '21-35', source: '21', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mercado. - Taller de Grad
    { id: '25-35', source: '25', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Narrativa. - Taller de Grad
    { id: '1-35', source: '1', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Hist. - Taller de Grad
    { id: '23-35', source: '23', target: '35', markerEnd: { type: MarkerType.ArrowClosed, }}, // Etno. - Taller de Grad
    
    { id: '4-29', source: '4', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Portafolio
    { id: '9-29', source: '9', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Portafolio
    { id: '13-29', source: '13', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Portafolio
    { id: '16-29', source: '16', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp. - Portafolio
    { id: '11-29', source: '11', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Sust. - Portafolio
    { id: '2-29', source: '2', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Liter. - Portafolio
    { id: '14-29', source: '14', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Portafolio
    { id: '19-29', source: '19', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Portafolio
    { id: '7-29', source: '7', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Filo. - Portafolio
    { id: '6-29', source: '6', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco. - Portafolio
    { id: '3-29', source: '3', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Metodos. - Portafolio
    { id: '12-29', source: '12', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Escritura. - Portafolio
    { id: '21-29', source: '21', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mercado. - Portafolio
    { id: '25-29', source: '25', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Narrativa. - Portafolio
    { id: '1-29', source: '1', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Hist. - Portafolio
    
    { id: '4-33', source: '4', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Entornos Complejos
    { id: '9-33', source: '9', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Entornos Complejos
    { id: '13-33', source: '13', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Entornos Complejos
    { id: '16-33', source: '16', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp. - Entornos Complejos
    { id: '11-33', source: '11', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Sust. - Entornos Complejos
    { id: '2-33', source: '2', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Liter. - Entornos Complejos
    { id: '14-33', source: '14', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Entornos Complejos
    { id: '19-33', source: '19', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Entornos Complejos
    { id: '7-33', source: '7', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Filo. - Entornos Complejos
    { id: '6-33', source: '6', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco. - Entornos Complejos
    { id: '3-33', source: '3', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Metodos. - Entornos Complejos
    { id: '12-33', source: '12', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Escritura. - Entornos Complejos
    { id: '21-33', source: '21', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mercado. - Entornos Complejos
    { id: '25-33', source: '25', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Narrativa. - Entornos Complejos
    { id: '1-33', source: '1', target: '33', markerEnd: { type: MarkerType.ArrowClosed, }}, // Hist. - Entornos Complejos

    { id: '4-30', source: '4', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Usabilidad
    { id: '9-30', source: '9', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Usabilidad
    { id: '13-30', source: '13', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Usabilidad
    { id: '16-30', source: '16', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp. - Usabilidad
    { id: '11-30', source: '11', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Sust. - Usabilidad
    { id: '2-30', source: '2', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Liter. - Usabilidad
    { id: '14-30', source: '14', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Usabilidad
    { id: '19-30', source: '19', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Usabilidad
    { id: '7-30', source: '7', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Filo. - Usabilidad
    { id: '6-30', source: '6', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco. - Usabilidad
    { id: '3-30', source: '3', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Metodos. - Usabilidad
    { id: '12-30', source: '12', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Escritura. - Usabilidad
    { id: '1-30', source: '1', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Hist. - Usabilidad
    { id: '23-30', source: '23', target: '30', markerEnd: { type: MarkerType.ArrowClosed, }}, // Etno. - Usabilidad
    
    { id: '4-34', source: '4', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Metodos de Diagn.
    { id: '9-34', source: '9', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Metodos de Diagn.
    { id: '13-34', source: '13', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Metodos de Diagn.
    { id: '16-34', source: '16', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp. - Metodos de Diagn.
    { id: '11-34', source: '11', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Sust. - Metodos de Diagn.
    { id: '2-34', source: '2', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Liter. - Metodos de Diagn.
    { id: '14-34', source: '14', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Metodos de Diagn.
    { id: '19-34', source: '19', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Metodos de Diagn.
    { id: '7-34', source: '7', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Filo. - Metodos de Diagn.
    { id: '6-34', source: '6', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco. - Metodos de Diagn.
    { id: '3-34', source: '3', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Metodos. - Metodos de Diagn.
    { id: '12-34', source: '12', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Escritura. - Metodos de Diagn.
    { id: '1-34', source: '1', target: '34', markerEnd: { type: MarkerType.ArrowClosed, }}, // Hist. - Metodos de Diagn.
    
    { id: '4-31', source: '4', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Iter - Sist. Ind. y model.
    { id: '9-31', source: '9', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inter - Sist. Ind. y model.
    { id: '13-31', source: '13', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Pens. Proy. - Sist. Ind. y model.
    { id: '16-31', source: '16', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Prosp. - Sist. Ind. y model.
    { id: '11-31', source: '11', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Sust. - Sist. Ind. y model.
    { id: '2-31', source: '2', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Liter. - Sist. Ind. y model.
    { id: '14-31', source: '14', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Sist. Ind. y model.
    { id: '19-31', source: '19', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Cienc. - Sist. Ind. y model.
    { id: '7-31', source: '7', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Filo. - Sist. Ind. y model.
    { id: '6-31', source: '6', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco. - Sist. Ind. y model.
    { id: '3-31', source: '3', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Metodos. - Sist. Ind. y model.
    { id: '12-31', source: '12', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Escritura. - Sist. Ind. y model.
    { id: '1-31', source: '1', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Hist. - Sist. Ind. y model.
]