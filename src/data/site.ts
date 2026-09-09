import { photo } from "./photos";

/**
 * Content source of truth for the portfolio.
 * Biographical facts, awards and project titles follow Satyabhama Majhi's
 * published biography; imagery is photographed from her own works.
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
  portrait: photo.portrait,
};

export const facts = [
  { label: "Practising since", value: "2000" },
  { label: "Education", value: "M.F.A. in Traditional Art" },
  { label: "Based in", value: "Bhubaneswar, Odisha" },
  { label: "Foundation", value: "Secretary, Sasatwa Foundation" },
];

export const awards = [
  {
    title: "Odisha Lalit Kala Akademi State Award",
    year: "2012",
    detail: "State honour for contemporary painting.",
  },
  {
    title: "National Lalit Kala Akademi Scholarship",
    year: "2009 – 2010",
    detail: "Awarded by Lalit Kala Akademi, New Delhi.",
  },
];

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
    image: photo.parkGreenDay,
  },
  {
    title: "The Weight We Carry",
    caption:
      "Dongaria Kondh women painted in tondo form — sunflowers, baskets and the long walk between hill and market.",
    image: photo.tondoThreeWomen,
  },
  {
    title: "Whispers of the Hills",
    caption:
      "Niyamgiri's rolling green ridges, painted with pigments gathered from the same hills.",
    image: photo.niyamgiriHills,
  },
  {
    title: "Map of a Growing City",
    caption:
      "Bhubaneswar seen from above — traffic, vendors, animals and everyday movement drawn across a city plan.",
    image: photo.cityMapBlue,
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
    slug: "vision-2040",
    title: "Vision — 2040 IV",
    year: "2006",
    medium: "Acrylic on canvas, 3.9' × 3'",
    category: "Nature & Landscapes",
    description:
      "An aerial view of a plain slowly filling with rooftops — an early painting of the expansion that would later become the Unurbanisation series.",
    image: photo.vision2040,
    featured: true,
  },
  {
    slug: "hunger",
    title: "Hunger",
    year: "2009",
    medium: "Acrylic on canvas, 48\" × 36\"",
    category: "People & Community",
    description:
      "A gymnast balanced on a burger against a skyline — appetite, advertising and the modern city held in a single uneasy pose.",
    image: photo.hunger,
    featured: true,
  },
  {
    slug: "rebirth",
    title: "Rebirth",
    year: "2015",
    medium: "Mixed media on canvas, 2' × 2'",
    category: "Culture & Heritage",
    description:
      "A conch opening onto a yantra — ritual geometry from Odisha's temple culture rendered in flat, contemporary colour.",
    image: photo.rebirth,
    featured: true,
  },
  {
    slug: "nabakalebara",
    title: "Nabakalebara (Re-Birth)",
    year: "2015",
    medium: "Mixed media on canvas, 3' × 4'",
    category: "Culture & Heritage",
    description:
      "A checkered vortex drawing the viewer toward a small blooming centre — the cycle of renewal at the heart of the Nabakalebara ritual.",
    image: photo.nabakalebara,
    featured: true,
  },
  {
    slug: "untitled-2015",
    title: "Untitled",
    year: "2015",
    medium: "Mixed media on canvas, 3' × 4'",
    category: "Nature & Landscapes",
    description:
      "A capsule of landscape suspended in gold — farmland and skyline sealed inside the same fragile container.",
    image: photo.untitled2015,
  },
  {
    slug: "sunflower-path",
    title: "Sunflower Path",
    year: "2022",
    medium: "Acrylic on circular canvas",
    category: "Art & Paintings",
    description:
      "Three figures walking a winding road through a field of sunflowers, painted in the round.",
    image: photo.tondoSunflowerPath,
  },
  {
    slug: "radiant",
    title: "Radiant",
    year: "2022",
    medium: "Acrylic on circular canvas",
    category: "People & Community",
    description:
      "A woman crowned by a white star burst, surrounded by anthuriums and sunflowers — portraiture as celebration.",
    image: photo.tondoRadiantWoman,
  },
  {
    slug: "the-blue-triangle",
    title: "The Blue Triangle",
    year: "2023",
    medium: "Acrylic on circular canvas",
    category: "Culture & Heritage",
    description:
      "The Niyamgiri triangle motif behind two women carrying harvest baskets — a recurring symbol across the Dongaria Kondh works.",
    image: photo.tondoBlueTriangle,
  },
  {
    slug: "three-women",
    title: "Three Women",
    year: "2023",
    medium: "Acrylic on circular canvas",
    category: "People & Community",
    description:
      "Head-loads, white cloth and gold ground — three women held inside a circle of sunflowers.",
    image: photo.tondoThreeWomen,
  },
  {
    slug: "the-long-walk",
    title: "The Long Walk",
    year: "2023",
    medium: "Acrylic on circular canvas",
    category: "People & Community",
    description:
      "Figures crossing the tondo carrying baskets of produce, painted from market days in the hills.",
    image: photo.tondoJourney,
  },
  {
    slug: "resting-hour",
    title: "Resting Hour",
    year: "2023",
    medium: "Acrylic on circular canvas",
    category: "People & Community",
    description:
      "A pause in the working day — women seated together beneath a single tall sunflower.",
    image: photo.tondoGathering,
  },
  {
    slug: "two-sisters",
    title: "Two Sisters",
    year: "2024",
    medium: "Acrylic on circular canvas",
    category: "Culture & Heritage",
    description:
      "A double portrait of Dongaria Kondh sisters in traditional ornament, framed by concentric blue.",
    image: photo.tondoTwoSisters,
  },
  {
    slug: "woman-with-staff",
    title: "Woman with a Staff",
    year: "2024",
    medium: "Acrylic on circular canvas",
    category: "People & Community",
    description:
      "A quiet standing figure outlined in bands of colour, roots spreading below the horizon line.",
    image: photo.tondoWomanStaff,
  },
  {
    slug: "mother-and-children",
    title: "Mother and Children",
    year: "2024",
    medium: "Acrylic on circular canvas",
    category: "People & Community",
    description:
      "A haloed mother holding two children — devotional composition transposed onto village life.",
    image: photo.tondoMotherChildren,
  },
  {
    slug: "bloom-over-sight",
    title: "Bloom Over Sight",
    year: "2024",
    medium: "Acrylic on canvas",
    category: "Culture & Heritage",
    description:
      "A Dongaria Kondh portrait with flowers covering the eyes — beauty, adornment and what the forest is asked to hide.",
    image: photo.dongariaPortrait,
  },
  {
    slug: "market-abundance",
    title: "Market, Abundance",
    year: "2021",
    medium: "Mixed media on canvas with city plan",
    category: "Sustainable Living",
    description:
      "Tomatoes heaped across a printed city map while vendors and buyers move over the drawn streets.",
    image: photo.marketAbundance,
  },
  {
    slug: "crossing",
    title: "Crossing",
    year: "2021",
    medium: "Mixed media on canvas with city plan",
    category: "Sustainable Living",
    description:
      "A truck of workers halted at a signal, painted onto the survey map of the district they are travelling through.",
    image: photo.marketCrossing,
  },
  {
    slug: "red-city",
    title: "Red City",
    year: "2020",
    medium: "Acrylic on canvas",
    category: "Nature & Landscapes",
    description:
      "Street vendors, umbrellas and scattered belongings floating on an unbroken red field.",
    image: photo.cityRedMarket,
  },
  {
    slug: "city-map-blue",
    title: "City Map, Blue",
    year: "2020",
    medium: "Acrylic on canvas",
    category: "Nature & Landscapes",
    description:
      "Bhubaneswar's daily traffic drawn as a living diagram over cobalt ground.",
    image: photo.cityMapBlue,
  },
  {
    slug: "green-assembly",
    title: "Green Assembly",
    year: "2019",
    medium: "Acrylic on canvas",
    category: "People & Community",
    description:
      "A hillside procession of hundreds of small figures moving across rolling green.",
    image: photo.hillProcession,
  },
  {
    slug: "grove",
    title: "Grove",
    year: "2019",
    medium: "Acrylic on canvas",
    category: "Nature & Landscapes",
    description:
      "A dense, stippled forest with a village gathering held safely inside it.",
    image: photo.groveGathering,
  },
  {
    slug: "yellow-valley",
    title: "Yellow Valley",
    year: "2018",
    medium: "Acrylic on canvas",
    category: "Nature & Landscapes",
    description:
      "Dry-season hills in ochre, with a waterbody and a scattering of daily life at their base.",
    image: photo.yellowValley,
  },
  {
    slug: "yellow-forest",
    title: "Yellow Forest",
    year: "2018",
    medium: "Acrylic on canvas",
    category: "Nature & Landscapes",
    description:
      "A canopy painted dot by dot in gold and deep green, animals moving between the trees.",
    image: photo.yellowForest,
  },
  {
    slug: "carriers",
    title: "Carriers",
    year: "2017",
    medium: "Mixed media on canvas",
    category: "Art & Paintings",
    description:
      "A procession of figures shouldering loads beneath a single white bloom.",
    image: photo.ochreCarriers,
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
      "A public participatory project with 100 indigenous women artists and artisans, presented through Lalit Kala Akademi.",
    image: photo.tondoTwoSisters,
  },
  {
    slug: "forest-park",
    title: "Forest Park Project",
    year: "2019",
    location: "Forest Park, Bhubaneswar",
    category: "Ecological Art",
    description:
      "Nature-themed boundary walls capturing flowers, trees, and morning yoga activities.",
    image: photo.parkGreenDay,
  },
  {
    slug: "rajmahal-flyover",
    title: "Rajmahal Flyover Mural Project",
    year: "2019",
    location: "Rajmahal, Bhubaneswar",
    category: "Mural",
    description:
      "Connecting local haat vendors and daily life via street art paintings.",
    image: photo.marketAbundance,
  },
  {
    slug: "rasulgarh-captain-portraits",
    title: "Rasulgarh Flyover Captain Portraits",
    year: "2018",
    location: "Rasulgarh, Bhubaneswar",
    category: "Public Art",
    description:
      "Portraits of 16 hockey team captains painted on flyover pillars for the Hockey World Cup.",
    image: photo.marketCrossing,
  },
  {
    slug: "bhubaneswar-art-trail",
    title: "Bhubaneswar Art Trail (BAT)",
    year: "2018",
    location: "Old Town, Bhubaneswar",
    category: "Public Installation",
    description:
      "Architectural sculpture in welded metal inspired by ancient temple forms, sited in the old town.",
    image: photo.sculptureRedInstallation,
  },
  {
    slug: "i-have-a-dream-kalpanadham",
    title: "I HAVE A DREAM – Kalpanadham",
    year: "2016",
    location: "Vidya Vihar / Sikshya Niketan",
    category: "Children Workshop",
    description:
      "Six-month workshop educating tribal children on organic farming and art.",
    image: photo.hillProcession,
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
      "A solo exhibition of the latest canvases, mixed-media surfaces and clay murals.",
    image: photo.vision2040,
  },
  {
    slug: "peoples-wall-parliament",
    title: "People's Wall – Jan, Janani, Janmabhumi",
    dates: "2023",
    venue: "New Parliament House",
    location: "New Delhi, India",
    status: "Archive",
    description:
      "A participatory wall created with 100 indigenous women artists and artisans.",
    image: photo.tondoThreeWomen,
  },
  {
    slug: "national-woman-artist-camp",
    title: "National Woman Artist Camp",
    dates: "Mar 01, 2023 – Mar 07, 2023",
    venue: "Konark",
    location: "Puri, India",
    status: "Archive",
    description:
      "A creative platform celebrating women artists, their artistic voices, diverse perspectives, and contributions to contemporary art.",
    image: photo.tondoRadiantWoman,
  },
  {
    slug: "unsung-heroes-of-odisha",
    title: "Unsung Heroes of Odisha Online Painting Camp",
    dates: "Aug 15, 2022 – Aug 20, 2022",
    venue: "Lalit Kala Akademi",
    location: "New Delhi, India",
    status: "Archive",
    description:
      "An online painting initiative celebrating the courage and contributions of remarkable individuals from Odisha.",
    image: photo.ochreCarriers,
  },
  {
    slug: "5th-international-online-solo",
    title: "5th International Online Solo Art Exhibition",
    dates: "Jun 10, 2021 – Jun 20, 2021",
    venue: "Kala Chhavi Gallery",
    location: "Online, Global",
    status: "Archive",
    description:
      "A global platform showcasing the artist's creative journey and body of work.",
    image: photo.nabakalebara,
  },
  {
    slug: "bhubaneswar-art-trail",
    title: "Bhubaneswar Art Trail",
    dates: "2018",
    venue: "Old Town",
    location: "Bhubaneswar, India",
    status: "Archive",
    description:
      "Site-specific metal sculpture drawn from the temple architecture of the old town.",
    image: photo.sculptureArtTrail,
  },
  {
    slug: "saragiphula-childrens-art-festival",
    title: "Saragiphula Children's Art Festival",
    dates: "Nov 14, 2019 – Nov 17, 2019",
    venue: "Bakul Foundation grounds",
    location: "Bhubaneswar, India",
    status: "Archive",
    description:
      "A celebration of childhood creativity and imagination through art and cultural activities.",
    image: photo.groveGathering,
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
      "Field notes on the natural pigments used in the Niyamgiri hills — chalk stone, charcoal, turmeric, geru soil and brown stone.",
    image: photo.niyamgiriHills,
  },
  {
    slug: "what-does-unurbanisation-mean",
    title: "What Does Unurbanisation Mean?",
    date: "May 12, 2026",
    category: "Unurbanisation",
    excerpt:
      "A philosophical inquiry into concrete expansion set against ecological preservation.",
    image: photo.vision2040,
  },
  {
    slug: "the-triangle-motif",
    title: "The Triangle: A Motif from Niyamgiri",
    date: "Feb 08, 2026",
    category: "Symbols",
    excerpt:
      "Why a simple triangle recurs across the Dongaria Kondh paintings, and what it carries.",
    image: photo.tondoBlueTriangle,
  },
];

export const blogs: Article[] = [
  {
    slug: "art-nature-language-of-landscapes",
    title: "Art, Nature & the Language of Landscapes",
    date: "Aug 13, 2026",
    category: "Eco-Art",
    excerpt:
      "How landscapes, plants, textures and changing environments shape a painting practice.",
    image: photo.yellowForest,
  },
  {
    slug: "art-as-a-catalyst-for-unurbanisation",
    title: "Art as a Catalyst for Unurbanisation",
    date: "Aug 01, 2026",
    category: "Philosophy",
    excerpt:
      "How community art projects can challenge the standard definition of urban progress.",
    image: photo.cityMapBlue,
  },
  {
    slug: "the-alchemy-of-natural-pigments",
    title: "The Alchemy of Natural Pigments",
    date: "Jul 15, 2026",
    category: "Eco-Art",
    excerpt:
      "Into the forests of Odisha, where vibrant pigments are drawn from seeds, stones and leaves.",
    image: photo.yellowValley,
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
    title: "Two Sisters",
    caption:
      "A double portrait of Dongaria Kondh sisters in traditional ornament.",
    category: "Culture & Heritage",
    image: photo.tondoTwoSisters,
  },
  {
    title: "Bloom Over Sight",
    caption: "A portrait with flowers covering the eyes.",
    category: "Culture & Heritage",
    image: photo.dongariaPortrait,
  },
  {
    title: "Sunflower Path",
    caption: "Three figures walking a winding road through sunflowers.",
    category: "Art & Paintings",
    image: photo.tondoSunflowerPath,
  },
  {
    title: "Radiant",
    caption: "A woman crowned by a white star burst.",
    category: "Art & Paintings",
    image: photo.tondoRadiantWoman,
  },
  {
    title: "Red Form",
    caption: "Welded metal sculpture from the Bhubaneswar Art Trail.",
    category: "People & Community",
    image: photo.sculptureRedForm,
  },
  {
    title: "Art Trail, Sited",
    caption: "The sculpture installed against a patterned pavilion.",
    category: "People & Community",
    image: photo.sculptureArtTrail,
  },
  {
    title: "Market, Abundance",
    caption: "Tomatoes heaped across a printed city plan.",
    category: "Sustainable Living",
    image: photo.marketAbundance,
  },
  {
    title: "Crossing",
    caption: "A truck of workers halted at a signal.",
    category: "Sustainable Living",
    image: photo.marketCrossing,
  },
  {
    title: "Grove",
    caption: "A dense forest holding a village gathering inside it.",
    category: "Nature & Landscapes",
    image: photo.groveGathering,
  },
  {
    title: "Yellow Valley",
    caption: "Dry-season hills in ochre.",
    category: "Nature & Landscapes",
    image: photo.yellowValley,
  },
  {
    title: "Green Assembly",
    caption: "A hillside procession of hundreds of small figures.",
    category: "People & Community",
    image: photo.hillProcession,
  },
  {
    title: "Rebirth",
    caption: "A conch opening onto a yantra.",
    category: "Culture & Heritage",
    image: photo.rebirth,
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
    image: photo.vision2040,
  },
  {
    n: "02",
    title: "Installation",
    text: "Site-responsive installations built with metal, fabric, clay and gathered material.",
    image: photo.sculptureRedInstallation,
  },
  {
    n: "03",
    title: "Sculpture",
    text: "Architectural forms drawn from the ancient temple structures of Odisha.",
    image: photo.sculptureRedForm,
  },
  {
    n: "04",
    title: "Photography",
    text: "Documentary observation of landscape shifts, communities and everyday life.",
    image: photo.niyamgiriHills,
  },
  {
    n: "05",
    title: "Mixed Media",
    text: "Layered surfaces combining clay, charcoal, acrylic and organic binders.",
    image: photo.nabakalebara,
  },
  {
    n: "06",
    title: "Public Art",
    text: "Urban wall murals, civic monuments and heritage installations.",
    image: photo.sculptureArtTrail,
  },
  {
    n: "07",
    title: "Community Art",
    text: "Co-creation with indigenous artisans, women collectives and villages.",
    image: photo.tondoThreeWomen,
  },
  {
    n: "08",
    title: "Art Education",
    text: "Kalpanadham workshops with school children and creative learning programmes.",
    image: photo.parkGreenDay,
  },
  {
    n: "09",
    title: "Ecological Art",
    text: "Natural pigment research and ecological programmes across rural Odisha.",
    image: photo.yellowForest,
  },
];

export const timeline = [
  {
    period: "2021 – Present",
    title: "Secretary & Community Director, Sasatwa Foundation",
    text: "Leading large-scale ecological art installations, rural community workshops, school programmes and public wall murals across Odisha, alongside national curatorial platforms.",
  },
  {
    period: "2015 – 2020",
    title: "Unurbanisation Field Research & Painting Series",
    text: "Travelling through rural Odisha, documenting landscape shifts, joining residencies and building mixed-media pigment portfolios that record ecological change.",
  },
  {
    period: "2010 – 2014",
    title: "Dongaria Kondh Engagement & State Recognition",
    text: "More than a decade of work with the Dongaria Kondh community of Niyamgiri begins in earnest, alongside the Odisha Lalit Kala Akademi State Award in 2012.",
  },
  {
    period: "2005 – 2009",
    title: "Studio Practice, Public Art & National Scholarship",
    text: "Early Unurbanisation canvases including Vision — 2040 and Hunger, and the National Lalit Kala Akademi scholarship in 2009 – 2010.",
  },
  {
    period: "2000 – 2004",
    title: "Beginnings and M.F.A. in Traditional Art",
    text: "Professional activity begins in 2000, grounded in traditional art training, natural earth pigments and the motifs of Odisha.",
  },
];

export const methodology = [
  {
    n: "01",
    title: "Pigment Foraging",
    text: "Gathering chalk stone, charcoal, turmeric, geru soil and brown stone from Odisha's riverbeds and forest terrain.",
  },
  {
    n: "02",
    title: "Medium Crafting",
    text: "Grinding, purifying and blending natural binders, plant resins and tree gums using traditional preparation techniques.",
  },
  {
    n: "03",
    title: "Community Co-Creation",
    text: "Inclusive workshops with village children, women's collectives and local artisans, recording oral histories as they go.",
  },
  {
    n: "04",
    title: "Public Installations",
    text: "Turning pigments and shared stories into civic murals, gallery canvases and public installations.",
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
    title: "Visualizing Rural Eco-Wisdom: Interview with Satyabhama Majhi",
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
