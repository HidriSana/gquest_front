import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (
        <section>
            <h1>Vous n'avez pas les autorisations nécessaires pour faire ça</h1>
            {/*Ce bouton va faire revenir l'utilisateur à la page d'avant*/}
            <button onClick={goBack}> Revenir à la page d'avant</button>
        </section>
    );
};

export default Unauthorized;