
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { journalEntryComponent } from "./JournalHTMLMaker.js"

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector("#container")

eventHub.addEventListener('showEntriesClicked', customEvent => {
    journalList()
})

eventHub.addEventListener("entryStateChanged", customEvent => {
    const deletedEntries = useJournalEntries()
    render(deletedEntries)
})

const render = (entryArr) => { 
    const allEntryHTML = entryArr.map (
        (currentNote) => {
           return journalEntryComponent(currentNote) 
        }
    ).join("")
    contentTarget.innerHTML = allEntryHTML
}

export const journalList = () => {
    getEntries()
        .then(() => {
            const allEntries = useJournalEntries()
            render(allEntries)
        })
    }


