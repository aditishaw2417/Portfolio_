import { useState } from "react";
import Introduction from "./pages/Introduction";
import TableOfContents from "./pages/TableOfContents";
import BookmarkNav from "./components/Book/BookmarkNav";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import BookLayout from "./components/Book/BookLayout";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

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

      <AnimatePresence mode="wait">
        {" "}
        {chapter === "about" && (
          <BookLayout
            chapterKey={chapter}
            leftPage={<About />}
            rightPage={<Experience />}
          />
        )}{" "}
        {chapter === "experience" && (
          <BookLayout
            chapterKey={chapter}
            leftPage={<Experience />}
            rightPage={<Projects />}
          />
        )}
        {chapter === "projects" && (
          <BookLayout
            chapterKey={chapter}
            leftPage={<Projects />}
            rightPage={<Skills />}
          />
        )}{" "}
        {chapter === "skills" && (
          <BookLayout
            chapterKey={chapter}
            leftPage={<Skills />}
            rightPage={<Contact />}
          />
        )}{" "}
        {chapter === "contact" && (
          <BookLayout
            chapterKey={chapter}
            leftPage={<Contact />}
            rightPage={<ThankYou />}
          />
        )}{" "}
      </AnimatePresence>
    </>
  );
}

export default App;
