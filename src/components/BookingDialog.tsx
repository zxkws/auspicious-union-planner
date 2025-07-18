import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, Mail, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingDialogProps {
  children: React.ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    budget: "",
    message: ""
  });
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
    
    setOpen(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      weddingDate: "",
      budget: "",
      message: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Heart className="h-5 w-5 text-primary" />
            咨询预约
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dialog-name">姓名 *</Label>
              <Input
                id="dialog-name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="请输入您的姓名"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dialog-phone">联系电话 *</Label>
              <Input
                id="dialog-phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="请输入手机号"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dialog-email">邮箱</Label>
            <Input
              id="dialog-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="请输入邮箱地址"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dialog-date">期望婚期</Label>
              <Input
                id="dialog-date"
                type="date"
                value={formData.weddingDate}
                onChange={(e) => setFormData(prev => ({ ...prev, weddingDate: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>预算范围</Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="选择预算" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3万</SelectItem>
                  <SelectItem value="3-5">3-5万</SelectItem>
                  <SelectItem value="5-10">5-10万</SelectItem>
                  <SelectItem value="10+">10万以上</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dialog-message">需求描述</Label>
            <Textarea
              id="dialog-message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="请简单描述您的需求..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="chinese" className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              提交预约
            </Button>
            <Button type="button" variant="elegant" className="flex-1" onClick={() => window.open("tel:400-888-6666")}>
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