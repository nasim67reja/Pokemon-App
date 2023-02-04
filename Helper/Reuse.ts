export const capitalizeString=(str:string):string=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const padWithZeros=(num:number):string=> (num.toString().padStart(3, '0'));

export const addPathC=(url:string):string=>url.replace("pokemon/", "pokemon/other/official-artwork/");

