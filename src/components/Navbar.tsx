import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  const menuItems = [
    { name: "首页", href: "#home" },
    { name: "服务套餐", href: "#services" },
    { name: "案例展示", href: "#gallery" },
    { name: "关于我们", href: "#about" },
    { name: "联系我们", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold elegant-text">汉式婚礼</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="chinese" 
              className="ml-4"
              onClick={() => setBookingDialogOpen(true)}
            >
              咨询预约
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="chinese" 
                  className="w-full"
                  onClick={() => {
                    setBookingDialogOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  咨询预约
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 预约对话框 */}
      <BookingDialog
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
      />
    </nav>
  );
};

export default Navbar;