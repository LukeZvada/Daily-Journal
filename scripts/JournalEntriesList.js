import { journalEntryComponent } from "./JournalHTMLMaker.js";
import { useJournalEntries } from "./JournalDataProvider.js";

const entryLog = document.querySelector("#entryLog")

export const entryListComponent = () => { 
    const entries = useJournalEntries()

    let entryHTMLRep = ""
    for (const entry of entries) { 
        entryHTMLRep += journalEntryComponent(entry)
    }

    entryLog.innerHTML += ` 
    <article> 
        ${entryHTMLRep}
    </article>
    `
}