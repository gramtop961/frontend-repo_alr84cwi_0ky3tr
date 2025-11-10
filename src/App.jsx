import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portals from './components/Portals';
import ResolutionCenterPreview from './components/ResolutionCenterPreview';

function Footer() {
  return (
    <footer id="about" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold">Shades of Hue</h4>
          <p className="text-sm text-muted-foreground mt-2">A safe, vibrant space connecting LGBTQIA+ individuals to affirming organizations with admin-moderated resolution center.</p>
        </div>
        <div className="text-sm">
          <h5 className="font-medium">Safety & Access</h5>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>New users can only sign up as User</li>
            <li>Admins create organizations & admins</li>
            <li>Transparent request statuses</li>
          </ul>
        </div>
        <div className="text-sm">
          <h5 className="font-medium">Contact</h5>
          <p className="mt-2 text-muted-foreground">For partnerships and verification, reach out to our admin team.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-white dark:from-black dark:via-black dark:to-black text-foreground">
      <Navbar />
      <main className="space-y-12">
        <Hero />
        <Portals />
        <ResolutionCenterPreview />
      </main>
      <Footer />
    </div>
  );
}
