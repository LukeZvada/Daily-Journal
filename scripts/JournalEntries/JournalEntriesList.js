
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { journalEntryComponent } from "./JournalHTMLMaker.js"
import { JournalFormComponent } from "../form/JournalForm.js";

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector("#container")

eventHub.addEventListener('showEntriesClicked', customEvent => {
    journalList()
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
            // console.log("gothere")
            const allEntries = useJournalEntries()
            // console.log(allEntries)
            render(allEntries)
        })
    }

    




// export const entryListComponent = () => { 
//     const entries = useJournalEntries()

//     let entryHTMLRep = ""
//     for (const entry of entries) { 
//         entryHTMLRep += journalEntryComponent(entry)
//     }

//     entryLog.innerHTML += ` 
//     <article> 
//         ${entryHTMLRep}
//     </article>
//     `
// }