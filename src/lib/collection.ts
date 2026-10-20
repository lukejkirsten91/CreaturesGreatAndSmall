export const SITE_URL = 'https://creatures-great-and-small.vercel.app'
export const CONTACT_EMAIL = 'stavroskirsten@gmail.com'
export type Category = 'All characters' | 'At play' | 'Quiet moments' | 'Together' | 'In the making'
export const categories: Category[] = ['All characters', 'At play', 'Quiet moments', 'Together', 'In the making']
export type Sculpture = { id: number; filename: string; title: string; category: Exclude<Category, 'All characters'>; description: string }

// Original IDs are retained so previously shared gallery links keep working.
export const sculptures: Sculpture[] = [
  { id: 1, filename: 'The Screw.jpeg', title: 'The Screw', category: 'In the making', description: 'The starting point. A weathered railway screw, ready for its next chapter.' },
  { id: 2, filename: 'Canoe Person.jpeg', title: 'Canoe Person', category: 'At play', description: 'A paddle, a little boat, and the promise of an unhurried afternoon.' },
  { id: 3, filename: 'Climbing Person.jpeg', title: 'Climbing Person', category: 'At play', description: 'One step at a time. A small character with a determined spirit.' },
  { id: 4, filename: 'Dancing Person.jpeg', title: 'Dancing Person', category: 'At play', description: 'Caught in the middle of a dance, with a rhythm all their own.' },
  { id: 5, filename: 'Fisher Person 1 (before).jpeg', title: 'Fisher Person — the cast', category: 'At play', description: 'The rod bends, the line flies, and a quiet day by the water begins.' },
  { id: 6, filename: 'Fisher Person 2 (after) - with label.jpeg', title: 'Fisher Person — with a story', category: 'At play', description: 'A little fishing companion, pictured with the story behind the metal.' },
  { id: 7, filename: 'Fisher Person 2 (after).jpeg', title: 'Fisher Person — the catch', category: 'At play', description: 'A patient fisherman, a fine catch, and a story to take home.' },
  { id: 8, filename: 'From the Top.jpeg', title: 'From the Top', category: 'In the making', description: 'A closer look at the shapes and textures that give each piece its character.' },
  { id: 9, filename: 'Golf Series 1 (before).jpeg', title: 'The Golfer — lining up', category: 'At play', description: 'That moment of concentration before the swing.' },
  { id: 10, filename: 'Golf Series 2 (during).jpeg', title: 'The Golfer — the swing', category: 'At play', description: 'A favourite pastime, captured in a small gesture of reclaimed metal.' },
  { id: 11, filename: 'Golf Series 3 (after).jpeg', title: 'The Golfer — following through', category: 'At play', description: 'Head up, club down. Watching to see where that one went.' },
  { id: 12, filename: 'Guitar Person.jpeg', title: 'Guitar Person', category: 'At play', description: 'For the ones who can’t help tapping their feet. A little musician with a whole lot of soul.' },
  { id: 13, filename: 'Leaning Person with Screws.jpeg', title: 'Leaning Person & the screws', category: 'In the making', description: 'The finished character beside the humble hardware that started it all.' },
  { id: 14, filename: 'Leaning Person.jpeg', title: 'Leaning Person', category: 'Quiet moments', description: 'Taking a moment. Proof that even a railway screw can learn to relax.' },
  { id: 15, filename: 'Love.jpeg', title: 'Love', category: 'Together', description: 'Two little figures. One familiar feeling. Some things need very few words.' },
  { id: 16, filename: 'Olympian Series - Bicycle Person.jpeg', title: 'Bicycle Person', category: 'At play', description: 'Always happiest on two wheels. A spirited cyclist from the Olympian series.' },
  { id: 17, filename: 'Olympian Series - Canoe Person.jpeg', title: 'The Canoeist', category: 'At play', description: 'Low in the boat and reaching for the next stroke. Part of the Olympian series.' },
  { id: 18, filename: 'Olympian Series - Discus Person.jpeg', title: 'The Discus Thrower', category: 'At play', description: 'All poise and possibility, a moment before the throw. Part of the Olympian series.' },
  { id: 19, filename: 'Olympian Series - Javelin Person.jpeg', title: 'The Javelin Thrower', category: 'At play', description: 'A long line and a determined stance. Part of the Olympian series.' },
  { id: 20, filename: 'Paddle Boat Person.jpeg', title: 'Paddle Boat Person', category: 'At play', description: 'An easy balance and a paddle in hand. A little reminder to get out on the water.' },
  { id: 21, filename: 'Prayer Person.jpeg', title: 'Prayer Person', category: 'Quiet moments', description: 'A still moment, shaped in metal. Small in scale, thoughtful in spirit.' },
  { id: 22, filename: 'Prayer Series - Candle Person.jpeg', title: 'Candle Person', category: 'Quiet moments', description: 'A small figure offering a little light. From the Prayer series.' },
  { id: 23, filename: 'Prayer Series - Prayer Person (from top).jpeg', title: 'Prayer Person — from above', category: 'Quiet moments', description: 'Another perspective on a quiet figure from the Prayer series.' },
  { id: 24, filename: 'Prayer Series - Prayer Person.jpeg', title: 'A Moment of Prayer', category: 'Quiet moments', description: 'Hands together, head bowed. A simple gesture with a quiet presence.' },
  { id: 25, filename: 'See, Hear, Say People.jpeg', title: 'See, Hear, Say', category: 'Together', description: 'Three friends on a bench, each with their own way of looking at the world.' },
  { id: 26, filename: 'Surfer Person.jpeg', title: 'Surfer Person', category: 'At play', description: 'Finding balance, chasing a wave. A small sculpture for a big love of the ocean.' },
  { id: 27, filename: 'Walker Person.jpeg', title: 'Walker Person', category: 'At play', description: 'Walking stick in hand and ready for the next adventure.' },
  { id: 28, filename: 'The Gang.jpeg', title: 'The Gang', category: 'Together', description: 'The Railway People, together. A whole cast of characters made from metal with a past.' },
]
const displayOrder = [12, 16, 15, 26, 25, 3, 2, 7, 4, 14, 22, 27, 17, 18, 19, 20, 9, 10, 11, 21, 24, 23, 5, 6, 28, 1, 13, 8]
export const gallerySculptures = displayOrder.map(id => sculptures.find(piece => piece.id === id)!)
export const getSculpture = (id: number) => sculptures.find(piece => piece.id === id)!
export const enquiryUrl = (title?: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(title ? `Enquiry about ${title}` : 'Hello, Creatures Great and Small')}`
