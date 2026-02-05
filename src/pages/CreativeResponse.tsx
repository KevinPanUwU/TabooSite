import { useState } from 'react';
import { Lightbulb, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

interface Scenario {
  id: number;
  title: string;
  esmeralda: {
    image: string;
    description: string;
  };
  cinderella: {
    image: string;
    description: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Public Perception",
    esmeralda: {
      image: "./images/scenario1_esmeralda.png",
      description: "Seen as 'exotic' and 'mysterious' - her cultural identity becomes a spectacle for others to observe and judge."
    },
    cinderella: {
      image: "./images/scenario1_cinderella.png",
      description: "Viewed as elegant and graceful - her background is normalized and celebrated without question."
    }
  },
  {
    id: 2,
    title: "Social Treatment",
    esmeralda: {
      image: "./images/scenario2_esmeralda.png",
      description: "Faces suspicion and exclusion - her Roma heritage marks her as 'other' in society's eyes."
    },
    cinderella: {
      image: "./images/scenario2_cinderella.png",
      description: "Receives sympathy and support - her struggles are seen as unfortunate circumstances, not identity."
    }
  },
  {
    id: 3,
    title: "Romantic Interest",
    esmeralda: {
      image: "./images/scenario3_esmeralda.png",
      description: "Objectified for her 'exotic beauty' - attraction is tied to fetishization of her culture."
    },
    cinderella: {
      image: "./images/scenario3_cinderella.png",
      description: "Admired for inner qualities - love is based on character and virtue, not cultural novelty."
    }
  },
  {
    id: 4,
    title: "Justice & Protection",
    esmeralda: {
      image: "./images/scenario4_esmeralda.png",
      description: "Vulnerable to persecution - her identity makes her a target with limited legal protection."
    },
    cinderella: {
      image: "./images/scenario4_cinderella.png",
      description: "Entitled to fairness and rescue - the system works to protect and restore her rights."
    }
  }
];

function FlipCard({ scenario, index }: { scenario: Scenario; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imagesExist, setImagesExist] = useState({ esmeralda: true, cinderella: true });

  const handleImageError = (type: 'esmeralda' | 'cinderella') => {
    setImagesExist(prev => ({ ...prev, [type]: false }));
  };

  return (
    <div 
      className={`flip-card w-full h-[520px] ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flip-card-inner">
        {/* Esmeralda Side (Front) */}
        <div className="flip-card-front esmeralda-card">
          <div className="absolute top-0 left-0 right-0 ribbon-esmeralda py-3 px-4 z-10">
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Esmeralda</span>
          </div>
          <div className="h-full flex flex-col pt-12">
            <div className="flex-1 overflow-hidden relative bg-gray-100">
              {imagesExist.esmeralda ? (
                <img 
                  src={scenario.esmeralda.image} 
                  alt={`Esmeralda - ${scenario.title}`}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('esmeralda')}
                />
              ) : (
                <div className="image-placeholder-esmeralda w-full h-full">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-3">🌿</div>
                    <p className="text-lime-700 font-medium">Esmeralda</p>
                    <p className="text-lime-600/70 text-sm">{scenario.title}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 bg-white border-t-2 border-lime-400">
              <h3 className="text-lg font-bold text-gray-800 mb-2 font-['Playfair_Display']">{scenario.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{scenario.esmeralda.description}</p>
              <p className="text-lime-600 text-xs mt-3 flex items-center gap-2 font-medium">
                <span>Click to see Cinderella</span>
                <ArrowRight size={14} />
              </p>
            </div>
          </div>
        </div>

        {/* Cinderella Side (Back) */}
        <div className="flip-card-back cinderella-card">
          <div className="absolute top-0 left-0 right-0 ribbon-cinderella py-3 px-4 z-10">
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Cinderella</span>
          </div>
          <div className="h-full flex flex-col pt-12">
            <div className="flex-1 overflow-hidden relative bg-gray-100">
              {imagesExist.cinderella ? (
                <img 
                  src={scenario.cinderella.image} 
                  alt={`Cinderella - ${scenario.title}`}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('cinderella')}
                />
              ) : (
                <div className="image-placeholder-cinderella w-full h-full">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-3">👑</div>
                    <p className="text-blue-700 font-medium">Cinderella</p>
                    <p className="text-blue-600/70 text-sm">{scenario.title}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 bg-white border-t-2 border-blue-400">
              <h3 className="text-lg font-bold text-gray-800 mb-2 font-['Playfair_Display']">{scenario.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{scenario.cinderella.description}</p>
              <p className="text-blue-600 text-xs mt-3 flex items-center gap-2 font-medium">
                <ArrowLeft size={14} />
                <span>Click to see Esmeralda</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreativeResponse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-lime-600 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
            Creative Proposal & Response
          </h1>
          <p className="text-lg text-white/90">
            Reimagining representation through character comparison
          </p>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-lime-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Creative Proposal
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Project Concept</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our creative response reimagines Disney's <em>The Hunchback of Notre Dame</em> by 
              placing Cinderella—a white European princess—in Esmeralda's position. Through four 
              key scenarios presented as interactive flashcards, we reveal how media representation 
              shapes our perception of different cultural identities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By juxtaposing these two characters side-by-side, we expose the stark contrast in 
              how society treats a Roma woman versus a white European woman in identical circumstances. 
              This comparison makes visible the invisible biases embedded in media narratives.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-blue-600" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Project Timeline</h3>
            </div>
            <div className="space-y-3">
              {[
                { phase: 'Research & Analysis', time: 'Week 1', task: 'Literature review on Roma representation and scene-by-scene film analysis' },
                { phase: 'Creative Development', time: 'Week 2', task: 'Design and develop interactive flashcard comparison' },
                { phase: 'Reflection & Documentation', time: 'Week 3', task: 'Document learning process, compile annotations, and finalize website' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{item.phase} <span className="text-gray-500 font-normal">({item.time})</span></p>
                    <p className="text-gray-600 text-sm">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Piece - Flashcards */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
              The Mirror: Esmeralda vs Cinderella
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on each card to flip between Esmeralda and Cinderella. 
              See how the same scenario is perceived differently based on cultural identity.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 px-3 py-1 bg-lime-100 text-lime-800 rounded-full">
                <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                Esmeralda (Roma)
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Cinderella (European)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className="floating" style={{ animationDelay: `${index * 0.5}s` }}>
                <FlipCard scenario={scenario} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation & Inspiration */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
            Explanation & Inspiration
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              In this creative response, we reimagine Disney's "The Hunchback of Notre Dame" with 
              Cinderella, a white European princess, playing the role of Esmeralda. Through these 
              four major scenarios, we aim to reveal how media representation affects our understanding 
              and perception of various cultural identities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unlike Esmeralda's Romani culture, which is used as a means of exoticizing and 
              marginalizing her, Cinderella is shown as being sympathetic and celebrating her for 
              her actions and circumstances. This reveals how media representation affects our 
              understanding and perception of Romani people.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Disney magic that we have been exposed to as children has deep underlying messages 
              about which people are worthy of happiness, justice, and love, and which people are 
              perpetually "othered" from society. By using these two characters and juxtaposing their 
              situations and circumstances, we encourage our viewers to ask themselves: what if the 
              roles are reversed? Would it be the same?
            </p>
          </div>

          {/* Design Choices */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-lime-50 rounded-xl p-6">
              <h3 className="font-bold text-lime-800 mb-2">Color Symbolism</h3>
              <p className="text-lime-700 text-sm">
                Lime green represents Esmeralda's connection to nature and her marginalized status, 
                while blue represents Cinderella's acceptance within mainstream society.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-blue-800 mb-2">Flashcard Format</h3>
              <p className="text-blue-700 text-sm">
                The flip card interaction creates a direct, visceral comparison that forces viewers 
                to confront the double standard in representation.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-purple-800 mb-2">Four Scenarios</h3>
              <p className="text-purple-700 text-sm">
                Each scenario represents a key aspect of how Roma women are stereotyped: exoticization, 
                criminalization, sexualization, and persecution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
