const temaBtn = document.getElementById("temaBtn");
const basvuruForm = document.getElementById("basvuruForm");
const sonucAlani = document.getElementById("sonucAlani");
const temizleBtn = document.getElementById("temizleBtn");

temaBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        temaBtn.textContent = "Açık Temaya Geç";
        temaBtn.classList.remove("btn-outline-secondary");
        temaBtn.classList.add("btn-light");
    } else {
        temaBtn.textContent = "Koyu Temaya Geç";
        temaBtn.classList.remove("btn-light");
        temaBtn.classList.add("btn-outline-secondary");
    }
});

basvuruForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const adSoyad = document.getElementById("adSoyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const bolum = document.getElementById("bolum").value.trim();
    const sinif = document.getElementById("sinif").value;
    const oturum = document.getElementById("oturum").value;
    const katilim = document.getElementById("katilim").value;
    const mesaj = document.getElementById("mesaj").value.trim();
    const onay = document.getElementById("onay").checked;

    if (
        adSoyad === "" ||
        email === "" ||
        bolum === "" ||
        sinif === "" ||
        oturum === "" ||
        katilim === "" ||
        mesaj === "" ||
        onay === false
    ) {
        sonucAlani.className = "alert alert-danger";
        sonucAlani.innerHTML = `
            <strong>Eksik bilgi var!</strong><br>
            Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.
        `;
        return;
    }

    sonucAlani.className = "alert alert-success";
    sonucAlani.innerHTML = `
        <h4 class="alert-heading">Başvuru Özeti Oluşturuldu</h4>
        <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Bölüm:</strong> ${bolum}</p>
        <p><strong>Sınıf:</strong> ${sinif}</p>
        <p><strong>Oturum:</strong> ${oturum}</p>
        <p><strong>Katılım Türü:</strong> ${katilim}</p>
        <p><strong>Kısa Mesaj:</strong> ${mesaj}</p>
    `;
});

temizleBtn.addEventListener("click", function () {
    sonucAlani.className = "alert alert-info";
    sonucAlani.textContent = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
});
