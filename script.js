document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("#courseTable tbody tr");
  
    // klik → buka halaman materi
    rows.forEach(r =>
      r.addEventListener("click", () => {
        const link = r.dataset.link;
        if (link) window.location.href = link;
      })
    );
  });
  