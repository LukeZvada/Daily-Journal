export const journalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.entry} 
            ${entry.date}
        </section>
    `
}