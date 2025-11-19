import { Suspense } from 'react';
import ResultsClient from './ResultsClient'; 


const ResultsPage = () => {
  return (
    <Suspense fallback={<ResultsFallback />}>
      <ResultsClient />
    </Suspense>
  );
};


const ResultsFallback = () => (
  <main className="bg-gray-50 flex items-center justify-center min-h-screen">
    <div className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-lg">
      <div className="w-28 h-28 rounded-full bg-gray-300 animate-pulse mx-auto"></div>
      <h1 className="mt-8 text-4xl font-extrabold text-gray-900 bg-gray-300 h-10 w-3/4 mx-auto rounded-md animate-pulse"></h1>
      <p className="mt-4 text-lg text-gray-600 bg-gray-300 h-16 w-full mx-auto rounded-md animate-pulse"></p>
    </div>
  </main>
);

export default ResultsPage;