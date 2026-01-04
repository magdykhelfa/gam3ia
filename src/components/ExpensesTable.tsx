import { useState } from "react";
import { DataTable } from "./DataTable";
import { expenses as initialData, Expense, expenseTypeOptions } from "@/data/charityData";
import { useToast } from "@/hooks/use-toast";

export const ExpensesTable = () => {
  const [data, setData] = useState<Expense[]>(initialData);
  const { toast } = useToast();

  const columns = [
    { key: "date", label: "التاريخ" },
    { key: "name", label: "اسم المصروف", render: (item: Expense) => (
      <span className="badge-info">{item.name}</span>
    )},
    { key: "amount", label: "القيمة", render: (item: Expense) => (
      <span className="font-semibold text-destructive">{item.amount.toLocaleString("ar-EG")} ج.م</span>
    )},
    { key: "month", label: "الشهر" },
    { key: "responsiblePerson", label: "المسئول عن الصرف" },
    { key: "notes", label: "ملاحظات" },
  ];

  const formFields = [
    { key: "date", label: "تاريخ المصروف", type: "text" as const, required: true },
    { key: "name", label: "اسم المصروف", type: "select" as const, options: expenseTypeOptions, required: true },
    { key: "amount", label: "قيمة المصروفات", type: "number" as const, required: true },
    { key: "month", label: "الشهر", type: "text" as const },
    { key: "responsiblePerson", label: "المسئول عن الصرف", type: "text" as const },
    { key: "notes", label: "ملاحظات", type: "text" as const },
  ];

  const handleAdd = (item: Omit<Expense, "id">) => {
    const newItem = { ...item, id: Math.max(...data.map(d => d.id)) + 1 } as Expense;
    setData([...data, newItem]);
    toast({ title: "تم الإضافة", description: "تم إضافة المصروف بنجاح" });
  };

  const handleEdit = (item: Expense) => {
    setData(data.map(d => d.id === item.id ? item : d));
    toast({ title: "تم التعديل", description: "تم تعديل بيانات المصروف بنجاح" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id));
    toast({ title: "تم الحذف", description: "تم حذف المصروف بنجاح", variant: "destructive" });
  };

  return (
    <DataTable
      title="المصروفات الشهرية"
      data={data}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      formFields={formFields}
    />
  );
};
