import { useState } from "react";
import { DataTable } from "./DataTable";
import { incomingDonations as initialData, IncomingDonation, donationUnitOptions } from "@/data/charityData";
import { useToast } from "@/hooks/use-toast";

export const IncomingDonationsTable = () => {
  const [data, setData] = useState<IncomingDonation[]>(initialData);
  const { toast } = useToast();

  const columns = [
    { key: "date", label: "تاريخ الاستلام" },
    { key: "donorName", label: "اسم المتبرع" },
    { key: "amount", label: "الكمية/المبلغ", render: (item: IncomingDonation) => (
      <span className="font-semibold text-primary">{item.amount.toLocaleString("ar-EG")}</span>
    )},
    { key: "unit", label: "الوحدة", render: (item: IncomingDonation) => (
      <span className="badge-success">{item.unit}</span>
    )},
    { key: "contents", label: "المحتويات" },
    { key: "receiptNumber", label: "رقم الوصل" },
    { key: "receiverPerson", label: "المستلم" },
  ];

  const formFields = [
    { key: "date", label: "تاريخ الاستلام", type: "text" as const, required: true },
    { key: "donorName", label: "اسم المتبرع", type: "text" as const, required: true },
    { key: "amount", label: "الكمية/المبلغ", type: "number" as const, required: true },
    { key: "unit", label: "وحدات التبرع", type: "select" as const, options: donationUnitOptions, required: true },
    { key: "contents", label: "محتويات التبرع", type: "text" as const },
    { key: "receiptNumber", label: "رقم وصل التبرع", type: "text" as const },
    { key: "deliveryPerson", label: "المسئول عن تسليم التبرع", type: "text" as const },
    { key: "month", label: "شهر التبرع", type: "text" as const },
    { key: "occasion", label: "مناسبة التبرع", type: "text" as const },
    { key: "receiverPerson", label: "المسئول عن استلام التبرع", type: "text" as const },
    { key: "notes", label: "ملاحظات", type: "text" as const },
  ];

  const handleAdd = (item: Omit<IncomingDonation, "id">) => {
    const newItem = { ...item, id: Math.max(...data.map(d => d.id)) + 1 } as IncomingDonation;
    setData([...data, newItem]);
    toast({ title: "تم الإضافة", description: "تم إضافة التبرع الوارد بنجاح" });
  };

  const handleEdit = (item: IncomingDonation) => {
    setData(data.map(d => d.id === item.id ? item : d));
    toast({ title: "تم التعديل", description: "تم تعديل بيانات التبرع بنجاح" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    toast({ title: "تم الحذف", description: "تم حذف التبرع بنجاح", variant: "destructive" });
  };

  return (
    <DataTable
      title="التبرعات الواردة"
      data={data}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
    />
  );
};
