document.getElementById("form-yy123837").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // ambil elemen input
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const nim = document.getElementById("yy-12392");
    const telepon = document.getElementById("telepon");
    const universitas = document.getElementById("universitas");
    const prodi = document.getElementById("prodi");
    const setuju = document.getElementById("setuju");
  
    // ambil semua pesan error
    const errors = document.querySelectorAll(".error");
    errors.forEach(e => e.textContent = ""); // hapus pesan lama
  
    let valid = true;
  
    // validasi nama
    if (nama.value.trim() === "") {
      nama.nextElementSibling.textContent = "Nama lengkap harus diisi";
      valid = false;
    }
  
    // validasi email
    if (email.value.trim() === "") {
      email.nextElementSibling.textContent = "Email harus diisi";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.nextElementSibling.textContent = "Format email harus sesuai";
      valid = false;
    }
  
    // validasi NIM dan telepon (harus angka)
    const numRegex = /^[0-9]+$/;
    if (!numRegex.test(nim.value) || !numRegex.test(telepon.value)) {
      nim.nextElementSibling.textContent = "Input harus berupa angka, bukan huruf atau simbol";
      valid = false;
    }
  
    // validasi universitas
    if (universitas.value === "") {
      universitas.nextElementSibling.textContent = "Universitas harus dipilih";
      valid = false;
    }
  
    // validasi prodi
    if (prodi.value === "") {
      prodi.nextElementSibling.textContent = "Program studi harus dipilih";
      valid = false;
    }
  
    // validasi checkbox
    const checkboxError = document.querySelector(".checkbox + .error");
    if (!setuju.checked) {
      checkboxError.textContent = "Harap setujui syarat dan ketentuan";
      valid = false;
    }
  
    // jika semua valid
    if (valid) {
      alert("Pendaftaran berhasil!");
      this.reset();
    }
  });
  