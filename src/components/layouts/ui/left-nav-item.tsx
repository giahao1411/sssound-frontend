interface LeftNavItemProps {
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
}

export default function LeftNavItem({
    icon,
    label,
    collapsed,
}: LeftNavItemProps) {
    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-muted cursor-pointer">
            {icon}
            {!collapsed && <span className="text-sm">{label}</span>}
        </div>
    );
}
