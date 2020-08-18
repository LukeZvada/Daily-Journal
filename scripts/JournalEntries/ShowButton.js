const contentTarget = document.querySelector("#showEntryButton")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    // console.log("clicked the button")
    if (clickEvent.target.id === "showEntries") {
        const customEvent = new CustomEvent("showEntriesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const showEntriesButton = () => {
    contentTarget.innerHTML = "<button id='showEntries'>Show Entries</button>"
}