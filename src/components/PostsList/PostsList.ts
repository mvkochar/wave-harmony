type Post = {
    id: number
    image: string
    date: string
    title: string
    description: string
    category: string
    year: number
}

const PostsList:Post[] = [
    {
       id: 0,
       image: '/images/Blog/1.png',
       date: '06 May',
       title: 'Models went surfing in painted swimsuits',
       description: 'American models Jovan Gonzalez, Tauima Hall, Christine Lee and Morgan Sleaf went surfing on one of the beaches...',
       category: 'People',
       year: 2021 
    },

    {
        id: 1,
        image: '/images/Blog/2.png',
        date: '14 April',
        title: 'Surfing in Ukraine: Where to catch a wave?',
        description: 'How to catch a wave the Ukrainian way? Surfing in Ukraine is a copy of overseas extreme fun or...',
        category: 'Spots',
        year: 2021 
     },

     {
        id: 2,
        image: '/images/Blog/3.png',
        date: '9 April',
        title: 'Types of surfboards',
        description: 'Surfing is a new sport for Ukraine, there are few places for practicing, but extreme athletes are not discouraged, trying to organize vacations...',
        category: 'People',
        year: 2021 
     },

     {
        id: 3,
        image: '/images/Blog/4.png',
        date: 'March 28',
        title: '13 main rules of surfing',
        description: 'Surfing rules that everyone should remember, from beginner to pro',
        category: 'Spots',
        year: 2021 
     },

     {
        id: 4,
        image: '/images/Blog/5.png',
        date: 'March 21',
        title: 'Surfer online: 7 useful sites for surfers',
        description: 'We bring to your attention several useful portals that will be useful to every surfer',
        category: 'Spots',
        year: 2021 
     },

     {
        id: 5,
        image: '/images/Blog/6.png',
        date: 'March 02',
        title: 'Tailoring swimsuits to your measurements',
        description: 'We know that every girl wants to be irresistible on the beach, on the wave or just on vacation. But, choose a swimsuit...',
        category: 'Spots',
        year: 2021 
     },

     {
        id: 6,
        image: '/images/Blog/7.png',
        date: 'March 12',
        title: '5 ways to survive between surf trips',
        description: 'If your surf reality looks like mine, which means that you have to travel several hundred kilometers to surf, this post is for you. It’s hard to be stoked and motivated between surf trips, but there are ways to survive this time in a productive way.',
        category: 'Spots',
        year: 2021 
     },

     {
        id: 7,
        image: '/images/Blog/8.png',
        date: 'October 23',
        title: 'Surfing destinations: Sagres, Portugal',
        description: 'Supertubos may be the most famous Portuguese wave, but here in Sagres you can surf practically every day, all year round –  says Rui, a local surfing instructor.',
        category: 'People',
        year: 2021 
     },


]

export default PostsList