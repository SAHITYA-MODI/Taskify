import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 px-4 top-0 items-center flex w-full border-b shadow-sm h-14 bg-white">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          variant="primary"
          className="rounded-sm hidden md:block py-1.5 px-2 h-auto"
        >
          Create
        </Button>
        <Button
          size="sm"
          variant="primary"
          className="rounded-sm md:hidden block"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{ elements: { avatarBox: { height: 30, width: 30 } } }}
        />
      </div>
    </nav>
  );
};
