const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { dni, nombre, apellido, celular, udhAsignada, opcion1, opcion2, opcion3, opcion4, opcion5 } = req.body;

    // Leer el archivo Excel existente o crear uno nuevo si no existe
    let workbook;
    let worksheet;
    if (fs.existsSync('datos.xlsx')) {
        workbook = XLSX.readFile('datos.xlsx');
        worksheet = workbook.Sheets['Datos'] || XLSX.utils.json_to_sheet([]);
    } else {
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.json_to_sheet([]);
    }

    // Añadir los nuevos datos a la hoja de trabajo existente
    const newRow = {
        DNI: dni,
        Nombre: nombre,
        Apellido: apellido,
        Celular: celular,
        UDH_Asignada: udhAsignada,
        opcion1: opcion1,
        opcion2: opcion2,
        opcion3: opcion3,
        opcion4: opcion4,
        opcion5: opcion5
    };
    const json = XLSX.utils.sheet_to_json(worksheet);
    json.push(newRow);
    worksheet = XLSX.utils.json_to_sheet(json);

    // Añadir la hoja de trabajo al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    // Escribir el libro en un archivo
    XLSX.writeFile(workbook, 'datos.xlsx');

    res.json({ message: 'Datos recibidos y almacenados en datos.xlsx' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});