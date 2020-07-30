
let entries = []

export const useJournalEntries = () => { 
    return entries.slice()
}

export const getEntries = () => {
    fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
            // console.log(parsedEntries)
        })

}

export const saveEntry = (note) => {
    const jsonEntry = JSON.stringify(note)

    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonEntry
    })
    .then(getEntries)
    .then(dispatchChangeEvent)
}


// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }