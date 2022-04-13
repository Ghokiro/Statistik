const fnSeparar = (value) => {
    const separar = value.split(',');

    const convertir = separar.map( x => Number(x) )

    return convertir;

}



const fnMedia = value => { 

    const separar = fnSeparar(value);  
    
    if ( separar.includes(NaN) ) return "Error" 
    
    const calcular = (separar.reduce( (a, b) => a + b , 0 ) / separar.length).toFixed(2)
    return calcular

}

const fnMediana = value => { 
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

const fnModa = value => {
    const separar = fnSeparar(value);
    let moda = {}
    const setModa = separar.map( x => moda[x] = (moda[x] || 0) + 1  );
    
    let modaValue = Object.values( moda )
    let modaKey = Object.keys( moda )

    const modaMax = Math.max( ...modaValue )  

    if ( modaValue.every( x=> x === modaValue[0]) ) 
        return "No hay Moda"    

    const resultado = (modaKey.filter( x => moda[x] === modaMax ))   

    const getModa =  resultado.join(", ")

    return getModa
}


export {
    fnMedia,
    fnMediana,
    fnModa
}