import { User, Building2, ShieldCheck, MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/50 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-fuchsia-500 to-emerald-400 shadow-inner" />
          <div className="leading-tight">
            <p className="font-semibold text-base tracking-tight">Shades of Hue</p>
            <p className="text-xs text-muted-foreground">Support • Safety • Solidarity</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a className="hover:text-foreground transition" href="#portals">Portals</a>
          <a className="hover:text-foreground transition" href="#resolution">Resolution Center</a>
          <a className="hover:text-foreground transition" href="#about">About</a>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">
            <ShieldCheck size={14} /> Admin-monitored
          </span>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-sm hover:opacity-90">
            <User size={16} /> Join as User
          </button>
        </div>
      </div>
    </header>
  );
}
