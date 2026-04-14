import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: Props) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`mb-12 ${centered ? 'text-center' : ''}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s ease-out' }}>
      {subtitle && <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{subtitle}</p>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">{title}</h2>
      <div className="line-gold w-24 mx-auto mt-4" style={{ marginLeft: centered ? 'auto' : '0' }} />
    </div>
  );
}
