import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oyywqatvyxxwahpbfvzm.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eXdxYXR2eXh4d2FocGJmdnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNDg2MDEsImV4cCI6MjA4MzYyNDYwMX0.JIw-LRzBdamx88mlEVYVSG71WHTRrYKKxsqGskZUNAQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
