import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        "flex items-center gap-2 rounded-lg text-lg px-2 py-2 transition-all",
        "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        {
          "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50":
            pathname === href,
        },
      )}
      href={href}
      onClick={() => console.log("Clicked")}
    >
      <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
        <Icon className="h-4 w-4" />
      </div>
      {label}
    </Link>
  );
};

export default SideBarItem;
