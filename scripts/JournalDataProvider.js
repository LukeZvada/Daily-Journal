const journal = [
    {
        id: 1,
        date: "07/06/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok",
    },
    {
        id: 2,
        date: "07/8/2020",
        concept: "Flexbox",
        entry: "We learned how to take html components and style them using flexbox rules.",
        mood: "Ok",
    },
    {
        id: 3,
        date: "07/12/2020",
        concept: "Javascript Import/Export",
        entry: "We learned how to import separate js files into another to accomplish a goal that is set by functions",
        mood: "Ok",
    },
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}