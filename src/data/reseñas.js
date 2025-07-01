const reseñas = [
    {
        nombre: "James Fisher",
        comentario:
            "Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy",
        fecha: "2018-10-10T09:13:00Z",
        criterios: {
            rating: 5,
            comfort: 4,
            food: 4,
            hospitality: 5,
            hygiene: 4,
            reception: 5
        },
        obtenerEstrellas() {
            const valores = Object.values(this.criterios);
            const suma = valores.reduce((acc, val) => acc + val, 0);
            return Number((suma / valores.length).toFixed(1));
        }
    },
    {
        nombre: "Laura Gómez",
        comentario:
            "Excelente atención y organización. Sin duda volvería a contratar.",
        fecha: "2023-06-15T14:20:00Z",
        criterios: {
            rating: 5,
            comfort: 5,
            food: 5,
            hospitality: 5,
            hygiene: 5,
            reception: 5
        },
        obtenerEstrellas() {
            const valores = Object.values(this.criterios);
            const suma = valores.reduce((acc, val) => acc + val, 0);
            return Number((suma / valores.length).toFixed(1));
        }
    }
];
  