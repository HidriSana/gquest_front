import { useNavigate } from "react-router-dom";

const PendingRequest = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    
    return (
        <section>
            <h1>Vous devez attendre la validation de votre demande d'adhésion.</h1>
            {/*Ce bouton va faire revenir l'utilisateur à la page d'avant*/}
            <button onClick={goBack}> Revenir à la page d'avant</button>
        </section>
    );
};

export default PendingRequest;