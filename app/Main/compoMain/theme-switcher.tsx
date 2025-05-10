// "use client"
// import { Check, ChevronDown } from "lucide-react"
// import { Button } from "@/app/Main/uiMain/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/app/Main/uiMain/dropdown-menu"
// import { useTheme } from "@/app/Main/compoMain/theme-provider"

// export function ThemeSwitcher() {
//   const { themeStyle, setThemeStyle } = useTheme()

//   const themeStyles = [
//     { id: "amazon", name: "Amazon" },
//     { id: "netflix", name: "Netflix" },
//     { id: "youtube", name: "YouTube" },
//     { id: "corporate", name: "Corporate" },
//   ]

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" className="flex items-center gap-2">
//           <span>Theme</span>
//           <ChevronDown className="h-4 w-4" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Theme Style</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           {themeStyles.map((style) => (
//             <DropdownMenuItem
//               key={style.id}
//               onClick={() => setThemeStyle(style.id as any)}
//               className="flex items-center justify-between"
//             >
//               {style.name}
//               {themeStyle === style.id && <Check className="h-4 w-4" />}
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
