import { useState } from "react";
import { DataTable } from "./DataTable";
import { outgoingDonations as initialData, OutgoingDonation, donationUnitOptions } from "@/data/charityData";
import { useToast } from "@/hooks/use-toast";

export const OutgoingDonationsTable = () => {
  const [data, setData] = useState<OutgoingDonation[]>(initialData);
  const { toast } = useToast();

  const columns = [
    { key: "date", label: "تاريخ التسليم" },
    { key: "beneficiaryName", label: "اسم المستفيد" },
    { key: "amount", label: "الكمية/المبلغ", render: (item: OutgoingDonation) => (
      <span className="font-semibold text-accent">{item.amount}</span>
    )},
    { key: "unit", label: "الوحدة", render: (item: OutgoingDonation) => (
      <span className="badge-warning">{item.unit}</span>
    )},
    { key: "contents", label: "المشتملات" },
    { key: "month", label: "الشهر" },
    { key: "deliveryPerson", label: "المسئول عن التسليم" },
  ];

  const formFields = [
    { key: "date", label: "تاريخ التسليم", type: "text" as const, required: true },
    { key: "beneficiaryName", label: "اسم المستفيد", type: "text" as const, required: true },
    { key: "amount", label: "الكمية/المبلغ", type: "number" as const, required: true },
    { key: "unit", label: "وحدات التبرع", type: "select" as const, options: donationUnitOptions, required: true },
    { key: "contents", label: "مشتملات التبرع", type: "text" as const },
    { key: "month", label: "شهر التبرع", type: "text" as const },
    { key: "deliveryPerson", label: "المسئول عن التسليم", type: "text" as const },
    { key: "signature", label: "توقيع المستفيد", type: "text" as const },
  ];

  const handleAdd = (item: Omit<OutgoingDonation, "id">) => {
    const newItem = { ...item, id: Math.max(...data.map(d => d.id)) + 1 } as OutgoingDonation;
    setData([...data, newItem]);
    toast({ title: "تم الإضافة", description: "تم إضافة التبرع المنصرف بنجاح" });
  };

  const handleEdit = (item: OutgoingDonation) => {
    setData(data.map(d => d.id === item.id ? item : d));
    toast({ title: "تم التعديل", description: "تم تعديل بيانات التبرع بنجاح" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    toast({ title: "تم الحذف", description: "تم حذف التبرع بنجاح", variant: "destructive" });
  };

  return (
    <DataTable
      title="التبرعات المنصرفة"
      data={data}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
    />
  );
};
