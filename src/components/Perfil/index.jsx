import styles from './Perfil.module.css';
//METODO II
// const Perfil = (props) => {
//     const {endereço, nome} = props;
//METODO III
    const Perfil = ({nomeUsuario}) => {
    
    //METODO I --------------
    //const Perfil = () => {
    // const usuario = {
    //     nome: 'Carolina Mattos',
    //     avatar: 'https://github.com/nanahmattos.png'
    // }
    // return (
    //     <div>
    //         <img className='perfil-avatar' src={usuario.avatar} />
    //         <h3 className='perfil-titulo'>{usuario.nome}</h3>
    //     </div>
    // )
    //-----------------------
    //METODO II E III
    /* {JSON.stringify(props)} #METODO II, APARECE AS PROPRIEDADES EM STRING*/
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;