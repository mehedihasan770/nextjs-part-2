const SkeletonLoader = () => {
  const skeletonArray = Array(8).fill(null);

  return (
    <div>
      {/* Header Skeleton */}
      <div className="mb-8 text-center">
        <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
      </div>

      {/* Grid with 8 skeleton cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {skeletonArray.map((_, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute top-3 right-3">
                <div className="w-20 h-8 bg-gray-300 rounded-lg"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="h-5 bg-gray-200 rounded mb-3 w-3/4"></div>
              
              {/* Description */}
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Features */}
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-6 bg-gray-200 rounded"></div>
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
                <div className="w-8 h-6 bg-gray-200 rounded"></div>
              </div>

              {/* Button */}
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;