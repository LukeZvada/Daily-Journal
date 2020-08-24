import { deleteEntry } from "./JournalDataProvider.js";

const eventHub = document.querySelector("#entryLog")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEntry--")) { 
        const [prefix, entryId] = clickEvent.target.id.split("--")
        
        deleteEntry(entryId)
    }
})

export const journalEntryComponent = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Concepts Covered: ${entry.conceptsCovered}
            Entry: ${entry.entryText} 
            Date: ${entry.date}
             
            <button id="deleteEntry--${entry.id}">Delete</button> 
        </section>
    `
}

// find a way to connect moodId to mood.Id