import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Academic Research Project</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
            Mirror of Representation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Exploring the taboo of <span className="text-lime-600 font-semibold">Roma representation in media</span> through 
            critical analysis of Disney's "The Hunchback of Notre Dame"
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/creative-response"
              className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white rounded-lg font-medium hover:bg-lime-700 transition-colors"
            >
              View Our Creative Response
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about-taboo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Learn About the Taboo
            </Link>
          </div>
        </div>
      </section>

      {/* Group Members */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-['Playfair_Display']">
            Research Team
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['KP', 'Alex', 'Sude', 'Joey'].map((member, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-lg">
                <Users size={20} className="text-lime-600" />
                <span className="text-gray-700 font-medium">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Taboo Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
                What is a Taboo?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A taboo refers to a social or custom that prohibits or restricts a particular 
                practice, subject, or behavior. Taboos often stem from deeply held beliefs, fears, or 
                historical prejudices within a society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                They shape how we talk—or don't talk—about certain topics, creating silence around 
                issues that desperately need open discussion and critical examination.
              </p>
            </div>
            <div className="bg-gradient-to-br from-lime-100 to-blue-100 rounded-2xl p-8">
              <BookOpen size={48} className="text-lime-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why This Taboo?</h3>
              <p className="text-gray-600 leading-relaxed">
                We chose to explore Roma representation in media because it remains one of the most 
                accepted and pervasive forms of ethnic stereotyping in Western culture. From Disney 
                films to news coverage, the "Gypsy" stereotype continues to dehumanize an entire 
                people, often without public awareness or criticism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-['Playfair_Display']">
            Explore Our Research
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'About Our Taboo',
                description: 'Learn about the history, origins, and global impact of anti-Roma sentiment.',
                link: '/about-taboo',
                color: 'bg-lime-100 text-lime-800'
              },
              {
                title: 'Body of Work',
                description: 'Deep dive into Disney\'s "The Hunchback of Notre Dame" and its representation.',
                link: '/bow-overview',
                color: 'bg-blue-100 text-blue-800'
              },
              {
                title: 'Creative Response',
                description: 'See our interactive comparison of Esmeralda vs Cinderella portrayals.',
                link: '/creative-response',
                color: 'bg-purple-100 text-purple-800'
              }
            ].map((card, i) => (
              <Link
                key={i}
                to={card.link}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${card.color}`}>
                  {card.title}
                </div>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {card.description}
                </p>
                <div className="mt-4 flex items-center text-lime-600 font-medium">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-gray-400">Academic Project on Roma Representation in Media</p>
        <p className="text-gray-500 text-sm mt-1">Disney's The Hunchback of Notre Dame • Critical Analysis</p>
      </footer>
    </div>
  );
}
