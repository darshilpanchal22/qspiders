import React from "react";

const LazyComponent = () => {
    return (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
            <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">✨</span>
                <h2 className="text-emerald-800 font-bold text-lg">
                    Component Loaded!
                </h2>
                <p className="text-emerald-600 text-sm">
                    This was fetched only when you needed it.
                </p>
            </div>
        </div>
    );
};

export default LazyComponent;