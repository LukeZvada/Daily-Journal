const contentTarget = document. querySelector(".form__style")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showEntries") {
        const customEvent = new CustomEvent("showEntriesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const showEntriesButton = () => {
    contentTarget.innerHTML = "<button id='showEntries'>Show Entries</button>"
}