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

export function ContactFormComponent() {
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
    <section className="bg-[#E7816B] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
            <p className="text-lg">
              Ready to take it to the next level? Let&apos;s talk about your
              project or idea and find out how we can help your business grow.
              If you are looking for unique digital experiences that&apos;s
              relatable to your users, drop us a line.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="rounded-none border-0 border-b bg-transparent text-white placeholder:text-white/70 focus-visible:border-white focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="italic" />
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
                        className="rounded-none border-0 border-b bg-transparent text-white placeholder:text-white/70 focus-visible:border-white focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="italic" />
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
                        className="rounded-none border-0 border-b bg-transparent text-white placeholder:text-white/70 focus-visible:border-white focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="italic" />
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
                        className="min-h-[120px] resize-none rounded-none border-0 border-b bg-transparent text-white placeholder:text-white/70 focus-visible:border-white focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="italic" />
                  </FormItem>
                )}
              />
              <div className="text-right">
                <Button type="submit" variant="secondary" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
