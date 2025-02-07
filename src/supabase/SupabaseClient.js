import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vhqaejpujmtqupnqufpp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocWFlanB1am10cXVwbnF1ZnBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MzMyODUsImV4cCI6MjA1NDUwOTI4NX0.D_0jtS2-XGB4hVMKUgj0RSerWy60fSuAZGE8D92iEPI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);