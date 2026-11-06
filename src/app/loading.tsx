export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-surface)] flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag)] animate-pulse" />
      <div className="space-y-3 w-full max-w-md px-6">
        <div className="h-3 bg-[var(--bg-tag)] rounded-full w-1/3 mx-auto animate-pulse" />
        <div className="h-8 bg-[var(--bg-tag)] rounded-full w-3/4 mx-auto animate-pulse" />
        <div className="h-4 bg-[var(--bg-tag)] rounded-full w-2/3 mx-auto animate-pulse" />
      </div>
      <div className="flex gap-2 mt-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-9 w-28 bg-[var(--bg-tag)] rounded-full animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
