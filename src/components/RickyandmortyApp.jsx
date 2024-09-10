import { useCharacter } from "../hooks/useCharacters";


export const RickandmortyApp = () => {

    const {character, imgUrl}   = useCharacter();
   

    return (
        <>
            {character &&
                character.map((char) => (

                    
                    <div key={char.id}>
                        <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <li> {char.name}</li>
                            <img src={imgUrl(char)} style = {{width: '8rem', display: 'flex'}}/>
                            <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">Species: {char.species}</p>
          <p className="card-text">Status: {char.status}</p>
        </div>
                 </div> 
                 </div>
                 </div>
                  ))}

        <a class="btn btn-primary" href="#" role="button">Pagina Anterior</a>
        <a class="btn btn-primary" href="#" role="button">Pagina Siguiente</a>

        </>
    )
}







  