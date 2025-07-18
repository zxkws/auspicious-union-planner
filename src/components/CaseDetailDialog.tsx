import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Calendar, MapPin, Users, Star } from "lucide-react";

interface CaseData {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  description: string;
  likes: number;
  views: number;
  location?: string;
  guests?: number;
  rating?: number;
  highlights?: string[];
  fullDescription?: string;
}

interface CaseDetailDialogProps {
  case: CaseData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CaseDetailDialog = ({ case: caseData, open, onOpenChange }: CaseDetailDialogProps) => {
  if (!caseData) return null;

  const defaultHighlights = [
    "古典汉服定制",
    "传统婚礼仪式",
    "专业摄影摄像",
    "精美场地布置"
  ];

  const highlights = caseData.highlights || defaultHighlights;
  const location = caseData.location || "北京古典园林";
  const guests = caseData.guests || 120;
  const rating = caseData.rating || 4.9;
  const fullDescription = caseData.fullDescription || 
    `${caseData.description}这场婚礼完美融合了传统汉式文化与现代婚礼元素，从新人的汉服定制到婚礼仪式的每一个细节，都体现了深厚的文化底蕴。整场婚礼庄重而温馨，给所有宾客留下了深刻的印象。`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl pr-8">{caseData.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* 主图 */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={caseData.image}
              alt={caseData.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{caseData.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{caseData.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Badge className="absolute top-4 left-4 bg-primary text-white">
              {caseData.category}
            </Badge>
          </div>

          {/* 基本信息 */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="text-center">
              <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">婚礼时间</div>
              <div className="text-xs text-muted-foreground">{caseData.date}</div>
            </div>
            <div className="text-center">
              <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">婚礼地点</div>
              <div className="text-xs text-muted-foreground">{location}</div>
            </div>
            <div className="text-center">
              <Users className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">宾客人数</div>
              <div className="text-xs text-muted-foreground">{guests}人</div>
            </div>
          </div>

          {/* 详细描述 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">婚礼详情</h3>
            <p className="text-muted-foreground leading-relaxed">
              {fullDescription}
            </p>
          </div>

          {/* 亮点特色 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">服务亮点</h3>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="chinese" className="flex-1">
              咨询同款婚礼
            </Button>
            <Button variant="elegant" className="flex-1">
              收藏案例
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseDetailDialog;