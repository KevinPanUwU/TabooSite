import { BookOpen, Image, Film, ExternalLink } from 'lucide-react';

const academicSources = [
  {
    citation: `Sigona, Nando. "Locating 'The Gypsy Problem'. The Roma in Italy: Stereotyping, Labelling and 'Nomad Camps'." Journal of Ethnic and Migration Studies, vol. 31, no. 4, 2005, pp. 741–756.`,
    url: 'https://doi.org/10.1080/13691830500109969'
  },
  {
    citation: `"Italian Media Reinforce Roma Stereotypes - Council of Europe." ANSA.it, 19 June 2024.`,
    url: 'https://www.ansa.it/english/news/general_news/2024/06/19/italian-media-reinforce-roma-stereotypes-council-of-europe_caeae8b5-3cb8-468a-ac63-3e6a967a99d6.html'
  },
  {
    citation: `Campland: Racial Segregation of Roma in Italy. European Roma Rights Centre (ERRC), 2000.`,
    url: 'https://www.errc.org/reports-and-submissions/campland-racial-segregation-of-roma-in-italy'
  }
];

const mediaSources = [
  {
    title: 'The Hunchback of Notre Dame',
    type: 'Film',
    info: 'Walt Disney Feature Animation, 1996. Directed by Gary Trousdale and Kirk Wise.',
    note: 'Primary body of work analyzed in this project.'
  },
  {
    title: 'The Hunchback of Notre Dame (Novel)',
    type: 'Literature',
    info: 'Victor Hugo, 1831.',
    note: 'Original source material for the Disney adaptation.'
  }
];

const imageSources = [
  {
    description: 'Esmeralda - Scenario 1 (Public Perception)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Cinderella - Scenario 1 (Public Perception)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Esmeralda - Scenario 2 (Social Treatment)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Cinderella - Scenario 2 (Social Treatment)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Esmeralda - Scenario 3 (Romantic Interest)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Cinderella - Scenario 3 (Romantic Interest)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Esmeralda - Scenario 4 (Justice & Protection)',
    source: 'Original creative work created for this project'
  },
  {
    description: 'Cinderella - Scenario 4 (Justice & Protection)',
    source: 'Original creative work created for this project'
  }
];

export default function References() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
            References & Works Cited
          </h1>
          <p className="text-lg text-gray-300">
            All sources used in this research project
          </p>
        </div>
      </section>

      {/* Academic Sources */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Academic Sources
            </h2>
          </div>

          <div className="space-y-6">
            {academicSources.map((source, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6">
                <p className="text-gray-800 leading-relaxed mb-3">
                  {source.citation}
                </p>
                <a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  <ExternalLink size={14} />
                  Access Source
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Sources */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Film className="text-purple-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Media Sources
            </h2>
          </div>

          <div className="space-y-6">
            {mediaSources.map((source, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    {source.type}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{source.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{source.info}</p>
                    <p className="text-gray-500 text-sm italic">{source.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Sources */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Image className="text-lime-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Image Sources
            </h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-gray-600 mb-6">
              All images used in the Creative Response section are original works created specifically 
              for this academic project. They represent our artistic interpretation of the contrast 
              between Esmeralda's and Cinderella's portrayals in media.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {imageSources.map((img, i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  <p className="text-gray-800 text-sm font-medium">{img.description}</p>
                  <p className="text-gray-500 text-xs mt-1">{img.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-['Playfair_Display']">
            Additional Resources for Further Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lime-400 mb-3">European Roma Rights Centre</h3>
              <p className="text-gray-400 text-sm mb-3">
                An international public interest law organization engaging in activities aimed at 
                combating anti-Romani racism and human rights abuse of Roma.
              </p>
              <a 
                href="https://www.errc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                www.errc.org →
              </a>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lime-400 mb-3">Council of Europe - Roma Rights</h3>
              <p className="text-gray-400 text-sm mb-3">
                Official resources on Roma and Traveller issues, including policy documents, 
                research, and action plans.
              </p>
              <a 
                href="https://www.coe.int/en/web/roma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                www.coe.int →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            This project was completed as part of an academic course on taboos in media and society.
            All sources are properly cited in MLA format.
          </p>
        </div>
      </section>
    </div>
  );
}
