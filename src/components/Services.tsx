import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Crown, Sparkles, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "经典套餐",
      price: "¥18,888",
      description: "传统汉式婚礼基础套餐",
      icon: Heart,
      popular: false,
      features: [
        "传统三书六礼仪式",
        "新人汉服定制（基础款）",
        "简约场地布置",
        "专业司仪主持",
        "基础化妆造型",
        "婚礼摄影（半天）",
        "传统音乐伴奏",
        "喜糖喜饼准备"
      ],
      color: "border-muted"
    },
    {
      title: "尊贵套餐",
      price: "¥38,888",
      description: "精品汉式婚礼完整体验",
      icon: Crown,
      popular: true,
      features: [
        "完整古制婚礼仪式",
        "高级汉服定制（刺绣款）",
        "精美场地布置",
        "资深文化顾问",
        "专业化妆团队",
        "婚礼摄影摄像（全天）",
        "古典乐器演奏",
        "传统婚宴安排",
        "伴手礼定制",
        "花轿迎亲服务"
      ],
      color: "border-primary"
    },
    {
      title: "至尊套餐",
      price: "¥68,888",
      description: "顶级汉式婚礼奢华定制",
      icon: Sparkles,
      popular: false,
      features: [
        "皇室级古制仪式",
        "顶级汉服定制（金线刺绣）",
        "奢华场地布置",
        "私人文化顾问团队",
        "顶级化妆造型师",
        "专业摄影摄像团队",
        "古典乐团演奏",
        "五星级婚宴服务",
        "限量版伴手礼",
        "古式花轿迎亲",
        "传统舞蹈表演",
        "个性化定制服务"
      ],
      color: "border-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            服务套餐
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 elegant-text">
            选择您的专属套餐
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们提供三种不同档次的汉式婚礼套餐，满足不同需求和预算的新人
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${service.color} ${service.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    最受欢迎
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${service.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-4xl font-bold elegant-text">{service.price}</div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={service.popular ? "chinese" : "elegant"} 
                    className="w-full"
                    size="lg"
                  >
                    选择套餐
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            所有套餐都可以根据您的需求进行个性化定制
          </p>
          <Button variant="gold" size="lg">
            联系我们定制专属方案
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;