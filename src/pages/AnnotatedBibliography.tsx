import { BookOpen } from 'lucide-react';

const bibliography = [
  {
    citation: `Sigona, Nando. "Locating 'The Gypsy Problem'. The Roma in Italy: Stereotyping, Labelling and 'Nomad Camps'." Journal of Ethnic and Migration Studies, vol. 31, no. 4, 2005, pp. 741–756.`,
    annotation: `This academic publication from 2005 deconstructs the Italian stereotype of the "nomad" and reveals how this label functions as a political device for segregation rather than a cultural characteristic of Roma people. Sigona demonstrates how the classification of Roma as "natural-born nomads" led to the creation of isolated "nomad camps" (campi nomadi) that lacked basic infrastructure. This source is crucial for understanding how anti-Roma sentiment operates as a top-down phenomenon created by state institutions rather than emerging from within Roma communities themselves. The research exposes how spatial segregation reinforces visible "otherness" and perpetuates the perception of Roma as threats to public order, shifting responsibility from marginalized communities to the institutions that marginalize them.`
  },
  {
    citation: `"Italian Media Reinforce Roma Stereotypes - Council of Europe." ANSA.it, 19 June 2024, https://www.ansa.it/english/news/general_news/2024/06/19/italian-media-reinforce-roma-stereotypes-council-of-europe_caeae8b5-3cb8-468a-ac63-3e6a967a99d6.html.`,
    annotation: `This recent article summarizes a 2024 Council of Europe study on Roma representation in Italian media, revealing that coverage primarily portrays Roma through crime stories ("cronaca nera") with prevalent negative stereotypes depicting them as "non-violent criminals" or uneducated, backward beggars. The source is valuable for understanding how such myths persist into the modern era despite decades of activism. It documents a dangerous feedback loop: media reports on crime inspire demands for tougher measures like camp evictions, which are then reported as "restoration of order," reinforcing the original stereotype. This contemporary evidence demonstrates that media representation of Roma communities remains overwhelmingly negative and lacks positive, nuanced stories that would humanize this marginalized population.`
  },
  {
    citation: `Campland: Racial Segregation of Roma in Italy. European Roma Rights Centre (ERRC), 2000, https://www.errc.org/reports-and-submissions/campland-racial-segregation-of-roma-in-italy.`,
    annotation: `This significant NGO report provides crucial perspective on the physical manifestation of anti-Roma mythology: the ghetto. The ERRC documents how the "nomad theory" promoted by sociologists resulted in "Campland," a unique Italian system of state-created ghettos for an identified ethnic group under the deceptive guise of cultural preservation. The report illustrates how myths create architectural effects—the "nomad" myth erected not only wounded feelings but actual walls and segregated spaces. This source demonstrates that Italian authorities established a network of camps that confirm and strengthen prejudice, communicating that Roma are "a people apart" who cannot and do not want to integrate. The camp becomes a place of degradation where the "Gypsy" is kept at a safe distance, making this an essential resource for understanding the concrete, spatial consequences of stereotyping.`
  }
];

export default function AnnotatedBibliography() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
            Annotated Bibliography
          </h1>
          <p className="text-lg text-blue-100">
            Academic sources on Roma representation and anti-Gypsyism
          </p>
        </div>
      </section>

      {/* Bibliography List */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-['Playfair_Display']">
              Sources
            </h2>
          </div>

          <div className="space-y-10">
            {bibliography.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium leading-relaxed mb-4 pl-4 border-l-4 border-blue-400">
                      {item.citation}
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="font-semibold text-gray-700">Annotation: </span>
                        {item.annotation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-12 bg-lime-50 rounded-xl p-6 border border-lime-200">
            <h3 className="text-lg font-bold text-lime-800 mb-2">Note on Research</h3>
            <p className="text-lime-700 text-sm leading-relaxed">
              These sources were selected for their academic rigor and relevance to understanding 
              how media representation and state policies perpetuate anti-Roma stereotypes. The 
              collection spans from 2000 to 2024, demonstrating both the historical persistence 
              and contemporary urgency of this issue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
