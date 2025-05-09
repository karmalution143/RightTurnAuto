"use client";

import { useState } from 'react';

const vehicles = [
  { name: 'Truck', image: '/truck.jpg' },
  { name: 'Car', image: '/car.jpg' },
  { name: 'SUV', image: '/suv.jpg' },
  { name: 'Van', image: '/van.jpg' },
];

const employmentOptions = [
  "Employed Full-Time", "Employed Part-Time", "EI (Empl. Ins.)", "WCB",
  "Disability", "Pension", "Child Tax", "Student", "Homemaker", "Other"
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedEmployment, setSelectedEmployment] = useState('');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, selectedVehicle, selectedEmployment });
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen p-6 text-center">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Pick Your Vehicle</h2>
          <div className="grid grid-cols-2 gap-4">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className={`border p-4 rounded cursor-pointer ${selectedVehicle === vehicle.name ? 'bg-green-300' : 'bg-gray-200'}`}
                onClick={() => setSelectedVehicle(vehicle.name)}
              >
                <img src={vehicle.image} alt={vehicle.name} className="h-40 mx-auto" />
                <p>{vehicle.name}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={handleNext} disabled={!selectedVehicle}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Employment Information</h2>
          <div className="grid grid-cols-2 gap-4">
            {employmentOptions.map((option, index) => (
              <div
                key={index}
                className={`border p-4 rounded cursor-pointer ${selectedEmployment === option ? 'bg-green-300' : 'bg-gray-200'}`}
                onClick={() => setSelectedEmployment(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button className="p-2 bg-gray-500 text-white rounded" onClick={handlePrevious}>Previous</button>
            <button className="p-2 bg-blue-500 text-white rounded" onClick={handleNext} disabled={!selectedEmployment}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <form onSubmit={handleFormSubmit} className="space-y-2">
            <input type="text" placeholder="First Name" className="border p-2 w-full" 
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
            <input type="text" placeholder="Last Name" className="border p-2 w-full" 
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
            <input type="email" placeholder="Email" className="border p-2 w-full" 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <input type="text" placeholder="Phone" className="border p-2 w-full" 
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            
            <div className="flex justify-between mt-4">
              <button className="p-2 bg-gray-500 text-white rounded" onClick={handlePrevious}>Previous</button>
              <button type="submit" className="p-2 bg-green-500 text-white rounded">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
