import { TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="rounded-md w-full flex">
      <a
        href="https://twitter.com/watercrypt0"
        className="flex items-center text-xs mx-auto gap-[2px] opacity-40 hover:opacity-70"
      >
        <TiSocialTwitter size={14} /> watercrypt0
      </a>
    </footer>
  );
}
