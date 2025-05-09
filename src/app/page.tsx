"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavigationButtons from '../components/NavigationButtons';
import Image from 'next/image';

const vehicles = [
  { name: 'Truck', image: '/truck.jpg' },
  { name: 'Car', image: '/car.jpg' },
  { name: 'SUV', image: '/suv.jpg' },
  { name: 'Van', image: '/van.jpg' },
];

const colors = [
  { bg: 'bg-red-200', border: 'border-red-500', circle: 'bg-red-500' },
  { bg: 'bg-yellow-200', border: 'border-yellow-500', circle: 'bg-yellow-500' },
  { bg: 'bg-green-200', border: 'border-green-500', circle: 'bg-green-500' },
];

export default function MultiStepForm() {
  const [step, setStep] = useState<number>(1);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [employment, setEmployment] = useState('');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  // Handle browser back button and state synchronization
  useEffect(() => {
    // Sync with browser history on step change
    window.history.pushState({ step }, '', `#step-${step}`);

    // Handle browser back button
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.step) {
        setStep(event.state.step);
      } else {
        setStep(1); // Default to step 1 if no state found
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [step]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
      window.history.pushState({ step: step + 1 }, '', `#step-${step + 1}`);
    }
    scrollToTop();
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.history.pushState({ step: step - 1 }, '', `#step-${step - 1}`);
    }
    scrollToTop();
  };

  const handleVehicleSelect = (vehicle: string) => {
    setSelectedVehicle(vehicle);
    setStep(2);
  };

  const handleEmploymentSelect = (status: string) => {
    setEmployment(status);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedVehicle, employment, ...formData });
    alert('Form submitted successfully!');
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen">
        
      {step === 1 && (
        <div>
          <h1 className="text-center text-4xl font-bold mt-16">Pick Your Vehicle</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-12 mt-16 lg:ml-96 lg:mr-96">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="border border-gray-300 p-8 rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ease-in-out "
                onClick={() => handleVehicleSelect(vehicle.name)}
              >
                <Image 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    width={250}
                    height={250}
                    className="rounded-md mb-4 mx-auto" 
                />
                <h2 className="text-xl font-semibold text-center">{vehicle.name}</h2>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-center text-4xl font-bold mt-12">EMPLOYMENT INFORMATION:</h2>
          
          <label className="block text-lg font-semibold mt-6 ml-12">
            Employment Status <span className="text-red-600">*</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12 mt-8">
            {[
              'Employed Full-Time', 'Employed Part-Time', 'EI (Empl. Ins.)',
              'WCB', 'Disability', 'Pension',
              'Child Tax', 'Student', 'Homemaker', 'Other'
            ].map((status) => (
              <button
                key={status}
                onClick={() => handleEmploymentSelect(status)}
                className={`flex items-center justify-center text-xl font-semibold p-4 border-2 rounded-lg mb-2 ${
                  employment === status ? 'border-green-500' : 'border-black'
                } hover:bg-gray-100 transition`}
                style={{ minWidth: '100px', height: '100px' }}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isLastStep={false}
          />
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl mx-auto px-8 sm:px-8 md:px-16 lg:px-12">
          <h2 className="text-3xl font-bold mb-4 text-center mt-12">CONTACT INFORMATION:</h2>
          <div className="w-80 border-t-2 border-green-500 mx-auto"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold mb-1">
                First Name: <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Last Name: <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Email: <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Cell Phone: <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Cell Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="ml-2 text-gray-700">
                <span className="text-red-600">*</span> I agree to Right Turn Auto{' '}
                <a href="#" className="text-blue-600">Terms and Conditions</a> and{' '}
                <a href="#" className="text-blue-600">Privacy Policy</a>
              </label>
            </div>

            <div>
              <input type="checkbox" id="sms" />
              <label htmlFor="sms" className="ml-2 text-gray-700">
                Right Turn Auto: I agree to receive marketing messages through SMS to the phone number provided. 
                Reply Y to confirm. Reply STOP to end. Msg & data rates may apply.
              </label>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isLastStep={true}
          />
        </form>
      )}

    {/* About Section */}
    <div className="mt-24 text-center">
      <h2 className="text-5xl font-bold mb-4">ABOUT US</h2>
      <div className="w-64 border-t-8 border-green-500 mx-auto mb-16"></div>
      <p className="text-lg text-black-700 px-8 sm:px-8 md:px-12 lg:px-96 mx-auto">
        We provide financing for our clientele all over Canada for brand new vehicles, used vehicles, and powersports.
        We treat all our clients on a case-by-case basis and understand that things in life happen and can offer programs 
        to help rebuild if you have had past credit issues due to various circumstances. Our goal is to have you as a customer 
        for life and help your friends and family get vehicles too!
      </p>
    </div>

    {/* Steps */}
<div className="mt-24 text-center flex flex-col md:flex-col lg:flex-row justify-center items-center lg:gap-8 gap-8">
  {["Apply Online", "Get Pre-Approved", "Drive Away Today"].map((step, index) => (
    <div key={index} className="flex items-center flex-shrink-0">
      <div 
        className={`flex flex-col items-center p-4 rounded-md w-full max-w-xs 
          ${colors[index].bg} ${colors[index].border} flex-shrink-0
          border-t-4 border-b-4`}
        style={{ minWidth: '350px', height: '300px' }}
      >
        <div className={`${colors[index].circle} font-bold rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-4 mt-4`}>
          {index + 1}
        </div>
        <h3 className="text-3xl font-semibold">{step}</h3>
        <p className="text-lg p-4">
          {index === 0 ? "Tell us a little about yourself and the vehicle you're looking for" :
            index === 1 ? "After you apply, we will contact you to discuss what you want and need in your new vehicle" :
            "Congratulations! Once approved, pick your new vehicle and drive it off the lot today!"}
        </p>
      </div>

      {/* Horizontally Centered Arrow between steps */}
      {index < 2 && (
        <div className="hidden lg:flex items-center justify-center w-12 ml-7">
          <span className="text-4xl text-gray-700">&#8594;</span>
        </div>
      )}
      
    </div>
  ))}
</div>


        
    {/* Diagonal Box */}
    <div className="relative py-48 mt-16">
      <div className="absolute inset-0 bg-gray-500 clip-path-custom "></div>
      <div className="relative text-white py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">ALL CREDITS <span className="text-green-500">ACCEPTED</span></h2>
          <div className="w-64 border-t-8 border-green-500 mx-auto mb-16"></div>
          <p className="text-lg mx-auto px-8 sm:px-8 md:px-12 lg:px-96">
            Common wisdom says that you need credit in order to build credit. But how do you take the first step 
            if your credit score is standing in your way? A lot of people are scared off by this &lsquo;credit paradox,&rsquo; 
            but there are ways around this vicious cycle. What&rsquo;s one of the best ways to develop a better credit score? 
            Through regular credit payments, such as on a car loan.
          </p>
        </div>
      </div>
    </div>

    {/* More Vehicle Options */}
    <div className="text-black mt-8">
      <h2 className="text-5xl font-bold text-center mb-4">MORE VEHICLE <span className="text-green-500">OPTIONS</span></h2>
      <div className="w-64 border-t-8 border-green-500 mx-auto mb-16"></div>
      <p className="text-lg text-center mb-4 px-8 sm:px-8 md:px-12 lg:px-96">We work to take the burden of your credit score off your back, and help you get started on the path to a better one. By setting you up with a car loan that works for your individual circumstances, We not only will assist you in getting a car that fits your wants and needs, but also in helping you develop your credit score and reputation.</p>
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
            <Image 
              src={vehicle.image} 
              alt={vehicle.name} 
              width={250} 
              height={250} 
              className="object-contain rounded-md mb-0" 
            />
          </div>
        ))}
      </div>
  </div>
        
        <Footer />
    </div>
      </>
  );
}
