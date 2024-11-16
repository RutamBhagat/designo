import { ContactFormComponent } from "@/components/contact-form";
import { LocationsGridComponent } from "@/components/locations-grid";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactFormComponent />
      <LocationsGridComponent />
    </div>
  );
}
