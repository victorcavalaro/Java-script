function showSection(sectionId) {
    // Esconde todas as seções
    let sections = document.getElementsByClassName('content-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }

    // Mostra a seção selecionada
    document.getElementById(sectionId).classList.add('active');
}
