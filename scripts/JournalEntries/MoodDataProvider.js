let mood = []

export const useMood = () => { 
    return mood.slice()
}

export const getMoods = () => {
    return fetch('http://localhost:3000/moods')
        .then(response => response.json())
        .then(parsedMoods => {
            mood = parsedMoods
        })

}