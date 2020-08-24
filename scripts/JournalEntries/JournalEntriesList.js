
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { journalEntryComponent } from "./JournalHTMLMaker.js"
import { getMoods, useMood } from "./MoodDataProvider.js";

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector("#container")

eventHub.addEventListener('showEntriesClicked', customEvent => {
    journalList()
})

eventHub.addEventListener("entryStateChanged", customEvent => {
    const deletedEntries = useJournalEntries()
    render(deletedEntries)
})

const render = () => { 

    const moods = useMood()
    const entries = useJournalEntries()

    let htmlRepresentative = ""

        entries.map((entry) => { 
            const foundMood = moods.find((moodObject) => {
                return moodObject.Id === entry.Id
            })
            htmlRepresentative += journalEntryComponent(entry, foundMood)
        }).join("")
        contentTarget.innerHTML = htmlRepresentative
}
    

export const journalList = () => {
    getEntries()
        .then(getMoods)
        .then(render)
    }


