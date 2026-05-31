// Single source of truth for SY 2026-2027 tuition & fees.
// Amounts use the peso symbol "₱" to match the rest of the site.

export interface DueAtEnrollment {
  registration: string;
  materials: string;
  schoolId: string;
  miscellaneous: string;
  uniform: string | null; // null = uniform not required (Playgroup)
}

export interface ProgramFee {
  id: string;
  name: string;
  ageRange: string;
  monthly: string;
  annual: string;
  dueAtEnrollment: DueAtEnrollment;
  enrollSubtotal: {
    withoutUniform: string;
    withUniform: string | null;
  };
  yearTotal: {
    withoutUniform: string;
    withUniform: string | null;
  };
}

export const afterSchoolCareRate = "₱500";

export const tuitionPrograms: ProgramFee[] = [
  {
    id: "playgroup",
    name: "Playgroup",
    ageRange: "Ages 2-3",
    monthly: "₱3,000",
    annual: "₱27,000",
    dueAtEnrollment: {
      registration: "₱3,000",
      materials: "₱1,850",
      schoolId: "₱650",
      miscellaneous: "₱1,500",
      uniform: null,
    },
    enrollSubtotal: {
      withoutUniform: "₱7,000",
      withUniform: null,
    },
    yearTotal: {
      withoutUniform: "₱34,000",
      withUniform: null,
    },
  },
  {
    id: "nursery",
    name: "Nursery",
    ageRange: "Ages 3-4",
    monthly: "₱3,500",
    annual: "₱31,500",
    dueAtEnrollment: {
      registration: "₱3,500",
      materials: "₱2,250",
      schoolId: "₱700",
      miscellaneous: "₱1,500",
      uniform: "₱2,200",
    },
    enrollSubtotal: {
      withoutUniform: "₱7,950",
      withUniform: "₱10,150",
    },
    yearTotal: {
      withoutUniform: "₱39,450",
      withUniform: "₱41,650",
    },
  },
  {
    id: "pre-kinder",
    name: "Pre-Kinder",
    ageRange: "Ages 4-5",
    monthly: "₱4,000",
    annual: "₱36,000",
    dueAtEnrollment: {
      registration: "₱4,000",
      materials: "₱2,750",
      schoolId: "₱800",
      miscellaneous: "₱1,500",
      uniform: "₱2,500",
    },
    enrollSubtotal: {
      withoutUniform: "₱9,050",
      withUniform: "₱11,550",
    },
    yearTotal: {
      withoutUniform: "₱45,050",
      withUniform: "₱47,550",
    },
  },
];
