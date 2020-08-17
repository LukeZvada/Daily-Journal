export const journalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Entry: ${entry.entryText} 
            Date: ${entry.date}
        </section>
    `
}