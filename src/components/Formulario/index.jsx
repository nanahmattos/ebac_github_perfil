import { useState, useEffect } from "react"

//TANTO O useState como o useEffect devem estar dentro da função do componente, mas fora do return;
//useState:
/*useEffect: Possibilita executar uma ação após determinado evento,
por exemplo executar um código ao montar o comoponente, executar uma ação 
ao alterar um estado. 
EX.:
            useEfecct(() => {
                console.log("o componente foi atualizado");
            })
*/

const Formulario = () => {
    //CRIANDO UM ESTADO useState
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //mount : quando é montado
    //update: atualizado
    //onmount : desmontado

    useEffect(() => {
        console.log("o componente iniciou")

        return ()  => {
            console.log("o componente finalizou")
        }
    }, []);

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        //setNome(evento.target.value)
        setNome(estadoAnterior => {
            //console.log(estadoAnterior)
            
            return evento.target.value
        })
    }
    
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
            
        } else {
            return (
                <p>Olá {nome}, você foi reprovado :/ </p>
            )
            
        }
    }
    // esse return a seguir é o HTML da página
    /* TODO CONTÉUDO DENTRO DE CHAVES É JAVASCRIPT {[]}*/
    // .map faz o retorno de cada item
    /*key: necessário adicionar para que o React saiba gerenciar os elementos renderizados a partir de uma iteração. 
    Geralmente se usa um ID que virá de uma integração com o Back-End. Caso não tenha, deve usar algum valor unico 
    que não se repita na lista.*/
    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li> 
                    ))} {/*renderização de cada item com .map*/}
            </ul>
            {/*Para DESESTRUTURAÇÃO é necessário utiliza ({}) Ex.: onChange={({target}) => setMateriaA(parseInt(target.value))}*/}
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
            
        </form>
    )
}

export default Formulario