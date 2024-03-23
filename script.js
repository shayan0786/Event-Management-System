function addEvent() {
    var eventName = document.getElementById("eventName").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventTime = document.getElementById("eventTime").value;
    var eventLocation = document.getElementById("eventLocation").value;
    var eventDescription = document.getElementById("eventDescription").value;
    var eventAgenda = document.getElementById("eventAgenda").value;

    // Here you can implement further functionality such as adding the event to a database, etc.
    // For this example, let's just log the event details.
    console.log("Event Name:", eventName);
    console.log("Date:", eventDate);
    console.log("Time:", eventTime);
    console.log("Location:", eventLocation);
    console.log("Description:", eventDescription);
    console.log("Agenda:", eventAgenda);

    // Prevent form submission
    return false;
}
