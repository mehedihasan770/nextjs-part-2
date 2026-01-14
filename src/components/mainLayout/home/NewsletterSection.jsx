import Title from "@/components/sheared/Title";

const NewsletterSection = () => {
  return (
    <section>
      <div>
        <Title>Join Our Newsletter</Title>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center">
            <div className="max-w-16 h-16 mx-auto mb-6 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] rounded-full flex items-center justify-center text-white text-2xl">
              ✉️
            </div>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Get weekly updates on new 3D models, exclusive tutorials, 
              special discounts, and industry insights delivered to your inbox.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy. 
                We respect your privacy and never share your information.
              </p>
            </form>
            
            <div className="mt-8 flex justify-center items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Weekly updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;