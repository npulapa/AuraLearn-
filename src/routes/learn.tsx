import { createFileRoute } from "@tanstack/react-router";
import { SHAPE_VIDEOS } from "@/lib/history";
import type { ShapeName } from "@/lib/shape-predict";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — AuraDraw" },
      { name: "description", content: "Curated learning videos about circles, squares, rectangles and triangles." },
    ],
  }),
  component: LearnPage,
});

const shapes: ShapeName[] = ["Circle", "Square", "Rectangle", "Triangle"];

function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Learn</p>
      <h1 className="mt-1 text-3xl md:text-4xl font-black">Shape Learning Library</h1>
      <p className="mt-1 text-sm text-muted-foreground">Fun educational videos for each shape.</p>
      <div className="mt-6 space-y-8">
        {shapes.map((s) => (
          <section key={s}>
            <h2 className="text-2xl font-black text-aura-gradient">{s}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {SHAPE_VIDEOS[s].map((v) => (
                <a key={v.url} href={v.url} target="_blank" rel="noreferrer" className="glass-card flex items-center gap-3 rounded-2xl p-3 hover:scale-[1.01] transition-transform">
                  <img src={v.thumb} alt={v.title} className="h-20 w-32 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{v.title}</p>
                    <p className="text-xs text-muted-foreground">YouTube · Watch</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}