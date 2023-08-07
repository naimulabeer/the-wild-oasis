import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gbmhdrjmhowidihgojvt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibWhkcmptaG93aWRpaGdvanZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MzMxNzUsImV4cCI6MjAwNzAwOTE3NX0.dg6eUtPbLhCHrMYC9XMW0wQR8K5_3XwrZZx-ptwVMAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
