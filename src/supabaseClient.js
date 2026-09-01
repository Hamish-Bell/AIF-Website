import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://noxcjgslwwemzetqhcne.supabase.co'
const supabaseKey = 'sb_publishable_A56TJcP10Uhavid295pk5A_1NiJj_cA'

export const supabase = createClient(supabaseUrl, supabaseKey)