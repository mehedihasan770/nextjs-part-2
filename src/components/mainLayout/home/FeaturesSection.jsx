import Title from "@/components/sheared/Title";

const FeaturesSection = () => {
  return (
    <section>
      <div>
        <Title>
            Why Choose Nexus3D?
        </Title>
        <p className="text-gray-600 text-center text-[20px]">
            Premium quality for professional creators
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-linear-to-r from-[#7c3aed]/10 to-[#06b6d4]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
              ⭐
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Every model undergoes rigorous quality checks and optimization</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-linear-to-r from-[#7c3aed]/10 to-[#06b6d4]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Download</h3>
            <p className="text-gray-600">Get your files immediately after purchase, no waiting</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-linear-to-r from-[#7c3aed]/10 to-[#06b6d4]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
              🔄
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Updates</h3>
            <p className="text-gray-600">Get free updates for purchased models and new versions</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-linear-to-r from-[#7c3aed]/10 to-[#06b6d4]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial License</h3>
            <p className="text-gray-600">Use models in commercial projects with full rights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;