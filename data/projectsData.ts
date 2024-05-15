interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Midwest DME Supply Shopify',
    description: `Midwest DME Supply transitioned from WordPress and WooCommerce to Shopify, leveraging its scalability and ease of use to revamp their online presence and streamline operations. With personalized training, they now benefit from a user-friendly website and optimized workflows, poised for future growth.`,
    imgSrc: '/static/images/van-image.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
