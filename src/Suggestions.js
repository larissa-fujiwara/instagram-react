export default function Suggestions() {
    const sugeridos = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você", alt:"bad.vibes.memes" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você", alt:"chibirdart" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram", alt:"razoesparaacreditar" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você", alt:"adorable_animals" },
        { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você", alt:"smallcutecats" },

    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugeridos.map(perfil => <Sugerido imagem={perfil.imagem} nome={perfil.nome} razao={perfil.razao} alt={perfil.alt} />)}
        </div>
    )
}

function Sugerido(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt={props.alt} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}