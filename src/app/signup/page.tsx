import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const SignupPage = () => {
  return (
    <div className="mt-14 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="mb-4">
          <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
        </CardHeader>

        <AuthForm type="signup" />
      </Card>
    </div>
  );
};

export default SignupPage;
