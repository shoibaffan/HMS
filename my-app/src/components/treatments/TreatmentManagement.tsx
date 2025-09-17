import { Card, CardContent } from "@/components/ui/card"
import { Activity, Zap, Thermometer, Snowflake, Target, Waves, Calendar } from "lucide-react"

const therapies = [
  {
    name: "Manual Therapy",
    description: "Hands-on techniques to improve mobility, reduce pain, and restore function.",
    icon: Activity,
    image: "/assets/manual-therapy.jpg",
  },
  {
    name: "Ultrasound Therapy",
    description: "Uses sound waves to promote healing, reduce inflammation, and relieve pain.",
    icon: Zap,
    image: "/assets/ultrasound-therapy.jpg",
  },
  {
    name: "Heat Therapy",
    description: "Application of heat to relax muscles, increase blood flow, and ease stiffness.",
    icon: Thermometer,
    image: "/assets/heat-therapy.jpg",
  },
  {
    name: "Cold Therapy",
    description: "Reduces inflammation, swelling, and pain through cold application.",
    icon: Snowflake,
    image: "/assets/cold-therapy.jpg",
  },
  {
    name: "Dry Needling",
    description: "Targets trigger points to release muscle tension and reduce pain.",
    icon: Target,
    image: "/assets/dry-needling.jpg",
  },
  {
    name: "Hydrotherapy",
    description: "Uses water-based exercises and treatments to improve mobility and reduce pain.",
    icon: Waves,
    image: "/assets/hydrotherapy.jpg",
  },
  {
    name: "Exercise Therapy",
    description: "Structured exercises to restore strength, flexibility, and function.",
    icon: Calendar,
    image: "/assets/exercise-therapy.jpg",
  },
]

export default function TreatmentManagement() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {therapies.map((therapy, index) => (
        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img
            src={therapy.image}
            alt={therapy.name}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <therapy.icon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">{therapy.name}</h3>
            </div>
            <p className="text-gray-600">{therapy.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
