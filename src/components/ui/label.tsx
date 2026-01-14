export function Label({ children }: { children: React.ReactNode }) {
    return (
        <label className="block text-sm text-slate-400 mb-1">{children}</label>
    );
}
