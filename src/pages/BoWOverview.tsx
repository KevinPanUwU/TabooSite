import { Film, User, Star, Quote, Music } from 'lucide-react';

export default function BoWOverview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
            Body of Work Overview
          </h1>
          <p className="text-lg text-purple-100">
            Disney's The Hunchback of Notre Dame (1996)
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Film className="text-purple-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Introduction to the Body of Work
            </h2>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              The body of work we researched is the 1996 animated film <strong>The Hunchback of Notre Dame</strong>, 
              produced by Walt Disney Feature Animation. This period in Disney's history is known as the 
              <strong> Disney Renaissance</strong>, during which the company produced many popular animated 
              musical films based on traditional stories.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The social and cultural context is important because the creators attempted to make a very 
              dark novel by Victor Hugo into a film appropriate for families. The creators had to follow 
              certain guidelines while still depicting taboos such as sexual desire, religious hypocrisy, 
              and ethnic hatred specifically related to the Roma people.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The film depicts the creators' struggle to make a film that is appropriate for children 
              but still true to the deep prejudice and stereotypes against the Roma people present in 
              the original source material and society at large.
            </p>
          </div>
        </div>
      </section>

      {/* Creator Biography & Context */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Creator Biography & Context
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Walt Disney Feature Animation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                During the Disney Renaissance (1989-1999), the studio produced critically acclaimed 
                animated features that revived public interest in animation. This era was marked by 
                musical storytelling, darker themes, and more complex characters.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Victor Hugo's Original Novel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Published in 1831, Hugo's novel was far darker than the Disney adaptation, dealing 
                with themes of fate, architecture, and social injustice. The original Esmeralda 
                suffers a tragic fate, highlighting the cruelty of the society depicted.
              </p>
            </div>
          </div>

          {/* Disney Renaissance Timeline */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Disney Renaissance Timeline</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
              <div className="space-y-4">
                {[
                  { year: '1989', film: 'The Little Mermaid', note: 'Renaissance begins' },
                  { year: '1991', film: 'Beauty and the Beast', note: 'First animated film nominated for Best Picture' },
                  { year: '1994', film: 'The Lion King', note: 'Highest-grossing animated film at the time' },
                  { year: '1996', film: 'The Hunchback of Notre Dame', note: 'Darkest Disney film of the era' },
                  { year: '1999', film: 'Tarzan', note: 'Renaissance concludes' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                      {item.year.slice(2)}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">{item.film}</p>
                      <p className="text-sm text-gray-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Reception & Research Findings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Star className="text-orange-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Critical Reception & Research Findings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Critical Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The film received mixed reviews for its darker tone compared to other Disney films. 
                Critics praised the animation and music but questioned the appropriateness of the 
                subject matter for children.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <Star size={16} fill="currentColor" />
                <span className="font-medium">IMDb: 7.0/10</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Academic Criticism</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scholars have criticized the film's portrayal of Esmeralda as perpetuating the 
                "Sexy Gypsy" stereotype, noting how her character design and movements sexualize 
                Roma women while reducing them to exotic objects of desire rather than complex individuals.
              </p>
            </div>
          </div>

          {/* Key Research Findings */}
          <div className="mt-8 bg-slate-900 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Key Research Findings</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Esmeralda represents a departure from traditional European princesses, placing the "Exotic Other" center stage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>The character combines racialization with sexualization through the "Sexy Gypsy" stereotype</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>The pole dance scene exemplifies how the film justifies exploitation of Roma women</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Despite being a story of justice, Esmeralda remains under the Male Gaze</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Darker features and adult movements serve as racial markers for non-whiteness</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Annotation of Key Pieces */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Quote className="text-lime-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Annotation of Key Pieces
            </h2>
          </div>

          {/* Hellfire Song Analysis */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Music className="text-red-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">"Hellfire" - Musical Analysis</h3>
            </div>
            
            <blockquote className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg mb-6">
              <p className="text-gray-700 italic text-lg">
                "It is not my fault, I am not to blame, it is the gypsy girl, the witch who sent this flame."
              </p>
              <cite className="text-sm text-gray-500 mt-2 block">— Judge Frollo, "Hellfire"</cite>
            </blockquote>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Taboo Addressed</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This line tackles the taboo of <strong>forbidden sexual desire within a religious context</strong>. 
                  Judge Frollo, a religious authority figure, cannot accept his attraction to Esmeralda, 
                  so he shifts the blame onto her.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Literary Devices</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Demonization:</strong> Using "gypsy" and "witch" links Esmeralda's ethnicity with evil magic</li>
                  <li>• <strong>Metaphor:</strong> Comparing Frollo's desire with "hellfire" frames attraction as sinful</li>
                  <li>• <strong>Scapegoating:</strong> Frollo cannot accept his feelings, so he blames the woman</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Critical Analysis</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The song exemplifies how the film portrays the dangerous intersection of religious 
                  hypocrisy and ethnic prejudice. Frollo's inability to reconcile his desire with his 
                  faith leads him to demonize Esmeralda entirely—her ethnicity becomes proof of her 
                  evil nature in his mind.
                </p>
              </div>
            </div>
          </div>

          {/* Scene Analysis - Festival of Fools */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Film className="text-purple-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Festival Scene - Visual Analysis</h3>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700 text-sm italic">
                "Oh, the gypsy's there... Stay away child, the gypsies… they'll steal us blind."
                <br /><br />
                "Alright gypsy, where'd you get the money?"<br />
                "For your information, I earned it."<br />
                "*sigh* Gypsies don't earn money... They steal it."
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultural Elements Depicted</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Musical instruments: tambourine, Turkish senna</li>
                  <li>• Dance styles: exotic Roma-style movements</li>
                  <li>• Extravagant clothing and golden accessories</li>
                  <li>• Community gestures of help and solidarity</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Visual Techniques</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Framing:</strong> Low-angle shots of Esmeralda show her as helpless; high-angle shots of guards indicate oppression</li>
                  <li>• <strong>Setting:</strong> The Palace of Justice is ironic given the unfair judgment depicted</li>
                  <li>• <strong>Power dynamics:</strong> The guard grabbing the woman depicts the power gap</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Stereotypes Reinforced</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Despite showing Roma culture more positively than real-life scenarios, the scene 
                  still portrays them as a homogeneous group of dancers and thieves. The mother's 
                  warning and the guard's assumption that "Gypsies don't earn money" demonstrate 
                  how deeply ingrained these prejudices are in society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
