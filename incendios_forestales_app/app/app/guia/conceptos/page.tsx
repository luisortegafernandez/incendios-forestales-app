
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Flame, 
  Wind, 
  Thermometer,
  TreePine,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Zap,
  Activity
} from 'lucide-react'
import Link from 'next/link'

export default function ConceptosPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              Módulo 1
            </Badge>
            <Badge className="bg-orange-100 text-orange-800">
              Conceptos Fundamentales
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fundamentos del Fuego y Comportamiento
          </h1>
          
          <p className="text-lg text-gray-600">
            Comprende la ciencia básica detrás de los incendios forestales: cómo se inician, 
            se mantienen y se propagan en el ecosistema forestal.
          </p>
        </div>

        {/* Triángulo del Fuego */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Flame className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Triángulo del Fuego</CardTitle>
            </div>
            <CardDescription>
              Para que un fuego comience o se mantenga, deben coincidir tres elementos esenciales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Flame className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Combustible</h3>
                <p className="text-sm text-gray-600">
                  Materiales vivos o muertos que pueden arder: hierbas, hojarasca, matorral, árboles
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wind className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Oxígeno</h3>
                <p className="text-sm text-gray-600">
                  21% en el aire normal. Se requiere mínimo 16% para mantener la combustión
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Thermometer className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Calor</h3>
                <p className="text-sm text-gray-600">
                  Punto de ignición entre 100°C y 200°C según el tipo de combustible forestal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tetraedro del Fuego */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Tetraedro del Fuego</CardTitle>
            </div>
            <CardDescription>
              Modelo avanzado que incluye la reacción en cadena como cuarto elemento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-lg">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="font-medium">Llama</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="font-medium">Radiación de calor</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="font-medium">Vaporización</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="font-medium">Combustión de vapores</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="font-medium text-orange-600">Llama</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tipos de Incendios */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Tipos de Incendios Forestales</CardTitle>
            </div>
            <CardDescription>
              Clasificación según el estrato de vegetación afectado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Incendios de Superficie</h4>
                <p className="text-gray-600 mb-2">
                  <strong>Más frecuente:</strong> Se propaga cerca del suelo, afecta vegetación herbácea y matorral.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Material poco leñoso que se deseca rápidamente</li>
                  <li>• Arde con facilidad y rapidez</li>
                  <li>• Puede promover fuegos de copas por elevación de llamas</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Incendios de Copas</h4>
                <p className="text-gray-600 mb-2">
                  <strong>Más peligroso:</strong> Pasa desde superficie hasta copas de árboles.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Avanza donde el aire sopla con más fuerza</li>
                  <li>• Las dificultades para combatir aumentan considerablemente</li>
                  <li>• Requiere estrategias especializadas de control</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-gray-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Incendios de Subsuelo</h4>
                <p className="text-gray-600 mb-2">
                  <strong>Sigiloso:</strong> Se propaga bajo la superficie quemando materia orgánica.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Progresa lentamente, sin llamas ni humo visible</li>
                  <li>• Localización muy difícil</li>
                  <li>• Se inicia desde fuegos de superficie o raíces no apagadas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mecanismos de Propagación */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Mecanismos de Propagación</CardTitle>
            </div>
            <CardDescription>
              Formas en que el calor se transfiere y propaga el incendio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Conducción</h4>
                  <p className="text-sm text-blue-800">
                    Transferencia de calor mediante contacto directo a través de moléculas. 
                    Depende de la conductividad térmica del material.
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900 mb-2">Radiación</h4>
                  <p className="text-sm text-orange-800">
                    Propagación de ondas de calor en línea recta y en todas direcciones, 
                    a la velocidad de la luz, sin desplazar aire.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-2">Convección</h4>
                  <p className="text-sm text-green-800">
                    Movimiento ascendente del aire caliente. El aire se expande y eleva, 
                    pero puede ir en cualquier dirección según las corrientes.
                  </p>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">Chispas y Pavesas</h4>
                  <p className="text-sm text-red-800">
                    Partículas encendidas transportadas por corrientes y viento. 
                    Uno de los mecanismos más importantes para focos secundarios.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning Box */}
        <Card className="mb-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Punto Clave para Bomberos</h4>
                <p className="text-yellow-800">
                  Las <strong>chispas y pavesas</strong> son el mecanismo más crítico para la formación de 
                  focos secundarios. Siempre evalúe la dirección del viento y mantenga vigilancia 
                  en áreas alejadas del perímetro principal del incendio.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/guia">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Módulos
            </Link>
          </Button>
          
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/guia/prevencion">
              Siguiente: Prevención
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
