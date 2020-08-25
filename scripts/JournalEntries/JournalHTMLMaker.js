import { deleteEntry } from "./JournalDataProvider.js";

const eventHub = document.querySelector("#container")

// if user clicks delete note button, then call deleteNote method to delete the data via the API
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEntry--")) { 
        const [prefix, entryId] = clickEvent.target.id.split("--")
        
        deleteEntry(entryId)
    }
})

// if user clicks edit note button, then call the editNote custom event
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editNote--")) {
        console.log("clicked edit note")
        const [prompt, entryId] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("editNote", {
            detail: {
                entryId: parseInt(entryId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const journalEntryComponent = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Concepts Covered: ${entry.conceptsCovered} <br />
            Entry: ${entry.entryText} <br />
            Date: ${entry.date} <br />
            Mood: ${mood.label}  <br />
            <button id="deleteEntry--${entry.id}">Delete</button> <br />
            <button id="editNote--${ entry.id }">Edit</button>
        </section>
    `
}

