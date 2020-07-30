
let entries = []

const eventhub = document.querySelector("#container")


export const useJournalEntries = () => { 
    return entries.slice()
}

const dispatchStateChangeEvent = () => { 
    const entryStateChangeEvent = new CustomEvent("entryStateChanged")

    eventhub.dispatchEvent(entryStateChangeEvent)
}

export const getEntries = () => {
    fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
            // console.log(parsedEntries)
        })

}

export const saveEntry = (entry) => {
    const jsonEntry = JSON.stringify(entry)

    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonEntry
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}


// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }