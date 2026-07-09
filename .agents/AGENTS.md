# CareTag Web Project Rules

## Language & Internationalization (i18n)
- **Arabic First**: Arabic (`ar`) must be the default language of the storefront and landing page.
- **Bi-directional Layout**: The website layout must automatically toggle between RTL (`dir="rtl"`) when Arabic is selected, and LTR (`dir="ltr"`) when English is selected.
- **Language Selector**: A prominent language switcher must be available in the navigation bar to toggle between Arabic ("العربية") and English ("English").
- **Font Optimization**: Use Arabic-optimized fonts (like `Cairo` or `Tajawal` from Google Fonts) when in Arabic mode to ensure professional typography.
- **Translation Completeness**: All sections (Hero, How It Works, Value Proposition, Shop Finder, Pricing, Contact Us, and Footer) must be fully localized.
- **UI/UX**: For all UI component generation and styling, you MUST strictly adhere to the design system tokens and UX patterns defined in .ai/contracts/ui-contract.md


## New Directive: "Lead Gen over Self-Serve"
- Update Call-to-Actions: Change all "Sign Up" or "Register Now" buttons to "Become a Partner" or "Request Access."
- Replace the Signup Wizard: Remove any multi-step registration forms. Replace them with a simple, high-converting Lead Generation form: Name, Garage Name, Phone Number, and City.
- Routing: Wire this form to send a notification directly to the caretag-admin dashboard as a "New Lead" so the admin team can begin the white-glove setup.
