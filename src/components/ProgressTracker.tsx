import { CheckCircle2, Circle, Loader2 } from "lucide-react"

const steps = ["Ordered", "Packed", "Shipped", "Out for Delivery", "Delivered"]

export function ProgressTracker({ status }) {
  const currentStep = steps.indexOf(status) + 1

  return (
    <div className="flex justify-between items-center my-6">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <div className="flex items-center">
            {index < currentStep - 1 && <CheckCircle2 className="text-primary h-6 w-6" />}
            {index === currentStep - 1 && <Loader2 className="text-primary h-6 w-6 animate-spin" />}
            {index > currentStep - 1 && <Circle className="text-muted-foreground h-6 w-6" />}
            {index < steps.length - 1 && (
              <div className={`h-1 w-12 mx-2 ${index < currentStep - 1 ? "bg-primary" : "bg-muted-foreground"}`} />
            )}
          </div>
          <span className="text-xs mt-1">{step}</span>
        </div>
      ))}
    </div>
  )
}

