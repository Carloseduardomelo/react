import { createClient } from '@supabase/supabase-js'

const supabaseURL = "https://wvsxlwngvsbzfosachht.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2c3hsd25ndnNiemZvc2FjaGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDM1NjIsImV4cCI6MjAwOTc3OTU2Mn0.JOGQq41nU52-MUrtpc5eip12OHwx-W4RZ5JgaDm3s8A"

export const supabase = createClient(supabaseURL , supabaseKey)