//Separar los valores y convertirlos a numéricos
const fnSeparar = (value) => {
    
    const separar = value.split(',');

    const convertir = separar.map( x => Number(x) )

    return convertir;

}


//Calcular la medida media
const fnMedia = value => { 

    const separar = fnSeparar(value);  
    //Retornar error si se digita algún caracter no numérico
    if ( separar.includes(NaN) ) return "Error" 
    
    //Suma todos los valores y se divide entre la cantidad introducida
    const calcular = (separar.reduce( (a, b) => a + b , 0 ) / separar.length).toFixed(2)
    return calcular

}

const fnMediana = value => { 
    const separar = fnSeparar(value);  

    if ( separar.includes(NaN) ) return "Error" 
    
    //ordena de menor a mayor los valores
    const ordenar = separar.sort( (a, b) => a - b)

    //almacena cantidad de de valores digitados
    const size = ordenar.length

    //registrar la mediana
    const x = ordenar[ Math.floor(size / 2) ]

    //Si la cantidad de valores es par, toma las dos partes medias y las divide entre dos
    if ( ordenar.length % 2 === 0 ) {
        const y = ordenar[size / 2 - 1]
        
        const resultado = (x + y) / 2
        return  resultado
    }

    return x
    
}

const fnModa = value => {
    const separar = fnSeparar(value);

    //Almacena la moda
    let moda = {}

    /*registra el valor introducido como llave, 
    y registra la cantidad de repeticiones como el valor de la llave */
    separar.map( x => moda[x] = (moda[x] || 0) + 1  )
    
    //almacenan las llaves y las repeticiones
    let modaValue = Object.values( moda )
    let modaKey = Object.keys( moda )

    //buscar la cantidad de repeticiones máximas
    const modaMax = Math.max( ...modaValue )  

    //"no hay moda" si todos los valores se repiten la misma cantidad de veces
    if ( modaValue.every( x => x === modaValue[0]) ) 
        return "No hay Moda"    

    // Filtrar el valor con mayor cantidad de repeticiones
    const resultado = (modaKey.filter( x => moda[x] === modaMax ))   

    //separar los valores con "coma" en caso de que haya más de uno
    const getModa =  resultado.join(", ")

    return getModa
}

//Exportar las funciones de cálculo
export {
    fnMedia,
    fnMediana,
    fnModa
}