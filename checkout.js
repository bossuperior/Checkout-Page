const countryDropdown = document.getElementById("country")
const listItem = [] 

countryDropdown.addEventListener("click",getCountry)

async function getCountry(){
    const url = "https://restcountries.com/v2/all"
    const res = await fetch(url)
    const items = await res.json() 
    countryDropdown.innerHTML = ""
    items.forEach(data=>{
        const option = document.createElement("option")
        listItem.push(option)
        option.innerHTML = `
            <h4>${data.name}</h4>
        `
        countryDropdown.appendChild(option)
    })
}