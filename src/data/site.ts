import portraitImg from "@/assets/portrait.jpg";
import heroGarden from "@/assets/hero-garden.jpg";
import heroYoungEyes from "@/assets/hero-young-eyes.jpg";
import heroHills from "@/assets/hero-hills.jpg";
import artUnurbanisation from "@/assets/art-unurbanisation.jpg";
import artEcology from "@/assets/art-ecology.jpg";
import artLetters from "@/assets/art-letters.jpg";
import projPeoplesWall from "@/assets/proj-peoples-wall.jpg";
import projForestPark from "@/assets/proj-forest-park.jpg";
import projFlyoverMural from "@/assets/proj-flyover-mural.jpg";
import projPortraits from "@/assets/proj-portraits.jpg";
import projArtTrail from "@/assets/proj-art-trail.jpg";
import projKalpanadham from "@/assets/proj-kalpanadham.jpg";
import exhWomenCamp from "@/assets/exh-women-camp.jpg";
import exhUnsung from "@/assets/exh-unsung.jpg";
import notePigments from "@/assets/note-pigments.jpg";
import fieldDocumentation from "@/assets/field-documentation.jpg";

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
    "I am Satyabhama — an artist from Bhubaneswar, Odisha. My practice moves across painting, installation, sculpture and photography, but painting is where I feel most at home. Much of my work grows out of watching cities expand and landscapes change. Alongside my studio practice, I take on socially rooted projects that bring art into communities — using creativity as a way to listen, share and build something meaningful together.",
  mission:
    "To use art as a medium for awareness, education, and empowerment — promoting sustainability through art, inspiring creativity that respects nature and humanity, and creating meaningful impact through research, collaboration, and community participation.",
  vision:
    "To build a compassionate and sustainable world where art, nature, and community thrive together — a future guided by creativity and strong values, where communities are empowered through art and knowledge while nature is respected and protected for generations to come.",
  portrait: portraitImg,
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
    image: heroGarden,
  },
  {
    title: "The World Through Young Eyes",
    caption:
      "A vibrant exploration of childhood, play, community, and the imaginative worlds children create around themselves.",
    image: heroYoungEyes,
  },
  {
    title: "Whispers of the Hills",
    caption:
      "Where rolling green hills, distant trees, and an expansive blue sky come together in a serene visual harmony.",
    image: heroHills,
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
    image: artUnurbanisation,
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
    image: artEcology,
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
    image: artLetters,
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
    image: projPeoplesWall,
  },
  {
    slug: "forest-park",
    title: "Forest Park Project",
    year: "2019",
    location: "Forest Park, Bhubaneswar",
    category: "Ecological Art",
    description:
      "Nature-themed boundary walls capturing flowers, trees, and morning yoga activities.",
    image: projForestPark,
  },
  {
    slug: "rajmahal-flyover",
    title: "Rajmahal Flyover Mural Project",
    year: "2019",
    location: "Rajmahal, Bhubaneswar",
    category: "Mural",
    description:
      "Connecting local haat vendors and daily life via street art paintings.",
    image: projFlyoverMural,
  },
  {
    slug: "rasulgarh-captain-portraits",
    title: "Rasulgarh Flyover Captain Portraits",
    year: "2018",
    location: "Rasulgarh, Bhubaneswar",
    category: "Public Art",
    description:
      "Portraits of 16 hockey team captains painted on flyover pillars.",
    image: projPortraits,
  },
  {
    slug: "bhubaneswar-art-trail",
    title: "Bhubaneswar Art Trail (BAT)",
    year: "2018",
    location: "Old Town, Bhubaneswar",
    category: "Public Installation",
    description:
      "Architectural sculpture using metal and fabric inspired by ancient temple forms.",
    image: projArtTrail,
  },
  {
    slug: "i-have-a-dream-kalpanadham",
    title: "I HAVE A DREAM – Kalpanadham",
    year: "2016",
    location: "Vidya Vihar / Sikshya Niketan",
    category: "Children Workshop",
    description:
      "Six-month workshop educating tribal children on organic farming and art.",
    image: projKalpanadham,
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
    image: artEcology,
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
    image: exhWomenCamp,
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
    image: exhUnsung,
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
    image: heroYoungEyes,
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
    image: projKalpanadham,
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
    image: fieldDocumentation,
  },
  {
    slug: "what-does-unurbanisation-mean",
    title: "What Does Unurbanisation Mean?",
    date: "May 12, 2026",
    category: "Unurbanisation",
    excerpt:
      "A philosophical inquiry into modern concrete expansion versus natural eco-preservation.",
    image: artUnurbanisation,
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
    image: heroHills,
  },
  {
    slug: "art-as-a-catalyst-for-unurbanisation",
    title: "Art as a Catalyst for Unurbanisation",
    date: "Aug 01, 2026",
    category: "Philosophy",
    excerpt:
      "Reflecting on how community art projects can challenge the standard definition of urban progress and save rural ecosystems.",
    image: projPeoplesWall,
  },
  {
    slug: "the-alchemy-of-natural-pigments",
    title: "The Alchemy of Natural Pigments",
    date: "Jul 15, 2026",
    category: "Eco-Art",
    excerpt:
      "Journey deep into the forests of Odisha to discover how local communities extract vibrant, sustainable pigments from seeds, stones, and leaves.",
    image: notePigments,
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
    image: projKalpanadham,
  },
  {
    title: "Where Culture Meets Creativity",
    caption:
      "The relationship between traditional culture and contemporary artistic practices — patterns, symbols, stories and heritage finding new forms.",
    category: "Art & Paintings",
    image: projArtTrail,
  },
  {
    title: "Stories Hidden Within Everyday Life",
    caption:
      "Ordinary people, shared spaces, memories and experiences becoming meaningful sources of artistic inspiration.",
    category: "Art & Paintings",
    image: heroGarden,
  },
  {
    title: "Art Painting",
    caption:
      "Traditional art, stories, symbols and cultural practices that preserve heritage while inspiring new generations.",
    category: "Culture & Heritage",
    image: artLetters,
  },
  {
    title: "Field Documentation",
    caption: "Documentation from studio and field practice.",
    category: "People & Community",
    image: fieldDocumentation,
  },
  {
    title: "Unurbanisation Study",
    caption: "A study surface from the Unurbanisation painting series.",
    category: "Nature & Landscapes",
    image: heroHills,
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
    image: artUnurbanisation,
  },
  {
    n: "02",
    title: "Installation",
    text: "Site-responsive installations built with metal, fabric, clay and gathered material.",
    image: projArtTrail,
  },
  {
    n: "03",
    title: "Sculpture",
    text: "Architectural forms drawn from ancient temple structures of Odisha.",
    image: projPortraits,
  },
  {
    n: "04",
    title: "Photography",
    text: "Documentary observation of landscape shifts, communities and everyday life.",
    image: fieldDocumentation,
  },
  {
    n: "05",
    title: "Mixed Media",
    text: "Layered surfaces combining clay, charcoal, acrylic and organic binders.",
    image: artEcology,
  },
  {
    n: "06",
    title: "Public Art",
    text: "Urban wall murals, civic monuments and heritage installations.",
    image: projFlyoverMural,
  },
  {
    n: "07",
    title: "Community Art",
    text: "Co-creation with indigenous artisans, women collectives and villages.",
    image: projPeoplesWall,
  },
  {
    n: "08",
    title: "Art Education",
    text: "Kalpanadham workshops with school children and creative learning programmes.",
    image: projKalpanadham,
  },
  {
    n: "09",
    title: "Ecological Art",
    text: "Natural pigment research and ecological programmes across rural Odisha.",
    image: notePigments,
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
