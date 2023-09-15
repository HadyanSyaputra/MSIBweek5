class inputData {
    constructor(nama, umur, uangSaku) {
        this.nama = nama
        this.umur = umur
        this.uangSaku = uangSaku
    }
}

function addData() {
    const nama = document.getElementById("nama").value
    const umur = document.getElementById("umur").value
    const uangSaku = document.getElementById("uangSaku").value

    if (nama.length < 10) {
        alert("Nama harus memiliki minimal 10 karakter.")
        return
    }

    if (umur < 25) {
        alert("Umur harus minimal 25 tahun.")
        return
    }

    if (uangSaku < 100000 || uangSaku > 1000000) {
        alert("Uang saku harus antara 100 ribu dan 1 juta.")
        return
    }

    const data = new inputData(nama, umur, uangSaku)

    addDataToTable(data)
        .then(() => {
            document.getElementById("nama").value = ""
            document.getElementById("umur").value = ""
            document.getElementById("uangSaku").value = ""

            mean()
        })
}

function addDataToTable(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tabel = document.getElementById("dataTabel")

            const row = tabel.insertRow(-1)
            const cellNama = row.insertCell(0)
            const cellUmur = row.insertCell(1)
            const cellUangSaku = row.insertCell(2)

            cellNama.innerHTML = data.nama
            cellUmur.innerHTML = data.umur
            cellUangSaku.innerHTML = data.uangSaku

            resolve()
        }, 2000)
    })
}

function mean() {
    const tabel = document.getElementById("dataTabel")
    const rows = tabel.getElementsByTagName("tr")

    let totalUmur = 0
    let totalUangSaku = 0

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td")
        const umur = parseInt(cells[1].innerHTML)
        const uangSaku = parseInt(cells[2].innerHTML)

        totalUmur += umur
        totalUangSaku += uangSaku
    }

    const rataRataUmur = totalUmur / (rows.length - 1)
    const rataRataUangSaku = totalUangSaku / (rows.length - 1)

    const rataRataDiv = document.getElementById("rataRata")
    rataRataDiv.innerHTML = `Rata-rata Umur: ${rataRataUmur.toFixed(2)} tahun<br>Rata-rata Uang Saku: Rp ${rataRataUangSaku.toFixed(2)}`
}