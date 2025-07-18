import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, Phone, DollarSign, Users, FileText, Package, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPackage?: string;
}

const BookingDialog = ({ open, onOpenChange, selectedPackage }: BookingDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    budget: "",
    guestCount: "",
    requirements: "",
    package: selectedPackage || ""
  });

  // 当 selectedPackage 改变时更新表单数据
  React.useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }));
    }
  }, [selectedPackage]);

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "请填写必填信息",
        description: "姓名和联系电话为必填项",
        variant: "destructive",
      });
      return;
    }

    // 模拟提交
    toast({
      title: "咨询预约提交成功！",
      description: "我们的专业顾问将在24小时内与您联系",
    });
    
    onOpenChange(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      weddingDate: "",
      budget: "",
      guestCount: "",
      requirements: "",
      package: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Package className="h-5 w-5 text-primary" />
            咨询预约
            {selectedPackage && <span className="text-base text-muted-foreground">- {selectedPackage}</span>}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                姓名 *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="请输入您的姓名"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                联系电话 *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="请输入手机号"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              邮箱
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="请输入邮箱地址"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weddingDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                期望婚期
              </Label>
              <Input
                id="weddingDate"
                type="date"
                value={formData.weddingDate}
                onChange={(e) => setFormData({...formData, weddingDate: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                宾客人数
              </Label>
              <Select value={formData.guestCount} onValueChange={(value) => setFormData({...formData, guestCount: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="预计宾客人数" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-100">50-100人</SelectItem>
                  <SelectItem value="100-200">100-200人</SelectItem>
                  <SelectItem value="200-300">200-300人</SelectItem>
                  <SelectItem value="300+">300人以上</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                预算范围
              </Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="请选择预算范围" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3万">1-3万</SelectItem>
                  <SelectItem value="3-5万">3-5万</SelectItem>
                  <SelectItem value="5-10万">5-10万</SelectItem>
                  <SelectItem value="10万以上">10万以上</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                感兴趣的套餐
              </Label>
              <Select value={formData.package} onValueChange={(value) => setFormData({...formData, package: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="请选择套餐" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="经典套餐">经典套餐 - ¥18,888</SelectItem>
                  <SelectItem value="尊贵套餐">尊贵套餐 - ¥38,888</SelectItem>
                  <SelectItem value="至尊套餐">至尊套餐 - ¥68,888</SelectItem>
                  <SelectItem value="定制方案">定制方案</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              特殊要求
            </Label>
            <Textarea
              id="requirements"
              placeholder="请描述您的特殊要求或想法..."
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" variant="chinese" className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              提交预约
            </Button>
            <Button 
              type="button" 
              variant="elegant" 
              className="flex-1" 
              onClick={() => window.open("tel:400-888-6666")}
            >
              <Phone className="h-4 w-4 mr-2" />
              电话咨询
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;