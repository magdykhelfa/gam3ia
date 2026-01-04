import { useState } from "react";
import { 
  Users, 
  Heart, 
  HandCoins, 
  TrendingUp, 
  TrendingDown, 
  Receipt, 
  LayoutDashboard,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
  { id: "members", label: "الأعضاء", icon: Users },
  { id: "beneficiaries", label: "المستفيدين", icon: Heart },
  { id: "donors", label: "المتبرعين", icon: HandCoins },
  { id: "incoming", label: "التبرعات الواردة", icon: TrendingUp },
  { id: "outgoing", label: "التبرعات المنصرفة", icon: TrendingDown },
  { id: "expenses", label: "المصروفات", icon: Receipt },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-card border border-border shadow-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 right-0 z-40 w-72 bg-card border-l border-border flex flex-col transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">جمعية الخير</h1>
              <p className="text-xs text-muted-foreground">لتنمية المجتمع بمسير</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "nav-item w-full",
                activeTab === item.id && "active"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground text-center">
              مسجلة برقم 1899 لسنة 2012
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
