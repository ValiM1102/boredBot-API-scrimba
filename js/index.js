const randomActivityBtn = document.querySelector('#random-activity-btn')

randomActivityBtn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#random-activity').innerHTML = `
        <p>${data.activity}</p>
        `
    })
})

 