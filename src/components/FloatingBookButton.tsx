import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

export default function FloatingBookButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full shadow-gold flex items-center gap-2 hover:scale-105 transition-transform duration-300 text-sm font-semibold tracking-wide"
    >
      <CalendarDays size={18} />
      Book Now
    </Link>
  );
}
