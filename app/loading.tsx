import { ResponsiveContainer } from "@/components/responsive-container"

export default function Loading() {
  return (
    <ResponsiveContainer className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-red-600 border-t-transparent"></div>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </ResponsiveContainer>
  )
}
