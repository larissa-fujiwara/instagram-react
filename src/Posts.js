import React from "react";

export default function Posts() {
    const posts = [
        { imgUsuario: "assets/img/meowed.svg", altUsuario: "meowed", nomeUsuario: "meowed", imgPost: "assets/img/gato-telefone.svg", altPost: "gato-telefone", likes: 101523 },
        { imgUsuario: "assets/img/barked.svg", altUsuario: "barked", nomeUsuario: "barked", imgPost: "assets/img/dog.svg", altPost: "dog", likes: 99159 },
        { imgUsuario: "assets/img/kiki.jpeg", altUsuario: "ghibli", nomeUsuario: "ghibli", imgPost: "assets/img/Totoro.jpg", altPost: "totoro", likes: 20963 }
    ]

    return (
        <div class="posts">
            {posts.map(post =>
                <div class="post">
                    <TopoPost imgUsuario={post.imgUsuario} altUsuario={post.altUsuario} nomeUsuario={post.nomeUsuario} />
                    <Conteudo imgPost={post.imgPost} altPost={post.altPost} likes={post.likes} />
                </div>)}

        </div>
    );
}


function TopoPost(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imgUsuario} alt={props.altUsuario} />
                {props.nomeUsuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {

    const [curtir, setCurtir] = React.useState(false);
    const [curtidas, setCurtidas] = React.useState(props.likes);


    function curtirPostImg() {
        const estadoCurtir = alteraEstado(curtir);
        if (estadoCurtir) {
            setCurtir(estadoCurtir);
            setCurtidas(curtidas + 1);
        }

    }

    function curtirPostIcone() {
        const estadoCurtirIcone = alteraEstado(curtir);
        if (!estadoCurtirIcone) {
            setCurtir(estadoCurtirIcone);
            setCurtidas(curtidas - 1);
        }else{
            setCurtir(estadoCurtirIcone);
            setCurtidas(curtidas + 1);
        }
    }


    function alteraEstado(estado) {
        const mudarEstado = !estado;
        return mudarEstado;
    }

    return (
        <>
            <div class="conteudo">
                <img onClick={curtirPostImg} src={props.imgPost} alt={props.altPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtirPostIcone} name={curtir ? "heart-sharp" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    )
}

/* function AcaoFavoritar() {
    const[favorito, setFavorito] = React.useState(false);
    
    function favoritarPost(){
        const recebeFavorito = inverteValores(favorito);
        setFavorito(recebeFavorito);
        console.log(recebeFavorito);
    }

    return (
        <ion-icon onClick={favoritarPost} name={favorito ? "bookmark-sharp" : "bookmark-outline"}></ion-icon>
    )
}



function inverteValores(valorAtual){
    return !valorAtual;
} */