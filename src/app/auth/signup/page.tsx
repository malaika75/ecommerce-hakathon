import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return <SignUp forceRedirectUrl="/checkout" />;
}

export default SignUpPage;
