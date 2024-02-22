import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Samuel Schultz</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Data Analyst</p>
         <p className="text-sm max-w-xl mb-2 font-bold">
         Leveraging expertise in SQL, Tableau, and Python, I extract actionable insights from complex data, fueling strategic decision-making with clear narratives.
        </p>
        <p className="text-sm max-w-xl mb-2 font-bold">
            I am a skilled problem-solver with strong communication, eager to contribute to a full-time data analyst role where I can:
            <ul>
                <li className="text-sm max-w-xl mt-2 mb-2 font-bold">Optimize decision making through data-driven solution</li>
                <li className="text-sm max-w-xl mb-2 font-bold">Partner with cross-functional teams for impactful strategies.</li>
                <li className="text-sm max-w-xl mb-6 font-bold">Continuously learn and explore cutting-edge data trends.</li>
            </ul>
        </p>
      </div>
   )
}

export default Intro;