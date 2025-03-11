document.getElementById('udhForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dni = document.getElementById('dni').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const celular = document.getElementById('celular').value;
    const udh_asignada = document.getElementById('udh_asignada').value;
    const opcion1 = document.getElementById('opcion1').value;
    const opcion2 = document.getElementById('opcion2').value;
    const opcion3 = document.getElementById('opcion3').value;
    const opcion4 = document.getElementById('opcion4').value;
    const opcion5 = document.getElementById('opcion5').value;

    if (!dni || !nombre || !apellido || !celular || !udh_asignada) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    const data = {
        DNI: dni,
        Nombre: nombre,
        Apellido: apellido,
        Celular: celular,
        'UDH Asignada': udh_asignada,
        'Opción 1': opcion1,
        'Opción 2': opcion2,
        'Opción 3': opcion3,
        'Opción 4': opcion4,
        'Opción 5': opcion5
    };

    console.log(data);
    alert("Datos guardados exitosamente");

    // Aquí puedes agregar la lógica para enviar los datos a un backend o servicio de almacenamiento
    // Por ejemplo, usando fetch() para enviar los datos a una API
});