import { BookOpen, Users, MessageCircle, Lightbulb, Calendar } from 'lucide-react';

const timeline = [
  {
    week: 'Week 1',
    title: 'Topic Selection',
    description: 'We chose Roma representation in media after discussing various taboos and realizing how pervasive yet invisible this form of discrimination is.',
    reflection: 'We were surprised by how little we knew about Roma people despite seeing "Gypsy" stereotypes in media throughout our lives.'
  },
  {
    week: 'Week 2',
    title: 'Initial Research',
    description: 'Dived into academic sources about anti-Gypsyism, Italian media representation, and the history of Roma persecution.',
    reflection: 'The historical scale of discrimination was shocking—from slavery to the Holocaust to modern segregation camps.'
  },
  {
    week: 'Week 2',
    title: 'Film Analysis',
    description: 'Watched The Hunchback of Notre Dame multiple times, analyzing scenes, lyrics, and character design for stereotypes.',
    reflection: 'Songs we sang as children, like "Hellfire," contain deeply disturbing messages about scapegoating and demonization.'
  },
  {
    week: 'Week 3',
    title: 'Creative Concept Development',
    description: 'Brainstormed ways to make the invisible visible. Decided on the Esmeralda/Cinderella comparison as most impactful.',
    reflection: 'We wanted viewers to feel the contrast viscerally, not just intellectually understand it.'
  },
  {
    week: 'Week 4',
    title: 'Building the Project',
    description: 'Created the interactive flashcards, wrote content, and designed the website.',
    reflection: 'Technical challenges were frustrating but seeing the final product come together was rewarding.'
  },
  {
    week: 'Week 4',
    title: 'Reflection & Documentation',
    description: 'Documented our learning journey, collected peer feedback, and prepared final presentation.',
    reflection: 'This project changed how we watch media. We now question representation in everything we see.'
  }
];

const quotes = [
  {
    text: "I never realized how normalized the 'Gypsy' stereotype was until we started this project. It's everywhere once you look for it.",
    author: 'KP'
  },
  {
    text: 'The most shocking part was learning about the nomad camps in Italy. This is happening right now, in modern Europe.',
    author: 'Alex'
  },
  {
    text: 'Creating the flashcards made me really think about how differently we perceive people based on their background.',
    author: 'Sude'
  },
  {
    text: 'I showed the project to my family and they were surprised too. This taboo is so invisible that most people don\'t even know it exists.',
    author: 'Joey'
  }
];

const challenges = [
  {
    challenge: 'Finding Academic Sources',
    solution: 'We had to dig deeper than usual because Roma studies is an underrepresented field in mainstream academia.',
    lesson: 'Underrepresented topics require more effort to research, but the discoveries are often more valuable.'
  },
  {
    challenge: 'Balancing Sensitivity with Impact',
    solution: 'We consulted with each other constantly to ensure our creative response was powerful without being exploitative.',
    lesson: 'Discussing ethical concerns openly as a group leads to stronger, more thoughtful work.'
  },
  {
    challenge: 'Technical Implementation',
    solution: 'We divided tasks based on strengths—some focused on content, others on design and development.',
    lesson: 'Teamwork means leveraging each person\'s unique skills toward a common goal.'
  }
];

export default function StoryOfLearning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
            Story of Learning
          </h1>
          <p className="text-lg text-white/90">
            Our journey exploring Roma representation in media
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="text-orange-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Project Timeline
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-pink-400"></div>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-6 relative">
                  <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                    {item.week.split(' ')[1]}
                  </span>
                  <div className="flex-1 bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                      <p className="text-gray-500 text-sm italic">"{item.reflection}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Member Quotes */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="text-pink-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Voices from Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quotes.map((quote, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "{quote.text}"
                </blockquote>
                <cite className="text-gray-500 text-sm not-italic flex items-center gap-2">
                  <Users size={14} />
                  {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Lessons */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Challenges & What We Learned
            </h2>
          </div>

          <div className="space-y-6">
            {challenges.map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.challenge}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">How we addressed it: </span>
                  {item.solution}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium text-gray-700">Lesson learned: </span>
                  {item.lesson}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Reflection */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="mx-auto mb-6 text-lime-400" size={48} />
          <h2 className="text-3xl font-bold mb-6 font-['Playfair_Display']">
            Our Key Takeaway
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            This project taught us that the most dangerous stereotypes are the ones we don't even 
            recognize as stereotypes. The "Gypsy" trope is so embedded in our culture that it feels 
            natural, even romantic. But behind every stereotype are real people whose lives are 
            affected by these portrayals.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            We now approach media with a more critical eye, asking: <em>Who is being represented? 
            How? And who benefits from this representation?</em>
          </p>
        </div>
      </section>
    </div>
  );
}
