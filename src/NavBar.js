import IonIcon from "@reacticons/ionicons";

export default function NavBar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <IonIcon name="logo-instagram"/>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" alt="logo" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <IonIcon name="paper-plane-outline"/>
                    <IonIcon name="compass-outline"></IonIcon>
                    <IonIcon name="heart-outline"></IonIcon>
                    <IonIcon name="person-outline"></IonIcon>
                </div>

                <div class="icones-mobile">
                    <IonIcon name="paper-plane-outline"></IonIcon>
                </div>
            </div>
        </div>
    );
}