let loginNetflix = ( authentication, loadCatalog ) => {
    if (authentication.email === 'johannlondonob@gmail.com' && authentication.password === '1234') {
        console.log( 'Autenticación exitosa' )
        loadCatalog( 200 )
    } else {
        console.log( 'Autenticación fallida...' )
        loadCatalog( 400 )
    }
}

user = {
    email: 'johannlondonob@gmail.com',
    password: '1234'
}

loginNetflix( user, response => setTimeout( () => response === 200 ? console.log( 'Catálogo cargado' ) : console.log( 'Sin acceso al catálogo' ), 3500 ) )
