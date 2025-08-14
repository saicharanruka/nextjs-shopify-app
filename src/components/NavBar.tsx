import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/types";
import Link from "next/link";

async function NavBar() {
  const menu = await getMenu("nextjs-app-menu");
  // console.log(menu)

  return (
    <nav className="flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">{/* <MobileMenu/> */}</div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href={"/"}
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            {/* <Logo/> */}
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {/* {SITE_NAME} */}
            </div>
          </Link>
          {menu.length > 0 ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-gray-600 underline-offset-4 hover:text-black hover:underline transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
		<div className="hidden justify-center md:flex md:w-1/3">
			{/* <Search/> */}
		</div>
		<div className="flex justify-end md:w-1/3">
			{/* <CartModal/> */}
		</div>
      </div>
    </nav>
  );
}

export default NavBar;
