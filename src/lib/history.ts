import type { ShapeName } from "./shape-predict";

export interface HistoryEntry {
  id: string;
  shape: ShapeName;
  confidence: number;
  probabilities: Record<ShapeName, number>;
  image: string; // data URL
  createdAt: number;
}

const KEY = "auradraw:history";

export function loadHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveEntry(entry: HistoryEntry) {
  const list = loadHistory();
  list.unshift(entry);
  localStorage.setItem(KEY, JSON.stringify(list.slice(0, 50)));
}

export function deleteEntry(id: string) {
  const list = loadHistory().filter((e) => e.id !== id);
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}

export const SHAPE_VIDEOS: Record<ShapeName, { title: string; url: string; thumb: string }[]> = {
  Circle: [
    { title: "Learn About Circles for Kids", url: "https://www.youtube.com/watch?v=OMq9BizV5jc", thumb: "https://img.youtube.com/vi/OMq9BizV5jc/hqdefault.jpg" },
    { title: "Circle Song — Shapes for Children", url: "https://www.youtube.com/watch?v=YfNxk7Vhbbw", thumb: "https://img.youtube.com/vi/YfNxk7Vhbbw/hqdefault.jpg" },
  ],
  Square: [
    { title: "The Square Song — Shapes for Kids", url: "https://www.youtube.com/watch?v=T7VqIVw5S-Q", thumb: "https://img.youtube.com/vi/T7VqIVw5S-Q/hqdefault.jpg" },
    { title: "Learn Squares with Fun", url: "https://www.youtube.com/watch?v=WTeqUejf3D0", thumb: "https://img.youtube.com/vi/WTeqUejf3D0/hqdefault.jpg" },
  ],
  Rectangle: [
    { title: "Rectangles for Kids", url: "https://www.youtube.com/watch?v=Yy8OZ8ZgYYc", thumb: "https://img.youtube.com/vi/Yy8OZ8ZgYYc/hqdefault.jpg" },
    { title: "Rectangle Song for Children", url: "https://www.youtube.com/watch?v=8Q2XdrfP9Fk", thumb: "https://img.youtube.com/vi/8Q2XdrfP9Fk/hqdefault.jpg" },
  ],
  Triangle: [
    { title: "Triangle Song for Kids", url: "https://www.youtube.com/watch?v=6E9K5Es9-Fw", thumb: "https://img.youtube.com/vi/6E9K5Es9-Fw/hqdefault.jpg" },
    { title: "All About Triangles", url: "https://www.youtube.com/watch?v=QqkHruonPRA", thumb: "https://img.youtube.com/vi/QqkHruonPRA/hqdefault.jpg" },
  ],
};