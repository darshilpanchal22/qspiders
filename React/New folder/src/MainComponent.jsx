import React, { Suspense, useState } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

//! Here import enables the code splitting internally.

const MainComponent = () => {
    let [showLazy, setShowLazy] = useState(false);

    let toggleLazyComponent = () => {
        setShowLazy(!showLazy);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    Main Application
                </h1>
                <p className="text-slate-500 mb-6">
                    Click below to fetch the lazy component.
                </p>

                <button
                    onClick={toggleLazyComponent}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-indigo-200"
                >
                    {showLazy ? "Un-load Component" : " Load Component"}
                </button>

                <div className="mt-8">
                    {showLazy && (
                        <Suspense
                            fallback={
                                <div className="flex items-center justify-center space-x-2 text-indigo-600">
                                    <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                                    <span className="font-medium">Loading...</span>
                                </div>
                            }
                        >
                            <LazyComponent />
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;