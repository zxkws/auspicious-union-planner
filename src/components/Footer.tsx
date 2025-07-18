import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "首页", href: "#home" },
    { name: "服务套餐", href: "#services" },
    { name: "案例展示", href: "#gallery" },
    { name: "关于我们", href: "#about" },
  ];

  const services = [
    "经典套餐",
    "尊贵套餐",
    "至尊套餐",
    "个性定制"
  ];

  const contactInfo = [
    { icon: Phone, text: "400-888-6666" },
    { icon: Mail, text: "info@hanwedding.com" },
    { icon: MapPin, text: "北京市朝阳区传统文化街88号" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">汉式婚礼</span>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                传承千年文化，成就美好姻缘。我们专注于为新人打造最正宗、最美好的汉式婚礼体验。
              </p>
              <Button variant="chinese" size="sm">
                立即咨询
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">快速导航</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">服务项目</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-background/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">联系我们</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-background/80 text-sm">{info.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">营业时间</h4>
                <p className="text-background/80 text-sm">
                  周一至周日 9:00-21:00<br />
                  节假日正常营业
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 汉式婚礼策划. 版权所有 | 京ICP备12345678号
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                服务条款
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                法律声明
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"></div>
    </footer>
  );
};

export default Footer;