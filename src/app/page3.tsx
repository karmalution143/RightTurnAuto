import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const vehicles = [
  { name: 'Truck', image: '/truck.jpg', link: '/multistepform' },
  { name: 'Car', image: '/car.jpg', link: '/multistepform' },
  { name: 'SUV', image: '/suv.jpg', link: '/multistepform' },
  { name: 'Van', image: '/van.jpg', link: '/multistepform' },
];

const colors = [
  { bg: 'bg-red-200', border: 'border-red-500', circle: 'bg-red-500' },
  { bg: 'bg-yellow-200', border: 'border-yellow-500', circle: 'bg-yellow-500' },
  { bg: 'bg-green-200', border: 'border-green-500', circle: 'bg-green-500' },
];



export default function VehicleSelection() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
        
        {/* Vehicle Grid */}
        <h1 className="text-center text-4xl font-bold mt-16">Pick Your Vehicle</h1>        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-12">
          {vehicles.map((vehicle, index) => (
            <Link key={index} href={vehicle.link}>
              <div className="border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ease-in-out">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-30 object-cover rounded-md mb-4" />
                <h2 className="text-center text-xl font-semibold">{vehicle.name}</h2>
              </div>
            </Link>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-16 px-5 text-center">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <div className="mt-4 border-t-6 border-green-500 inline-block w-25"></div>
          <p className="text-lg text-black-700 mb-6 max-w-3xl mx-auto">
            We provide financing for our clientele all over Canada for brand new vehicles, used vehicles, and powersports.
            We treat all our clients on a case-by-case basis and understand that things in life happen and can offer programs 
            to help rebuild if you have had past credit issues due to various circumstances. Our goal is to have you as a customer 
            for life and help your friends and family get vehicles too!
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 text-center flex flex-col lg:flex-row justify-center items-center gap-8">
          {["Apply Online", "Get Pre-Approved", "Drive Away Today"].map((step, index) => (
            <div 
            key={index} 
            className={`flex flex-col items-center p-4 rounded-md w-full max-w-xs 
              ${colors[index].bg} ${colors[index].border} 
              border-t-4 border-b-4`}
            style={{ minWidth: '350px', height: '250px' }}>
            <div className={`${colors[index].circle} font-bold rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-4`}>
              {index + 1}
            </div>
              <h3 className="text-2xl font-semibold">{step}</h3>
              <p className="text-md">
                {index === 0 ? "Tell us a little about yourself and the vehicle you're looking for" :
                  index === 1 ? "After you apply, we will contact you to discuss what you want and need in your new vehicle" :
                  "Congratulations! Once approved, pick your new vehicle and drive it off the lot today!"}
              </p>
            </div>
            ))}
        </div>
       
        {/* Diagonal Box */}
        <div className="relative py-16 mt-12 overflow-hidden w-screen">
          <div className="absolute inset-0 bg-gray-500 clip-path-custom "></div>
          <div className="relative flex items-center justify-center text-white text-center max-w-2xl mx-auto p-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">ALL CREDITS <span className="text-green-500">ACCEPTED</span></h2>
              <div className="w-16 border-t-4 border-green-500 mx-auto mb-6"></div>
              <p className="text-lg">
                Common wisdom says that you need credit in order to build credit. But how do you take the first step if your credit score is standing in your way?
                A lot of people are scared off by this 'credit paradox,' but there are ways around this vicious cycle. One of the best ways to develop a better credit score?
                Through regular credit payments, such as on a car loan.
              </p>
            </div>
          </div>
        </div>

        {/* More Vehicle Options */}
        <div className="text-black mt-8">
          <h2 className="text-4xl font-bold text-center mb-4">MORE VEHICLE <span className="text-green-500">OPTIONS</span></h2>
          <div className="w-16 border-t-4 border-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-center max-w-2xl mx-auto mb-4">We work to take the burden of your credit score off your back, and help you get started on the path to a better one. By setting you up with a car loan that works for your individual circumstances, I not only will assist you in getting a car that fits your wants and needs, but also in helping you develop your credit score and reputation.</p>
          <div className="flex flex-wrap justify-center">
            {vehicles.map((vehicle, index) => (
              <img key={index} src={vehicle.image} alt={vehicle.name} className="h-40 w-auto max-w-xs" />
            ))}
          </div>
        </div>
      
      <Footer />
    </div>
      </>
  );
}
