import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(tab === 'login' ? 'Welcome back!' : 'Account created successfully!');
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl text-gradient-gold">LOUNGE</h1>
          <p className="text-muted-foreground mt-2">Welcome to luxury</p>
        </div>

        <div className="glass-strong rounded-2xl p-8">
          <div className="flex gap-2 mb-8">
            {(['login', 'signup'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-3 rounded-lg text-sm tracking-widest uppercase transition-all ${tab === t ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {t === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'signup' && (
              <input required placeholder="Full Name" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
            )}
            <input required type="email" placeholder="Email Address" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
            <div className="relative">
              <input required type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 pr-10 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {tab === 'signup' && (
              <input required type="password" placeholder="Confirm Password" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
            )}
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase">
              {tab === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {tab === 'login' && (
            <p className="text-center mt-4 text-sm text-muted-foreground">
              <button className="text-primary hover:underline">Forgot password?</button>
            </p>
          )}

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">Or continue with</p>
            <div className="flex gap-3 justify-center mt-3">
              {['Google', 'Apple'].map(provider => (
                <button key={provider} onClick={() => toast.success(`${provider} login (demo)`)} className="glass px-6 py-2.5 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
                  {provider}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
