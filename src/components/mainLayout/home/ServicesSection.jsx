import Title from "@/components/sheared/Title";

const ServicesSection = () => {
  return (
    <section>
      <div>
        <Title>
          Our Services
        </Title>
        <p className="text-gray-600 text-[20px] text-center">
            Everything you need for your 3D projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-linear-to-br from-[#7c3aed]/5 to-[#06b6d4]/5 p-8 rounded-2xl border border-gray-100">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">3D Model Marketplace</h3>
            <p className="text-gray-600">Browse and purchase thousands of premium 3D models for all your creative projects</p>
          </div>
          
          <div className="bg-linear-to-br from-[#7c3aed]/5 to-[#06b6d4]/5 p-8 rounded-2xl border border-gray-100">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Modeling</h3>
            <p className="text-gray-600">Need something specific? Our team can create custom 3D models tailored to your requirements</p>
          </div>
          
          <div className="bg-linear-to-br from-[#7c3aed]/5 to-[#06b6d4]/5 p-8 rounded-2xl border border-gray-100">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Model Optimization</h3>
            <p className="text-gray-600">Get your existing models optimized for game engines and real-time applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;