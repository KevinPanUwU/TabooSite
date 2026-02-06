import { BookOpen } from 'lucide-react';

const bibliography = [
  {
    citation: `Sigona, Nando. "Locating 'The Gypsy Problem'. The Roma in Italy: Stereotyping, Labelling and 'Nomad Camps'." Journal of Ethnic and Migration Studies, vol. 31, no. 4, 2005, pp. 741–756.`,
    annotation: `This academic publication from 2005 deconstructs the Italian stereotype of the "nomad" and reveals how this label functions as a political device for segregation rather than a cultural characteristic of Roma people. Sigona demonstrates how the classification of Roma as "natural-born nomads" led to the creation of isolated "nomad camps" (campi nomadi) that lacked basic infrastructure. This source is crucial for understanding how anti-Roma sentiment operates as a top-down phenomenon created by state institutions rather than emerging from within Roma communities themselves. The research exposes how spatial segregation reinforces visible "otherness" and perpetuates the perception of Roma as threats to public order, shifting responsibility from marginalized communities to the institutions that marginalize them.`
  },
  {
    citation: `Ozkan, A. R. "Paradoxes of Gender and Ritual in Turkish Romani: An Ethnographic Analysis." Magazine Karaganda Buketov University, 2024, 29, 4(116). https://doi.org/10.31489/2024HPh4/261-271. Accessed 15 January 2026.`,
    annotation: `This article is about the taboos and paradoxes surrounding the gender based roles and daily rituals of the Romani people in Turkey. It shows how their life is shaped by their ethnic and cultural identity where different forms of discrimination both from outside and from other Romani people emerge in these contexts. It talks about more specific topics like gender segregation and the restricted lives of the young Roma girls and practices like exchange marriage. This article will be particularly important for us to look back into while exploring more cultural aspects of the taboos surrounding the Roma People.`
  },
  {
    citation: `The European Court of Human Rights. "CASE OF AKSU v TURKEY." 15 March 2012. HUDOC. https://hudoc.echr.coe.int/eng#{"itemid":["001-109577"]} Accessed 15 January 2026.`,
    annotation: `This web document is the case of Mr. Aksu taking the the Government of the Republic of Turkey, regarding some book publications that criticized the Roma. He did this as a Romani individual who was also a professor and he did this because some books had offensive comments while the books he wrote were being censored. This document will be important to look at how the taboos surrounding the Roma can be taken to the intenational level.`
  },
  {
    citation: `Minority Rights Group International. "Roma in Bulgaria." Minority Rights Group, https://minorityrights.org/communities/roma-2/ Accessed 15 Jan. 2026.`,
    annotation: `Minority Rights Group International describes the history and the current situation of the Roma people in Bulgaria, showcasing the social exclusion, discrimination, and cultural diversity towards them. In the beginning it provides information about the Roma people in Bulgaria and how they are separated in religion and language. Also, it provides details about exclusions from education, housing, employment and participation in politics. The segregated schooling, pervasive poverty, and urban isolation, showing how the negative stereotypes compound each other to sustain marginalization. This website talks about how Bulgarians often attribute to practices, such as education on a lower/elementary level or frequently seen early marriages.`
  },
  {
    citation: `Славкова, Магдалена. "Роми." Балгарска етнография: Етнически групи и общности, balgarskaetnografia.com/grupi-i-obshtnosti/etnicheski-grupi-i-obshtnosti/romi.html. Accessed 15 Jan. 2026.`,
    annotation: `The article provides an outline of the origins, demographics, linguistic variations, religious practices and patterns of settlement of the Roma people. Their settling in Bulgarian lands was firstly noticed during the Ottoman period, and their late arrivals in Wallachia and Moldova. Also, their Indian origins are noted. This article gives information about the heterogeneity of the different subgroups of the Roma people and how they differ from one another, because of their languages or religious beliefs. It is also emphasized on the family rituals. Towards the end, this source hints at migration and economic mobility. This is used to shape their cultural expressions.`
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
