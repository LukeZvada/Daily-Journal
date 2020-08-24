
// import { entryListComponent } from "./JournalEntries/JournalEntriesList.js";
import { getEntries } from "./JournalEntries/JournalDataProvider.js";
import { JournalFormComponent } from "./form/JournalForm.js";
import { showEntriesButton } from "./JournalEntries/ShowButton.js";
import "./JournalEntries/JournalEntriesList.js"



getEntries()
JournalFormComponent()
showEntriesButton()
