import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Exceeded My Expectations',
    content:
      "Instructor Long's online guitar lessons exceeded my expectations. His comprehensive teaching style and personalized approach helped me progress quickly and confidently on the guitar.",
    user: {
      id: 1,
      name: 'Takjing Leung',
      professional: 'Student',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Exceptional Online Guitar Lessons',
    content:
      "Long's online guitar lessons were nothing short of exceptional. His expertise, clear instruction, and personalized guidance made learning the guitar an enjoyable and rewarding experience.",
    user: {
      id: 1,
      name: 'Jonny',
      professional: 'Video Editor',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Very complete class',
    content:
      "Instructor Long's teaching style made learning the art of DJing a thrilling journey. From beatmatching to live mixing techniques, this course provided invaluable skills for aspiring DJs.",
    user: {
      id: 1,
      name: 'Patricia Chan',
      professional: 'Stage Desginer',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Perfect Guitar Tab',
    content:
      'Guitar tab arrangements are simply outstanding, capturing the essence of every song with precision and detail',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'Guitarist',
      photo: '4.jpg',
    },
  },
  // {
  //   id: 5,
  //   title: 'Detailed learning materials',
  //   content:
  //     'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
  //   user: {
  //     id: 1,
  //     name: 'Ashley Graham',
  //     professional: 'Back-End Developer',
  //     photo: '5.jpg',
  //   },
  // },
]
