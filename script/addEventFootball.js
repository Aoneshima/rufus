let basicEvent = document.querySelector('.basic-events');
// console.log(basicEvent)

fetch('./data/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        let leagueSearch = data.RPL;
        // console.log(leagueSearch)
        for(let i = 1; i < leagueSearch.length; i++){
            createElement(leagueSearch[i].team1, leagueSearch[i].team2, leagueSearch[i].team1Logo, 
                leagueSearch[i].team2Logo, leagueSearch[i].cfW1, leagueSearch[i].cfX, leagueSearch[i].cfW2, leagueSearch[i].timeDate)
        }

    })
    .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
    });



function createElement(team1, team2, team1Logo, team2Logo, cfW1, cfX, cfW2, timeDate){
    // let htmlInfo = document.createElement(`div`)
    let htmlInfo = `<div class="basic-event">
                    <div class="basic-event-team">
                        <div class="basic-event-team-logo">
                            <img src="${team1Logo}" alt="img">
                        </div>
                            <p class="basic-event-team-name white-color-text basic-event-team-name">${team1}</p>
                        </div>
                        <div class="basic-event-other">
                            <div class="basic-event-other-date white-color-text">
                                ${timeDate}
                            </div>
                            <div class="basic-event-other-rates">
                                <div class="basic-event-other-rate">
                                    <div class="basic-event-other-rate-issue white-color-text basic-event-other-rate-text">П1</div>
                                    <div class="basic-event-other-rate-ratio white-color-text basic-event-other-rate-text">${cfW1}</div>
                                </div>
                                <div class="basic-event-other-rate">
                                    <div class="basic-event-other-rate-issue white-color-text basic-event-other-rate-text">X</div>
                                    <div class="basic-event-other-rate-ratio white-color-text basic-event-other-rate-text">${cfX}</div>
                                </div>
                                <div class="basic-event-other-rate">
                                    <div class="basic-event-other-rate-issue white-color-text basic-event-other-rate-text">П2</div>
                                    <div class="basic-event-other-rate-ratio white-color-text basic-event-other-rate-text">${cfW2}</div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="basic-event-team">
                                <div class="basic-event-team-logo">
                                    <img src="${team2Logo}" alt="img">
                                </div>
                                <p class="basic-event-team-name white-color-text basic-event-team-name">${team2}</p>
                            </div>`;
    // console.log(htmlInfo);

    basicEvent.insertAdjacentHTML('beforeEnd', htmlInfo)
}
