async function petsArea() {
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
    const petsData = await petsPromise.json();
    petsData.forEach(pet => {
        console.log(pet.name);
    })   
}

petsArea();