
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronLeft, 
  ChevronRight,
  Home,
  Flame,
  Shield,
  Target,
  Users,
  Wind,
  Thermometer,
  TreePine,
  Eye,
  AlertTriangle,
  Droplets,
  Shovel,
  Radio,
  Heart,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react'
import Link from 'next/link'

export default function PresentacionPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Prevención y Control de Incendios Forestales",
      subtitle: "Curso Especializado USAID/OFDA",
      content: (
        <div className="text-center space-y-8">
          <div className="mx-auto w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center">
            <Flame className="h-16 w-16 text-orange-600" />
          </div>
          <div className="space-y-4">
            <p className="text-xl text-gray-300">Capacitación para Bomberos y Campesinos Rurales</p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-orange-600">International Resources Group (IRG)</Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-300">2006</Badge>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Objetivos de la Capacitación",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-400 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Objetivos Principales
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Comprender la ciencia del comportamiento del fuego</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Dominar técnicas de prevención efectivas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Aplicar métodos seguros de control</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Implementar protocolos de seguridad</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Audiencia Objetivo
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="font-medium text-orange-300">Bomberos Profesionales</p>
                  <p className="text-sm text-gray-400">Personal de emergencias y rescate</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="font-medium text-green-300">Campesinos Rurales</p>
                  <p className="text-sm text-gray-400">Comunidades forestales y agrícolas</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="font-medium text-blue-300">Personal de Emergencias</p>
                  <p className="text-sm text-gray-400">Brigadistas y voluntarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "¿Qué es un Incendio Forestal?",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Flame className="h-12 w-12 text-red-600" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-orange-400">Fuego que se da en bosques</strong>, naturales o artificiales, 
                <strong className="text-red-400"> producido por la acción del ser humano o causado por la naturaleza</strong> 
                y que <strong className="text-yellow-400">avanza sin ningún control</strong> ocasionando 
                <strong className="text-red-400"> daños ecológicos, climáticos, económicos y sociales</strong>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-gray-800 rounded-lg">
              <TreePine className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-green-300">Daños Ecológicos</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <Wind className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-blue-300">Daños Climáticos</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <Target className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-yellow-300">Daños Económicos</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <Users className="h-8 w-8 text-red-400 mx-auto mb-2" />
              <p className="text-sm text-red-300">Daños Sociales</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Teoría del Fuego",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
              <p className="text-lg text-gray-300">
                <strong className="text-blue-400">Reacción química en cadena</strong> con desprendimiento de 
                <strong className="text-yellow-400"> luz y calor</strong> producidos por la 
                <strong className="text-orange-400"> combustión de una sustancia</strong>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-400">Fases de la Combustión</h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <p className="font-medium text-yellow-300">1. Precalentamiento</p>
                  <p className="text-sm text-gray-400">Aumento de temperatura, expulsión de humedad</p>
                </div>
                <div className="p-3 bg-orange-900/20 border-l-4 border-orange-500 rounded">
                  <p className="font-medium text-orange-300">2. Combustión de Gases</p>
                  <p className="text-sm text-gray-400">Aparecen llamas, 300-1000°C</p>
                </div>
                <div className="p-3 bg-red-900/20 border-l-4 border-red-500 rounded">
                  <p className="font-medium text-red-300">3. Combustión de Carbón</p>
                  <p className="text-sm text-gray-400">Madera arde completamente, quedan cenizas</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Tipos de Combustión</h3>
              <div className="space-y-3">
                <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg">
                  <p className="font-medium text-green-300 mb-2">Completa</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Alta presencia de oxígeno</li>
                    <li>• Sin humo</li>
                    <li>• Ejemplo: cocina de gas</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <p className="font-medium text-red-300 mb-2">Incompleta</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Poca presencia de oxígeno</li>
                    <li>• Gran desprendimiento de humo</li>
                    <li>• Ejemplo: madera húmeda</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Triángulo del Fuego",
      content: (
        <div className="space-y-8 text-center">
          <p className="text-xl text-gray-300">
            Para que un fuego <strong className="text-orange-400">comience o se mantenga</strong>, 
            es imprescindible que <strong className="text-yellow-400">coincidan en tiempo y lugar</strong> estos tres elementos:
          </p>
          <div className="relative">
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <Flame className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-400">COMBUSTIBLE</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">Materiales que pueden arder:</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Hierbas y hojarasca</li>
                    <li>• Matorral y arbustos</li>
                    <li>• Árboles y tocones</li>
                    <li>• Humus y frutos</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wind className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">OXÍGENO</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">Comburente necesario:</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• 21% en aire normal</li>
                    <li>• Mínimo 16% para combustión</li>
                    <li>• Mayor oxígeno = mayor intensidad</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                  <Thermometer className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-400">CALOR</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">Energía de ignición:</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Punto de ignición: 100-200°C</li>
                    <li>• Transferencia de energía</li>
                    <li>• Varía según combustible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500 p-4 rounded-lg">
            <p className="text-yellow-300 font-medium">
              ⚠️ Eliminar cualquiera de estos tres elementos extingue el fuego
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Tetraedro del Fuego",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">
              Modelo <strong className="text-purple-400">avanzado</strong> que incluye la 
              <strong className="text-yellow-400"> reacción en cadena</strong> como cuarto elemento
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <Flame className="h-8 w-8 text-red-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-red-300">Combustible</p>
                </div>
                <div className="text-center p-4 bg-blue-900/20 border border-blue-500 rounded-lg">
                  <Wind className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-300">Oxígeno</p>
                </div>
                <div className="text-center p-4 bg-orange-900/20 border border-orange-500 rounded-lg">
                  <Thermometer className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-orange-300">Calor</p>
                </div>
                <div className="text-center p-4 bg-purple-900/20 border border-purple-500 rounded-lg">
                  <Target className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-300">Reacción en Cadena</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Secuencia de Reacción en Cadena</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="px-3 py-1 bg-red-600 text-white rounded">Llama</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="px-3 py-1 bg-orange-600 text-white rounded">Radiación</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="px-3 py-1 bg-yellow-600 text-white rounded">Vaporización</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="px-3 py-1 bg-green-600 text-white rounded">Combustión</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="px-3 py-1 bg-red-600 text-white rounded">Llama</span>
                </div>
              </div>
              <div className="bg-purple-900/20 border border-purple-500 p-4 rounded-lg">
                <p className="text-purple-300 font-medium mb-2">Importancia del Tetraedro:</p>
                <p className="text-sm text-gray-400">
                  La reacción en cadena mantiene el proceso de combustión. Interrumpir este ciclo 
                  es clave para la extinción efectiva del incendio.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Tipos de Incendios Forestales",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            Clasificación según el <strong className="text-orange-400">estrato de vegetación</strong> afectado
          </p>
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Incendios de Superficie</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-yellow-300 font-medium">MÁS FRECUENTE</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Se propaga cerca del suelo</li>
                    <li>• Afecta vegetación herbácea y matorral</li>
                    <li>• Material poco leñoso</li>
                    <li>• Arde con facilidad y rapidez</li>
                    <li>• Puede promover fuegos de copas</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Incendios de Copas</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-red-300 font-medium">MÁS PELIGROSO</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Pasa a copas de árboles</li>
                    <li>• Avanza donde aire sopla con más fuerza</li>
                    <li>• Muy difícil de combatir</li>
                    <li>• Requiere estrategias especializadas</li>
                    <li>• Mayor riesgo para personal</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-700 border-l-4 border-gray-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Incendios de Subsuelo</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300 font-medium">MÁS SIGILOSO</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Se propaga bajo la superficie</li>
                    <li>• Quema materia orgánica</li>
                    <li>• Progresa lentamente</li>
                    <li>• Sin llamas ni humo visible</li>
                    <li>• Localización muy difícil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-900/20 border border-orange-500 p-4 rounded-lg">
            <p className="text-orange-300 font-medium text-center">
              ⚠️ Un incendio puede involucrar los tres tipos simultáneamente, 
              requiriendo estrategias de combate diferenciadas
            </p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Partes de un Incendio",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            Identificación de <strong className="text-orange-400">componentes estructurales</strong> 
            para estrategias de ataque efectivas
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">CABEZA</h4>
                <p className="text-sm text-gray-400">Parte donde el fuego avanza con mayor rapidez e intensidad</p>
              </div>
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">COLA</h4>
                <p className="text-sm text-gray-400">Parte donde el fuego avanza más lentamente</p>
              </div>
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">FLANCOS</h4>
                <p className="text-sm text-gray-400">Contornos laterales del incendio</p>
              </div>
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-400 mb-2">BORDE</h4>
                <p className="text-sm text-gray-400">Perímetro completo del incendio</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">DEDOS</h4>
                <p className="text-sm text-gray-400">Extensiones estrechas que se proyectan desde el fuego principal</p>
              </div>
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">BOLSAS</h4>
                <p className="text-sm text-gray-400">Partes entre dedos donde el fuego avanza más lentamente</p>
              </div>
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">FOCOS SECUNDARIOS</h4>
                <p className="text-sm text-gray-400">Fuegos por pavesas/chispas fuera del perímetro principal</p>
              </div>
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">ISLAS</h4>
                <p className="text-sm text-gray-400">Porciones de vegetación no consumidas por el fuego</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500 p-4 rounded-lg">
            <p className="text-blue-300 font-medium text-center">
              💡 Identificar correctamente estas partes permite enfocar recursos donde será más efectivo el ataque
            </p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Mecanismos de Propagación",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-orange-400">Formas en que el calor se transfiere</strong> 
            y propaga el incendio forestal
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Conducción
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Transferencia de calor mediante <strong className="text-blue-300">contacto directo</strong> 
                  a través de moléculas de cuerpo sólido
                </p>
                <div className="text-xs text-gray-500">
                  <p className="mb-1"><strong>Buenos conductores:</strong> Cobre, acero, aluminio</p>
                  <p><strong>Malos conductores:</strong> Líquidos, gases, aire</p>
                </div>
              </div>
              
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                  <Flame className="h-5 w-5 mr-2" />
                  Radiación
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Propagación de <strong className="text-orange-300">ondas de calor en línea recta</strong> 
                  y en todas direcciones, a velocidad de la luz
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Ejemplo:</strong> Calor que recibimos alrededor de una fogata
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <Wind className="h-5 w-5 mr-2" />
                  Convección
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-green-300">Movimiento ascendente</strong> del aire caliente. 
                  El aire se expande y eleva
                </p>
                <p className="text-xs text-gray-500">
                  Puede ir en cualquier dirección según las corrientes de aire
                </p>
              </div>
              
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Chispas y Pavesas
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-red-300">Partículas encendidas</strong> transportadas 
                  por corrientes de convección y viento
                </p>
                <p className="text-xs text-red-300 font-medium">
                  ⚠️ Mecanismo MÁS IMPORTANTE para focos secundarios
                </p>
              </div>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
            <p className="text-red-300 font-medium text-center">
              🚨 Las chispas y pavesas son el mayor riesgo para la formación de nuevos focos 
              fuera del perímetro principal del incendio
            </p>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Efectos Destructivos",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-red-400">Impactos multidimensionales</strong> de los incendios forestales
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Efectos Ambientales</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Destrucción de flora y fauna</li>
                  <li>• Erosión del suelo</li>
                  <li>• Alteración del microclima</li>
                  <li>• Pérdida de biodiversidad</li>
                  <li>• Modificación de ciclos hidrológicos</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Efectos sobre el Suelo</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Pérdida sensible de humedad</li>
                  <li>• Destrucción del mantillo</li>
                  <li>• Compactación de tierras</li>
                  <li>• Reducción de fertilidad</li>
                  <li>• Inicio de procesos erosivos</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Efectos Económicos</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Pérdida de madera comercial</li>
                  <li>• Costos de combate y extinción</li>
                  <li>• Daños a infraestructura</li>
                  <li>• Pérdida de actividades turísticas</li>
                  <li>• Alteración del mercado forestal</li>
                </ul>
              </div>
              
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Efectos sobre la Fauna</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Mortalidad directa de animales</li>
                  <li>• Pérdida de hábitat y refugios</li>
                  <li>• Migración forzada</li>
                  <li>• Alteración de cadena alimentaria</li>
                  <li>• Desequilibrio ecológico</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-orange-900/20 border border-orange-500 p-4 rounded-lg">
            <p className="text-orange-300 font-medium text-center">
              ⚠️ Los incendios repetidos ocasionan daños progresivamente superiores, 
              creando ciclos de degradación ambiental
            </p>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Factores de Riesgo",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-orange-400">Condiciones que aumentan</strong> la probabilidad 
            de inicio y propagación de incendios
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Factores Climáticos</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-red-300" />
                    <span className="text-gray-400"><strong className="text-red-300">Sequías:</strong> Períodos prolongados sin lluvia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400"><strong className="text-blue-300">Vientos:</strong> Facilitan propagación y avivamiento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-orange-300" />
                    <span className="text-gray-400"><strong className="text-orange-300">Temperatura:</strong> Altas temperaturas favorecen ignición</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400"><strong className="text-blue-300">Humedad relativa:</strong> Baja humedad aumenta inflamabilidad</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Factores Topográficos</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <strong className="text-orange-300">Pendientes:</strong> Terrenos inclinados facilitan propagación ascendente</li>
                  <li>• <strong className="text-yellow-300">Orientación:</strong> Laderas expuestas al sol más vulnerables</li>
                  <li>• <strong className="text-green-300">Altitud:</strong> Comportamientos diferentes según elevación</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Factores Humanos</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• <strong className="text-red-300">Negligencia:</strong> Fogatas mal apagadas, cigarrillos</li>
                  <li>• <strong className="text-orange-300">Actividades agrícolas:</strong> Quemas que se salen de control</li>
                  <li>• <strong className="text-red-300">Vandalismo:</strong> Incendios intencionales</li>
                  <li>• <strong className="text-yellow-300">Accidentes:</strong> Líneas eléctricas, vehículos</li>
                </ul>
              </div>
              
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Factores de Combustible</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <strong className="text-green-300">Carga:</strong> Cantidad de material combustible disponible</li>
                  <li>• <strong className="text-blue-300">Continuidad:</strong> Conexión facilita propagación</li>
                  <li>• <strong className="text-blue-300">Humedad:</strong> Contenido de agua en vegetación</li>
                  <li>• <strong className="text-orange-300">Tipo:</strong> Diferentes especies, distinta inflamabilidad</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
            <p className="text-red-300 font-medium text-center">
              🚨 La combinación de múltiples factores de riesgo aumenta exponencialmente 
              la probabilidad y severidad de incendios forestales
            </p>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "Principios de Prevención",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-blue-400">Conjunto de medidas, acciones y normas</strong> previas a la ocurrencia, 
              tendientes a <strong className="text-green-400">evitar o minimizar</strong> la incidencia destructiva
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Componentes de Prevención
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-blue-300 font-medium">Planificación</p>
                    <p className="text-gray-400">Estrategias y planes de acción preventiva</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-green-300 font-medium">Organización</p>
                    <p className="text-gray-400">Estructuración de recursos humanos y materiales</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-orange-300 font-medium">Educación</p>
                    <p className="text-gray-400">Capacitación y concientización de la población</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-purple-300 font-medium">Ingeniería</p>
                    <p className="text-gray-400">Mejoramiento de infraestructura preventiva</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Medidas Preventivas Clave</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Eye className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-green-300 font-medium">Cortafuegos</p>
                      <p className="text-gray-400">Franjas sin vegetación combustible</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-300 font-medium">Caminos Forestales</p>
                      <p className="text-gray-400">Acceso para combate y evacuación</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Droplets className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-300 font-medium">Fuentes de Agua</p>
                      <p className="text-gray-400">Naturales y artificiales estratégicamente ubicadas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-4 w-4 text-orange-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-orange-300 font-medium">Educación Comunitaria</p>
                      <p className="text-gray-400">Campesinos, bomberos, turistas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500 p-4 rounded-lg">
            <p className="text-blue-300 font-medium text-center">
              💡 La prevención efectiva requiere la coordinación entre autoridades, 
              comunidades y sectores productivos
            </p>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "Métodos de Control - Principios de Extinción",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-red-400">Aislar el fuego</strong> en un área determinada mediante 
              <strong className="text-orange-400"> líneas que impidan su propagación</strong>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplets className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400">ENFRIAMIENTO</h3>
              <div className="bg-blue-900/20 border border-blue-500 p-4 rounded-lg text-sm">
                <p className="text-blue-300 font-medium mb-2">Método:</p>
                <p className="text-gray-400 mb-3">Reducir temperatura por debajo del punto de ignición</p>
                <p className="text-blue-300 font-medium mb-1">Agente principal:</p>
                <p className="text-gray-400 mb-3">Agua - absorbe calor al evaporarse</p>
                <p className="text-blue-300 font-medium mb-1">Aplicación:</p>
                <p className="text-gray-400">Rocío directo sobre llamas y combustibles</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <Wind className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-400">SOFOCACIÓN</h3>
              <div className="bg-gray-700 border border-gray-500 p-4 rounded-lg text-sm">
                <p className="text-gray-300 font-medium mb-2">Método:</p>
                <p className="text-gray-400 mb-3">Eliminar o reducir oxígeno disponible</p>
                <p className="text-gray-300 font-medium mb-1">Agentes:</p>
                <p className="text-gray-400 mb-3">Vapor, tierra, arena, espuma</p>
                <p className="text-gray-300 font-medium mb-1">Limitación:</p>
                <p className="text-gray-400">Requiere 16% mínimo de oxígeno para combustión</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                <Shovel className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-400">REMOCIÓN</h3>
              <div className="bg-orange-900/20 border border-orange-500 p-4 rounded-lg text-sm">
                <p className="text-orange-300 font-medium mb-2">Método:</p>
                <p className="text-gray-400 mb-3">Eliminar material combustible del área</p>
                <p className="text-orange-300 font-medium mb-1">Técnicas:</p>
                <p className="text-gray-400 mb-3">Cortafuegos, contrafuegos, líneas de control</p>
                <p className="text-orange-300 font-medium mb-1">Estrategia:</p>
                <p className="text-gray-400">Crear barreras sin combustible</p>
              </div>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
            <p className="text-red-300 font-medium text-center">
              ⚠️ La efectividad del control depende de aplicar el principio correcto 
              según las condiciones específicas del incendio
            </p>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "Técnicas de Combate",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-orange-400">Estrategias diferenciadas</strong> según la magnitud 
            e intensidad del incendio
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Ataque Directo
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-300 font-medium mb-2">Descripción:</p>
                  <p className="text-gray-400">Aplicación de agua o agentes extintores directamente sobre las llamas</p>
                </div>
                <div>
                  <p className="text-green-300 font-medium mb-2">Ventajas:</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Rápido y efectivo en fuegos pequeños</li>
                    <li>• Control inmediato del perímetro</li>
                    <li>• Uso eficiente de recursos</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-300 font-medium mb-2">Limitaciones:</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Peligroso en fuegos intensos</li>
                    <li>• Requiere proximidad al fuego</li>
                    <li>• Depende de disponibilidad de agua</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-300 font-medium mb-2">Equipos:</p>
                  <p className="text-gray-400">Mangueras, bombas portátiles, mochilas aspersoras</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Ataque Indirecto
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-blue-300 font-medium mb-2">Descripción:</p>
                  <p className="text-gray-400">Construcción de líneas de control alejadas del fuego</p>
                </div>
                <div>
                  <p className="text-blue-300 font-medium mb-2">Ventajas:</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Más seguro para el personal</li>
                    <li>• Permite mejor planificación</li>
                    <li>• Efectivo en fuegos grandes</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-300 font-medium mb-2">Técnicas:</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Cortafuegos</li>
                    <li>• Contrafuegos controlados</li>
                    <li>• Uso de barreras naturales</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-300 font-medium mb-2">Aplicación:</p>
                  <p className="text-gray-400">Fuegos grandes e intensos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Contrafuego - Técnica Especializada
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-red-300 font-medium mb-2">Definición y Propósito:</p>
                <p className="text-gray-400">Fuego iniciado intencionalmente para eliminar combustible y crear zona quemada que detenga el avance del incendio principal</p>
              </div>
              <div>
                <p className="text-red-300 font-medium mb-2">Riesgos y Requisitos:</p>
                <p className="text-gray-400">Puede salirse de control. Requiere personal muy experimentado y condiciones meteorológicas favorables</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "Herramientas y Equipos",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-orange-400">Equipamiento esencial</strong> para operaciones 
            efectivas de combate
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400 text-center">Herramientas Manuales</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shovel className="h-5 w-5 text-orange-400" />
                    <p className="font-medium text-orange-300">Palas</p>
                  </div>
                  <p className="text-xs text-gray-400">Construcción de líneas, sofocación con tierra</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-5 w-5 text-orange-400" />
                    <p className="font-medium text-orange-300">Hachas</p>
                  </div>
                  <p className="text-xs text-gray-400">Corte de vegetación, creación de cortafuegos</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <TreePine className="h-5 w-5 text-orange-400" />
                    <p className="font-medium text-orange-300">Machetes</p>
                  </div>
                  <p className="text-xs text-gray-400">Limpieza de vegetación baja</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wind className="h-5 w-5 text-orange-400" />
                    <p className="font-medium text-orange-300">Rastrillos</p>
                  </div>
                  <p className="text-xs text-gray-400">Remoción de hojarasca y material fino</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400 text-center">Equipos de Agua</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="h-5 w-5 text-blue-400" />
                    <p className="font-medium text-blue-300">Mangueras</p>
                  </div>
                  <p className="text-xs text-gray-400">Aplicación directa de agua</p>
                </div>
                <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-5 w-5 text-blue-400" />
                    <p className="font-medium text-blue-300">Bombas Portátiles</p>
                  </div>
                  <p className="text-xs text-gray-400">Extracción de fuentes naturales</p>
                </div>
                <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <p className="font-medium text-blue-300">Mochilas Aspersoras</p>
                  </div>
                  <p className="text-xs text-gray-400">Aplicación en áreas inaccesibles</p>
                </div>
                <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="h-5 w-5 text-blue-400" />
                    <p className="font-medium text-blue-300">Tanques Móviles</p>
                  </div>
                  <p className="text-xs text-gray-400">Transporte a zonas sin fuentes</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400 text-center">Comunicación</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Radio className="h-5 w-5 text-green-400" />
                    <p className="font-medium text-green-300">Radios</p>
                  </div>
                  <p className="text-xs text-gray-400">Coordinación entre equipos</p>
                </div>
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="h-5 w-5 text-green-400" />
                    <p className="font-medium text-green-300">Señales Visuales</p>
                  </div>
                  <p className="text-xs text-gray-400">Banderas, espejos</p>
                </div>
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-green-400" />
                    <p className="font-medium text-green-300">Silbatos</p>
                  </div>
                  <p className="text-xs text-gray-400">Alertas de emergencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-900/20 border border-orange-500 p-4 rounded-lg">
            <p className="text-orange-300 font-medium text-center">
              🔧 La selección correcta de herramientas según el tipo de incendio 
              y condiciones del terreno es crucial para la efectividad
            </p>
          </div>
        </div>
      )
    },
    {
      id: 16,
      title: "Procedimientos de Seguridad",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-red-400">La seguridad del personal</strong> siempre tiene 
              <strong className="text-yellow-400"> prioridad sobre cualquier objetivo</strong> de control del incendio
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Evaluación de Riesgos
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-yellow-300 font-medium">Antes del Combate:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Análisis condiciones meteorológicas</li>
                      <li>• Evaluación de topografía</li>
                      <li>• Intensidad del fuego</li>
                      <li>• Recursos disponibles</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-medium">Durante Operaciones:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Monitoreo continuo del comportamiento</li>
                      <li>• Vigilancia de cambios en viento</li>
                      <li>• Comunicación constante</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Zonas de Seguridad
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Identificación de rutas de escape</li>
                  <li>• Áreas libres de combustible</li>
                  <li>• Mantenimiento de vías despejadas</li>
                  <li>• Puntos de encuentro predeterminados</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Equipo de Protección Personal
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400">Vestimenta resistente al fuego</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400">Botas de seguridad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400">Gafas protectoras</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400">Radio portátil individual</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-400">Máscaras contra humo (cuando sea necesario)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Trabajo en Equipo
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Asignación clara de roles</li>
                  <li>• Liderazgo experimentado en cada grupo</li>
                  <li>• Comunicación constante</li>
                  <li>• Rotación regular para evitar fatiga</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Reglas de Oro de Seguridad
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="text-red-300 space-y-1">
                <li>• Si hay dudas sobre seguridad, evacuar inmediatamente</li>
                <li>• Mantener siempre una ruta de escape despejada</li>
              </ul>
              <ul className="text-red-300 space-y-1">
                <li>• Comunicación constante con el comando</li>
                <li>• No trabajar solo en operaciones de riesgo</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: "Información para Bomberos",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-orange-400">Protocolos específicos</strong> para personal 
            profesional de emergencias
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Evaluación Inicial</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <Target className="h-4 w-4 text-red-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-red-300">Tamaño del incendio:</strong> Estimación de área afectada</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <TreePine className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-green-300">Tipo de combustible:</strong> Identificación de vegetación</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Wind className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-blue-300">Condiciones meteorológicas:</strong> Viento, humedad, temperatura</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-orange-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-orange-300">Topografía:</strong> Pendientes, barreras naturales</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-purple-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-purple-300">Recursos disponibles:</strong> Personal, equipos, agua</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Estrategia de Ataque</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-orange-300 font-medium mb-1">Prioridades de Protección:</p>
                    <ol className="text-gray-400 space-y-1">
                      <li>1. <strong className="text-red-300">Vidas humanas</strong></li>
                      <li>2. <strong className="text-yellow-300">Propiedades</strong></li>
                      <li>3. <strong className="text-green-300">Recursos naturales</strong></li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-orange-300 font-medium mb-1">Selección de Tácticas:</p>
                    <p className="text-gray-400">Según condiciones específicas del incendio</p>
                  </div>
                  <div>
                    <p className="text-orange-300 font-medium mb-1">Coordinación:</p>
                    <p className="text-gray-400">Con otras agencias y autoridades</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Monitoreo Continuo</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <Flame className="h-4 w-4 text-red-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-red-300">Comportamiento del fuego:</strong> Observación de cambios</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-green-300">Efectividad de acciones:</strong> Evaluación de progreso</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-blue-300">Condiciones de seguridad:</strong> Vigilancia de riesgos</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Radio className="h-4 w-4 text-purple-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-400"><strong className="text-purple-300">Necesidades adicionales:</strong> Solicitud de refuerzos</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Códigos de Radio</h3>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-red-300 font-medium">"EVACUACIÓN INMEDIATA"</p>
                    <p className="text-gray-400">Peligro inmediato, abandonar área</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-yellow-300 font-medium">"PERSONAL HERIDO"</p>
                    <p className="text-gray-400">Solicitar asistencia médica</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-blue-300 font-medium">"CAMBIO SITUACIÓN"</p>
                    <p className="text-gray-400">Modificación en comportamiento del fuego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 18,
      title: "Información para Campesinos Rurales",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-green-400">Prácticas esenciales</strong> para comunidades rurales 
            en la prevención y respuesta temprana
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Prevención Diaria</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Flame className="h-4 w-4 text-orange-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-green-300 font-medium">Quemas Controladas</p>
                      <p className="text-gray-400">Planificación cuidadosa, obtener permisos necesarios</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <TreePine className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-green-300 font-medium">Mantenimiento de Propiedades</p>
                      <p className="text-gray-400">Limpieza de vegetación seca cerca de estructuras</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Target className="h-4 w-4 text-yellow-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-green-300 font-medium">Almacenamiento Seguro</p>
                      <p className="text-gray-400">Ubicación segura de materiales inflamables</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-green-300 font-medium">Vigilancia Regular</p>
                      <p className="text-gray-400">Observación de condiciones de riesgo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Detección Temprana</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-blue-300 font-medium mb-2">Señales de Alerta:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Humo visible en el horizonte</li>
                      <li>• Olor fuerte a quemado</li>
                      <li>• Animales huyendo del área</li>
                      <li>• Cambios súbitos en el viento</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-300 font-medium mb-1">Acciones Inmediatas:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Contactar autoridades competentes</li>
                      <li>• Proporcionar ubicación precisa</li>
                      <li>• NO intentar combatir incendios grandes solo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Protección de Propiedades</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-orange-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-orange-300 font-medium">Cortafuegos Caseros</p>
                      <p className="text-gray-400">Franjas limpias alrededor de viviendas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Droplets className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-orange-300 font-medium">Fuentes de Agua</p>
                      <p className="text-gray-400">Tanques, pozos fácilmente accesibles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shovel className="h-4 w-4 text-gray-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-orange-300 font-medium">Herramientas Básicas</p>
                      <p className="text-gray-400">Palas, mangueras, baldes disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-orange-300 font-medium">Plan de Evacuación</p>
                      <p className="text-gray-400">Rutas de escape conocidas por la familia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Primeros Auxilios Básicos</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-red-300 font-medium mb-1">Quemaduras:</p>
                    <p className="text-gray-400">Agua fría (no hielo), cubrir con tela limpia</p>
                  </div>
                  <div>
                    <p className="text-red-300 font-medium mb-1">Inhalación de Humo:</p>
                    <p className="text-gray-400">Aire fresco inmediato, posición cómoda</p>
                  </div>
                  <div>
                    <p className="text-red-300 font-medium mb-1">Cuándo Buscar Ayuda:</p>
                    <p className="text-gray-400">Quemaduras extensas, dificultad respiratoria, pérdida de conciencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-900/20 border border-green-500 p-4 rounded-lg">
            <p className="text-green-300 font-medium text-center">
              🏡 La preparación y vigilancia constante de las comunidades rurales 
              es fundamental para la detección temprana y prevención efectiva
            </p>
          </div>
        </div>
      )
    },
    {
      id: 19,
      title: "Casos Prácticos y Ejercicios",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center">
            <strong className="text-purple-400">Aplicación práctica</strong> de conocimientos 
            a través de casos reales y ejercicios de simulación
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Ejercicio 1: Evaluación Inicial</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-800 rounded">
                    <p className="text-purple-300 font-medium mb-2">Escenario:</p>
                    <p className="text-gray-400">Incendio de 2 hectáreas en ladera, viento 15 km/h, temperatura 35°C, vegetación seca</p>
                  </div>
                  <div>
                    <p className="text-purple-300 font-medium mb-2">Tareas:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Identificar tipo de incendio probable</li>
                      <li>• Evaluar factores de riesgo</li>
                      <li>• Seleccionar estrategia de ataque</li>
                      <li>• Determinar recursos necesarios</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Ejercicio 2: Prevención Rural</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-800 rounded">
                    <p className="text-orange-300 font-medium mb-2">Situación:</p>
                    <p className="text-gray-400">Comunidad rural desea implementar plan de prevención para época seca</p>
                  </div>
                  <div>
                    <p className="text-orange-300 font-medium mb-2">Actividades:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Diseñar cortafuegos comunitarios</li>
                      <li>• Planificar fuentes de agua</li>
                      <li>• Establecer sistema de vigilancia</li>
                      <li>• Organizar capacitación local</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Ejercicio 3: Emergencia</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-800 rounded">
                    <p className="text-red-300 font-medium mb-2">Crisis:</p>
                    <p className="text-gray-400">Cambio súbito de viento durante operación, equipo en zona de riesgo</p>
                  </div>
                  <div>
                    <p className="text-red-300 font-medium mb-2">Decisiones:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Protocolo de evacuación</li>
                      <li>• Comunicación de emergencia</li>
                      <li>• Reagrupación del personal</li>
                      <li>• Reevaluación de la estrategia</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Ejercicio 4: Primeros Auxilios</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-800 rounded">
                    <p className="text-blue-300 font-medium mb-2">Incidente:</p>
                    <p className="text-gray-400">Bombero con quemaduras en brazos e inhalación de humo</p>
                  </div>
                  <div>
                    <p className="text-blue-300 font-medium mb-2">Procedimiento:</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Evaluación inicial del herido</li>
                      <li>• Tratamiento de quemaduras</li>
                      <li>• Asistencia respiratoria</li>
                      <li>• Preparación para evacuación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-900/20 border border-green-500 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3 text-center">Evaluación de Conocimientos</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-green-300 font-medium mb-1">Teoría (30%)</p>
                <p className="text-gray-400">Conceptos fundamentales</p>
              </div>
              <div className="text-center">
                <p className="text-green-300 font-medium mb-1">Práctica (50%)</p>
                <p className="text-gray-400">Aplicación de técnicas</p>
              </div>
              <div className="text-center">
                <p className="text-green-300 font-medium mb-1">Seguridad (20%)</p>
                <p className="text-gray-400">Protocolos y procedimientos</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 20,
      title: "Conclusiones y Recursos",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">Puntos Clave de la Capacitación</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Conceptos Fundamentales</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Triángulo y tetraedro del fuego</li>
                  <li>• Tipos de incendios forestales</li>
                  <li>• Mecanismos de propagación</li>
                  <li>• Efectos destructivos</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Prevención Efectiva</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Identificación de factores de riesgo</li>
                  <li>• Medidas preventivas estructurales</li>
                  <li>• Educación comunitaria</li>
                  <li>• Detección temprana</li>
                </ul>
              </div>
              
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Control y Combate</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Principios de extinción</li>
                  <li>• Técnicas de ataque directo e indirecto</li>
                  <li>• Uso correcto de herramientas</li>
                  <li>• Coordinación de equipos</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Seguridad Personal</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Evaluación continua de riesgos</li>
                  <li>• Equipo de protección personal</li>
                  <li>• Protocolos de emergencia</li>
                  <li>• Trabajo en equipo seguro</li>
                </ul>
              </div>
              
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Recursos Adicionales</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-300" />
                    <span className="text-gray-400">Guía interactiva online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-300" />
                    <span className="text-gray-400">Material de referencia USAID/OFDA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-300" />
                    <span className="text-gray-400">Ejercicios prácticos de campo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-300" />
                    <span className="text-gray-400">Actualizaciones periódicas</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Próximos Pasos</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Práctica supervisada en campo</li>
                  <li>• Certificación de competencias</li>
                  <li>• Capacitación continua</li>
                  <li>• Intercambio de experiencias</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500 p-6 rounded-lg text-center">
            <h4 className="text-xl font-semibold text-orange-400 mb-4">Mensaje Final</h4>
            <p className="text-lg text-gray-300 mb-4">
              El conocimiento adquirido en esta capacitación puede <strong className="text-orange-400">salvar vidas</strong>, 
              <strong className="text-green-400"> proteger propiedades</strong> y 
              <strong className="text-blue-400"> conservar recursos naturales</strong>.
            </p>
            <p className="text-gray-400">
              La responsabilidad ahora recae en cada participante para aplicar estos conocimientos 
              con <strong className="text-yellow-400">sabiduría</strong>, <strong className="text-red-400">valor</strong> y 
              <strong className="text-green-400"> compromiso</strong> con la seguridad.
            </p>
            <div className="mt-6 text-2xl">🔥 🚒 🌲</div>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {!isPresenting && (
        <div className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="sm" className="text-gray-300 border-gray-600">
                <Link href="/guia">
                  <Home className="h-4 w-4 mr-2" />
                  Volver a Guía
                </Link>
              </Button>
              <div className="text-gray-300">
                <span className="text-sm">Presentación USAID/OFDA - Incendios Forestales</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPresenting(!isPresenting)}
                className="text-gray-300 border-gray-600"
              >
                {isPresenting ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Salir de Presentación
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Modo Presentación
                  </>
                )}
              </Button>
              <Badge variant="outline" className="text-gray-300 border-gray-600">
                {currentSlide + 1} / {slides.length}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Slide Navigation (Hidden in presentation mode) */}
        {!isPresenting && (
          <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 custom-scrollbar overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Diapositivas</h3>
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    currentSlide === index
                      ? 'bg-orange-600 border-orange-500 text-white'
                      : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="text-xs font-medium opacity-75 mb-1">
                    Diapositiva {slide.id}
                  </div>
                  <div className="text-sm font-medium">{slide.title}</div>
                  {slide.subtitle && (
                    <div className="text-xs opacity-75 mt-1">{slide.subtitle}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Slide Display */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-8">
            <Card className="h-full bg-gray-800 border-gray-700">
              <CardContent className="h-full p-8 flex flex-col">
                {/* Slide Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-orange-400 border-orange-400">
                      Diapositiva {slides[currentSlide].id}
                    </Badge>
                    {!isPresenting && (
                      <div className="text-sm text-gray-500">
                        {currentSlide + 1} de {slides.length}
                      </div>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {slides[currentSlide].title}
                  </h1>
                  {slides[currentSlide].subtitle && (
                    <p className="text-xl text-gray-400">{slides[currentSlide].subtitle}</p>
                  )}
                </div>

                {/* Slide Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {slides[currentSlide].content}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="container mx-auto max-w-4xl flex items-center justify-between">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                className="text-gray-300 border-gray-600 disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>

              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="outline"
                className="text-gray-300 border-gray-600 disabled:opacity-50"
              >
                Siguiente
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
