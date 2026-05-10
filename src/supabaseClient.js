import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lycvhqsonrptayweowvu.supabase.co'
const supabaseKey = 'sb_publishable_XeReXMZSvJnZy3fiFBkaFQ_6lRPzuqC'

export const supabase = createClient(supabaseUrl, supabaseKey)

