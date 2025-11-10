import { MessageSquare, ShieldCheck } from "lucide-react";

export default function ResolutionCenterPreview() {
  return (
    <section id="resolution" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Resolution Center</h2>
            <p className="mt-2 text-muted-foreground">A real-time, admin-moderated chat connecting users and organizations to resolve requests safely. Admins can step in, review transcripts, and flag messages at any time.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Live chat between user and organization</li>
              <li>• Admin supervision and reporting</li>
              <li>• Request timeline with statuses: Not started → In progress → Completed</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium">Open Demo</button>
              <button className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-sm font-medium">Learn More</button>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm"><MessageSquare size={16} /> Live Room</div>
              <div className="flex items-center gap-1 text-xs text-emerald-600"><ShieldCheck size={14} /> Admin Monitoring</div>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <ChatBubble who="User" msg="Hi, I'm looking for legal aid regarding name change." />
              <ChatBubble who="Org" msg="You're welcome here. We'll guide you through the steps. Can we confirm some details?" align="right" />
              <ChatBubble who="Admin" msg="Reminder: Keep PII private until trust is established." subtle />
              <ChatBubble who="User" msg="Understood. Can I schedule a call?" />
            </div>
            <div className="mt-4">
              <input className="w-full px-3 py-2 rounded-lg bg-white border border-black/5 dark:bg-black/40 dark:border-white/10 text-sm" placeholder="Type a message…" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ who, msg, align = "left", subtle = false }) {
  const base = "max-w-[85%] rounded-xl px-3 py-2 text-sm";
  const styles = subtle
    ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-200"
    : align === "right"
    ? "ml-auto bg-blue-600 text-white"
    : "bg-white dark:bg-black/50 border border-black/5 dark:border-white/10";

  return (
    <div className={styles + " " + base}>
      <div className="text-[10px] uppercase tracking-wide opacity-70 mb-1">{who}</div>
      <div>{msg}</div>
    </div>
  );
}
