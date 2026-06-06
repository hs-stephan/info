// Fonction pour gérer la sélection de méthode d'apprentissage
function selectMethod(method) {
    // Afficher un message de confirmation
    const methodNames = {
        'leçons': 'Leçons',
        'fiches': 'Fiches de révision',
        'quiz': 'Quiz interactifs',
        'exercices': 'Exercices pratiques',
        'projets': 'Projets complets',
        'examens': 'Examens de certification'
    };

    const selectedMethod = methodNames[method] || method;
    console.log(`Méthode sélectionnée: ${selectedMethod}`);

    // Vous pouvez ajouter ici la logique pour :
    // - Rediriger vers une page spécifique
    // - Afficher un modal avec les modules disponibles
    // - Sauvegarder la sélection de l'utilisateur
    // - Afficher une notification
    
    // Exemple : afficher une alerte (à remplacer par une meilleure UX)
    // alert(`Vous avez sélectionné : ${selectedMethod}`);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des effets ou des actions au chargement
    console.log('Page de choix d\'apprentissage chargée');
    
    // Exemple : ajouter un événement de suivi pour les cartes de choix
    const choiceCards = document.querySelectorAll('.choice-card');
    choiceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Vous pouvez ajouter des effets supplémentaires ici
        });
    });
});
