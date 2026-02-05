import { Globe, AlertTriangle, Users, Film } from 'lucide-react';

export default function AboutTaboo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-lime-600 to-lime-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
            About Our Taboo
          </h1>
          <p className="text-lg text-lime-100">
            Understanding anti-Roma sentiment and its pervasive presence in media
          </p>
        </div>
      </section>

      {/* Definition & Origins */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-lime-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
                  Definition
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Anti-Roma sentiment, also known as Romaphobia or anti-Gypsyism, refers to the 
                prejudice, discrimination, and hatred directed toward Roma people. This form of 
                racism has deep historical roots in Europe, dating back centuries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The term "Gypsy" itself is considered a slur by many Roma communities, as it 
                perpetuates harmful stereotypes of thievery, deception, and nomadic criminality 
                that have been used to justify persecution for generations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
                  Historical Origins
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Roma people originated from northern India and migrated to Europe over 
                1,000 years ago. Upon their arrival, they faced immediate suspicion and 
                discrimination due to their different appearance, customs, and languages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Throughout history, Roma people have been enslaved, forcibly assimilated, 
                sterilized, and murdered—including during the Holocaust where an estimated 
                200,000-500,000 Roma were killed in the Porajmos (the Roma Holocaust).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Examples & Media Evidence */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Film className="text-purple-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Global Examples & Media Evidence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Italy Example */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <h3 className="text-lg font-bold text-gray-900">Italy: The "Nomad Camps"</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Italy has created a system of state-sponsored segregation through "nomad camps" 
                (campi nomadi). These enclosed, isolated settlements lack basic infrastructure and 
                reinforce the perception of Roma as a threat to public order.
              </p>
              <blockquote className="border-l-4 border-lime-500 pl-4 text-gray-500 text-sm italic">
                "The 'nomad camp' is not a spontaneous settlement of people who travel, but a 
                state-sponsored institution... The labeling of Roma as 'nomads' has justified their 
                spatial segregation."
                <cite className="block mt-2 not-italic text-gray-400">— Sigona, Journal of Ethnic and Migration Studies</cite>
              </blockquote>
            </div>

            {/* Media Stereotypes */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <h3 className="text-lg font-bold text-gray-900">Media Stereotypes (2024)</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A 2024 Council of Europe study found that Italian media primarily portrays Roma 
                through crime stories, depicting them as "non-violent criminals" or beggars—never 
                as complex individuals with diverse lives.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-500 text-sm italic">
                "There is a prevalent negative stereotype depicting Roma, primarily as non-violent 
                criminals... They are often portrayed as uneducated and backward."
                <cite className="block mt-2 not-italic text-gray-400">— Council of Europe, 2024</cite>
              </blockquote>
            </div>

            {/* Disney's Representation */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <h3 className="text-lg font-bold text-gray-900">Disney's "The Hunchback"</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The 1996 film exemplifies the "Sexy Gypsy" stereotype through Esmeralda's character 
                design—sexualized movements, pole dancing scenes, and the "exotic other" trope that 
                reduces Roma women to objects of desire.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Demonization through words like "witch"</li>
                <li>• Scapegoating for forbidden desires</li>
                <li>• Dehumanization as "vermin"</li>
              </ul>
            </div>

            {/* Campland */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <h3 className="text-lg font-bold text-gray-900">Campland: Racial Segregation</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The European Roma Rights Centre documented how Italy's "Campland" system creates 
                physical ghettos that confirm and strengthen prejudice—that Roma are "a people apart" 
                who cannot integrate.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-500 text-sm italic">
                "The camp is a place of degradation where the 'Gypsy' is kept at a safe distance."
                <cite className="block mt-2 not-italic text-gray-400">— ERRC Report</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Impact on People's Lives */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-lime-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Impact on People's Lives
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-400">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Social Exclusion</h3>
              <p className="text-gray-600 leading-relaxed">
                Roma communities face systematic exclusion from housing, education, employment, 
                and healthcare. The stereotype of the "thieving gypsy" creates barriers to 
                integration and perpetuates cycles of poverty.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-400">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Psychological Harm</h3>
              <p className="text-gray-600 leading-relaxed">
                Constant exposure to negative stereotypes in media creates internalized racism 
                and affects mental health. Young Roma people grow up seeing themselves portrayed 
                as criminals, beggars, or exotic objects rather than as fully human.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-400">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Political Consequences</h3>
              <p className="text-gray-600 leading-relaxed">
                Media stereotypes fuel political rhetoric that justifies discriminatory policies. 
                The feedback loop is clear: media reports on crime → demands for tougher measures 
                → evictions and segregation → media reports on "restoration of order."
              </p>
            </div>

            <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-xl p-6 border-l-4 border-lime-400">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Erasure</h3>
              <p className="text-gray-600 leading-relaxed">
                When Roma people are only shown as dancers, thieves, or beggars, their rich 
                cultural heritage—music, language, traditions—is erased. This one-dimensional 
                portrayal denies their humanity and diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 font-['Playfair_Display']">
            The Scale of the Issue
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-lime-400 mb-2">10-12M</div>
              <p className="text-gray-400 text-sm">Roma people in Europe</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">200K-500K</div>
              <p className="text-gray-400 text-sm">Roma killed in the Holocaust</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
              <p className="text-gray-400 text-sm">Live below poverty line in EU</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Centuries</div>
              <p className="text-gray-400 text-sm">Of systematic discrimination</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
