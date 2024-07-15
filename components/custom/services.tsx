import { Service, SERVICES } from "@/data/services";
import Link from "next/link";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <section className="mt-8">
      <div className="space-y-2 text-center">
        <span className="inline-block rounded-lg bg-muted px-3 py-1 text-left text-sm">
          Our Services
        </span>
        <h2 className="font-italiana text-3xl font-bold tracking-tighter sm:text-5xl">
          Comprehensive Print Solutions
        </h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          From custom card design to high-quality printing, we offer a wide
          range of services to meet all your print needs.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  linkText,
  linkURL,
}: Service) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[22rem]">
 
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description} </p>
      <Button asChild variant="outline" className="self-end">
        <Link href={linkURL || "#"}>{linkText || "Learn More"}</Link>
      </Button>
    </div>
  );
};

export default Services;
