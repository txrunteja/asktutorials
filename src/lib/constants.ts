import { Course, Testimonial, Feature, AdmissionStep, ContactInfo, NavLink } from "@/types";

// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero Stats ───────────────────────────────────────────────
export const HERO_STATS = [
  { value: "500+", label: "Students" },
  { value: "95%", label: "Success Rate" },
  { value: "10+", label: "Years" },
  { value: "15+", label: "Expert Faculty" },
];

// ─── Trust Bar Badges ─────────────────────────────────────────
export const TRUST_BADGES = [
  { icon: "FaChalkboardTeacher", label: "Experienced Faculty" },
  { icon: "FaUsers", label: "Small Batch Sizes" },
  { icon: "FaUserCheck", label: "Personalized Attention" },
  { icon: "FaBookOpen", label: "Comprehensive Study Material" },
  { icon: "FaClipboardCheck", label: "Regular Assessments" },
];

// ─── Courses ──────────────────────────────────────────────────
export const COURSE_CATEGORIES = [
  { id: "school" as const, label: "School Programs" },
  { id: "board" as const, label: "Board Preparation" },
  { id: "competitive" as const, label: "Competitive Exams" },
];

export const COURSES: Course[] = [
  // School Programs
  {
    id: "foundation-6-8",
    category: "school",
    categoryLabel: "School Programs",
    name: "Classes 6–8 (Foundation)",
    description: "Build a rock-solid foundation with conceptual clarity in core subjects. Interactive learning designed to spark curiosity.",
    subjects: ["Mathematics", "Science", "English"],
    duration: "Annual / Semester",
  },
  {
    id: "board-prep-9-10",
    category: "school",
    categoryLabel: "School Programs",
    name: "Classes 9–10 (Board Prep)",
    description: "Intensive board exam preparation with topic-wise modules, revision cycles, and regular mock tests.",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    duration: "Annual / Semester",
  },
  {
    id: "intermediate-11-12",
    category: "school",
    categoryLabel: "School Programs",
    name: "Intermediate / Class 11–12",
    description: "Advanced coaching for Class 11–12 with focus on conceptual depth, problem-solving, and board exam excellence.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    duration: "Annual / Semester",
  },
  // Board Preparation
  {
    id: "cbse",
    category: "board",
    categoryLabel: "Board Preparation",
    name: "CBSE Board Preparation",
    description: "Comprehensive CBSE board exam coaching aligned with NCERT syllabus. Chapter-wise tests and model papers included.",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    duration: "Annual",
  },
  {
    id: "state-board",
    category: "board",
    categoryLabel: "Board Preparation",
    name: "State Board Preparation",
    description: "Tailored coaching for state board syllabi with localized curriculum support and exam-pattern practice.",
    subjects: ["Mathematics", "Science", "English"],
    duration: "Annual",
  },
  // Competitive Exams
  {
    id: "olympiads",
    category: "competitive",
    categoryLabel: "Competitive Exams",
    name: "Olympiads & Scholarship Exams",
    description: "Specialized training for SOF Olympiads, NTSE, KVPY, and state-level scholarship exams with advanced problem sets.",
    subjects: ["Mathematics", "Science", "Reasoning"],
    duration: "6 Months / Annual",
  },
  {
    id: "foundation-competitive",
    category: "competitive",
    categoryLabel: "Competitive Exams",
    name: "Foundation Courses",
    description: "Early competitive preparation for students in Classes 8–10 to build an edge for future entrance exams.",
    subjects: ["Mathematics", "Science", "Mental Ability"],
    duration: "Annual",
  },
];

// ─── Why Choose Us Features ──────────────────────────────────
export const FEATURES: Feature[] = [
  {
    icon: "FaChalkboardTeacher",
    title: "Expert Faculty",
    description: "Qualified educators with 10+ years of teaching experience",
  },
  {
    icon: "FaUsers",
    title: "Small Batches",
    description: "Max 15 students per batch for focused attention",
  },
  {
    icon: "FaClipboardList",
    title: "Structured Curriculum",
    description: "Planned roadmap aligned to board and exam calendars",
  },
  {
    icon: "FaEdit",
    title: "Weekly Testing",
    description: "Regular assessments to track and close learning gaps",
  },
  {
    icon: "FaChartBar",
    title: "Progress Reports",
    description: "Detailed monthly reports shared with parents",
  },
  {
    icon: "FaComments",
    title: "Doubt Sessions",
    description: "Dedicated slots for one-on-one doubt resolution",
  },
  {
    icon: "FaBullseye",
    title: "Concept-Based Learning",
    description: "Beyond rote — understanding that sticks",
  },
  {
    icon: "FaMobileAlt",
    title: "Parent Updates",
    description: "WhatsApp updates and monthly review calls",
  },
];

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Bindu Priya",
    role: "Google Reviewer",
    quote: "The environment is so motivating and student friendly. It's clear the team puts a lot of thought into both curriculum and care.",
    rating: 5,
    initials: "BP",
  },
  {
    id: "2",
    name: "Ravi Gudelli",
    role: "Google Reviewer",
    quote: "Experienced staff with good infrastructure. This is the best platform for the students to grow and learn the things in their career.",
    rating: 5,
    initials: "RG",
  },
  {
    id: "3",
    name: "Suresh Rathod",
    role: "Google Reviewer",
    quote: "A well-organized tutorial center with dedicated teachers for both Inter and school students. They focus on concept clarity, regular assessments, and individual attention. Definitely a great learning environment.",
    rating: 5,
    initials: "SR",
  },
  {
    id: "4",
    name: "Uday Kiran",
    role: "Google Reviewer",
    quote: "I highly recommend ASK Tutions to students looking for quality education. The platform has a team of dedicated and skilled teachers who ensure that students receive the best learning experience possible and the perfect solution for busy students who want to improve their grades and academic performance. The platform offers flexible scheduling options, affordable pricing and high-quality instruction from experienced educators.",
    rating: 5,
    initials: "UK",
  },
];

// ─── Admission Steps ─────────────────────────────────────────
export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Submit Inquiry",
    description: "Fill out the form or WhatsApp us",
  },
  {
    step: 2,
    title: "Free Counseling",
    description: "We call you within 24 hours",
  },
  {
    step: 3,
    title: "Attend Demo Class",
    description: "Experience our teaching firsthand",
  },
  {
    step: 4,
    title: "Enroll",
    description: "Choose your batch and get started",
  },
];

// ─── Contact Info ─────────────────────────────────────────────
export const CONTACT_INFO: ContactInfo = {
  phone: "+91 94931 30899",
  whatsapp: "919493130899",
  email: "askedge99@gmail.com",
  address: "Road no 14, Hanuman Nagar, R.N. Reddy Nagar, near TKR COLLEGE OF ENGINEERING & TECHNOLOGY, Saroor Nagar, Meerpet, Hyderabad, Telangana 500097",
  mapsLink: "https://maps.google.com/?q=ASK+Tutorials+Hanuman+Nagar+Meerpet+Hyderabad",
};

// ─── Form Options ─────────────────────────────────────────────
export const CLASS_OPTIONS = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "Other",
];

export const COURSE_INTEREST_OPTIONS = [
  "School Programs (Classes 6–8)",
  "School Programs (Classes 9–10)",
  "Intermediate (Classes 11–12)",
  "CBSE Board Prep",
  "State Board Prep",
  "Olympiads & Scholarships",
  "Foundation Courses",
];

// ─── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/919493130899?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20ASK%20Tutorials",
  instagram: "https://instagram.com/ask.tutorials2025",
  facebook: "https://www.facebook.com/profile.php?id=61578542584813#",
};

// ─── Formspree ────────────────────────────────────────────────
// TODO: REPLACE — Create a Formspree account and add your form endpoint ID.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpzvnqkj";
