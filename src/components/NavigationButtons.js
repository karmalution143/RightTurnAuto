"use client";

export default function NavigationButtons({ onPrevious, onNext, onSubmit, isLastStep }) {
  return (
    <div className="flex justify-between items-center mt-6">
      {onPrevious && (
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-white border border-gray-400 text-gray-700 rounded hover:bg-gray-100"
        >
          Previous
        </button>
      )}
      {isLastStep ? (
        <button
          type="submit"
          onClick={onSubmit ? onSubmit : undefined}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      )}
    </div>
  );
}
