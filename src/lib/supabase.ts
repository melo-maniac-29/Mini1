import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing Supabase URL. Ensure VITE_SUPABASE_URL is set in your environment variables.');
}

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase Anon Key. Ensure VITE_SUPABASE_ANON_KEY is set in your environment variables.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Optional: Log a message for debugging purposes (remove in production)
console.log('Supabase client initialized successfully.');
