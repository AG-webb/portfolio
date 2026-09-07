import Icon from "@/components/ui/Icon";
import type { ContactItemProps } from "./types";

const ContactItem = ({ icon, title, value }: ContactItemProps) => {
  return (
    <div className="contact-item bg-neutral-800 rounded-xl border border-neutral-700 p-3 md:p-6">
      <div className="contact-item__icon size-10 mb-4 rounded-[10px] border flex items-center justify-center">
        <Icon className="text-lg" type={icon} />
      </div>
      <div className="contact-item__title text-xs font-semibold mb-1.5">
        {title}
      </div>
      <div className="contact-item_value text-sm font-bold text-neutral-50">
        {value}
      </div>
    </div>
  );
};

export default ContactItem;
