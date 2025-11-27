import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://skqjginecjtcsknnddwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcWpnaW5lY2p0Y3Nrbm5kZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzYzNjksImV4cCI6MjA3OTY1MjM2OX0.E5K6P4fBGYnrlo8cdNYx5JsJQhlSO8ndtJHnGbTbuL8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function loadProducts() {
    const { data, error } = await supabase
        .from("Articulos")
        .select("*")
        .limit(200);

    if (error) {
        console.error("Error:", error);
        return;
    }

    const tbody = document.querySelector("#articulosTable tbody");
    tbody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.Codigo || ""}</td>
            <td>${item.Descripcion || ""}</td>
            <td>${item.Seccion || ""}</td>
            <td>${item.Familia || ""}</td>
        `;
        tbody.appendChild(row);
    });
}

loadProducts();