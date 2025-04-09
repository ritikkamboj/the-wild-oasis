
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rmbreqytkekbinbdiywb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtYnJlcXl0a2VrYmluYmRpeXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNDg2MDYsImV4cCI6MjA1NjkyNDYwNn0.wmZsekZhMceYpCd9_mw1Mryx4VbUYg2MJ7ALODTT78Y"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;