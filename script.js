import { createClient } from 'https://skqjginecjtcsknnddwc.supabase.co';

const supabase = createClient('https://skqjginecjtcsknnddwc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcWpnaW5lY2p0Y3Nrbm5kZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzYzNjksImV4cCI6MjA3OTY1MjM2OX0.E5K6P4fBGYnrlo8cdNYx5JsJQhlSO8ndtJHnGbTbuL8');

async function loadProducts() {
    console.log("Cargando datos...");

    const { data, error } = await supabase
        .from('Articulos')
        .select('*')
        .limit(50);

    if (error) {
        console.error("ERROR:", error);
        return;
    }

    console.log("RESULTADOS:", data);
}

loadProducts();