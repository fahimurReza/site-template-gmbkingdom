import QuoteForm from "@/components/ui/QuoteForm";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const FormAndInfo = () => {
  return (
    <section className="base-padding py-18 bg-teal-50">
      <div className="grid grid-cols-2">
        <div className="flex justify-center">
          <QuoteForm
            title="Send Us a Message"
            subtitle="Fill out the form below and our team will get back to you within 2 hours during business days."
          />
        </div>
        <div className="flex flex-col pl-20">
          <h2 className="text-brand-teal-light text-3xl font-semibold">
            Contact Information
          </h2>
          <div className="mt-14 flex flex-col gap-8">
            <div className="inline-flex gap-6 ">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal text-white">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[17px] font-semibold text-brand-teal-light">
                  Phone
                </h2>
                <span className="text-brand-gray">214-382-9350</span>
                <span className="mt-1 text-sm text-brand-gray">
                  Average response time: 2 hours
                </span>
              </div>
            </div>
            <div className="inline-flex gap-6 ">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal text-white">
                <EmailIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[17px] font-semibold text-brand-teal-light">
                  Email
                </h2>
                <span className="text-brand-gray">
                  info@friscoconcretecontractors.net
                </span>
                <span className="mt-1 text-sm text-brand-gray">
                  Average response time: 4 hours
                </span>
              </div>
            </div>
            <div className="inline-flex gap-6 ">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal text-white">
                <LocationIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[17px] font-semibold text-brand-teal-light">
                  Address
                </h2>
                <span className="text-brand-gray">279 Main St, Suite 128</span>
                <span className="text-brand-gray">Frisco, TX 75034</span>
              </div>
            </div>
            <div className="inline-flex gap-6 ">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal text-white">
                <ClockIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[17px] font-semibold text-brand-teal-light">
                  Business Hours
                </h2>
                <span className="text-brand-gray">
                  Monday - Saturday: 8:00 AM - 6:00 PM
                </span>
                <span className="text-brand-gray">
                  Sunday: Emergency calls only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormAndInfo;
