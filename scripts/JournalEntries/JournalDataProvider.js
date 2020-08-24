
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
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
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

export const deleteEntry = (entryId) => {
    return fetch(`http://localhost:3000/entries/${ entryId }`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

export const editNote = (entry) => {
    return fetch(`http://localhost:3000/entries/${ entry.id }`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entry)
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

