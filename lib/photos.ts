export type Category = "portraits";

export type Photo = {
  id: string;
  title: string;
  image: string;
  url: string;
  category: Category;
};

// Order the filter chips appear in. Everything shot so far is portrait
// work, so that is the only real tag; more get added here as other kinds of
// photos go in.
export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "portraits", label: "Portraits" },
];

export const CAMERA = "Sony A7RIV · Sigma 35mm 1.2";

export const photos: Photo[] = [
  {
    id: "Chelsea",
    title: "Chelsea, in the Graveyard",
    image: "/photography/lily-one.jpg",
    url: "https://www.instagram.com/p/CVOJv9OlBSo/",
    category: "portraits",
  },
  {
    id: "rania",
    title: "Rania, in the Studio",
    image: "/photography/rania-one.jpg",
    url: "https://www.instagram.com/p/CTiCXeQnF9z/?img_index=1",
    category: "portraits",
  },
  {
    id: "jack",
    title: "Jack, in the Forest",
    image: "/photography/jack-one.jpg",
    url: "https://www.instagram.com/p/CFFxPX3hefW/?img_index=1",
    category: "portraits",
  },
  {
    id: "rachel",
    title: "Rachel, on the Monument",
    image: "/photography/rachel-one.jpg",
    url: "https://www.instagram.com/p/CbImqJZOS1N/?img_index=1",
    category: "portraits",
  },
  {
    id: "jordan",
    title: "Jordan, at the Wharf",
    image: "/photography/jordan-one.jpg",
    url: "https://www.instagram.com/p/CM5VE9WhF3S/?img_index=1",
    category: "portraits",
  },
  {
    id: "gabby",
    title: "Gabby, in the Car",
    image: "/photography/gabby-one.jpg",
    url: "https://www.instagram.com/p/CUasaVdF6qh/?img_index=1",
    category: "portraits",
  },
  {
    id: "daniel",
    title: "Daniel, on the Boardwalk",
    image: "/photography/daniel-one.jpg",
    url: "https://www.instagram.com/p/CUSxiCSrGME/?img_index=1",
    category: "portraits",
  },
  {
    id: "kacey",
    title: "Kacey, on the Scene",
    image: "/photography/kacey.jpg",
    url: "https://www.instagram.com/p/CQrRenyBPvH/?img_index=1",
    category: "portraits",
  },
];
