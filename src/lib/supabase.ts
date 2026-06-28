import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Standard client configured to fail gracefully if env keys are missing during development
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
