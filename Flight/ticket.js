window.onload = function() {
    // Retrieve ticket details from localStorage
    const ticketDetails = JSON.parse(localStorage.getItem('ticketDetails'));
  
    // Check if ticket details are available
    if (ticketDetails) {
      // Display ticket details
      document.getElementById('ticketDetails').innerHTML = `
        <strong>Flight Information:</strong><br>
        Departure Airport: ${ticketDetails.departure}<br>
        Destination Airport: ${ticketDetails.destination}<br>
        Date: ${ticketDetails.date}<br>
        Number of Passengers: ${ticketDetails.passengers}<br>
        Price: $${ticketDetails.price}<br>
        <strong>Contact Information:</strong><br>
        Email: ${ticketDetails.email}<br>
        Phone: ${ticketDetails.phone}<br>
        <strong>Your flight has been booked!</strong>
      `;
    } else {
      document.getElementById('ticketDetails').innerHTML = 'No ticket details available.';
    }
  };
  