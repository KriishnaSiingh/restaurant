import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, updateQuantity, removeItem, clear, total } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md glass-strong shadow-2xl animate-fade-up flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl text-foreground">Your Cart</h2>
          <button onClick={onClose} className="text-foreground/50 hover:text-foreground"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
          ) : items.map(item => (
            <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              {item.image && <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md object-cover" />}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                <p className="text-sm text-primary">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground/50 hover:text-foreground"><Minus size={12} /></button>
                <span className="text-sm w-5 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground/50 hover:text-foreground"><Plus size={12} /></button>
                <button onClick={() => removeItem(item.id)} className="ml-1 text-destructive/70 hover:text-destructive"><Trash2 size={14} /></button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between text-foreground">
              <span className="font-medium">Total</span>
              <span className="font-display text-xl text-primary">${total.toFixed(2)}</span>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest uppercase text-xs"
              onClick={() => { clear(); onClose(); toast.success('Order placed successfully!'); }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
