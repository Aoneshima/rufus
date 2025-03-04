let eventCategories = document.querySelector('.basic-events-categories');
// console.log(eventCategories)

fetch('data/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        let category = data.football;
        for(let i = 0; i < category.length; i++){
            
            createLeagues(category[i][0].name, category[i][0].imgleague, category[i][0].idCategory)
            // createLeagues(leagueSearch[i].team1, leagueSearch[i].team2, leagueSearch[i].team1Logo, 
            //     leagueSearch[i].team2Logo, leagueSearch[i].cfW1, leagueSearch[i].cfX, leagueSearch[i].cfW2, leagueSearch[i].timeDate)
        }

    })
    .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
    });


function createLeagues(name, imgleague, idCategory){
    // console.log(name, imgleague)
    

    let htmlCategory = `<div class="basic-events-category ${idCategory}">
    <div class="basic-events-category-name category-false">
                            <img src = "${imgleague}" class="basic-events-category-flag"></img>
                            <div class="basic-events-category-name-text white-color-text">${name}</div>
                        </div>
                        </div>`
    
    // console.log(htmlCategory)

    eventCategories.insertAdjacentHTML('beforeEnd', htmlCategory)
}