const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

async function petsArea() {
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
    const petsData = await petsPromise.json()
    petsData.forEach(pet => {
        const clone = template.content.cloneNode(true)

         clone.querySelector("h3").textContent = pet.name
         clone.querySelector(".pet-description").textContent = pet.description
         clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear)

        wrapper.appendChild(clone)
    });   
    document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea();

function createAgeText(birthYear){
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear

    if (age == 1) return "1 year old"
    if (age == 0) return "less than a year old"
    
    return `${age} years old`
}