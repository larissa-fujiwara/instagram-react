import React from "react";

export default function Posts() {
    const posts = [
        { imgUsuario: "assets/img/meowed.svg", altUsuario: "meowed", nomeUsuario: "meowed", imgPost: "assets/img/gato-telefone.svg", altPost: "gato-telefone", likes: 101523 },
        { imgUsuario: "assets/img/barked.svg", altUsuario: "barked", nomeUsuario: "barked", imgPost: "assets/img/dog.svg", altPost: "dog", likes: 99159 },
        { imgUsuario: "assets/img/kiki.jpeg", altUsuario: "ghibli", nomeUsuario: "ghibli", imgPost: "assets/img/Totoro.jpg", altPost: "totoro", likes: 20963 }
    ]

    return (
        <div className="posts">
            {posts.map((post, index) =>
                <Conteudo imgUsuario={post.imgUsuario}
                    altUsuario={post.altUsuario}
                    nomeUsuario={post.nomeUsuario}
                    imgPost={post.imgPost}
                    altPost={post.altPost}
                    likes={post.likes}
                    key={index} />)
            }

        </div >
    );
}

function Conteudo(props) {

    const [curtir, setCurtir] = React.useState(false);
    const [curtidas, setCurtidas] = React.useState(props.likes);
    const [salvar, setSalvar] = React.useState(false);


    function curtirPostImg() {
        if (!curtir) {
            setCurtir(true);
            setCurtidas(curtidas + 1);
        }

    }

    function curtirPostIcone() {
        const estadoCurtirIcone = alteraEstado(curtir);
        if (!estadoCurtirIcone) {
            setCurtir(estadoCurtirIcone);
            setCurtidas(curtidas - 1);
        } else {
            setCurtir(estadoCurtirIcone);
            setCurtidas(curtidas + 1);
        }
    }

    function salvarPost() {
        const estadoSalvo = alteraEstado(salvar);
        setSalvar(estadoSalvo);
    }


    function alteraEstado(estado) {
        const mudarEstado = !estado;
        return mudarEstado;
    }

    return (
        <div className="post">

            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUsuario} alt={props.altUsuario} />
                    {props.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img onClick={curtirPostImg} src={props.imgPost} alt={props.altPost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={curtirPostIcone} name={curtir ? "heart-sharp" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={salvar ? "bookmark-sharp" : "bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div className="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}