import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient('https://skqjginecjtcsknnddwc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcWpnaW5lY2p0Y3Nrbm5kZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzYzNjksImV4cCI6MjA3OTY1MjM2OX0.E5K6P4fBGYnrlo8cdNYx5JsJQhlSO8ndtJHnGbTbuL8');

async function loadProducts() {
    const { data, error } = await supabase
        .from('Articulos')
        .select('*')
        .limit(50);

    if (error) {
        console.error("ERROR:", error);
        return;
    }

    const tbody = document.querySelector('#tabla-articulos tbody');
    tbody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.Código}</td>
            <td>${item.Sección}</td>
            <td>${item.Familia}</td>
            <td>${item.Descripción}</td>
            <td>${item.Unidad}</td>
            <td>${item.Ubicación}</td>
            <td>${item.Costo}</td>
            <td>${item.Saldo}</td>
            <td>${item.Mailing}</td>
            <td>${item.Marca}</td>
        `;
        tbody.appendChild(row);
    });
}

loadProducts();