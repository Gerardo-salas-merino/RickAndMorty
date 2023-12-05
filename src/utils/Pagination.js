const paginationLogic = (CurrentPage, residents) => {
    
    //Cantidad de residentes por pagina
    const RESIDENTS_PER_PAGES = 20;

    //cantidad total de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGES);

    //Residentes que se van a mostrar en la pagina actual
    const sliceEnd = CurrentPage * RESIDENTS_PER_PAGES;
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGES;
    const residentsInCurrentPages = residents.slice(sliceStart, sliceEnd);

    //Generacion de arreglo con los numeros de las paginas que se van a mostrar
    const pages = [];

    for(let i = 1; i <= totalPages; i++){
        pages.push(i)

    }

    return{pages, residentsInCurrentPages}
};

export { paginationLogic }