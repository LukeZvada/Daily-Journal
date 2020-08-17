export const journalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Concepts Covered: ${entry.conceptsCovered}
            Entry: ${entry.entryText} 
            Date: ${entry.date}
        </section>
    `
}