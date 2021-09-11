let loginNetflix = ( authentication ) => {
    console.log('Autenticando usuario...')
    return new Promise( function ( resolve, reject ) {
        setTimeout( () => {
            if (authentication.email === 'johannlondonob@gmail.com' && authentication.password === '1234') {
                console.log( 'Autenticación exitosa' )
                resolve( 200 )
            } else {
                console.log( 'Autenticación fallida...' )
                reject( 400 )
            }
        }, 5000 )
    } )
}

user = {
    email: 'johannlondonob@gmail.com',
    password: '1234'
}

loginNetflix( user )
    .then( ( response ) => {
        console.log( response )
    } )
    .catch((error) => {
        console.log(error)
    })

async function requestProcess(user) {
    try {
        let response = await loginNetflix(user)
    } catch (error) {
        console.log(error);
        
    }
}

requestProcess(user)