export type MerchItem = {
  id: string
  name: string
  price: string
  description: string
  tag: string
  image: string
  slogan?: string
}

export const merchItems: MerchItem[] = [
  {
    id: 'sando-inaugural',
    name: 'Inaugural Sando',
    price: '₱650',
    description:
      'Limited-edition sleeveless jersey with dragon-scale and wave print. Wear pink, share hope, save lives — proceeds support breast cancer survivors.',
    tag: 'Limited edition',
    image: '/images/merch/sando-inaugural.png',
    slogan: 'More than a game, it’s a cause.',
  },
  {
    id: 'jersey-cause',
    name: 'Jersey for a Cause',
    price: '₱650',
    description:
      'Short-sleeve race jersey in hot pink with scale pattern on top and wave stripes below. Front and back dragon crest with Philippine flag at the nape.',
    tag: 'Jersey',
    image: '/images/merch/jersey-cause.png',
    slogan: 'Honor survivors. Support research. Inspire hope.',
  },
  {
    id: 'jersey-longsleeve',
    name: 'Long Sleeve Jersey',
    price: '₱750',
    description:
      'Long-sleeve jersey for a cause — same pink scale-and-wave design, built for cooler mornings on the dock.',
    tag: 'Jersey',
    image: '/images/merch/jersey-longsleeve.png',
    slogan: 'Hurry, while stocks last.',
  },
  {
    id: 'jersey-paddler',
    name: 'Paddler Team Jersey',
    price: '₱650',
    description:
      'White team jersey with pink scale sleeves, dragon-boat wave graphic, and “PADDLER” across the back. Every jersey sold helps.',
    tag: 'Jersey',
    image: '/images/merch/jersey-paddler.png',
    slogan: 'Together we rise, we paddle, we win.',
  },
  {
    id: 'jersey-scale',
    name: 'Race Day Jersey',
    price: '₱650',
    description:
      'Pink fundraiser jersey with full crest — support, empower, survive. Strength, unity, and passion in every stitch.',
    tag: 'Jersey',
    image: '/images/merch/jersey-scale.png',
    slogan: 'Support. Empower. Survive.',
  },
  {
    id: 'jacket-fundraiser',
    name: 'Survivor Jacket',
    price: '₱1,500',
    description:
      'Light pink zip-up windbreaker with crossed paddles and Pink Dragons crest. A collaboration fundraiser — wear pink, show strength, give hope.',
    tag: 'Outerwear',
    image: '/images/merch/jacket-fundraiser.png',
    slogan: 'Together we are stronger.',
  },
]
