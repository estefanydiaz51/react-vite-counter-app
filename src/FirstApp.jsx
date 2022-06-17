
// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Estefany'
// };

// si no hay ninguna dependencia del componente o una referencia las funciones
// van fuera 
// const getResultado = ( a, b ) => {
//     return a + b ;
// }

import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name } ) => {

    return (
        <>
            {/* <h1>{ getResultado( 6, 7) }</h1> */}
            {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
            <h1 data-testid="test-title"> { title } </h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}


// estos entran antes que los propTypes
FirstApp.defaultProps = {
    title: 'No hay ningún titulo',
    subTitle: 'No hay subtitulo',
    name: 'Estefany Diaz'
}