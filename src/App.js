import { useState } from "react";
import Introduction from "./pages/Introduction";
import TableOfContents from "./pages/TableOfContents";
import BookmarkNav from "./components/Book/BookmarkNav";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import BookLayout from "./components/Book/BookLayout";

function App() {
  const [bookOpen, setBookOpen] = useState(false);
  const [chapter, setChapter] = useState(null);
  if (!bookOpen) {
    return <Introduction onOpenBook={() => setBookOpen(true)} />;
  }
  if (!chapter) {
    return <TableOfContents onSelectChapter={setChapter} />;
  }
  return (
    <>
      <CommandPalette onNavigate={setChapter} />
      <BookmarkNav onSelect={setChapter} />

      <AnimatePresence
        mode="wait"
        initial={{ opacity: 0, x: 80, rotateY: -8 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        exit={{ opacity: 0, x: -80, rotateY: 8 }}
      >
        {" "}
        {chapter === "about" && (
          <BookLayout
            chapterKey={chapter}
            leftPage={<About />}
            rightPage={
              <div>
                <h1 className="text-3xl font-bold mb-6">
                  Chapter 2 — Experience
                </h1>
                <p>Experience page coming soon...</p>
              </div>
            }
          />
        )}{" "}
        {chapter === "experience" && (
          <div key="experience" className="p-10">
            Experience Page Coming Soon
          </div>
        )}{" "}
        {chapter === "projects" && (
          <div key="projects" className="p-10">
            Projects Page Coming Soon
          </div>
        )}{" "}
        {chapter === "skills" && (
          <div key="skills" className="p-10">
            Skills Page Coming Soon
          </div>
        )}{" "}
        {chapter === "contact" && (
          <div key="contact" className="p-10">
            Contact Page Coming Soon
          </div>
        )}{" "}
      </AnimatePresence>
    </>
  );
}

export default App;
