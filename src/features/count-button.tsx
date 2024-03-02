import { useReducer } from "react"
import { Button } from "@/components/ui/button"


export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <div>
      <button
        onClick={() => increase()}
        type="button"
        className="bg-slate-50 p-6">
        Count:
        <span className="plasmo-inline-flex plasmo-items-center plasmo-justify-center plasmo-w-8 plasmo-h-4 plasmo-ml-2 plasmo-text-xs plasmo-font-semibold plasmo-rounded-full">
          {count}
        </span>
      </button>
      <Button>Test Button</Button>
    </div>

  )
}
