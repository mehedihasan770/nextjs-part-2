import React from 'react';

const Title = ({ children }) => {
    return (
        <div className='text-center mb-12'>
            <div className="relative inline-block">
                <div className="text-5xl absolute -inset-10 bg-linear-to-r from-[#7c3aed]/20 to-[#06b6d4]/20 blur-xl rounded-full -z-10"></div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
                    {children}
                </h1>
            </div>

            <div className="mt-4 flex justify-center">
                <div className="relative w-5/12 h-1 bg-linear-to-r from-[#7c3aed] via-[#8b5cf6] to-[#06b6d4] rounded-full overflow-hidden">
                    <div className="absolute h-full w-4 rounded-full animate-[move_3s_infinite_ease-in-out]"></div>
                </div>
            </div>

            <div className="flex justify-center gap-3 mt-4">
                {[...Array(4)].map((_, i) => (
                    <div 
                        key={i}
                        className="w-5 h-5 rounded-full bg-linear-to-r from-[#7c3aed] to-[#06b6d4] opacity-70 animate-bounce"
                        style={{ 
                            animationDelay: `${i * 200}ms`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Title;