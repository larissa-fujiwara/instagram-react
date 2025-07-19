import React from "react";

export default function Posts() {
    const posts = [
        { imgUsuario: "assets/img/meowed.svg", usuario: "meowed", altUsuario:"meowed", imgPost: "assets/img/gato-telefone.svg", altPost:"gato-telefone"},
        { imgUsuario: "assets/img/barked.svg", usuario: "barked", altUsuario:"barked", imgPost: "assets/img/dog.svg", altPost:"dog"},
        { imgUsuario: "assets/img/kiki.jpeg", usuario: "ghibli", altUsuario:"ghibli", imgPost: "assets/img/Totoro.jpg", altPost:"totoro"}
    ]

    return (
        <div class="posts">
            {posts.map(post => <Post imgUsuario={post.imgUsuario} usuario={post.usuario} altUsuario={post.altUsuario} imgPost={post.imgPost} altPost={post.altPost} />)}

        </div>
    );
}

function SalvarPost() {

    const [estado, setEstado] = React.useState(false);

       
    function salvarPublicacao(){
        const novoEstado = inverteEstado(estado);
        setEstado(novoEstado);

    }

    function inverteEstado(estadoAtual){
        const toggle = !estadoAtual;
        return toggle;
    }

    return (
        <ion-icon onClick={salvarPublicacao} name={estado ? "bookmark-sharp" : "bookmark-outline"}></ion-icon>
    )
}

function CurtirPost(){

}

function Post(props) {

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} alt={props.altUsuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} alt={props.altPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <SalvarPost />
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}