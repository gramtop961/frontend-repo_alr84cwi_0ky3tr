import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">A safe bridge between individuals and affirming organizations</h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">Shades of Hue connects LGBTQIA+ folks to verified organizations for help and support. Real-time resolution center — monitored by admins — keeps conversations respectful and safe.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#portals" className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium">Explore Portals</a>
              <a href="#resolution" className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-sm font-medium">Open Resolution Center</a>
            </div>
          </div>
          <div className="relative rounded-2xl bg-white/40 dark:bg-black/30 border border-black/5 dark:border-white/10 p-5 shadow-xl">
            <div className="grid grid-cols-3 gap-3 text-sm">
              <Stat label="Verified Orgs" value="120+" />
              <Stat label="Active Users" value="8,400" />
              <Stat label="Issues Resolved" value="15,200" />
            </div>
            <div className="mt-5 text-xs text-muted-foreground">New visitors can only register as users. Admins create new admins and organizations.</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 dark:from-black dark:via-transparent dark:to-black/30" />
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/30 p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
