// بيانات أعضاء الجمعية
export interface Member {
  id: number;
  nationalId: string;
  name: string;
  governmentJob: string;
  associationRole: string;
  phone: string;
  phone2: string;
  landline: string;
  governorate: string;
  center: string;
  village: string;
  address: string;
  age: number;
  notes: string;
}

export const members: Member[] = [
  {
    id: 1,
    nationalId: "27611298800137",
    name: "هيثم ابراهيم شمس الدين محمد البحيرى",
    governmentJob: "حاصل على دبلوم صناعى",
    associationRole: "رئيس مجلس الاداره",
    phone: "01004125441",
    phone2: "01008932324",
    landline: "لا يوجد",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "مسير المحطه",
    age: 49,
    notes: "لا"
  },
  {
    id: 2,
    nationalId: "27802071500391",
    name: "فرج فتحى فرج الدميرى",
    governmentJob: "حاصل على ليسانس",
    associationRole: "امين الصندوق",
    phone: "01004547198",
    phone2: "",
    landline: "",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "المحطه",
    age: 48,
    notes: ""
  },
  {
    id: 3,
    nationalId: "28001261500355",
    name: "طومان محمد عبدالحليم ابوشعيشع",
    governmentJob: "حاصل على دبلوم",
    associationRole: "نائب الرئيس",
    phone: "01020871826",
    phone2: "",
    landline: "",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "السوق",
    age: 45,
    notes: ""
  },
  {
    id: 4,
    nationalId: "24409231500355",
    name: "معداوى حسن على قريطنه",
    governmentJob: "عضو منتدب بشركه مصر العلويه",
    associationRole: "عضو",
    phone: "01008932324",
    phone2: "",
    landline: "",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "المحطه",
    age: 75,
    notes: ""
  },
  {
    id: 5,
    nationalId: "30605011505833",
    name: "ابراهيم هيثم ابراهيم شمس الدين البحيرى",
    governmentJob: "طالب بكليه اداب انجليزى",
    associationRole: "سكرتير",
    phone: "01001653614",
    phone2: "",
    landline: "",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "المحطه",
    age: 20,
    notes: ""
  },
  {
    id: 6,
    nationalId: "28908291500215",
    name: "محمد احمد احمد عابدين",
    governmentJob: "حاصل على ليسانس",
    associationRole: "عضو",
    phone: "01003036077",
    phone2: "",
    landline: "",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "كفرالشيح",
    age: 40,
    notes: ""
  },
  {
    id: 7,
    nationalId: "28402011500605",
    name: "فاطمه زيدان سعد حميده",
    governmentJob: "ثانويه ازهريه",
    associationRole: "عضو",
    phone: "01016251593",
    phone2: "",
    landline: "",
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "المحطه",
    age: 40,
    notes: ""
  }
];

// بيانات المستفيدين
export interface Beneficiary {
  id: number;
  code: string;
  nationalId: string;
  name: string;
  classification: string;
  pensionType: string;
  pensionValue: number;
  maritalStatus: string;
  childrenCount: number;
  religion: string;
  gender: string;
  age: number;
  governorate: string;
  center: string;
  village: string;
  address: string;
  phone: string;
  notes: string;
}

export const beneficiaries: Beneficiary[] = [
  {
    id: 1,
    code: "1",
    nationalId: "27611298800137",
    name: "هيثم",
    classification: "مساعدات مالية",
    pensionType: "معاش تكافل وكرامة",
    pensionValue: 500,
    maritalStatus: "متزوج",
    childrenCount: 3,
    religion: "مسلم",
    gender: "ذكر",
    age: 45,
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "مسير",
    phone: "01004125441",
    notes: ""
  },
  {
    id: 2,
    code: "2",
    nationalId: "12345678901234",
    name: "ريم",
    classification: "صرف علاج",
    pensionType: "لا يوجد معاش",
    pensionValue: 200,
    maritalStatus: "متزوج",
    childrenCount: 3,
    religion: "مسلم",
    gender: "ذكر",
    age: 40,
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "المحطه",
    phone: "00000000000",
    notes: ""
  },
  {
    id: 3,
    code: "3",
    nationalId: "99999999999999",
    name: "احمد",
    classification: "مساعدات مطلقات",
    pensionType: "معاش تضامن إجتماعي",
    pensionValue: 150,
    maritalStatus: "متزوج",
    childrenCount: 2,
    religion: "مسلم",
    gender: "ذكر",
    age: 30,
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "الخياط",
    phone: "01000000000",
    notes: ""
  },
  {
    id: 4,
    code: "4",
    nationalId: "11111111111111",
    name: "محمد",
    classification: "مساعدات مالية",
    pensionType: "معاش تضامن إجتماعي",
    pensionValue: 200,
    maritalStatus: "متزوج",
    childrenCount: 1,
    religion: "مسلم",
    gender: "ذكر",
    age: 40,
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "مسير",
    phone: "88888888888",
    notes: ""
  },
  {
    id: 5,
    code: "5",
    nationalId: "22222222222222",
    name: "السيد",
    classification: "صرف علاج",
    pensionType: "لا يوجد معاش",
    pensionValue: 200,
    maritalStatus: "متزوج",
    childrenCount: 1,
    religion: "مسلم",
    gender: "ذكر",
    age: 20,
    governorate: "كفرالشيخ",
    center: "كفرالشيخ",
    village: "مسير",
    address: "ااا",
    phone: "00444444444",
    notes: ""
  }
];

// بيانات المتبرعين
export interface Donor {
  id: number;
  name: string;
  phone: string;
  phone2: string;
  landline: string;
  address: string;
  notes: string;
}

export const donors: Donor[] = [
  {
    id: 1,
    name: "هيثم شمس",
    phone: "1004125441",
    phone2: "لا",
    landline: "لا",
    address: "مسير",
    notes: "ايتام"
  }
];

// التبرعات الواردة
export interface IncomingDonation {
  id: number;
  date: string;
  donorName: string;
  amount: number;
  unit: string;
  contents: string;
  receiptNumber: string;
  deliveryPerson: string;
  month: string;
  occasion: string;
  receiverPerson: string;
  notes: string;
}

export const incomingDonations: IncomingDonation[] = [
  {
    id: 1,
    date: "2020-12-28",
    donorName: "جمعية رقم 1",
    amount: 25000,
    unit: "أموال",
    contents: "خمسة وعشرون ألف جنيه مصري",
    receiptNumber: "ج-ف-س / 1200",
    deliveryPerson: "محمد",
    month: "12",
    occasion: "",
    receiverPerson: "فراج شوشان",
    notes: ""
  },
  {
    id: 2,
    date: "2020-12-28",
    donorName: "جمعية رقم 2",
    amount: 250,
    unit: "كرتونة",
    contents: "لحوم العيد",
    receiptNumber: "ج-ف-س / 1201",
    deliveryPerson: "مصطفي",
    month: "12",
    occasion: "",
    receiverPerson: "ممدوح جنينه",
    notes: ""
  },
  {
    id: 3,
    date: "2020-12-28",
    donorName: "جمعية رقم 1",
    amount: 12000,
    unit: "أموال",
    contents: "أثني عشر ألف جنيها مصري لاغير",
    receiptNumber: "ج-ف-س / 1202",
    deliveryPerson: "جمعية خيرية",
    month: "12",
    occasion: "بدون",
    receiverPerson: "فراج شوشان",
    notes: "لا يوجد"
  }
];

// التبرعات المنصرفة
export interface OutgoingDonation {
  id: number;
  date: string;
  beneficiaryName: string;
  amount: number;
  unit: string;
  contents: string;
  month: string;
  deliveryPerson: string;
  signature: string;
}

export const outgoingDonations: OutgoingDonation[] = [
  {
    id: 1,
    date: "2020-12-21",
    beneficiaryName: "مستفيد رقم 1",
    amount: 1,
    unit: "أموال",
    contents: "خمسة وعشرون ألف جنيه مصري",
    month: "12",
    deliveryPerson: "فراج شوشان",
    signature: ""
  },
  {
    id: 2,
    date: "2020-12-22",
    beneficiaryName: "مستفيد رقم 2",
    amount: 1,
    unit: "كيس",
    contents: "سكر + فول + أرز + زيت",
    month: "12",
    deliveryPerson: "ممدوح جنينه",
    signature: ""
  },
  {
    id: 3,
    date: "2020-12-23",
    beneficiaryName: "مستفيد رقم 3",
    amount: 1,
    unit: "كرتونة",
    contents: "سكر + فول + أرز + زيت",
    month: "12",
    deliveryPerson: "محمد أحمد",
    signature: ""
  },
  {
    id: 4,
    date: "2020-12-24",
    beneficiaryName: "مستفيد رقم 4",
    amount: 1,
    unit: "كيس",
    contents: "سكر + فول + أرز + زيت",
    month: "12",
    deliveryPerson: "محمود السيد",
    signature: ""
  },
  {
    id: 5,
    date: "2020-12-25",
    beneficiaryName: "مستفيد رقم 5",
    amount: 1,
    unit: "كرتونة",
    contents: "سكر + فول + أرز + زيت",
    month: "12",
    deliveryPerson: "فراج شوشان",
    signature: ""
  }
];

// المصروفات
export interface Expense {
  id: number;
  date: string;
  name: string;
  amount: number;
  month: string;
  responsiblePerson: string;
  notes: string;
}

export const expenses: Expense[] = [
  {
    id: 1,
    date: "2020-12-21",
    name: "فاتورة الكهرباء",
    amount: 1,
    month: "12",
    responsiblePerson: "فراج شوشان",
    notes: ""
  },
  {
    id: 2,
    date: "2020-12-22",
    name: "فاتورة المياه",
    amount: 1,
    month: "12",
    responsiblePerson: "ممدوح جنينه",
    notes: ""
  },
  {
    id: 3,
    date: "2020-12-23",
    name: "فاتورة النت",
    amount: 1,
    month: "12",
    responsiblePerson: "محمد أحمد",
    notes: ""
  },
  {
    id: 4,
    date: "2020-12-24",
    name: "فاتورة الأرضي",
    amount: 1,
    month: "12",
    responsiblePerson: "محمود السيد",
    notes: ""
  },
  {
    id: 5,
    date: "2020-12-29",
    name: "مواصلات",
    amount: 1200,
    month: "12",
    responsiblePerson: "ممدوح جنينه",
    notes: "لا يوجد"
  },
  {
    id: 6,
    date: "2026-01-01",
    name: "فاتورة الكهرباء",
    amount: 100,
    month: "1",
    responsiblePerson: "فرج فتحى فرج الدميرى",
    notes: "شراء سلك كهرباء"
  }
];

// خيارات التصنيف
export const classificationOptions = [
  "مساعدات مالية",
  "كفاله أيتام",
  "مساعدات أرامل",
  "مساعدات مرضى",
  "مساعدات مطلقات",
  "مساعدات زواج",
  "توصيل مياه",
  "مساعده مبانى",
  "صرف علاج",
  "افاده",
  "موسمى",
  "رمضان",
  "عيد فطر",
  "عيد الاضحى",
  "صيانه منازل",
  "شتاء مشمع",
  "شتاء بطانيه او لحاف",
  "مشروع"
];

export const pensionTypeOptions = [
  "كفاله من الجمعيه صدقات",
  "كفاله متبرع",
  "زكاه مال",
  "كفاله مرضيه",
  "معاش تكافل وكرامة",
  "معاش تضامن إجتماعي",
  "لا يوجد معاش"
];

export const maritalStatusOptions = [
  "متزوج",
  "مطلق",
  "أرمله",
  "هجر",
  "طالب"
];

export const villageOptions = [
  "مسير",
  "منيه مسير",
  "عزبه السيوفى",
  "عزبه الصنفاوى",
  "عزبه عطيه",
  "عزبه اسكندر",
  "عزبه العبد",
  "عزبه شرمى",
  "عزبه المجلى"
];

export const donationUnitOptions = [
  "أموال",
  "كرتونة",
  "كيس",
  "أخري"
];

export const expenseTypeOptions = [
  "فاتورة الكهرباء",
  "فاتورة المياه",
  "فاتورة النت",
  "فاتورة الموبايل والأرضي",
  "مواصلات",
  "أدوات نظافة",
  "طباعة وتصوير",
  "مشروبات",
  "طعام",
  "اخرى"
];
