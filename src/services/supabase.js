import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ddogefmvdnewlqtnhwef.supabase.co";
const supabaseKey = import.meta.env.VITE_APIKEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
