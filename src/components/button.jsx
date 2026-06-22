import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Button({
  variant,
  arrowIcon,
  buttonText = "Default Text",
  link,
  url,
  onClickHandler,
  ariaLabel,
}) {
  return (
    <>
      {variant === "primary" ? (
        // return primary button
        <button
          aria-label={ariaLabel}
          onClick={onClickHandler}
          className=" px-4 py-3 font-lexend font-medium bg-primary-500 rounded-full scale-95 hover:scale-100 hover:bg-primary-600 transition-all duration-300 w-fit"
        >
          {link ? <Link href={url}>{buttonText} </Link> : buttonText}
          {arrowIcon && <ArrowRight />}
        </button>
      ) : variant === "secondary" ? (
        // return secondary button
        <button
          aria-label={ariaLabel}
          className="max-sm:px-2 max-sm:py-2 px-4 py-3 font-lexend font-medium rounded-full border-2 text-secondary-500 border-secondary-500 hover:border-secondary-600 hover:text-secondary-600 transition-all duration-300"
        >
          {link ? <Link href={url}>{buttonText}</Link> : buttonText}
          {arrowIcon && <ArrowRight />}
        </button>
      ) : (
        // return secondary button
        <button
          aria-label={ariaLabel}
          className=" px-4 py-3 font-lexend font-medium rounded-full border-2 text-primary-500 border-primary-500 hover:border-primary-600 hover:text-neutral-900 transition-all duration-300"
        >
          {link ? <Link href={url}>{buttonText}</Link> : buttonText}
          {arrowIcon && <ArrowRight />}
        </button>
      )}
    </>
  );
}
