import SocialIconRow from "../social-icon-row";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-zinc-900 text-white py-6 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col  gap-6 justify-between items-center">
        <p className="text-gray-900 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Leo Kamino. All rights reserved.
        </p>
        <SocialIconRow />
      </div>
    </footer>
  );
}
