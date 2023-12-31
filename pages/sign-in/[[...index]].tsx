import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex justify-center items-center p-10 text-center bg-slate-100 ">
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
          header : "",
        },
      }}
    />
  </div>
);

export default SignInPage;
