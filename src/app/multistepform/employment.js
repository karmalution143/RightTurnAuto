import { useState } from 'react';
import { useRouter } from 'next/router';

export default function EmploymentSelection() {
  const router = useRouter();
  const [employment, setEmployment] = useState('');

  const handleNext = () => {
    if (employment) {
      router.push(`/contact?employment=${employment}`);
    } else {
      alert('Please select your employment status.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Select Your Employment Status</h1>
      <div className="space-y-4">
        {['Employed', 'Self-Employed', 'Unemployed', 'Retired'].map((status) => (
          <button 
            key={status}
            onClick={() => setEmployment(status)}
            className={`px-6 py-2 rounded-md border ${
              employment === status ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
      <button 
        onClick={handleNext}
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Next
      </button>
    </div>
  );
}
