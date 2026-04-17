function getLetterGrade(average) {
    if (average >= 90) return "AA";
    if (average >= 85) return "BA";
    if (average >= 80) return "BB";
    if (average >= 75) return "CB";
    if (average >= 70) return "CC";
    if (average >= 65) return "DC";
    if (average >= 60) return "DD";
    if (average >= 50) return "FD";
    return "FF";
}

function calculateGrade() {
    const name = document.getElementById("studentName").value.trim();
    const midterm = parseFloat(document.getElementById("midterm").value);
    const final = parseFloat(document.getElementById("final").value);
    const resultBox = document.getElementById("gradeResult");

    if (name === "" || isNaN(midterm) || isNaN(final)) {
        resultBox.innerHTML = `
            <h4>Hata</h4>
            <p>Lütfen tüm alanları doğru şekilde doldurun.</p>
        `;
        return;
    }

    if (midterm < 0 || midterm > 100 || final < 0 || final > 100) {
        resultBox.innerHTML = `
            <h4>Hata</h4>
            <p>Notlar 0 ile 100 arasında olmalıdır.</p>
        `;
        return;
    }

    const average = (midterm * 0.4) + (final * 0.6);
    const letterGrade = getLetterGrade(average);
    const status = average >= 50 ? "Geçti" : "Kaldı";

    resultBox.innerHTML = `
        <h4>${name}</h4>
        <p>Ortalama: ${average.toFixed(2)}</p>
        <p>Harf Notu: ${letterGrade}</p>
        <p>Durum: ${status}</p>
    `;
}

function convertUnit(boxNumber) {
    const valueInput = document.getElementById("convertValue" + boxNumber);
    const typeSelect = document.getElementById("conversionType" + boxNumber);
    const resultBox = document.getElementById("convertResult" + boxNumber);

    const value = parseFloat(valueInput.value);
    const type = typeSelect.value;

    if (isNaN(value)) {
        resultBox.textContent = "Sonuç: Lütfen geçerli bir sayı girin";
        return;
    }

    let result = 0;
    let formattedResult = "";

    switch (type) {
        case "c_to_f":
            result = (value * 9 / 5) + 32;
            formattedResult = result.toFixed(2);
            break;

        case "m_to_km":
            result = value / 1000;
            formattedResult = result.toFixed(3);
            break;

        case "kg_to_g":
            result = value * 1000;
            formattedResult = result.toFixed(3);
            break;

        case "f_to_c":
            result = (value - 32) * 5 / 9;
            formattedResult = result.toFixed(2);
            break;

        case "km_to_m":
            result = value * 1000;
            formattedResult = result.toFixed(3);
            break;

        case "g_to_kg":
            result = value / 1000;
            formattedResult = result.toFixed(3);
            break;

        default:
            resultBox.textContent = "Sonuç: Geçersiz dönüşüm";
            return;
    }

    resultBox.textContent = "Sonuç: " + formattedResult;
}
