import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.REACT_APP_SPB_URL
const supabaseAnonKey = process.env.REACT_APP_SPB_ANON_KEY

export const supabase = createClient(supabaseURL, supabaseAnonKey);