
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { JournalFormComponent } from "../form/JournalForm.js";

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector

eventHub.addEventListener('showNotesClicked', customEvent => {
    journalList()
})

export const journalList = () => {
    getEntries()
        .then(() => {
            const allEntries = useJournalEntries()
                render(allEntries)
        })
    }

    const render = (entryArr) => { 
        const allEntryHTML = entryArr.map (
            (currentNote) => {
               return JournalFormComponent(currentNote)  
            }
        ).join("")
    
        contentTarget.innerHTML = allEntryHTML
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