const cargarInformacion = async () => {
    try{
    const url = await fetch('https://api.thedogapi.com/v1/breeds');

        if(url.status === 200){
            const datos = await url.json();
            let perritos = '';
            datos.forEach(perrito => {
                perritos += `
                    <div class="card w-100">
                    <img src="${perrito.image.url}" alt="perrito">
                        <div class="card-body">
                            <h3>${perrito.name}</h3>
                            <p>${perrito.temperament}</p>
                            <p>${perrito.life_span}</p>
                        </div>
                    </div>
                `;
            });
            document.getElementById('container').innerHTML = perritos;

        }else if(url.status === 401){
            console.log('No autorizado');
        }else if(url.status === 404){
            console.log('No encontrado');
        }

    }catch(error){
        console.log(error);
    }
}

cargarInformacion();
