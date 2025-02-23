// "use client";

// import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
// import Image from "next/image";
// import { Disclosure } from "@headlessui/react";
// import { useAuth } from "@/context/AuthContext";  // ✅ Import Auth Context

// export const Navbar = () => {
//   const { user, login, logout } = useAuth();  // ✅ Use Auth Context

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "Features", href: "/features" },
//     { name: "Newsletter", href: "/newsletter" },
//     { name: "About", href: "/about" },
//   ];

//   return (
//     <div className="w-full">
//       <nav className="container relative flex items-center justify-between p-6 mx-auto lg:px-10">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image src="/img/logo.png" width={100} height={100} alt="Logo" className="w-68 h-auto lg:w-86" />
//         </Link>

//         {/* Navigation Links (Visible on Large Screens) */}
//         <div className="hidden space-x-8 lg:flex">
//           {navigation.map((item) => (
//             <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-500 dark:text-gray-200">
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Authentication & Theme Toggle */}
//         <div className="flex items-center space-x-3">
//           <ThemeChanger />
//           {user ? (
//             <button onClick={logout} className="px-4 py-2 text-white bg-red-600 rounded-md">
//               Logout
//             </button>
//           ) : (
//             <button onClick={login} className="px-4 py-2 text-white bg-indigo-600 rounded-md">
//               Get Started
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <Disclosure.Button className="p-2 text-gray-500 rounded-md hover:text-indigo-500">
//                   <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     {open ? (
//                       <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
//                     ) : (
//                       <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
//                     )}
//                   </svg>
//                 </Disclosure.Button>

//                 {/* Mobile Menu */}
//                 <Disclosure.Panel className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden">
//                   <div className="flex flex-col items-center space-y-4 py-5">
//                     {navigation.map((item) => (
//                       <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-500 dark:text-gray-200">
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//         </div>
//       </nav>
//     </div>
//   );
// };






// "use client";

// import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
// import Image from "next/image";
// import { Disclosure } from "@headlessui/react";
// import { useAuth } from "@/context/AuthContext";  // ✅ Import Auth Context

// export const Navbar = () => {
//   const { user, login, logout } = useAuth();  // ✅ Use Auth Context

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "Features", href: "/features" },
//     { name: "Newsletter", href: "/newsletter" },
//     { name: "About", href: "/about" },
//   ];

//   return (
//     <div className="w-full">
//       <nav className="container relative flex items-center justify-between p-6 mx-auto lg:px-10">
//         {/* Logo (Increased Size) */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image src="/img/logo.png" width={150} height={75} alt="Logo" className="w-40 h-auto lg:w-52" />
//         </Link>

//         {/* Navigation Links (Visible on Large Screens) */}
//         <div className="hidden space-x-8 lg:flex">
//           {navigation.map((item) => (
//             <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-500 dark:text-gray-200">
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Authentication & Theme Toggle (Shifted "Get Started" left) */}
//         <div className="flex items-center space-x-6">
//           {user ? (
//             <button onClick={logout} className="px-4 py-2 text-white bg-red-600 rounded-md">
//               Logout
//             </button>
//           ) : (
//             <button onClick={login} className="px-5 py-2 text-white bg-indigo-600 rounded-md mr-3">
//               Get Started
//             </button>
//           )}
//           <ThemeChanger />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <Disclosure.Button className="p-2 text-gray-500 rounded-md hover:text-indigo-500">
//                   <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     {open ? (
//                       <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
//                     ) : (
//                       <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
//                     )}
//                   </svg>
//                 </Disclosure.Button>

//                 {/* Mobile Menu */}
//                 <Disclosure.Panel className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden">
//                   <div className="flex flex-col items-center space-y-4 py-5">
//                     {navigation.map((item) => (
//                       <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-500 dark:text-gray-200">
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//         </div>
//       </nav>
//     </div>
//   );
// };







// "use client";

// import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
// import Image from "next/image";
// import { Disclosure, Menu } from "@headlessui/react";
// import { useAuth } from "@/context/AuthContext"; // ✅ Import Auth Context

// export const Navbar = () => {
//   const { user, login, logout } = useAuth(); // ✅ Use Auth Context

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "Features", href: "/features" },
//     { name: "Newsletter", href: "/newsletter" },
//     { name: "About", href: "/about" },
//   ];

//   return (
//     <div className="w-full">
//       <nav className="container relative flex items-center justify-between p-6 mx-auto lg:px-10">
//         {/* Logo (Bigger) */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image src="/img/logo.png" width={150} height={90} alt="Logo" className="w-80 h-auto lg:w-92" />
//         </Link>

//         {/* Navigation Links (Visible on Large Screens) */}
//         <div className="hidden space-x-8 lg:flex">
//           {navigation.map((item) => (
//             <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-500 dark:text-gray-200">
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Authentication & Theme Toggle */}
//         <div className="flex items-center space-x-6">
//           {/* User Dropdown */}
//           {user ? (
//             <Menu as="div" className="relative inline-block text-left">
//               <Menu.Button className="flex items-center space-x-2 px-4 py-2 text-white bg-indigo-600 rounded-md">
//                 <Image src={user.photoURL || "/img/user-default.png"} width={30} height={30} className="w-8 h-8 rounded-full" alt="User Avatar" />
//                 <span>{user.displayName}</span>
//               </Menu.Button>
//               <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       onClick={logout}
//                       className={`${
//                         active ? "bg-gray-200 dark:bg-gray-700" : ""
//                       } block w-full px-4 py-2 text-gray-700 dark:text-gray-200 text-left`}
//                     >
//                       Logout
//                     </button>
//                   )}
//                 </Menu.Item>
//               </Menu.Items>
//             </Menu>
//           ) : (
//             <button onClick={login} className="px-5 py-2 text-white bg-indigo-600 rounded-md">
//               Get Started
//             </button>
//           )}

//           <ThemeChanger />
//         </div>

//         {/* Mobile Menu */}
//         <div className="lg:hidden">
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <Disclosure.Button className="p-2 text-gray-500 rounded-md hover:text-indigo-500">
//                   <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     {open ? (
//                       <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
//                     ) : (
//                       <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
//                     )}
//                   </svg>
//                 </Disclosure.Button>

//                 <Disclosure.Panel className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden">
//                   <div className="flex flex-col items-center space-y-4 py-5">
//                     {navigation.map((item) => (
//                       <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-500 dark:text-gray-200">
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//         </div>
//       </nav>
//     </div>
//   );
// };

"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";
import { useAuth } from "@/context/AuthContext"; // ✅ Import Auth Context

export const Navbar = () => {
  const { user, login, logout } = useAuth(); // ✅ Use Auth Context

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/img/logo.png" width={180} height={90} alt="Logo" className="w-44 lg:w-52" />
        </Link>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-indigo-500 dark:text-gray-200 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Authentication & Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Authentication */}
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center space-x-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all">
                <Image
                  src={user.photoURL || "/img/user-default.png"}
                  width={32} height={32}
                  className="w-8 h-8 rounded-full"
                  alt="User Avatar"
                />
                <span className="hidden lg:inline">{user.displayName || "Profile"}</span>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`${
                        active ? "bg-gray-200 dark:bg-gray-700" : ""
                      } block w-full px-4 py-2 text-gray-700 dark:text-gray-200 text-left`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <button
              onClick={login}
              className="px-5 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all"
            >
              Get Started
            </button>
          )}

          {/* Theme Toggle */}
          <ThemeChanger />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2 text-gray-500 rounded-md hover:text-indigo-500">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {open ? (
                      <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    ) : (
                      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                    )}
                  </svg>
                </Disclosure.Button>

                {/* Mobile Menu */}
                <Disclosure.Panel className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden">
                  <div className="flex flex-col items-center space-y-4 py-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 hover:text-indigo-500 dark:text-gray-200 transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </div>
  );
};
