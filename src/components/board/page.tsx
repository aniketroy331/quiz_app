"use client"
import Link from 'next/link';

// export default function Board() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
      
//       <div className="flex flex-col space-y-4 w-full max-w-xs">
//         {/* Link to WBSE page */}
//         <Link href="/wbse" className="py-3 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition">
//           WBSE
//         </Link>
        
//         {/* Link to CBSE page */}
//         <Link href="/cbse" className="py-3 px-4 bg-green-600 text-white rounded-lg text-center hover:bg-green-700 transition">
//           CBSE
//         </Link>
//       </div>
//     </div>
//   );
// }
export default function Board() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">
      {/* Popup Container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header with decorative element */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6">
          <h1 className="text-3xl font-bold text-center text-white drop-shadow-md">Quizwuix</h1>
          <p className="text-center text-blue-100 mt-2">Select your education board</p>
        </div>
        
        {/* Buttons Container */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
            {/* WBSE Button */}
            <Link 
              href="/wbse" 
              className="
                flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 
                text-white font-semibold rounded-lg text-center 
                hover:from-blue-700 hover:to-indigo-700 transition-all duration-300
                shadow-md hover:shadow-lg transform hover:-translate-y-1
                flex items-center justify-center space-x-2
                border border-blue-500
              "
            >
              <span className="text-xl">📘</span>
              <span>WBSE</span>
            </Link>
            
            {/* CBSE Button */}
            <Link 
              href="/cbse" 
              className="
                flex-1 py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 
                text-white font-semibold rounded-lg text-center 
                hover:from-green-700 hover:to-emerald-700 transition-all duration-300
                shadow-md hover:shadow-lg transform hover:-translate-y-1
                flex items-center justify-center space-x-2
                border border-green-500
              "
            >
              <span className="text-xl">📗</span>
              <span>CBSE</span>
            </Link>
          </div>
          
          {/* Footer Note */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Choose your board to continue
          </p>
        </div>
      </div>
    </div>
  );
}