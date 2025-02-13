"use client"
import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return 
  <div className="flex items-center justify-center">
  <SignUp forceRedirectUrl="/checkout"/>;
  </div>
}

export default SignUpPage;
