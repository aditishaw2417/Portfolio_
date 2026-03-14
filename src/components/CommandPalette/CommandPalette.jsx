import React, { useEffect, useState } from "react";
import { Command } from "cmdk";

const CommandPalette = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-start justify-center pt-40 z-50">
      <Command className="bg-white rounded-xl shadow-xl w-[500px] p-4">
        <Command.Input
          placeholder="Search chapters..."
          className="w-full border-b pb-2 mb-2 outline-none"
        />
        <Command.List>
          <Command.Group heading="Chapters">
            <Command.Item onSelect={() => onNavigate("about")}>
              Open About
            </Command.Item>
            <Command.Item onSelect={() => onNavigate("experience")}>
              Open Experience
            </Command.Item>
            <Command.Item onSelect={() => onNavigate("projects")}>
              Open Projects
            </Command.Item>
            <Command.Item onSelect={() => onNavigate("skills")}>
              Open Skills
            </Command.Item>
            <Command.Item onSelect={() => onNavigate("contact")}>
              Open Contact
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
};

export default CommandPalette;
