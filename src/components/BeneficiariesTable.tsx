import { useState } from "react";
import { DataTable } from "./DataTable";
import { beneficiaries as initialBeneficiaries, Beneficiary, classificationOptions, pensionTypeOptions, maritalStatusOptions, villageOptions } from "@/data/charityData";
import { useToast } from "@/hooks/use-toast";

export const BeneficiariesTable = () => {
  const [data, setData] = useState<Beneficiary[]>(initialBeneficiaries);
  const { toast } = useToast();

  const columns = [
    { key: "code", label: "الكود" },
    { key: "name", label: "اسم المستفيد" },
    { key: "classification", label: "التصنيف", render: (item: Beneficiary) => (
      <span className="badge-success">{item.classification}</span>
    )},
    { key: "pensionType", label: "نوع المعاش" },
    { key: "pensionValue", label: "قيمة المعاش", render: (item: Beneficiary) => (
      <span className="font-semibold text-primary">{item.pensionValue} ج.م</span>
    )},
    { key: "maritalStatus", label: "الحالة الاجتماعية" },
    { key: "childrenCount", label: "عدد الأولاد" },
    { key: "phone", label: "رقم التليفون" },
  ];

  const formFields = [
    { key: "code", label: "كود المستفيد", type: "text" as const, required: true },
    { key: "nationalId", label: "الرقم القومي", type: "text" as const, required: true },
    { key: "name", label: "اسم المستفيد رباعي", type: "text" as const, required: true },
    { key: "classification", label: "تصنيف المستفيد", type: "select" as const, options: classificationOptions, required: true },
    { key: "pensionType", label: "نوع المعاش", type: "select" as const, options: pensionTypeOptions },
    { key: "pensionValue", label: "قيمة المعاش", type: "number" as const },
    { key: "maritalStatus", label: "الحالة الاجتماعية", type: "select" as const, options: maritalStatusOptions },
    { key: "childrenCount", label: "عدد الأولاد", type: "number" as const },
    { key: "religion", label: "الديانة", type: "select" as const, options: ["مسلم", "مسيحي"] },
    { key: "gender", label: "النوع", type: "select" as const, options: ["ذكر", "أنثي"] },
    { key: "age", label: "العمر", type: "number" as const },
    { key: "governorate", label: "المحافظة", type: "text" as const },
    { key: "center", label: "المركز", type: "text" as const },
    { key: "village", label: "القرية", type: "select" as const, options: villageOptions },
    { key: "address", label: "العنوان", type: "text" as const },
    { key: "phone", label: "رقم التليفون", type: "text" as const },
  ];

  const handleAdd = (item: Omit<Beneficiary, "id">) => {
    const newItem = { ...item, id: Math.max(...data.map(d => d.id)) + 1 } as Beneficiary;
    setData([...data, newItem]);
    toast({ title: "تم الإضافة", description: "تم إضافة المستفيد بنجاح" });
  };

  const handleEdit = (item: Beneficiary) => {
    setData(data.map(d => d.id === item.id ? item : d));
    toast({ title: "تم التعديل", description: "تم تعديل بيانات المستفيد بنجاح" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    toast({ title: "تم الحذف", description: "تم حذف المستفيد بنجاح", variant: "destructive" });
  };

  return (
    <DataTable
      title="بيانات المستفيدين"
      data={data}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
    />
  );
};
