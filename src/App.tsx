import './App.css';
import SkipCard from './components/cards/skip';
import { useData } from './hooks/use-data';

function App() {
  const { data, isLoading, isError, error } = useData();

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
        <div className="mt-4 w-full text-center p-4 lg:p-8">
          <p className="text-2xl font-bold text-gray-800">Loading Skips...</p>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkipCard key={index} isLoading={true} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <p className="text-xl font-bold text-red-600">
          Error: {error?.message || 'Something went wrong'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
        <div className="mt-4 w-full text-center p-4 lg:p-8">
          <p className="text-2xl font-bold text-gray-800">Choose Your Skip Size</p>
          <p className="text-lg">Select the skip size that best suits your needs</p>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            {data?.map((skip) => (
              <SkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;