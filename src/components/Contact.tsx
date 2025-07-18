import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BookingDialog from "@/components/BookingDialog";

const Contact = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
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

    toast({
      title: "咨询预约提交成功！",
      description: "我们的专业顾问将在24小时内与您联系",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      weddingDate: "",
      budget: "",
      message: ""
    });
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: "地址",
      content: "北京市朝阳区传统文化街88号",
      subContent: "汉韵婚礼策划中心"
    },
    {
      icon: Phone,
      title: "电话",
      content: "400-888-6666",
      subContent: "24小时咨询热线"
    },
    {
      icon: Mail,
      title: "邮箱",
      content: "info@hanwedding.com",
      subContent: "专业咨询服务"
    },
    {
      icon: Clock,
      title: "营业时间",
      content: "周一至周日 9:00-21:00",
      subContent: "节假日正常营业"
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "在线咨询",
      description: "专业顾问为您答疑解惑",
      buttonText: "开始咨询",
      variant: "chinese" as const
    },
    {
      icon: Calendar,
      title: "预约到店",
      description: "实地参观了解详细方案",
      buttonText: "立即预约",
      variant: "gold" as const
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            联系我们
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 elegant-text">
            开启您的汉式婚礼之旅
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            专业的团队，贴心的服务，让我们为您打造梦想中的汉式婚礼
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">咨询预约</CardTitle>
                <p className="text-muted-foreground">
                  填写下方表单，我们的专业顾问将在24小时内与您联系
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="请输入您的姓名" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input 
                        id="phone" 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="请输入您的联系电话" 
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="请输入您的邮箱" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">期望婚期</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={formData.weddingDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, weddingDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>预算范围</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="请选择预算范围" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3万</SelectItem>
                        <SelectItem value="3-5">3-5万</SelectItem>
                        <SelectItem value="5-10">5-10万</SelectItem>
                        <SelectItem value="10+">10万以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">需求描述</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="请描述您对汉式婚礼的具体需求和想法..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" variant="chinese" size="lg" className="flex-1">
                      提交咨询
                    </Button>
                    <Button type="button" variant="elegant" size="lg" className="flex-1" onClick={() => window.open("tel:400-888-6666")}>
                      电话咨询
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>联系信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{info.title}</div>
                        <div className="text-sm text-muted-foreground">{info.content}</div>
                        <div className="text-xs text-muted-foreground">{info.subContent}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{action.title}</h3>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                      {action.title === "在线咨询" ? (
                        <Button 
                          variant={action.variant} 
                          className="w-full"
                          onClick={() => setBookingDialogOpen(true)}
                        >
                          {action.buttonText}
                        </Button>
                      ) : (
                        <Button variant={action.variant} className="w-full" onClick={() => window.open("tel:400-888-6666")}>
                          {action.buttonText}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">地图位置</div>
                    <div className="text-xs text-muted-foreground">北京市朝阳区</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 预约对话框 */}
      <BookingDialog
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
      />
    </section>
  );
};

export default Contact;