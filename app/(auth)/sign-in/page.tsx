"use client";

import React from "react";

import AuthForm from "@/components/forms/auth-form";
import { signInSchema } from "@/lib/validations";

export default function SignIn() {
  return (
    <div>
      <AuthForm
        formType="SIGN_IN"
        schema={signInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
}
