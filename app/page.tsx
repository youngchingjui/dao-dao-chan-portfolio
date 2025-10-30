import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ProjectSection } from "@/components/sections/project-section"
import { YitiaoBrandSection } from "@/components/sections/yitiao-brand"
import { EditorialSection } from "@/components/sections/editorial-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />

      {/* Projects with alternating styles */}
      <ProjectSection
        id="perrotin"
        title="Perrotin Gallery | Artist Storytelling Series"
        description="Designed a cultural storytelling campaign to grow brand relevance in China by turning abstract contemporary art into emotionally engaging narratives. Led strategy-to-execution across creative, scripting, and production, partnering with artists and gallery teams."
        impact={["10× engagement", "500K+ organic views on Qi Zhuo’s feature", "Drove traffic, conversation, and exhibition conversion"]}
        link={{ href: "https://www.instagram.com/", label: "View on Instagram" }}
        variant="rightMedia"
        background="gradientA"
      />

      <ProjectSection
        id="tonglu"
        title="Yitiao | TongLu Architecture Story"
        description="Created a culturally resonant storytelling film that elevated YITIAO’s brand influence by transforming a countryside architecture project into a lifestyle movement. Led narrative strategy and production end-to-end."
        impact={["1M+ organic views", "Boosted visitor conversion to the hotel", "Became a signature brand asset across China’s design community"]}
        link={{ href: "https://www.youtube.com/", label: "Watch on YouTube" }}
        variant="leftMedia"
        background="muted"
      />

      <ProjectSection
        id="fiber-artist"
        title="Yitiao | Story of a Young Fiber Artist"
        description="Produced a storytelling film during early COVID-19 featuring a young fiber artist who pursued her dream despite hardship. Managed concept-to-delivery under restrictions, focusing on authenticity and resilience."
        impact={["800K+ organic views on WeChat", "One of YITIAO’s most-shared videos of the year", "Helped the artist gain brand collaborations and art institution partnerships"]}
        link={{ href: "#", label: "Watch on WeChat" }}
        variant="rightMedia"
        background="contrast"
      />

      <ProjectSection
        id="jordan-chengdu"
        title="Jordan Brand | Chengdu Flagship Opening"
        description="Produced a high-energy activation film to amplify Jordan’s flagship launch in Chengdu. Created an emotion-driven narrative around street sport culture and community movement."
        impact={["Featured widely in sports and lifestyle media", "Strong KOL repost amplification and offline activation impact"]}
        link={{ href: "#", label: "View on Rednote" }}
        variant="leftMedia"
        background="gradientB"
      />

      <ProjectSection
        id="moco"
        title="MO&Co. | Summer Collection Promotion"
        description="Led scripting and editing for social-first fashion storytelling, translating MO&Co.’s attitude-driven design into lifestyle content for RED and WeChat."
        impact={["Delivered an authentic, female-focused narrative", "Resulted in strong client engagement and product interest"]}
        link={{ href: "#", label: "View on WeChat" }}
        variant="rightMedia"
        background="muted"
      />

      <ProjectSection
        id="apple"
        title="Apple | Local Creator Story"
        description="Supported Apple China in producing localized brand content meeting both global standards and local execution needs. Managed on-site production logistics under tight deadlines — praised for discipline and attention to detail."
        link={{ href: "#", label: "View on Link" }}
        variant="leftMedia"
        background="base"
      />

      <YitiaoBrandSection />
      <EditorialSection />

      <CTASection />
      <Contact />
    </main>
  )
}

