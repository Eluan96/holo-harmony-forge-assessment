import { Suspense } from 'react';
import ComingSoonClient from './ComingSoonClient'; 


const ComingSoonPage = () => {
  return (
    <Suspense fallback={<ComingSoonFallback />}>
      <ComingSoonClient />
    </Suspense>
  );
};


const ComingSoonFallback = () => (
    <main className="bg-gray-50">
      <div className="flex items-center justify-center min-h-[70vh] px-6 py-24">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
            
          </div>
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Launching Soon!
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We're working hard to bring you this page. Stay tuned!
          </p>
        </div>
      </div>
    </main>
);

export default ComingSoonPage;