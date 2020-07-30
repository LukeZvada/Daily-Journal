

const contentTarget = document.querySelector(".form__style")

const render = () => {
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
                <option value="Happy">Happy</option>
                <option value="Ok">Ok</option>
                <option value="Sad">Sad</option>
                <option value="Frustrated">Frustrated</option>
            </select>
            <button class="button button:hover" type="button">Submit Journal Entry</button>
        </fieldset>
    </form>
    `
}

export const JournalFormComponent = () => { 
    render()
}