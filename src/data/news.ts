export type NewsCategory = 'Event' | 'Race' | 'News'

export type NewsArticle = {
  id: string
  slug: string
  title: string
  category: NewsCategory
  date: string
  dateLabel: string
  excerpt: string
  body: string[]
  location?: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'cebu-harbor-practice-open-day',
    title: 'Open practice day for survivors and supporters',
    category: 'Event',
    date: '2026-08-09',
    dateLabel: 'Aug 9, 2026',
    location: 'Cebu City waters',
    excerpt:
      'Join us on the dock for a welcoming practice morning — paddling basics, stretch circle, and stories from the crew.',
    body: [
      'Pink Dragons Philippines is opening a practice morning for breast cancer survivors, caregivers, and friends who want to feel the water with us.',
      'No race experience needed. We’ll cover safety, basic stroke technique, and how our crew stays connected on and off the boat. Light merch and awareness ribbons will be available.',
      'Message us on Facebook to reserve a spot. Wear comfortable clothes you can get wet, and bring water, sunscreen, and a big heart.',
    ],
  },
  {
    id: '2',
    slug: 'regional-dragon-boat-regatta-2026',
    title: 'Pink Dragons enter regional regatta this September',
    category: 'Race',
    date: '2026-09-20',
    dateLabel: 'Sep 20–21, 2026',
    location: 'Central Visayas',
    excerpt:
      'Our amateur crew is training for a two-day regional dragon boat meet — racing for strength, sisterhood, and awareness.',
    body: [
      'After months of early call times, Pink Dragons Philippines will race at the regional dragon boat regatta this September.',
      'We’ll compete as an amateur survivors’ crew, carrying our pink and our mission: reclaim strength, build lasting connections, and inspire others.',
      'Cheer squads, families, and partners are welcome on race day. Follow our Facebook page for heat schedules, live updates, and volunteer needs.',
    ],
  },
  {
    id: '3',
    slug: 'breast-cancer-awareness-month-paddle',
    title: 'October awareness paddle & community day',
    category: 'Event',
    date: '2026-10-11',
    dateLabel: 'Oct 11, 2026',
    location: 'Cebu City',
    excerpt:
      'For Breast Cancer Awareness Month, we’re hosting a community paddle, survivor stories, and a pink merch booth.',
    body: [
      'October is Breast Cancer Awareness Month — and Pink Dragons will mark it the way we know best: together, on the water.',
      'Expect a short ceremonial paddle, survivor sharings, and a fundraiser booth for jerseys and jackets. Proceeds support awareness, support programs, and survivor assistance.',
      'Companies and partners interested in sponsoring the day can reach Team Captain Ma. Liberty Rañoa through our Facebook page.',
    ],
  },
  {
    id: '4',
    slug: 'welcome-new-paddlers-2026',
    title: 'Welcome to our newest paddlers',
    category: 'News',
    date: '2026-07-15',
    dateLabel: 'Jul 15, 2026',
    excerpt:
      'New faces joined the boat this season — survivors and allies learning the drum, the stroke, and the sisterhood.',
    body: [
      'Every season, Pink Dragons grows a little louder and a little stronger. We’re thrilled to welcome new paddlers who found us through support groups, friends, and our Facebook community.',
      'Under Head Coach Christian Ian Sy, newcomers start with fundamentals and safety before moving into race-pace training. Veterans mentor seat partners so no one learns alone.',
      'If you’re a survivor ready to paddle — or someone who wants to support from the dock — you’re invited. Stronger together.',
    ],
  },
  {
    id: '5',
    slug: 'hualien-reflections',
    title: 'Reflections from racing abroad',
    category: 'News',
    date: '2025-11-02',
    dateLabel: 'Nov 2, 2025',
    location: 'Hualien, Taiwan',
    excerpt:
      'Crew members who raced internationally share what the journey taught them about courage, gratitude, and Filipino spirit.',
    body: [
      'When Pink Dragons paddlers joined friends abroad for international competition, the race became more than medals — it was faith, courage, and gratitude in motion.',
      'Representing survivor athletes on a world stage reminded us why we paddle: life after cancer can be powerful, joyful, and loud.',
      'Thank you to every coach, teammate, and supporter who made the journey possible. The boat carries all of you.',
    ],
  },
  {
    id: '6',
    slug: 'mothers-day-invite-survivors',
    title: 'Mother’s Day invitation to survivors',
    category: 'News',
    date: '2026-05-10',
    dateLabel: 'May 10, 2026',
    excerpt:
      'Team Captain Ma. Liberty Rañoa invites more breast cancer survivors to join the crew this Mother’s Day season.',
    body: [
      'Led by president and team captain Ma. Liberty Rañoa — a longtime breast cancer survivor — Pink Dragons Philippines continues calling survivors to the water.',
      'Dragon boat is sport and therapy: rhythm, community, and a place where arms, lungs, and spirits remember their strength.',
      'Our mission goes beyond racing. We are here to inspire, support, and remind every survivor that they are not alone.',
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category?: NewsCategory) {
  if (!category) return newsArticles
  return newsArticles.filter((article) => article.category === category)
}
