"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  email: z.string().email("Email invalid"),
  phone: z.string().min(1, "Can't be empty"),
  message: z.string().min(1, "Can't be empty"),
});

export default function ContactFormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section className="rounded-2xl bg-[#E7816B] text-white">
      <div className="container px-20 py-12">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-5xl font-medium">Contact Us</h1>
            <p className="text-lg leading-relaxed">
              Ready to take it to the next level? Let&apos;s talk about your
              project or idea and find out how we can help your business grow.
              If you are looking for unique digital experiences that&apos;s
              relatable to your users, drop us a line.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="h-12 rounded-none border-0 border-b-2 border-white/30 bg-transparent px-0 text-lg text-white placeholder:text-white/70 hover:border-white/50 focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-sm italic" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        {...field}
                        className="h-12 rounded-none border-0 border-b-2 border-white/30 bg-transparent px-0 text-lg text-white placeholder:text-white/70 hover:border-white/50 focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-sm italic" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        {...field}
                        className="h-12 rounded-none border-0 border-b-2 border-white/30 bg-transparent px-0 text-lg text-white placeholder:text-white/70 hover:border-white/50 focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-sm italic" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        {...field}
                        className="min-h-[120px] resize-none rounded-none border-0 border-b-2 border-white/30 bg-transparent px-0 text-lg text-white placeholder:text-white/70 hover:border-white/50 focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-sm italic" />
                  </FormItem>
                )}
              />
              <div className="pt-4 text-right">
                <Button
                  type="submit"
                  className="rounded-lg bg-white px-12 py-6 text-[15px] font-medium text-black hover:bg-white/90"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
