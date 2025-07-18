import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="汉式婚礼"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-white mb-4">
                传承千年文化
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">汉式婚礼</span>
                <span className="block text-4xl lg:text-5xl text-secondary">策划专家</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                传承中华传统文化，为您打造独一无二的汉式婚礼
                <br />
                让爱情在古典雅韵中绽放
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="chinese" 
                size="lg" 
                className="text-lg px-8 py-4 animate-glow"
              >
                立即咨询
              </Button>
              <Button 
                variant="elegant" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                查看案例
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-gray-300">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-gray-300">满意度</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">10年</div>
                <div className="text-sm text-gray-300">专业经验</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">传统仪式</h3>
                  <p className="text-gray-300">严格按照古制，还原汉式婚礼的每一个细节</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">个性定制</h3>
                  <p className="text-gray-300">根据新人需求，量身定制专属婚礼方案</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">专业团队</h3>
                  <p className="text-gray-300">资深策划师与传统文化专家团队服务</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-float">
        <div className="text-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mb-2">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
          <span className="text-sm">向下滚动</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;