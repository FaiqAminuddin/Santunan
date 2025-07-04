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
