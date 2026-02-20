export interface ArtItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: "Digital" | "Traditional" | "Sketch";
}

export interface Song {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    audioUrl: string;
    duration: string;
}

export interface CreativeContent {
    philosophy: {
        en: string;
        es: string;
        fr: string;
    };
    arts: ArtItem[];
    songs: Song[];
}

export const creativeData: CreativeContent = {
    philosophy: {
        en: "My art is a journey into abstract intensity, crafted with pencils, colored pencils, and black markers. I focus on vibrant, saturated colors and intricate geometric forms that challenge perception and invite deep introspection. Similarly, my music (as Shaboom) is an exploration of high-energy soundscapes and rhythmic complexity.",
        es: "Mi arte es un viaje hacia la intensidad abstracta, creado con lápices, lápices de colores y rotuladores negros. Me centro en colores vibrantes y saturados y en formas geométricas intrincadas que desafían la percepción e invitan a una profunda introspección. Del mismo modo, mi música (como Shaboom) es una exploración de paisajes sonoros de alta energía y complejidad rítmica.",
        fr: "Mon art est un voyage dans l'intensité abstraite, réalisé avec des crayons, des crayons de couleur et des marqueurs noirs. Je me concentre sur des couleurs vibrantes et saturées et des formes géométriques complexes qui défient la perception et invitent à une introspection profonde. De même, ma musique (sous le nom de Shaboom) est une exploration de paysages sonores à haute énergie et de complexité rythmique."
    },
    arts: [
        {
            id: "art1",
            title: "Chromatic Portal",
            description: "An intense geometric exploration of symmetry and vibrant colors, radiating from a central silhouette.",
            imageUrl: "/art/7331994_original-1.jpg",
            category: "Traditional"
        },
        {
            id: "art2",
            title: "Fungal Geometry",
            description: "Organic mushroom forms set against a sharp, vibrant triangular grid.",
            imageUrl: "/art/7331998_original-1.jpg",
            category: "Traditional"
        },
        {
            id: "art3",
            title: "Monochromatic Sphere",
            description: "A complex black and white spherical pattern evoking depth and rotational motion.",
            imageUrl: "/art/7332002_original-1.jpg",
            category: "Traditional"
        },
        {
            id: "art4",
            title: "Neural Tangles",
            description: "A colorful, chaotic web of interconnected lines representing complex networks.",
            imageUrl: "/art/7332010_original-1.jpg",
            category: "Traditional"
        },
        {
            id: "art5",
            title: "MARC Monogram",
            description: "A stylized, calligraphic monogram rendered in bold black ink with elegant flourishes.",
            imageUrl: "/art/7332018_original-1.jpg",
            category: "Traditional"
        },
        {
            id: "art6",
            title: "Triple Flow",
            description: "A triskelion-inspired circular design featuring three interlocking organic shapes.",
            imageUrl: "/art/7332022_original-1.jpg",
            category: "Traditional"
        },
        {
            id: "art7",
            title: "Prismatic Radiance",
            description: "A high-intensity color study using colored pencils to create a sense of glowing energy.",
            imageUrl: "/art/7331986_xxl-3.jpg",
            category: "Traditional"
        },
        {
            id: "art8",
            title: "Abstract Rhythm",
            description: "A rhythmic composition of lines and shapes that reflects the energy of my music.",
            imageUrl: "/art/7332014_xxl-1.jpg",
            category: "Traditional"
        },
        {
            id: "art9",
            title: "Vivid Contours",
            description: "An exploration of form and contour using bold markers and saturated hues.",
            imageUrl: "/art/7332026_xxl-1.jpg",
            category: "Traditional"
        },
        {
            id: "art10",
            title: "Dimensional Pyramids",
            description: "A minimalist pencil sketch of two interlocking pyramids, exploring depth and negative space.",
            imageUrl: "/art/7332074_xxl-1.jpg",
            category: "Traditional"
        }
    ],
    songs: [
        {
            id: "s1",
            title: "Shaboom & Sirius (Original Mix)",
            artist: "3i-ATLAS",
            coverUrl: "/music/covers/shaboom.png",
            audioUrl: "/music/3i-ATLAS - Shaboom & Sirius (Original Mix).mp3",
            duration: "5:32"
        },
        {
            id: "s2",
            title: "TRNDSTTR (Shaboom DnB Remix)",
            artist: "Doria",
            coverUrl: "/music/covers/cover01.jpeg",
            audioUrl: "/music/Doria - TRNDSTTR (Shaboom DnB Remix) mastered.mp3",
            duration: "3:45"
        },
        {
            id: "s3",
            title: "Big Dawgs (Shaboom DnB Bootleg)",
            artist: "Hanumankind",
            coverUrl: "/music/covers/cover02.jpeg",
            audioUrl: "/music/Hanumankind - Big Dawgs (Shaboom DnB Bootleg).mp3",
            duration: "4:12"
        },
        {
            id: "s4",
            title: "God is Broken",
            artist: "SIRIUS & SHABOOM",
            coverUrl: "/music/covers/taaft.com-image-generator-by-taaft-1755752908.png",
            audioUrl: "/music/God is Broken - SIRIUS & SHABOOM mastered.mp3",
            duration: "5:20"
        },
        {
            id: "s5",
            title: "Puff (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover03.jpg",
            audioUrl: "/music/Puff - Shaboom (Original Mix).mp3",
            duration: "4:30"
        },
        {
            id: "s6",
            title: "Rita (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/Generated Image November 20, 2025 - 11_36PM.png",
            audioUrl: "/music/Rita - Shaboom (Original Mix).mp3",
            duration: "3:55"
        },
        {
            id: "s7",
            title: "Cray (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover04.jpg",
            audioUrl: "/music/Shaboom - Cray (Original Mix).mp3",
            duration: "3:15"
        },
        {
            id: "s8",
            title: "Bonkerz",
            artist: "Shaboom",
            coverUrl: "/music/covers/ROCK THAT BODY.png",
            audioUrl: "/music/Shaboom-Bonkerz.mp3",
            duration: "4:05"
        },
        {
            id: "s9",
            title: "Machines (Shaboom Remix)",
            artist: "Modestep",
            coverUrl: "/music/covers/cover05.jpg",
            audioUrl: "/music/modestep - machines (Shaboom Remix) mastered.mp3",
            duration: "4:45"
        },
        {
            id: "s10",
            title: "BLEEDING FOR YOU",
            artist: "SHABOOM & SIRIUS",
            coverUrl: "/music/covers/cover06.jpg",
            audioUrl: "/music/BLEEDING FOR YOU - SHABOOM & SIRIUS.mp3",
            duration: "5:32"
        },
        {
            id: "s11",
            title: "The Edge (Shaboom DnB Edit)",
            artist: "Ghost Lotus",
            coverUrl: "/music/covers/cover09.jpeg",
            audioUrl: "/music/Ghost Lotus - The Edge (Shaboom DnB Edit).mp3",
            duration: "1:13"
        },
        {
            id: "s12",
            title: "Panoramic (Shaboom DnB Remix)",
            artist: "Goopsteppa",
            coverUrl: "/music/covers/cover10.jpeg",
            audioUrl: "/music/Goopsteppa - Panoramic (Shaboom DnB Remix).mp3",
            duration: "3:58"
        },
        {
            id: "s13",
            title: "NightbreadV2",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover11.jpeg",
            audioUrl: "/music/NightbreadV2.mp3",
            duration: "6:40"
        },
        {
            id: "s14",
            title: "Okaholic (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover13.jpeg",
            audioUrl: "/music/Okaholic (Original Mix).mp3",
            duration: "3:31"
        },
        {
            id: "s15",
            title: "Say no to this (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/Diseño sin título.png",
            audioUrl: "/music/Say no to  this - Shaboom (Original Mix).mp3",
            duration: "5:01"
        },
        {
            id: "s16",
            title: "Creatures (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover14.jpeg",
            audioUrl: "/music/Shaboom - Creatures (Original Mix).mp3",
            duration: "4:46"
        },
        {
            id: "s17",
            title: "Frostbite",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover15.jpeg",
            audioUrl: "/music/Shaboom - Frostbite.mp3",
            duration: "3:56"
        },
        {
            id: "s18",
            title: "Let's Go",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover16.jpg",
            audioUrl: "/music/Shaboom - Let's Go.mp3",
            duration: "3:56"
        },
        {
            id: "s19",
            title: "Play with me (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/WhatsApp Image 2025-08-25 at 06.52.37.jpeg",
            audioUrl: "/music/Shaboom - Play with me (Original Mix).mp3",
            duration: "5:16"
        },
        {
            id: "s20",
            title: "dnv (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover40",
            audioUrl: "/music/dnv - Shaboom (Original Mix).mp3",
            duration: "3:08"
        },
        {
            id: "s21",
            title: "do it like that (preview)",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover41",
            audioUrl: "/music/do it like that (preview).mp3",
            duration: "3:08"
        },
        {
            id: "s23",
            title: "gordo",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover42",
            audioUrl: "/music/gordo.mp3",
            duration: "7:02"
        },
        {
            id: "s24",
            title: "m4a1 (Original Mix) [preview]",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover43",
            audioUrl: "/music/m4a1 - Shaboom (Original Mix)n [preview].mp3",
            duration: "11:10"
        },
        {
            id: "s25",
            title: "sculpture (Original Mix)",
            artist: "Shaboom",
            coverUrl: "/music/covers/shaboom.png",
            audioUrl: "/music/sculpture - Shaboom (Original Mix).mp3",
            duration: "4:38"
        },
        {
            id: "s26",
            title: "shell a verse",
            artist: "Shaboom",
            coverUrl: "/music/covers/cover01.jpeg",
            audioUrl: "/music/shell a verse.mp3",
            duration: "4:53"
        }
    ]
};
