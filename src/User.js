import React from "react";

export default function User() {

    let nomeInicial = "catanacomics";
    let imgInicial = "assets/img/catanacomics.svg";

    const [nome, setNome] = React.useState(nomeInicial);
    const [img, setImg] = React.useState(imgInicial);

    function trocarNome (){
        const novoNome = prompt("Digite o nome:");
        setNome(novoNome);      
    }
    
    function trocarImg (){
        const novaImg = prompt("Insira o endereço da imagem:");
        setImg(novaImg);
    }

    return (
        <div class="usuario">
            <img onClick={trocarImg} src={img ? img : imgInicial} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong>{nome ? nome : nomeInicial}</strong>
                    <ion-icon name="pencil" onClick={trocarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}