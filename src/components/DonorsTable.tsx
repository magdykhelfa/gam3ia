import { useState } from "react";
import { DataTable } from "./DataTable";
import { donors as initialDonors, Donor } from "@/data/charityData";
import { useToast } from "@/hooks/use-toast";

export const DonorsTable = () => {
  const [data, setData] = useState<Donor[]>(initialDonors);
  const { toast } = useToast();

  const columns = [
    { key: "name", label: "اسم المتبرع" },
    { key: "phone", label: "رقم التليفون" },
    { key: "phone2", label: "رقم تليفون آخر" },
    { key: "address", label: "العنوان" },
    { key: "notes", label: "ملاحظات", render: (item: Donor) => (
      item.notes ? <span className="badge-info">{item.notes}</span> : "-"
    )},
  ];

  const formFields = [
    { key: "name", label: "اسم المتبرع", type: "text" as const, required: true },
    { key: "phone", label: "رقم التليفون", type: "text" as const, required: true },
    { key: "phone2", label: "رقم تليفون آخر", type: "text" as const },
    { key: "landline", label: "رقم التليفون الأرضي", type: "text" as const },
    { key: "address", label: "العنوان التفصيلي", type: "text" as const },
    { key: "notes", label: "ملاحظات", type: "text" as const },
  ];

  const handleAdd = (item: Omit<Donor, "id">) => {
    const newItem = { ...item, id: Math.max(...data.map(d => d.id), 0) + 1 } as Donor;
    setData([...data, newItem]);
    toast({ title: "تم الإضافة", description: "تم إضافة المتبرع بنجاح" });
  };

  const handleEdit = (item: Donor) => {
    setData(data.map(d => d.id === item.id ? item : d));
    toast({ title: "تم التعديل", description: "تم تعديل بيانات المتبرع بنجاح" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    toast({ title: "تم الحذف", description: "تم حذف المتبرع بنجاح", variant: "destructive" });
  };

  return (
    <DataTable
      title="بيانات المتبرعين"
      data={data}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
    />
  );
};
