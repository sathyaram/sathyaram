export type Category = "nature" | "city" | "studio";

export type Photo = {
  id: string;
  title: string;
  image: string;
  url: string;
  category: Category;
};

// Order the filter chips appear in.
export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "nature", label: "Nature" },
  { id: "city", label: "City" },
  { id: "studio", label: "Studio" },
];

export const CAMERA = "Sony A7RIV · Sigma 35mm 1.2";

export const photos: Photo[] = [
  {
    id: "Chelsea",
    title: "Chelsea, in the Graveyard",
    image: "/photography/lily-one.jpg",
    url: "https://www.instagram.com/p/CVOJv9OlBSo/",
    category: "nature",
  },
  {
    id: "rania",
    title: "Rania, in the Studio",
    image: "/photography/rania-one.jpg",
    url: "https://www.instagram.com/p/CTiCXeQnF9z/?img_index=1",
    category: "studio",
  },
  {
    id: "jack",
    title: "Jack, in the Forest",
    image: "/photography/jack-one.jpg",
    url: "https://www.instagram.com/p/CFFxPX3hefW/?img_index=1",
    category: "nature",
  },
  {
    id: "rachel",
    title: "Rachel, on the Monument",
    image: "/photography/rachel-one.jpg",
    url: "https://www.instagram.com/p/CbImqJZOS1N/?img_index=1",
    category: "city",
  },
  {
    id: "jordan",
    title: "Jordan, at the Wharf",
    image: "/photography/jordan-one.jpg",
    url: "https://www.instagram.com/p/CM5VE9WhF3S/?img_index=1",
    category: "city",
  },
  {
    id: "gabby",
    title: "Gabby, in the Car",
    image: "/photography/gabby-one.jpg",
    url: "https://www.instagram.com/p/CUasaVdF6qh/?img_index=1",
    category: "city",
  },
  {
    id: "daniel",
    title: "Daniel, on the Boardwalk",
    image: "/photography/daniel-one.jpg",
    url: "https://www.instagram.com/p/CUSxiCSrGME/?img_index=1",
    category: "nature",
  },
  {
    id: "kacey",
    title: "Kacey, on the Scene",
    image: "/photography/kacey.jpg",
    url: "https://www.instagram.com/p/CQrRenyBPvH/?img_index=1",
    category: "city",
  },
];
