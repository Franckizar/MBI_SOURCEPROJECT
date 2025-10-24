// app/about/page.tsx
import PageHeader from '@/components/About/page-header'
import OurStory from '@/components/About/our-story'
import OurValues from '@/components/About/our-values'
import TeamSwiper from '@/components/About/team-swiper'

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader />
      <OurStory />
      <OurValues />
      <TeamSwiper />
    </main>
  )
}