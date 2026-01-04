import { Users, Heart, HandCoins, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { members, beneficiaries, donors, incomingDonations, outgoingDonations, expenses } from "@/data/charityData";

const stats = [
  {
    label: "الأعضاء",
    value: members.length,
    icon: Users,
    color: "primary",
    bgColor: "bg-charity-green-light",
    textColor: "text-primary",
  },
  {
    label: "المستفيدين",
    value: beneficiaries.length,
    icon: Heart,
    color: "accent",
    bgColor: "bg-charity-gold-light",
    textColor: "text-charity-gold",
  },
  {
    label: "المتبرعين",
    value: donors.length,
    icon: HandCoins,
    color: "blue",
    bgColor: "bg-charity-blue-light",
    textColor: "text-charity-blue",
  },
  {
    label: "التبرعات الواردة",
    value: incomingDonations.reduce((sum, d) => sum + (d.unit === "أموال" ? d.amount : 0), 0).toLocaleString("ar-EG"),
    suffix: "ج.م",
    icon: TrendingUp,
    color: "primary",
    bgColor: "bg-charity-green-light",
    textColor: "text-primary",
  },
  {
    label: "التبرعات المنصرفة",
    value: outgoingDonations.filter(d => d.unit === "أموال").length,
    suffix: "عملية",
    icon: TrendingDown,
    color: "accent",
    bgColor: "bg-charity-gold-light",
    textColor: "text-charity-gold",
  },
  {
    label: "إجمالي المصروفات",
    value: expenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString("ar-EG"),
    suffix: "ج.م",
    icon: Wallet,
    color: "destructive",
    bgColor: "bg-destructive/10",
    textColor: "text-destructive",
  },
];

export const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">لوحة التحكم</h2>
        <p className="text-muted-foreground mt-1">نظرة عامة على بيانات الجمعية</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                  {stat.suffix && <span className="text-lg font-normal text-muted-foreground mr-1">{stat.suffix}</span>}
                </p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Incoming */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            آخر التبرعات الواردة
          </h3>
          <div className="space-y-3">
            {incomingDonations.slice(0, 3).map((donation) => (
              <div key={donation.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{donation.donorName}</p>
                  <p className="text-sm text-muted-foreground">{donation.contents}</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-primary">{donation.amount.toLocaleString("ar-EG")}</p>
                  <p className="text-xs text-muted-foreground">{donation.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Outgoing */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-accent" />
            آخر التبرعات المنصرفة
          </h3>
          <div className="space-y-3">
            {outgoingDonations.slice(0, 3).map((donation) => (
              <div key={donation.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{donation.beneficiaryName}</p>
                  <p className="text-sm text-muted-foreground">{donation.contents}</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-accent">{donation.amount}</p>
                  <p className="text-xs text-muted-foreground">{donation.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Members List Preview */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          أعضاء مجلس الإدارة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.filter(m => m.associationRole !== "عضو").map((member) => (
            <div key={member.id} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">{member.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{member.name.split(" ").slice(0, 2).join(" ")}</p>
                <p className="text-xs text-muted-foreground">{member.associationRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
