import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveContainer } from "@/components/responsive-container";
import { LazyIframe } from "@/components/lazy-iframe";
import { VideoSchema } from "@/components/seo/video-schema";

export const metadata: Metadata = {
  title: "Thank You for Booking Your Consultation",
  description:
    "Thanks for booking your consultation with EQ Automation. Here's what to expect next.",
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "EQ Automation - Thank You",
          description:
            "Thanks for booking your consultation with EQ Automation. Here's what to expect next.",
          url: "https://eqautomation.com/thank-you",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://eqautomation.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Thank You",
                item: "https://eqautomation.com/thank-you",
              },
            ],
          },
        }}
      />
      <VideoSchema
        name="RPA Benefits Explained"
        description="A video explaining the benefits of Robotic Process Automation."
        uploadDate="2023-01-01" // Placeholder: Replace with actual upload date if known
        contentUrl="https://www.youtube.com/watch?v=h8PfEbMV-8o"
        embedUrl="https://www.youtube.com/embed/h8PfEbMV-8o"
        thumbnailUrl="/youtube-thumbnail.png" // Placeholder thumbnail
        duration="PT1M30S" // Placeholder: Replace with actual duration
      />
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
        aria-labelledby="thank-you-heading"
      >
        <ResponsiveContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full h-[350px] max-w-[560px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <LazyIframe
                  src="https://www.youtube.com/embed/h8PfEbMV-8o"
                  title="RPA Benefits Explained"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h1
                id="thank-you-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-primary"
              >
                You’re All Set! Here’s What’s Next
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Thanks for booking your consultation! We’re looking forward to
                speaking with you. In this session, we’ll take a close look at
                your current processes, identify repetitive or manual tasks, and
                explore how automation can streamline your operations. This
                session will be all about understanding your goals and showing
                you how robotic process automation can help you reach them
                faster.
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </>
  );
}
