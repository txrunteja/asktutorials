export interface Course {
  id: string;
  category: "school" | "board" | "competitive";
  categoryLabel: string;
  name: string;
  description: string;
  subjects: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsLink: string;
}

export interface NavLink {
  label: string;
  href: string;
}
