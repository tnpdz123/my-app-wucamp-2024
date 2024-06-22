import React from 'react';

export default function Blog() {
    return (
       
            <div className="flex flex-col items-center justify-center h-full">
                {/* First Box */}
                <div className="m-6 max-w-xl relative bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg shadow-lg">
                    <div className="p-8">
                        <div className="flex justify-start space-x-4 items-center mb-4">
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP.6lYgg_EgeyNYhHZqRHxjmgAAAA&pid=Api&P=0&h=180"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                            <img
                                src="https://i.pinimg.com/236x/a6/99/83/a699837de7d35ea4d154b812d40ca393.jpg"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                            <img
                                src="https://pakmud.com/wp-content/uploads/2023/03/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B9%81%E0%B8%A1%E0%B8%A7-5-356x348.jpg"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                        </div>
                        <div className="text-white font-bold text-3xl mb-2">Mr.Thanaphat Tenghirun</div>
                        <div className="text-white font-bold text-sm mb-4 text-left">22 June</div>
                        <div className="text-white font-bold text-xl text-1xl mb-4">Today i take a tailwindcss i think it good for me but sometime i don't Know some think 5555 </div>
                        <div className="text-white font-bold text-sm mb-2">#wu-com</div>
                    </div>
                </div>

                {/* Second Box */}
                <div className="m-6 max-w-xl relative bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg shadow-lg">
                    <div className="p-8">
                        <div className="flex justify-start space-x-4 items-center mb-4">
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP.6lYgg_EgeyNYhHZqRHxjmgAAAA&pid=Api&P=0&h=180"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                            <img
                                src="https://i.pinimg.com/236x/a6/99/83/a699837de7d35ea4d154b812d40ca393.jpg"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                            <img
                                src="https://pakmud.com/wp-content/uploads/2023/03/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B9%81%E0%B8%A1%E0%B8%A7-5-356x348.jpg"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                        </div>
                        <div className="text-white font-bold text-2xl mb-2">Mrs. Somchai Somsri</div>
                        <div className="text-white text-sm mb-4">23 June</div>
                    </div>
                </div>
            </div>
        
    );
}
