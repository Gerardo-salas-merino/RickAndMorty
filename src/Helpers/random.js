


const getRandomNumber = (limit) => {
    //[0 ======> 0.9999999 * 126 => 0 ======>]

    return Math.floor(Math.random() * limit) + 1;


};

export { getRandomNumber};