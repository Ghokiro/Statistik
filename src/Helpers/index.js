const fnSeparar = (value) => {
    const separar = value.split(',');

    const convertir = separar.map( x => Number(x) )

    return convertir;

}



const fnMedia = (value) => { 

    const separar = fnSeparar(value);  
    
    if ( separar.includes(NaN) ) return "Error" 
    
    const calcular = separar.reduce( (a, b) => a + b , 0 ) / separar.length
    return calcular

}

const fnMediana = (value) => { 
    const separar = fnSeparar(value);  

    if ( separar.includes(NaN) ) return "Error" 
    
    const ordenar = separar.sort( (a, b) => a - b)
    const size = ordenar.length
    const x = ordenar[ Math.floor(size / 2) ]

    if ( ordenar.length % 2 === 0 ) {
        const y = ordenar[size / 2 - 1]
        
        const resultado = (x + y) / 2
        return  resultado
    }

    return x
    
}


export {
    fnMedia,
    fnMediana
}