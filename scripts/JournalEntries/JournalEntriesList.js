
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { journalEntryComponent } from "./JournalHTMLMaker.js"
import { JournalFormComponent } from "../form/JournalForm.js";

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector("#container")

eventHub.addEventListener('showEntriesClicked', customEvent => {
    journalList()
})

const render = (entryArr) => { 
    // console.log("all entries: ", entryArr)
    const allEntryHTML = entryArr.map (
        (currentNote) => {
           return journalEntryComponent(currentNote) 
        }
    ).join("")
    console.log(allEntryHTML)
    contentTarget.innerHTML += allEntryHTML
}

export const journalList = () => {
    getEntries()
        .then(() => {
            // console.log("gothere")
            const allEntries = useJournalEntries()
            // console.log(allEntries)
            render(allEntries)
        })
    }

    eventHub.addEventListener("entryStateChanged", customEvent => {
        const allDeletedEntries = getEntries()
        render(allDeletedEntries)
    })

