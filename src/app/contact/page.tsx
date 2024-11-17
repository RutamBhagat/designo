import ContactFormComponent from "@/components/contact-form";
import { LocationsGridComponent } from "@/components/locations-grid";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <ContactFormComponent />
      <LocationsGridComponent />
    </div>
  );
}
