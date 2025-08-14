// Lista de eventos (pode ser atualizado facilmente)
const eventos = [
    { data: "TERÇA   19:00",  titulo: "Culto de Ensino" },
    { data: "QUARTA  19:00",  titulo: "Círculo de Oração" },
    { data: "SABADO  19:00",  titulo: "Culto de Campanha" },
    { data: "DOMINGO 18:00",  titulo: "Culto da Família" }
];

// Pega o elemento da lista no HTML
const listaEventos = document.getElementById("lista-eventos");

// Adiciona eventos dinamicamente
eventos.forEach(evento => {
    const li = document.createElement("li");
    li.textContent = `${evento.data} - ${evento.titulo}`;
    listaEventos.appendChild(li);
});
