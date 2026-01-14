import Title from "@/components/sheared/Title";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    content: "The quality of models is exceptional. Saved me weeks of work! The textures are incredibly detailed and optimized perfectly for game engines.",
    author: {
      name: "Alex Chen",
      role: "Game Developer",
      initials: "A",
      project: "Indie Game 'Starlight Odyssey'"
    }
  },
  {
    id: 2,
    rating: 5,
    content: "Perfect for my animation projects. Textures are production-ready out of the box. The UV unwrapping is professional level.",
    author: {
      name: "Maria Rodriguez",
      role: "3D Animator",
      initials: "M",
      project: "Animated Series 'Cyber Tales'"
    }
  },
  {
    id: 3,
    rating: 5,
    content: "Best 3D asset marketplace I've used. Highly recommended! The architectural models saved my firm thousands in design time.",
    author: {
      name: "David Kim",
      role: "Architect",
      initials: "D",
      project: "Modern Villa Project"
    }
  },
  {
    id: 4,
    rating: 4,
    content: "As a VFX artist, I need high-quality assets quickly. This platform delivers exactly that. The character models are rig-ready.",
    author: {
      name: "Sarah Johnson",
      role: "VFX Artist",
      initials: "S",
      project: "Feature Film 'Quantum'"
    }
  },
  {
    id: 5,
    rating: 5,
    content: "The vehicle models are incredibly detailed. Perfect for my racing sim project. LODs are well optimized for real-time rendering.",
    author: {
      name: "James Wilson",
      role: "Simulation Developer",
      initials: "J",
      project: "Racing Simulator Pro"
    }
  },
  {
    id: 6,
    rating: 4,
    content: "Love the nature collection! The foliage and terrain assets helped me create stunning outdoor environments in half the time.",
    author: {
      name: "Emma Thompson",
      role: "Environment Artist",
      initials: "E",
      project: "Fantasy RPG 'Eldoria'"
    }
  },
  {
    id: 7,
    rating: 5,
    content: "The weapon models are game-ready with proper pivot points. Saved me from modeling complex mechanical parts from scratch.",
    author: {
      name: "Carlos Mendez",
      role: "Game Designer",
      initials: "C",
      project: "FPS 'Neon Warfare'"
    }
  },
  {
    id: 8,
    rating: 5,
    content: "Tool models are perfect for my industrial visualization project. The mechanical accuracy is impressive.",
    author: {
      name: "Lisa Wang",
      role: "Industrial Designer",
      initials: "L",
      project: "Factory Simulation"
    }
  },
  {
    id: 9,
    rating: 5,
    content: "As a freelance 3D artist, this platform is a lifesaver. The subscription model gives me access to premium assets within budget.",
    author: {
      name: "Tom Anderson",
      role: "Freelance 3D Artist",
      initials: "T",
      project: "Multiple Client Projects"
    }
  }
];

const RatingStars = ({ rating}) => {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
          size={20}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">
        {rating}.0/5.0
      </span>
    </div>
  );
};

const TestimonialsSection = () => {
  const gridTestimonials = testimonials.slice(3);

  return (
    <section>
          <Title>Success Stories</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {gridTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              >
                <RatingStars rating={testimonial.rating} />
                
                <p className="text-gray-700 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.initials}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </section>
  );
};

export default TestimonialsSection;