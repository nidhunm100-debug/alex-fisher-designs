/**
 * Content source of truth, mirrored from satyabhamamajhi.in.
 * Facts, titles, dates and imagery are preserved from the existing site.
 */

export const artist = {
  name: "Satyabhama Majhi",
  roles: ["Contemporary Artist", "Curator", "Community Art Practitioner"],
  location: "Bhubaneswar, Odisha, India",
  email: "satyabhama1981@gmail.com",
  phone: "9438731542",
  statement:
    "Art can preserve memory, strengthen communities and create deeper relationships between people and the world they inhabit.",
  short:
    "Satyabhama is an artist from Bhubaneswar (Odisha) practicing in varied expressions such as painting, installation art, sculpting and photography. Her strength is painting and she does a lot of concepts on growing urbanization. Apart from that, she also undertakes many socially relevant and much needed projects where she takes art as a medium to engage with the community.",
  mission:
    "To use art as a medium for awareness, education, and empowerment — promoting sustainability through art, inspiring creativity that respects nature and humanity, and creating meaningful impact through research, collaboration, and community participation.",
  vision:
    "To build a compassionate and sustainable world where art, nature, and community thrive together — a future guided by creativity and strong values, where communities are empowered through art and knowledge while nature is respected and protected for generations to come.",
  portrait: "https://satyabhamamajhi.in/uploads/about_1786599818.png",
};

export type Slide = {
  title: string;
  caption: string;
  image: string;
};

export const heroSlides: Slide[] = [
  {
    title: "A Garden of Everyday Life",
    caption:
      "A vibrant visual portrait of a public garden where people gather, relax, play, connect, and experience nature together.",
    image:
      "https://satyabhamamajhi.in/uploads/1786599421_ChatGPTImageAug13202610_36_36AM.png",
  },
  {
    title: "The World Through Young Eyes",
    caption:
      "A vibrant exploration of childhood, play, community, and the imaginative worlds children create around themselves.",
    image:
      "https://satyabhamamajhi.in/uploads/1786598921_88b52f1b-5865-42eb-871f-8c8979ea9a9a.jpg",
  },
  {
    title: "Whispers of the Hills",
    caption:
      "Where rolling green hills, distant trees, and an expansive blue sky come together in a serene visual harmony.",
    image:
      "https://satyabhamamajhi.in/uploads/1786598725_cf3dd994-bcf2-47df-9718-7231a99a143d.png",
  },
];

export type Artwork = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "unurbanisation-series-i",
    title: "Unurbanisation Series I",
    year: "2024",
    medium: "Mixed media on canvas using natural pigments",
    category: "Art & Paintings",
    description:
      "A painted enquiry into the tension between concrete expansion and the living landscape, built from earth pigments gathered in rural Odisha.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611076_a3d4ae79-84a9-452a-8fa5-7b9eda5cae0f.jpg",
    featured: true,
  },
  {
    slug: "ecology-of-living-spaces",
    title: "Ecology of Living Spaces",
    year: "2023",
    medium: "Clay, charcoal, and acrylic on linen",
    category: "Culture & Heritage",
    description:
      "Domestic and shared spaces read as ecologies — surfaces, textures and traces of the people who inhabit them.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611563_3f2f47f8-017d-4567-9251-a96d1854724a.jpg",
    featured: true,
  },
  {
    slug: "celebration-of-letters",
    title: "Celebration of Letters",
    year: "2011",
    medium: "Mixed media on canvas using natural pigments",
    category: "Nature & Landscapes",
    description:
      "Script, symbol and landscape held together on one surface, celebrating the written word as a living cultural form.",
    image:
      "https://satyabhamamajhi.in/uploads/1786612345_cfee69ce-0658-4e28-851d-06463adc972b.jpg",
    featured: true,
  },
];

export const workCategories = [
  "All",
  "Art & Paintings",
  "Culture & Heritage",
  "Nature & Landscapes",
  "People & Community",
  "Sustainable Living",
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  category: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "peoples-wall",
    title: "People's Wall – Jan, Janani, Janmabhumi",
    year: "2023",
    location: "New Parliament House, New Delhi",
    category: "Community",
    description:
      "A public participatory project with 100 indigenous women artists and artisans.",
    image:
      "https://satyabhamamajhi.in/uploads/1786598725_cf3dd994-bcf2-47df-9718-7231a99a143d.png",
  },
  {
    slug: "forest-park",
    title: "Forest Park Project",
    year: "2019",
    location: "Forest Park, Bhubaneswar",
    category: "Ecological Art",
    description:
      "Nature-themed boundary walls capturing flowers, trees, and morning yoga activities.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611563_3f2f47f8-017d-4567-9251-a96d1854724a.jpg",
  },
  {
    slug: "rajmahal-flyover",
    title: "Rajmahal Flyover Mural Project",
    year: "2019",
    location: "Rajmahal, Bhubaneswar",
    category: "Mural",
    description:
      "Connecting local haat vendors and daily life via street art paintings.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611076_a3d4ae79-84a9-452a-8fa5-7b9eda5cae0f.jpg",
  },
  {
    slug: "rasulgarh-captain-portraits",
    title: "Rasulgarh Flyover Captain Portraits",
    year: "2018",
    location: "Rasulgarh, Bhubaneswar",
    category: "Public Art",
    description:
      "Portraits of 16 hockey team captains painted on flyover pillars.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614307_bffdb7f3-c880-45a4-bdc7-d35ea17bec98.jpg",
  },
  {
    slug: "bhubaneswar-art-trail",
    title: "Bhubaneswar Art Trail (BAT)",
    year: "2018",
    location: "Old Town, Bhubaneswar",
    category: "Public Installation",
    description:
      "Architectural sculpture using metal and fabric inspired by ancient temple forms.",
    image:
      "https://satyabhamamajhi.in/uploads/1786599421_ChatGPTImageAug13202610_36_36AM.png",
  },
  {
    slug: "i-have-a-dream-kalpanadham",
    title: "I HAVE A DREAM – Kalpanadham",
    year: "2016",
    location: "Vidya Vihar / Sikshya Niketan",
    category: "Children Workshop",
    description:
      "Six-month workshop educating tribal children on organic farming and art.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614386_f35da851-06f8-4bc6-a171-acc84d80133e.jpg",
  },
];

export type Exhibition = {
  slug: string;
  title: string;
  dates: string;
  venue: string;
  location: string;
  status: "Current" | "Archive";
  description: string;
  image: string;
};

export const exhibitions: Exhibition[] = [
  {
    slug: "unurbanisation-ecology",
    title: "Unurbanisation & Ecology Solo Exhibition",
    dates: "Sep 01, 2026 – Sep 20, 2026",
    venue: "Sasatwa Art Space",
    location: "Bhubaneswar, India",
    status: "Current",
    description:
      "A solo exhibition exhibiting the latest canvas works, mixed-media, and clay murals by Satyabhama Majhi.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614687_3f2f47f8-017d-4567-9251-a96d1854724a.jpg",
  },
  {
    slug: "national-woman-artist-camp",
    title: "National Woman Artist Camp",
    dates: "Mar 01, 2023 – Mar 07, 2023",
    venue: "Konark",
    location: "Puri, India",
    status: "Archive",
    description:
      "A creative platform celebrating women artists, their artistic voices, diverse perspectives, and contributions to the world of contemporary art.",
    image:
      "https://satyabhamamajhi.in/uploads/1786615347_54fbaeae-b336-4c6f-bd7e-8eba9c4f06da.jpg",
  },
  {
    slug: "unsung-heroes-of-odisha",
    title: "Unsung Heroes of Odisha Online Painting Camp",
    dates: "Aug 15, 2022 – Aug 20, 2022",
    venue: "Lalit Kala Academy",
    location: "New Delhi, India",
    status: "Archive",
    description:
      "An online painting initiative celebrating the courage, contributions, and inspiring stories of remarkable individuals from Odisha whose work and sacrifices deserve greater recognition.",
    image:
      "https://satyabhamamajhi.in/uploads/1786615551_ce3779c4-d878-4e10-8eec-e33b1d396556.jpg",
  },
  {
    slug: "5th-international-online-solo",
    title: "5th International Online Solo Art Exhibition",
    dates: "Jun 10, 2021 – Jun 20, 2021",
    venue: "Kala Chhavi Gallery",
    location: "Online, Global",
    status: "Archive",
    description:
      "A global platform showcasing an artist's creative journey, artistic vision, and unique body of work to audiences across the world.",
    image:
      "https://satyabhamamajhi.in/uploads/1786615690_88b52f1b-5865-42eb-871f-8c8979ea9a9a.jpg",
  },
  {
    slug: "saragiphula-childrens-art-festival",
    title: "Saragiphula Children's Art Festival",
    dates: "Nov 14, 2019 – Nov 17, 2019",
    venue: "Bakul Foundation grounds",
    location: "Bhubaneswar, India",
    status: "Archive",
    description:
      "A vibrant celebration of childhood creativity, imagination, and artistic expression, bringing young minds together through art and cultural activities.",
    image:
      "https://satyabhamamajhi.in/uploads/1786599421_ChatGPTImageAug13202610_36_36AM.png",
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

export const notes: Article[] = [
  {
    slug: "traditional-knowledge",
    title: "Traditional Knowledge and the Living Landscape",
    date: "Jun 20, 2026",
    category: "Research",
    excerpt:
      "Field notes on the organic pigment harvesting techniques used by forest-dwelling communities.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614199_88b52f1b-5865-42eb-871f-8c8979ea9a9a.jpg",
  },
  {
    slug: "what-does-unurbanisation-mean",
    title: "What Does Unurbanisation Mean?",
    date: "May 12, 2026",
    category: "Unurbanisation",
    excerpt:
      "A philosophical inquiry into modern concrete expansion versus natural eco-preservation.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611076_a3d4ae79-84a9-452a-8fa5-7b9eda5cae0f.jpg",
  },
];

export const blogs: Article[] = [
  {
    slug: "art-nature-language-of-landscapes",
    title: "Art, Nature & the Language of Landscapes",
    date: "Aug 13, 2026",
    category: "Eco-Art",
    excerpt:
      "Discover how landscapes, plants, textures, and changing environments inspire artistic expression and encourage us to see nature through a new creative perspective.",
    image:
      "https://satyabhamamajhi.in/uploads/1786613547_cf3dd994-bcf2-47df-9718-7231a99a143d.png",
  },
  {
    slug: "art-as-a-catalyst-for-unurbanisation",
    title: "Art as a Catalyst for Unurbanisation",
    date: "Aug 01, 2026",
    category: "Philosophy",
    excerpt:
      "Reflecting on how community art projects can challenge the standard definition of urban progress and save rural ecosystems.",
    image:
      "https://satyabhamamajhi.in/uploads/1786613392_68a6fde2-3298-4285-9a02-b9f1856e319d.jpg",
  },
  {
    slug: "the-alchemy-of-natural-pigments",
    title: "The Alchemy of Natural Pigments",
    date: "Jul 15, 2026",
    category: "Eco-Art",
    excerpt:
      "Journey deep into the forests of Odisha to discover how local communities extract vibrant, sustainable pigments from seeds, stones, and leaves.",
    image:
      "https://satyabhamamajhi.in/uploads/1786613420_54fbaeae-b336-4c6f-bd7e-8eba9c4f06da.jpg",
  },
];

export type GalleryItem = {
  title: string;
  caption: string;
  category: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Community & Collective Imagination",
    caption:
      "Art becomes more powerful when it brings people together — collaboration, community participation, and shared experiences shaping meaningful creative work.",
    category: "Sustainable Living",
    image:
      "https://satyabhamamajhi.in/uploads/1786614386_f35da851-06f8-4bc6-a171-acc84d80133e.jpg",
  },
  {
    title: "Where Culture Meets Creativity",
    caption:
      "The relationship between traditional culture and contemporary artistic practices — patterns, symbols, stories and heritage finding new forms.",
    category: "Art & Paintings",
    image:
      "https://satyabhamamajhi.in/uploads/1786614307_bffdb7f3-c880-45a4-bdc7-d35ea17bec98.jpg",
  },
  {
    title: "Stories Hidden Within Everyday Life",
    caption:
      "Ordinary people, shared spaces, memories and experiences becoming meaningful sources of artistic inspiration.",
    category: "Art & Paintings",
    image:
      "https://satyabhamamajhi.in/uploads/1786614199_88b52f1b-5865-42eb-871f-8c8979ea9a9a.jpg",
  },
  {
    title: "Art Painting",
    caption:
      "Traditional art, stories, symbols and cultural practices that preserve heritage while inspiring new generations.",
    category: "Culture & Heritage",
    image:
      "https://satyabhamamajhi.in/uploads/1786614004_a3d4ae79-84a9-452a-8fa5-7b9eda5cae0f.jpg",
  },
  {
    title: "Field Documentation",
    caption: "Documentation from studio and field practice.",
    category: "People & Community",
    image:
      "https://satyabhamamajhi.in/uploads/1787072211_e2c34a0375ece6ee88aa69ef228f353c.jpg",
  },
  {
    title: "Unurbanisation Study",
    caption: "A study surface from the Unurbanisation painting series.",
    category: "Nature & Landscapes",
    image:
      "https://satyabhamamajhi.in/uploads/1786615690_88b52f1b-5865-42eb-871f-8c8979ea9a9a.jpg",
  },
];

export const galleryCategories = [
  "All",
  "Art & Paintings",
  "Culture & Heritage",
  "Nature & Landscapes",
  "People & Community",
  "Sustainable Living",
];

export const practices = [
  {
    n: "01",
    title: "Painting",
    text: "Continuous canvas practice with natural earth pigments and unurbanisation reflections.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611076_a3d4ae79-84a9-452a-8fa5-7b9eda5cae0f.jpg",
  },
  {
    n: "02",
    title: "Installation",
    text: "Site-responsive installations built with metal, fabric, clay and gathered material.",
    image:
      "https://satyabhamamajhi.in/uploads/1786599421_ChatGPTImageAug13202610_36_36AM.png",
  },
  {
    n: "03",
    title: "Sculpture",
    text: "Architectural forms drawn from ancient temple structures of Odisha.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614307_bffdb7f3-c880-45a4-bdc7-d35ea17bec98.jpg",
  },
  {
    n: "04",
    title: "Photography",
    text: "Documentary observation of landscape shifts, communities and everyday life.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614199_88b52f1b-5865-42eb-871f-8c8979ea9a9a.jpg",
  },
  {
    n: "05",
    title: "Mixed Media",
    text: "Layered surfaces combining clay, charcoal, acrylic and organic binders.",
    image:
      "https://satyabhamamajhi.in/uploads/1786611563_3f2f47f8-017d-4567-9251-a96d1854724a.jpg",
  },
  {
    n: "06",
    title: "Public Art",
    text: "Urban wall murals, civic monuments and heritage installations.",
    image:
      "https://satyabhamamajhi.in/uploads/1786613392_68a6fde2-3298-4285-9a02-b9f1856e319d.jpg",
  },
  {
    n: "07",
    title: "Community Art",
    text: "Co-creation with indigenous artisans, women collectives and villages.",
    image:
      "https://satyabhamamajhi.in/uploads/1786598725_cf3dd994-bcf2-47df-9718-7231a99a143d.png",
  },
  {
    n: "08",
    title: "Art Education",
    text: "Kalpanadham workshops with school children and creative learning programmes.",
    image:
      "https://satyabhamamajhi.in/uploads/1786614386_f35da851-06f8-4bc6-a171-acc84d80133e.jpg",
  },
  {
    n: "09",
    title: "Ecological Art",
    text: "Natural pigment research and ecological programmes across rural Odisha.",
    image:
      "https://satyabhamamajhi.in/uploads/1786613420_54fbaeae-b336-4c6f-bd7e-8eba9c4f06da.jpg",
  },
];

export const timeline = [
  {
    period: "2021 – Present",
    title: "Secretary & Community Director, Sasatwa Foundation",
    text: "Spearheading large-scale ecological art installations, rural community art workshops, workshops with school children, and public wall murals across Odisha and national curatorial platforms.",
  },
  {
    period: "2015 – 2020",
    title: "Unurbanisation Field Research & Painting Series",
    text: "Traversing rural landscapes, documenting landscape shifts, conducting artist residencies, and building mixed-media pigment portfolios reflecting ecological changes.",
  },
  {
    period: "2010 – 2014",
    title: "State Exhibitions, Public Art & Curatorial Solos",
    text: "State-level honours and Lalit Kala Akademi recognition for solo exhibitions, public art initiatives, and regional contemporary workshops.",
  },
  {
    period: "2006 – 2009",
    title: "Foundational Paintings & Professional Journey Launch",
    text: "Launching professional practice in 2006, experimenting with natural earth pigments, traditional motifs, and early community dialogue.",
  },
];

export const methodology = [
  {
    n: "01",
    title: "Pigment Foraging",
    text: "Sourcing raw earth minerals, red clays, ochres, and organic stone oxides directly from Odisha's rural riverbeds and forest terrain.",
  },
  {
    n: "02",
    title: "Medium Crafting",
    text: "Grinding, purifying, and blending natural binders, plant resins, and tree gums using ancient, sustainable preparation techniques.",
  },
  {
    n: "03",
    title: "Community Co-Creation",
    text: "Conducting inclusive workshops with village children, women collectives, and local artisans to record authentic oral histories.",
  },
  {
    n: "04",
    title: "Public Installations",
    text: "Transforming natural pigments and shared stories into monumental civic wall murals, gallery canvases, and public installations.",
  },
];

export const quotes = [
  {
    text: "Satyabhama's approach to tribal community engagement is ground-breaking. Her work is not just art, it is documentation of a changing civilization.",
    author: "Dr. Alok Sen",
    role: "Art Historian & Curator",
  },
  {
    text: "The pigment works in her Unurbanisation series are mesmerizing. Knowing that they are harvested organically from Odisha's soil adds absolute depth.",
    author: "Meera Patel",
    role: "Contemporary Collector",
  },
  {
    text: "We worked with Satyabhama on the Kalpanadham workshops. Her energy and ability to bring children close to natural art is unmatched.",
    author: "Siddharth Vashist",
    role: "Director of Co-curriculars",
  },
];

export const press = [
  {
    year: "2026",
    date: "Apr 15, 2026",
    publication: "The Contemporary Art Herald",
    title:
      "Visualizing Rural Eco-Wisdom: Interview with Satyabhama Majhi",
    description:
      "An in-depth conversation discussing art as community service and the philosophy of Unurbanisation.",
    category: "Interviews",
  },
];

export const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Exhibitions", to: "/exhibitions" },
  { label: "Notes", to: "/notes" },
  { label: "Journal", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
  { label: "Press", to: "/press" },
  { label: "Contact", to: "/contact" },
] as const;
