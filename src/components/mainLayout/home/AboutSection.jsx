import Title from "@/components/sheared/Title";


const AboutSection = () => {
  return (
    <section>
      <div>
        <Title>
          About Nexus3D
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2018, Nexus3D has grown to become the premier destination 
              for premium 3D assets. We started with a simple mission: to make 
              high-quality 3D models accessible to creators of all levels.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we serve a global community of game developers, animators, 
              architects, and designers. Our platform connects talented 3D artists 
              with creators who need their skills, fostering innovation and creativity.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Every model in our collection undergoes rigorous quality checks to 
              ensure it meets our high standards. We believe in empowering creators 
              with tools that save time and inspire innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">2018</div>
              <div className="text-gray-900 font-medium">Year Founded</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">50+</div>
              <div className="text-gray-900 font-medium">Countries Served</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">10K+</div>
              <div className="text-gray-900 font-medium">Happy Creators</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">24/7</div>
              <div className="text-gray-900 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;