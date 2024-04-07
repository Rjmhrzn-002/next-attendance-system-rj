import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yvevrsejqnektevkpkus.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2ZXZyc2VqcW5la3Rldmtwa3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MTM3ODQsImV4cCI6MjAyNjQ4OTc4NH0.32hU0zMXyvr_hlRpLaY4g1dCGX6GwXc5EOs1SIiRE3g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
