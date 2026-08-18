export default function LangSwitcher({ current }: { current: "id" | "en" }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-sand p-1 text-xs font-semibold">
      <a
        href="/"
        className={
          current === "id"
            ? "rounded-full bg-primary px-2.5 py-1 text-white"
            : "rounded-full px-2.5 py-1 text-ink-soft transition-colors duration-200 hover:text-primary"
        }
      >
        ID
      </a>
      <a
        href="/en"
        className={
          current === "en"
            ? "rounded-full bg-primary px-2.5 py-1 text-white"
            : "rounded-full px-2.5 py-1 text-ink-soft transition-colors duration-200 hover:text-primary"
        }
      >
        EN
      </a>
    </div>
  );
}
