
const api_url = `https://rickandmortyapi.com/api/character`

export const reqCharacter = async()=>{
    const resp = await fetch(api_url)
    const data = await resp.json()
    console.log(data);



    

    return data

    }
export const reqBuscar = async(nombre)=>{
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
    const data = await resp.json()
    console.log(data);


}

    reqCharacter()
    reqBuscar()

    