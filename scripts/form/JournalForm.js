import { saveEntry, editNote, useJournalEntries } from "../JournalEntries/JournalDataProvider.js";
import { getMoods, useMood } from "../JournalEntries/MoodDataProvider.js";

const contentTarget = document.querySelector(".form__style")
const eventHub = document.querySelector("#container")

// declare the editNote custom event
eventHub.addEventListener("editNote", customEvent => {
    console.log("custom edit event happening")
    const allEntries = useJournalEntries()
    const entryId = event.detail.entryId
    const entryObject = allEntries.find(entry => entry.id === entryId)
    console.log(entryId)
    
    const journalDate = document.querySelector("#journalDate")
    const conceptsCovered = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const journalMood = document.querySelector("#mood")
    const id = document.querySelector("#entryId")
        
    journalDate.value = entryObject.date
    conceptsCovered.value = entryObject.conceptsCovered
    journalEntry.value = entryObject.entryText
    journalMood.value = entryObject.moodId
    id.value = entryId
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        
        const journalDate = document.querySelector("#journalDate")
        const conceptsCovered = document.querySelector("#conceptsCovered")
        const journalEntry = document.querySelector("#journalEntry")
        const journalMood = document.querySelector("#mood")

        if (journalDate.value !== "" && conceptsCovered.value !== "" && journalEntry.value !== "" && journalMood.value !== "0") {
            const editNoteId = document.querySelector("#entryId")
            
            if(editNoteId.value === "") {
                
                const newEntry = { 
                    date: journalDate.value,
                    conceptsCovered: conceptsCovered.value,
                    entryText: journalEntry.value,
                    moodId: parseInt(journalMood.value)
                }
                saveEntry(newEntry)
                render()
            } else {
                const editedEntry = {
                    date: journalDate.value,
                    conceptsCovered: conceptsCovered.value,
                    entryText: journalEntry.value,
                    moodId: parseInt(journalMood.value),
                    id: parseInt(editNoteId.value)
                }
                editNote(editedEntry)
                editNoteId.value = ""
            }
        } else {
            window.alert("All fields required")
        } 
    }
})

const render = () => {
    
    getMoods()
        .then(() => {
            const mood = useMood()
    
    contentTarget.innerHTML =`
    <form action=""> 
            <fieldset class="form form__background"> 
            <label for="journalDate">Date of Entry</label>
            <input class="form__content" type="date" name="journalDate" id="journalDate">
            <label for="conceptsCovered">Concepts Covered</label>
            <input class="form__content" type="textarea" name="conceptsCovered" id="conceptsCovered">
            <label for="journalEntry">Journal Entry</label>
            <textarea placeholder="What did you learn?" class="form__content form__journalEntry" type="textarea" name="journalEntry" id="journalEntry"></textarea>
            <label for="mood">Mood</label>
            <select class="mood__Selector select-selected:after" name="mood" id="mood">
            ${
             mood.map((moodObject) =>{
                 return `<option value ="${moodObject.id}">${moodObject.label}</option>`
             }).join("")
            }
            </select>
            <button id="saveEntry" class="button button:hover" type="button">Submit Journal Entry</button>
            <input type="hidden" id="entryId" name="entryId" value="">
        </fieldset>
    </form>
    `
})
}

export const JournalFormComponent = () => { 
    render()
}