import { useState } from "react";
import { DataTable } from "./DataTable";
import { members as initialMembers, Member } from "@/data/charityData";
import { useToast } from "@/hooks/use-toast";

export const MembersTable = () => {
  const [data, setData] = useState<Member[]>(initialMembers);
  const { toast } = useToast();

  const columns = [
    { key: "name", label: "الاسم" },
    { key: "nationalId", label: "الرقم القومي" },
    { key: "associationRole", label: "الوظيفة بالجمعية" },
    { key: "governmentJob", label: "الوظيفة الحكومية" },
    { key: "phone", label: "رقم التليفون" },
    { key: "village", label: "القرية" },
    { key: "age", label: "العمر", render: (item: Member) => <span>{item.age} سنة</span> },
  ];

  const formFields = [
    { key: "name", label: "الاسم رباعي", type: "text" as const, required: true },
    { key: "nationalId", label: "الرقم القومي", type: "text" as const, required: true },
    { key: "governmentJob", label: "الوظيفة الحكومية", type: "text" as const },
    { key: "associationRole", label: "الوظيفة بالجمعية", type: "select" as const, options: ["رئيس مجلس الاداره", "نائب الرئيس", "امين الصندوق", "سكرتير", "عضو"] },
    { key: "phone", label: "رقم التليفون", type: "text" as const, required: true },
    { key: "phone2", label: "رقم تليفون آخر", type: "text" as const },
    { key: "governorate", label: "المحافظة", type: "text" as const },
    { key: "center", label: "المركز", type: "text" as const },
    { key: "village", label: "القرية", type: "text" as const },
    { key: "address", label: "العنوان التفصيلي", type: "text" as const },
    { key: "age", label: "العمر", type: "number" as const },
  ];

  const handleAdd = (item: Omit<Member, "id">) => {
    const newItem = { ...item, id: Math.max(...data.map(d => d.id)) + 1 } as Member;
    setData([...data, newItem]);
    toast({ title: "تم الإضافة", description: "تم إضافة العضو بنجاح" });
  };

  const handleEdit = (item: Member) => {
    setData(data.map(d => d.id === item.id ? item : d));
    toast({ title: "تم التعديل", description: "تم تعديل بيانات العضو بنجاح" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    toast({ title: "تم الحذف", description: "تم حذف العضو بنجاح", variant: "destructive" });
  };

  return (
    <DataTable
      title="بيانات الأعضاء"
      data={data}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
    />
  );
};
