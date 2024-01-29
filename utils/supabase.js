import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qpxqlhwimmzoigiplfre.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFweHFsaHdpbW16b2lnaXBsZnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MDI1MzYsImV4cCI6MjAyMjA3ODUzNn0.ZTk_XkLk9CwPW6PLcWJHbB_pfpF9ptgYbU8WM1pDKuU'
export const supabase = createClient(supabaseUrl, supabaseKey);
