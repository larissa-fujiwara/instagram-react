import React from "react";

export default function Posts() {
    const posts = [
        { imgUsuario: "assets/img/meowed.svg", usuario: "meowed", imgPost: "assets/img/gato-telefone.svg", imgPerfilCurtido: "assets/img/respondeai.svg", usuarioCurtido: "respondeai" },
        { imgUsuario: "assets/img/barked.svg", usuario: "barked", imgPost: "assets/img/dog.svg", imgPerfilCurtido: "assets/img/adorable_animals.svg", usuarioCurtido: "adorable_animals" },
        { imgUsuario: "assets/img/kiki.jpeg", usuario: "ghibli", imgPost: "assets/img/Totoro.jpg", imgPerfilCurtido: "assets/img/adorable_animals.svg", usuarioCurtido: "adorable_animals" }
    ]

    return (
        <div class="posts">
            {posts.map(post => <Post imgUsuario={post.imgUsuario} usuario={post.usuario} imgPost={post.imgPost} imgPerfilCurtido={post.imgPerfilCurtido} usuarioCurtido={post.usuarioCurtido} />)}

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

function Post(props) {

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} alt="meowed" />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} alt="gato-telefone" />
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
                    <img src={props.imgPerfilCurtido} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.usuarioCurtido}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}