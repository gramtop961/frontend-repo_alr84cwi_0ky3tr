import { User, Building2, Shield } from "lucide-react";

const PortalCard = ({ title, description, bulletPoints, icon: Icon, href }) => (
  <a href={href} className="group flex flex-col rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/30 p-5 hover:shadow-lg transition">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-emerald-400 grid place-items-center text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    <ul className="mt-4 space-y-1 text-sm">
      {bulletPoints.map((b, i) => (
        <li key={i} className="flex gap-2"><span className="text-fuchsia-500">•</span><span>{b}</span></li>
      ))}
    </ul>
    <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">Enter</span>
  </a>
);

export default function Portals() {
  return (
    <section id="portals" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Choose your portal</h2>
          <p className="text-muted-foreground mt-2">Each portal unlocks the right tools for your role. New visitors can only sign up as users. Admins are responsible for creating organizations and other admins.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <PortalCard
            title="User Portal"
            description="Discover affirming organizations, send help requests, chat in the resolution center, and cancel requests before work starts."
            bulletPoints={["Browse orgs with descriptions", "Send & cancel requests (if not started)", "Real-time chat monitored by admins"]}
            icon={User}
            href="#user"
          />
          <PortalCard
            title="Organization Portal"
            description="Respond to incoming requests: accept or decline with a reason, update status from not started to in progress to completed, and chat with users."
            bulletPoints={["Accept/decline with reason", "Update work status", "Chat in resolution center"]}
            icon={Building2}
            href="#org"
          />
          <PortalCard
            title="Admin Portal"
            description="Full oversight: create organizations and admins, moderate chats, manage users, categories, and platform reports."
            bulletPoints={["Create admins & orgs", "Monitor all chats", "Manage users & categories"]}
            icon={Shield}
            href="#admin"
          />
        </div>
      </div>
    </section>
  );
}
