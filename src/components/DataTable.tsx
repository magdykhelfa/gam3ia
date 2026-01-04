import { useState } from "react";
import { Search, Plus, Edit2, Trash2, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T extends { id: number }> {
  title: string;
  data: T[];
  columns: Column<T>[];
  onAdd?: (item: Omit<T, "id">) => void;
  onEdit?: (item: T) => void;
  onDelete?: (id: number) => void;
  formFields?: FormField[];
}

interface FormField {
  key: string;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  required?: boolean;
}

export function DataTable<T extends { id: number }>({
  title,
  data,
  columns,
  onAdd,
  onEdit,
  onDelete,
  formFields,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({});
    setIsDialogOpen(true);
  };

  const handleEdit = (item: T) => {
    setEditingItem(item);
    setFormData(item as Record<string, any>);
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (editingItem && onEdit) {
      onEdit({ ...editingItem, ...formData } as T);
    } else if (onAdd) {
      onAdd(formData as Omit<T, "id">);
    }
    setIsDialogOpen(false);
    setFormData({});
  };

  const getValue = (item: T, key: string): any => {
    return (item as any)[key];
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="بحث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 input-field"
            />
          </div>
          {onAdd && formFields && (
            <Button onClick={handleAdd} className="btn-primary gap-2">
              <Plus className="h-4 w-4" />
              إضافة
            </Button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-12">#</th>
                {columns.map((col) => (
                  <th key={String(col.key)}>{col.label}</th>
                ))}
                {(onEdit || onDelete) && <th className="w-24">إجراءات</th>}
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 2} className="text-center py-12 text-muted-foreground">
                    لا توجد بيانات
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 20}ms` }}>
                    <td className="font-medium text-muted-foreground">{index + 1}</td>
                    {columns.map((col) => (
                      <td key={String(col.key)}>
                        {col.render ? col.render(item) : String(getValue(item, String(col.key)) || "-")}
                      </td>
                    ))}
                    {(onEdit || onDelete) && (
                      <td>
                        <div className="flex items-center gap-1">
                          {onEdit && (
                            <button
                              onClick={() => handleEdit(item)}
                              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => onDelete(item.id)}
                              className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        عرض {filteredData.length} من {data.length} سجل
      </p>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingItem ? "تعديل" : "إضافة جديد"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {formFields?.map((field) => (
              <div key={field.key} className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {field.label}
                  {field.required && <span className="text-destructive mr-1">*</span>}
                </label>
                {field.type === "select" && field.options ? (
                  <select
                    value={formData[field.key] || ""}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="input-field"
                  >
                    <option value="">اختر...</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <Input
                    type={field.type}
                    value={formData[field.key] || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      [field.key]: field.type === "number" ? Number(e.target.value) : e.target.value 
                    })}
                    className="input-field"
                  />
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSubmit} className="btn-primary flex-1 gap-2">
                <Check className="h-4 w-4" />
                حفظ
              </Button>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1 gap-2">
                <X className="h-4 w-4" />
                إلغاء
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
