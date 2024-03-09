import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'
const App = () => {
    const feedback = <Feedback
    textoOk="Já chegou"
    textoNOk="Ainda não chegou"
    funcaoOk={() => alert('Obrigado pelo feedback')}
    funcaoNOK={() => alert('Verificaremos o que houve')}
    />
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                {/* h1.display-5.text-center{Seus Pedidos} */}
                <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>
        </div>

        <div className="row">
            {/* primeiro pedido */}
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                {/* .card>.card-header.text-muted{22/04/2024}+.card-body.d-flex */}
                <Cartao cabecalho="22/04/2022">
                    <Pedido
                        iconeNome="fa-hdd"
                        iconeEfeito="fa-fade"
                        titulo="HDD"
                        descricao="1Tb" />
                    {feedback}
                </Cartao>
            </div>                    

            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2022">
                    <Pedido
                        data="22/04/2024"
                        iconeNome="fa-hdd"
                        iconeEfeito="fa-fade"
                        titulo="HDD"
                        descricao="1Tb" />
                </Cartao>
            </div>

            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2022">
                    <Pedido
                        data="22/04/2024"
                        iconeNome="fa-book"
                        iconeEfeito="fa-shake"
                        titulo="Livro"
                        descricao="Harru Potter" />
                </Cartao>
            </div>


            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao>
                    <Pedido
                        data="22/04/2024"
                        iconeNome="fa-laptop"
                        iconeEfeito="fa-flip"
                        titulo="Notebook"
                        descricao="I7 12th" />
                </Cartao>
            </div>
        </div>
        <div className="row">
            {/* exibir um nome de empresa que voce vai inventar e pelo menos tres icones de redes sociais */}
        </div>
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)