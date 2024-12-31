document.getElementById('flightBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission
  
    // Get user inputs from the form
    const departureAirport = document.getElementById('departure').value;
    const destinationAirport = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Check if all inputs are filled
    if (!departureAirport || !destinationAirport || !date || !passengers || !email || !phone) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Generate the flight ticket details
    const ticketDetails = generateTicketDetails(departureAirport, destinationAirport, date, passengers, email, phone);
  
    // Store the ticket details in localStorage
    localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails));
  
    // Redirect to the next page (Ticket page)
    window.location.href = "ticket.html";
  });
  
  // Function to generate flight ticket details
  function generateTicketDetails(departure, destination, date, passengers, email, phone) {
    const airports = {
      JFK: "John F. Kennedy International Airport (JFK) - New York",
      LAX: "Los Angeles International Airport (LAX) - Los Angeles",
      ORD: "O'Hare International Airport (ORD) - Chicago",
      SFO: "San Francisco International Airport (SFO) - San Francisco",
      MIA: "Miami International Airport (MIA) - Miami",
    };
  
    // Determine the price based on selected airports (for demonstration purposes)
    const price = getPrice(departure, destination) * passengers;
  
    // Build ticket details object
    return {
      departure: airports[departure],
      destination: airports[destination],
      date: date,
      price: price,
      passengers: passengers,
      email: email,
      phone: phone
    };
  }
  
  // Function to determine flight price based on departure and destination
  function getPrice(departure, destination) {
    const prices = {
      "JFK-LAX": 250,
      "JFK-ORD": 180,
      "JFK-SFO": 300,
      "LAX-JFK": 250,
      "ORD-MIA": 200,
      "ORD-LAX": 220,
      "SFO-JFK": 320,
    };
  
    const route = departure + "-" + destination;
    return prices[route] || 150;  // Default price if route doesn't match
  }
  