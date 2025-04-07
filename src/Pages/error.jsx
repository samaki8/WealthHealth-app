//WealthHealth-app\src\Pages\error.jsx
function Error() {


    return (
        <div>
            <h1>C'est une page d'erreur</h1>

            <p>Veuillez revenir à la page d'accueil.</p>
            <button onClick={() => window.location.href = '/'}>Retour à l'accueil</button>
            <button onClick={() => window.location.reload()}>Recharger la page</button>
            <button onClick={() => window.history.back()}>Retour</button>
            <button onClick={() => window.location.href = '/contact'}>Contactez-nous</button>
        </div>
    );
}

export default Error;
