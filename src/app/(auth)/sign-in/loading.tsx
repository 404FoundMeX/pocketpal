export default function Loading() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex w-full flex-col items-center justify-center md:py-10 relative z-10">
        <div className="animate-pulse md:w-[400px]">
          <div className="mb-4 h-10 rounded-lg bg-gray-200"></div>
          <div className="space-y-4">
            <div className="h-12 rounded bg-gray-200"></div>
            <div className="h-12 rounded bg-gray-200"></div>
            <div className="h-10 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
