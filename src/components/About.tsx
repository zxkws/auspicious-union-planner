import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Star, BookOpen, Palette } from "lucide-react";
import couplePortrait from "@/assets/couple-portrait.jpg";

const About = () => {
  const stats = [
    { number: "500+", label: "成功案例", icon: Heart },
    { number: "10年", label: "专业经验", icon: Award },
    { number: "98%", label: "客户满意度", icon: Star },
    { number: "50+", label: "专业团队", icon: Users }
  ];

  const team = [
    {
      name: "李雅琳",
      title: "首席策划师",
      specialty: "传统文化专家",
      experience: "10年",
      description: "专注汉式婚礼策划十年，深谙传统礼仪文化，为上百对新人打造梦想婚礼。"
    },
    {
      name: "王文博",
      title: "文化顾问",
      specialty: "古代礼仪研究",
      experience: "15年",
      description: "古代文学博士，专业研究中华传统婚俗文化，确保每场婚礼的文化正统性。"
    },
    {
      name: "张美华",
      title: "视觉总监",
      specialty: "古典美学设计",
      experience: "8年",
      description: "毕业于中央美术学院，擅长将传统美学与现代设计完美融合。"
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "传承文化",
      description: "忠实传承中华传统婚俗文化，让古典之美在现代绽放"
    },
    {
      icon: Heart,
      title: "用心服务",
      description: "以真诚的心为每对新人定制独特的婚礼体验"
    },
    {
      icon: Palette,
      title: "匠心品质",
      description: "精工细作，追求每一个细节的完美呈现"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            关于我们
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 elegant-text">
            传承千年文化，成就美好姻缘
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们是一支专业的汉式婚礼策划团队，致力于为新人打造最正宗、最美好的传统中式婚礼
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold elegant-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={couplePortrait}
                alt="传统汉式婚礼"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">专业认证</div>
                <div className="text-sm text-muted-foreground">文化部认证策划机构</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">我们的使命</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              在快节奏的现代生活中，我们希望通过汉式婚礼这一传统仪式，让新人感受到中华文化的深厚底蕴，
              体验到古人对于婚姻的庄重态度。每一场汉式婚礼都是对传统文化的传承，也是对美好爱情的见证。
            </p>

            <div className="space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">专业团队</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <Badge variant="secondary" className="mb-2">{member.title}</Badge>
                  <div className="text-sm text-primary mb-2">{member.specialty}</div>
                  <div className="text-sm text-muted-foreground mb-4">从业经验：{member.experience}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold mb-4">选择我们，让爱情在传统中绽放</h3>
              <p className="text-muted-foreground mb-6">
                联系我们的专业团队，为您量身定制专属的汉式婚礼方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="chinese" size="lg">
                  立即咨询
                </Button>
                <Button variant="gold" size="lg">
                  预约到店
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;