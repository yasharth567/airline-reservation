import React, { useState } from "react";

// Define the shape of a Flight
interface Flight {
  airline: string;
  flightNumber: string;
  totalPrice: number;
}

// Passenger type
interface Passenger {
  name: string;
  age: number;
  seat: string;
}

const FlightBooking: React.FC = () => {
  // States
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [showFlightDetails, setShowFlightDetails] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const [passenger, setPassenger] = useState<Passenger>({
    name: "",
    age: 0,
    seat: "",
  });

  // Example data: available flights
  const flights: Flight[] = [
    { airline: "Air India", flightNumber: "AI101", totalPrice: 500 },
    { airline: "IndiGo", flightNumber: "6E202", totalPrice: 350 },
    { airline: "SpiceJet", flightNumber: "SG303", totalPrice: 420 },
  ];

  // Select a flight
  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setShowFlightDetails(true);
  };

  // Confirm booking
  const handleBookFlight = () => {
    if (!selectedFlight || !passenger.name || !passenger.seat) {
      alert("⚠️ Please fill all passenger details before booking.");
      return;
    }

    alert(
      `✅ Booking confirmed!\n\n` +
        `Airline: ${selectedFlight.airline}\n` +
        `Flight No: ${selectedFlight.flightNumber}\n` +
        `Total: $${selectedFlight.totalPrice}\n\n` +
        `👤 Passenger: ${passenger.name}, Age ${passenger.age}, Seat ${passenger.seat}`
    );

    // Reset state after booking
    setShowFlightDetails(false);
    setShowSearchResults(false);
    setPassenger({ name: "", age: 0, seat: "" });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Flight search results */}
      {showSearchResults && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Available Flights</h2>
          {flights.map((flight) => (
            <div
              key={flight.flightNumber}
              className="p-4 border border-gray-700 rounded-lg mb-3 flex justify-between items-center bg-gray-900 text-white"
            >
              <p>
                ✈ {flight.airline} — {flight.flightNumber} — ${flight.totalPrice}
              </p>
              <button
                onClick={() => handleFlightSelect(flight)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Flight details + Passenger form */}
      {showFlightDetails && selectedFlight && (
        <div className="p-6 border border-gray-700 rounded-lg mt-6 bg-gray-800 text-white">
          <h2 className="text-xl font-bold mb-3">Flight Details</h2>
          <p>Airline: {selectedFlight.airline}</p>
          <p>Flight Number: {selectedFlight.flightNumber}</p>
          <p>Total Price: ${selectedFlight.totalPrice}</p>

          {/* Passenger Form */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Passenger Details</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={passenger.name}
              onChange={(e) =>
                setPassenger({ ...passenger, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            />
            <input
              type="number"
              placeholder="Age"
              value={passenger.age || ""}
              onChange={(e) =>
                setPassenger({ ...passenger, age: Number(e.target.value) })
              }
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Seat (e.g., 12A)"
              value={passenger.seat}
              onChange={(e) =>
                setPassenger({ ...passenger, seat: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            />
          </div>

          <button
            onClick={handleBookFlight}
            className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Book Flight
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightBooking;
