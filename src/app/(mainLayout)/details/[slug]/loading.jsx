export const ProductDetailsSkeleton = () => {
    return (
        <div className="min-h-screen p-4 md:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-gray-200 rounded-2xl overflow-hidden animate-pulse">
                        <div className="aspect-square w-full"></div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 h-14 bg-gray-300 rounded-xl animate-pulse"></div>
                        <div className="w-32 h-14 bg-gray-300 rounded-xl animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-100 p-4 rounded-xl">
                                <div className="h-8 bg-gray-300 rounded mx-auto mb-2 w-16 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded mx-auto mb-1 w-20 animate-pulse"></div>
                                <div className="h-3 bg-gray-300 rounded mx-auto w-12 animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">

                    <div>
                        <div className="h-12 bg-gray-300 rounded-lg mb-4 w-3/4 animate-pulse"></div>
                        <div className="flex items-center gap-4">
                            <div className="h-10 bg-gray-300 rounded-lg w-32 animate-pulse"></div>
                            <div className="h-8 bg-gray-300 rounded-full w-40 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
                        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="space-y-2">
                            <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
                            <div className="flex gap-4">
                                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-7 bg-gray-300 rounded-lg w-40 animate-pulse"></div>
                        <div className="bg-gray-100 p-6 rounded-xl space-y-3">
                            <div className="h-4 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded-full w-2/3 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-7 bg-gray-300 rounded-lg w-40 animate-pulse"></div>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="h-16 bg-gray-200 rounded-xl animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-7 bg-gray-300 rounded-lg w-40 animate-pulse"></div>
                        <div className="flex flex-wrap gap-3">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="w-16 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 pt-6">
                        <div className="flex-1 h-16 bg-gray-300 rounded-xl animate-pulse"></div>
                        <div className="md:w-64 h-16 bg-gray-300 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton