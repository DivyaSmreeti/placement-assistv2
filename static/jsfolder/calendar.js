// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Define an array to store events
    let events = [];

    // Function to load events from localStorage
    function loadEvents() {
        if (localStorage.getItem('events')) {
            events = JSON.parse(localStorage.getItem('events'));
        }
    }

    // Function to save events to localStorage
    function saveEvents() {
        localStorage.setItem('events', JSON.stringify(events));
    }

    // Function to add events
    function addEvent() {
        let eventDateInput = document.getElementById("eventDate");
        let eventTitleInput = document.getElementById("eventTitle");
        let eventDescriptionInput = document.getElementById("eventDescription");
        
        let date = eventDateInput.value;
        let title = eventTitleInput.value;
        let description = eventDescriptionInput.value;

        if (date && title) {
            // Create a unique event ID
            let eventId = events.length > 0 ? events[events.length - 1].id + 1 : 1;

            events.push({
                id: eventId,
                date: date,
                title: title,
                description: description
            });

            // Save events to localStorage
            saveEvents();

            // Refresh reminders
            displayReminders();

            // Clear input fields
            eventDateInput.value = "";
            eventTitleInput.value = "";
            eventDescriptionInput.value = "";
        }
    }

    // Function to delete an event by ID
    function deleteEvent(eventId) {
        // Find the index of the event with the given ID
        let eventIndex = events.findIndex((event) => event.id === eventId);

        if (eventIndex !== -1) {
            // Remove the event from the events array
            events.splice(eventIndex, 1);

            // Save events to localStorage after deletion
            saveEvents();

            // Refresh reminders
            displayReminders();
        }
    }

    // Function to display reminders
    function displayReminders() {
        let reminderList = document.getElementById("reminderList");
        reminderList.innerHTML = "";

        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${event.title}</strong> - ${event.description} on ${event.date}`;

            // Add a delete button for each reminder item
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                deleteEvent(event.id);
            };

            listItem.appendChild(deleteButton);
            reminderList.appendChild(listItem);
        }
    }

    // Load events from localStorage when the page loads
    loadEvents();

    // Display reminders when the page loads
    displayReminders();

    // Add event listener for adding events
    document.getElementById("addEventButton").addEventListener("click", addEvent);
});