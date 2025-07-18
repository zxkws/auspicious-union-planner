import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Calendar } from "lucide-react";
import CaseDetailDialog from "@/components/CaseDetailDialog";
import couplePortrait from "@/assets/couple-portrait.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";
import heroImage from "@/assets/hero-wedding.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const cases = [
    {
      id: 1,
      title: "古韵雅致 · 李先生 & 王女士",
      date: "2024年春",
      image: heroImage,
      category: "尊贵套餐",
      description: "在古典园林中举办的传统汉式婚礼，红妆十里，古韵悠长。",
      likes: 156,
      views: 2340
    },
    {
      id: 2,
      title: "金桂飘香 · 张先生 & 陈女士",
      date: "2024年秋",
      image: couplePortrait,
      category: "至尊套餐",
      description: "秋日金桂飘香时节，一场盛大的汉式婚礼在古宅中华丽呈现。",
      likes: 234,
      views: 3120
    },
    {
      id: 3,
      title: "花好月圆 · 赵先生 & 孙女士",
      date: "2024年夏",
      image: weddingDecor,
      category: "经典套餐",
      description: "夏日荷花盛开，新人在传统庭院中举办了温馨的汉式婚礼。",
      likes: 189,
      views: 2890
    },
    {
      id: 4,
      title: "梅开五福 · 刘先生 & 周女士",
      date: "2024年冬",
      image: heroImage,
      category: "尊贵套餐",
      description: "冬日梅花绽放，雪中红梅映衬着新人的幸福笑容。",
      likes: 298,
      views: 4200
    },
    {
      id: 5,
      title: "春暖花开 · 吴先生 & 郑女士",
      date: "2024年春",
      image: couplePortrait,
      category: "至尊套餐",
      description: "春天樱花盛开的季节，一场如诗如画的汉式婚礼。",
      likes: 267,
      views: 3780
    },
    {
      id: 6,
      title: "月下佳人 · 钱先生 & 何女士",
      date: "2024年秋",
      image: weddingDecor,
      category: "经典套餐",
      description: "月圆之夜，灯火阑珊处，有情人终成眷属。",
      likes: 178,
      views: 2560
    }
  ];

  const categories = ["全部", "经典套餐", "尊贵套餐", "至尊套餐"];

  const filteredCases = selectedCategory === "全部" 
    ? cases 
    : cases.filter(caseItem => caseItem.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleViewDetails = (caseItem: any) => {
    setSelectedCase(caseItem);
    setDetailDialogOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            案例展示
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 elegant-text">
            精彩案例回顾
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            每一场婚礼都是独一无二的故事，每一对新人都有专属的美好回忆
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "chinese" : "elegant"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={category === selectedCategory ? "" : "hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem, index) => (
            <Card 
              key={caseItem.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{caseItem.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">{caseItem.views}</span>
                        </div>
                      </div>
                      <Button 
                        variant="chinese" 
                        size="sm"
                        onClick={() => handleViewDetails(caseItem)}
                      >
                        查看详情
                      </Button>
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {caseItem.category}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{caseItem.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            查看更多案例
          </Button>
        </div>
      </div>

      {/* 案例详情对话框 */}
      <CaseDetailDialog
        case={selectedCase}
        open={detailDialogOpen}
        onOpenChange={setDetailDialogOpen}
      />
    </section>
  );
};

export default Gallery;