import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient('https://skqjginecjtcsknnddwc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcWpnaW5lY2p0Y3Nrbm5kZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzYzNjksImV4cCI6MjA3OTY1MjM2OX0.E5K6P4fBGYnrlo8cdNYx5JsJQhlSO8ndtJHnGbTbuL8');

async function loadProducts() {
    let { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(50);

    console.log(data);
}
loadProducts();
