<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"></script>
<script>
  Papa.parse("catatan-keuangan.csv", {
    download: true,
    header: true,
    complete: function(results) {
      console.log(results.data); // atau tampilkan dalam tabel
    }
  });
</script>

// Menampilkan CSV sebagai tabel
function tampilkanCSV(url) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      const data = results.data;
      const container = document.getElementById("csvTable");
      let html = "<table border='1' cellpadding='5' cellspacing='0'><thead><tr>";

      // Header
      const headers = Object.keys(data[0]);
      headers.forEach(header => {
        html += `<th>${header}</th>`;
      });
      html += "</tr></thead><tbody>";

      // Baris data
      data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
          html += `<td>${row[header] || ""}</td>`;
        });
        html += "</tr>";
      });

      html += "</tbody></table>";
      container.innerHTML = html;
    }
  });
}

// Panggil fungsi dengan path ke file CSV
tampilkanCSV("catatan-keuangan.csv");

