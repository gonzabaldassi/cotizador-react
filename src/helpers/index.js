const formatearDinero = (valor) => {
    //API de js para formatear dinero
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

export{
    formatearDinero
}