export const journalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Entry: ${entry.entry} 
            Date: ${entry.date}
        </section>
    `
}