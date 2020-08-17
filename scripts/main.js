
// import { entryListComponent } from "./JournalEntries/JournalEntriesList.js";
import { getEntries } from "./JournalEntries/JournalDataProvider.js";
import { JournalFormComponent } from "./form/JournalForm.js";
import { showEntriesButton } from "./JournalEntries/ShowButton.js";
console.log("I made it ")



// entryListComponent()
getEntries()
JournalFormComponent()
showEntriesButton()
