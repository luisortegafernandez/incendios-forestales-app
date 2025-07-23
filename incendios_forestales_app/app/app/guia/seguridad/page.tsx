
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Users,
  Radio,
  Heart,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Eye,
  HardHat
} from 'lucide-react'
import Link from 'next/link'

export default function SeguridadPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="text-green-600 border-green-200">
              Módulo 4
            </Badge>
            <Badge className="bg-green-100 text-green-800">
              Procedimientos de Seguridad
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Protocolos de Seguridad y Protección Personal
          </h1>
          
          <p className="text-lg text-gray-600">
            Procedimientos críticos para proteger la vida del personal durante operaciones de 
            combate de incendios forestales y situaciones de emergencia.
          </p>
        </div>

        {/* Evaluación de Riesgos */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Eye className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Evaluación de Riesgos</CardTitle>
            </div>
            <CardDescription>
              Análisis continuo de condiciones para tomar decisiones seguras
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Antes del Combate</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Análisis condiciones meteorológicas</li>
                  <li>• Evaluación de topografía</li>
                  <li>• Intensidad del fuego</li>
                  <li>• Recursos disponibles</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900 mb-2">Durante Operaciones</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Monitoreo continuo del comportamiento</li>
                  <li>• Vigilancia de cambios en viento</li>
                  <li>• Comunicación constante</li>
                  <li>• Estado físico del personal</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">Zonas de Seguridad</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Identificación de rutas de escape</li>
                  <li>• Áreas libres de combustible</li>
                  <li>• Mantenimiento de vías</li>
                  <li>• Puntos de encuentro</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equipo de Protección Personal */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <HardHat className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Equipo de Protección Personal (EPP)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-red-600 mr-2" />
                    Protección Corporal
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Vestimenta Resistente al Fuego</p>
                        <p className="text-xs text-gray-600">Materiales retardantes, manga larga, pantalones largos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Botas de Seguridad</p>
                        <p className="text-xs text-gray-600">Suela antideslizante, protección de tobillo</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Casco de Protección</p>
                        <p className="text-xs text-gray-600">Contra caída de objetos y calor radiante</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Eye className="h-5 w-5 text-blue-600 mr-2" />
                    Protección Visual y Respiratoria
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Gafas Protectoras</p>
                        <p className="text-xs text-gray-600">Contra humo, ceniza y partículas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Máscaras contra Humo</p>
                        <p className="text-xs text-gray-600">Cuando sea necesario, filtros adecuados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Radio className="h-5 w-5 text-green-600 mr-2" />
                    Comunicación
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Radio Portátil</p>
                        <p className="text-xs text-gray-600">Para cada miembro del equipo</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Silbato de Emergencia</p>
                        <p className="text-xs text-gray-600">Señales de peligro inmediato</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                    Adicionales
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Linterna</p>
                        <p className="text-xs text-gray-600">Con baterías de repuesto</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Botiquín Personal</p>
                        <p className="text-xs text-gray-600">Suministros básicos de primeros auxilios</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Protocolos de Emergencia */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Protocolos de Emergencia</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-3">Señales de Peligro</h4>
                  <ul className="text-sm text-red-800 space-y-2">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Cambios súbitos en dirección del viento</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Aumento repentino de intensidad</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Aparición de columnas de humo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Sonidos inusuales del fuego</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-3">Procedimiento de Evacuación</h4>
                  <ol className="text-sm text-green-800 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                      <span>Activar señal de alarma (radio, silbato)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                      <span>Dirigirse a ruta de escape predeterminada</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                      <span>Mantener comunicación por radio</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">4</span>
                      <span>Reagruparse en punto de encuentro</span>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                  <Radio className="h-5 w-5 text-yellow-600 mr-2" />
                  Códigos de Radio para Emergencias
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-yellow-900">"EVACUACIÓN INMEDIATA"</p>
                    <p className="text-yellow-800">Peligro inmediato, abandonar área</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">"PERSONAL HERIDO"</p>
                    <p className="text-yellow-800">Solicitar asistencia médica</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">"CAMBIO SITUACIÓN"</p>
                    <p className="text-yellow-800">Modificación en comportamiento del fuego</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trabajo en Equipo */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Trabajo en Equipo y Coordinación</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Coordinación</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Asignación clara de roles y responsabilidades</li>
                    <li>• Cadena de mando definida</li>
                    <li>• Objetivos específicos para cada equipo</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Comunicación</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Mantenimiento de contacto constante</li>
                    <li>• Reportes regulares de estado</li>
                    <li>• Claridad en las instrucciones</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Supervisión</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Liderazgo experimentado en cada grupo</li>
                    <li>• Monitoreo del estado del personal</li>
                    <li>• Toma de decisiones informadas</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Rotación</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Descanso regular para evitar fatiga</li>
                    <li>• Hidratación y alimentación adecuada</li>
                    <li>• Relevos programados en tareas intensas</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Primeros Auxilios Básicos */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Primeros Auxilios en Incendios</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">Quemaduras</h4>
                  <ol className="text-sm text-red-800 space-y-1">
                    <li>1. Enfriar con agua fría (no hielo)</li>
                    <li>2. Cubrir con tela limpia y húmeda</li>
                    <li>3. No aplicar pomadas o aceites</li>
                    <li>4. Buscar atención médica inmediata</li>
                  </ol>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Inhalación de Humo</h4>
                  <ol className="text-sm text-blue-800 space-y-1">
                    <li>1. Trasladar a aire fresco inmediatamente</li>
                    <li>2. Aflojar ropa ajustada</li>
                    <li>3. Posición cómoda para respirar</li>
                    <li>4. Monitorear signos vitales</li>
                  </ol>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900 mb-2">Evacuación de Heridos</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Evaluar estado antes de mover</li>
                    <li>• Técnicas de carga segura</li>
                    <li>• Proteger vías respiratorias</li>
                    <li>• Mantener calor corporal</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-2">Cuándo Buscar Ayuda</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Quemaduras extensas o profundas</li>
                    <li>• Dificultad respiratoria severa</li>
                    <li>• Pérdida de conciencia</li>
                    <li>• Lesiones en ojos o cara</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Critical Safety Message */}
        <Card className="mb-8 bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2 text-lg">Mensaje Crítico de Seguridad</h4>
                <p className="text-red-800 mb-4">
                  <strong>La seguridad del personal siempre tiene prioridad sobre cualquier objetivo de control del incendio.</strong> 
                  Ningún recurso natural o propiedad vale más que una vida humana.
                </p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-900 font-medium mb-2">Reglas de Oro:</p>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Si hay dudas sobre la seguridad, evacuar inmediatamente</li>
                    <li>• Mantener siempre una ruta de escape despejada</li>
                    <li>• Comunicación constante con el comando</li>
                    <li>• No trabajar solo en operaciones de riesgo</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/guia/control">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior: Control
            </Link>
          </Button>
          
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/presentacion">
              Ver Presentación
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
