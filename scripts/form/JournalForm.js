import { saveEntry, editNote, useJournalEntries } from "../JournalEntries/JournalDataProvider.js";
import { getMoods, useMood } from "../JournalEntries/MoodDataProvider.js";

const contentTarget = document.querySelector(".form__style")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("editNote", customEvent => {
    const allEntries = useJournalEntries()
    const entryId = event.detail.entryId
    const entryObject = allEntries.find(entry => entry.id === entryId)
    console.log(entryId)
    
    const journalDate = document.querySelector("#journalDate")
    const conceptsCovered = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const journalMood = document.querySelector("#mood")
    const id = document.querySelector("#entryId")
        
    journalDate.value = entryObject.title
    conceptsCovered.value = entryObject.author
    journalEntry.value = entryObject.content
    journalMood.value = entryObject.criminalId
    id.value = entryId
})




eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        
        const journalDate = document.querySelector("#journalDate")
        const conceptsCovered = document.querySelector("#conceptsCovered")
        const journalEntry = document.querySelector("#journalEntry")
        const journalMood = document.querySelector("#mood")

        const newEntry = { 
            date: journalDate.value,
            conceptsCovered: conceptsCovered.value,
            entryText: journalEntry.value,
            moodId: parseInt(journalMood.value)
        }
      
        saveEntry(newEntry)
    } else {
        const editedEntry = {
            date: journalDate.value,
            conceptsCovered: conceptsCovered.value,
            entryText: journalEntry.value,
            moodId: parseInt(journalMood.value)
            id: parseInt(editNoteId.value)
        }
        editNote(EditedNote)
        editNoteId.value = ""
    
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
        </fieldset>
    </form>
    `
})
}

export const JournalFormComponent = () => { 
    render()
}