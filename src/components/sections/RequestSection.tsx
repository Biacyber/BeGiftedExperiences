import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phoneNumber: z.string().min(5, "Please enter your phone number"),
});

export function RequestSection() {
  const ref = useIntersectionObserver();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Invitation Request:", values);

    setIsSuccess(true);
    form.reset();
  }

  return (
    <section
      id="request"
      className="py-10 px-6 bg-white flex justify-center items-center"
    >
      <div
        ref={ref}
        className="max-w-2xl mx-auto w-full flex flex-col items-center text-center fade-up-element"
      >
        <p className="font-sans text-primary text-xs tracking-[0.2em] uppercase mb-8 delay-100">
          The Guest List
        </p>

        <h2 className="font-serif text-3xl md:text-5xl text-primary font-light mb-8 delay-200">
          Invitation
        </h2>

        <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide mb-12 delay-300 max-w-lg">
          You have been specially invited for the BeGifted Experience.
          Attendance is strictly by invitation. Each invitation admits one
          guest only. Kindly submit your details. Guests will receive a
          personal WhatsApp confirmation containing attendance details.
        </p>

        <div className="w-full max-w-md bg-background p-8 md:p-12 delay-400">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-500">
              <span className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full" />
              </span>

              <p className="font-sans text-primary text-sm leading-relaxed tracking-wide">
                Thank you. Your request has been received.
                <br />
                <br />
                Should your request be approved, you will receive a WhatsApp
                message containing your invitation details.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 text-left"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs tracking-[0.1em] uppercase text-primary">
                        Full Name
                      </FormLabel>

                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>

                      <FormMessage className="font-sans text-xs text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs tracking-[0.1em] uppercase text-primary">
                        Phone Number
                      </FormLabel>

                      <FormControl>
                        <Input placeholder="+234..." {...field} />
                      </FormControl>

                      <FormMessage className="font-sans text-xs text-destructive" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full lowercase"
                  style={{ textTransform: "none" }}
                >
                  Request Invitation
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
