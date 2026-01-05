import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("auth", "true");
      window.location.hash = "#/";
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/magdy.khelfa",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[380px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            تسجيل الدخول
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-sm text-destructive text-center">
              {error}
            </p>
          )}

          <Button className="w-full" onClick={handleLogin}>
            دخول
          </Button>

          <div className="pt-4 border-t text-center space-y-2">
            <p className="text-sm font-semibold text-primary tracking-wide">
              إعداد وتصميم مجدي خلفه
            </p>

            <a
              href="https://www.facebook.com/magdy.khelfa"
              target="_blank"
              rel="noopener noreferrer"
              /* ضفنا flex-row-reverse عشان نضمن إن الأيقونة تبقى شمال الكتابة */
              className="inline-flex flex-row-reverse items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span className="text-xs">Facebook</span>
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}