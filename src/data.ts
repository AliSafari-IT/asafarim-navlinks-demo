type NavLinkType = {
  label: string;
  href: string;
  iconLeft?: string;
  iconRight?: string;
  emoji?: string;
  subNav?: NavLinkType[];
}

export const navItems = {
    leftAlignedNavItems: [
      {
        label: "Home",
        href: "/",
        iconRight: "fas fa-home",
        subNav: [
          {
            label: "Mainpage",
            href: "/mainpage",
            icon: "fas fa-home-1",
            subNav: [
              { label: "Show Home", href: "/mainpage" },
              { label: "Sub Sub Home 2", href: "/sub-sub-home-2" },
            ],
          },
          { label: "Sub Home 2", href: "/sub-home-2" },
          {
            label: "Sub Sub Home",
            href: "/sub-sub-home",
            emoji: "🏠 ",
            subNav: [
              { label: "Sub Sub Home 1", href: "/sub-sub-home-1" },
              {
                label: "Sub Sub Home 2",
                href: "/sub-sub-home-2",
                subNav: [
                  { label: "Sub Sub Sub Home 1", href: "/sub-sub-sub-home-1" },
                  { label: "Sub Sub Sub Home 2", href: "/sub-sub-sub-home-2" },
                ],
              },
            ],
          },
        ],
      },
      { label: "About", href: "/about", iconRight: "fas fa-info" },
    ] as NavLinkType[],
    middleAlignedNavItems: [
      {
        label: "Services",
        href: "/services",
        iconRight: "fas fa-tools",
        subNav: [
          { label: "Service 1", href: "/services" },
          {
            label: "Service 2",
            href: "/service-2",
            subNav: [
              { label: "Sub Service 1", href: "/sub-service-1" },
              { label: "Sub Service 2", href: "/sub-service-2" },
            ],
          },
          {
            label: "Service 3",
            href: "/service-3",
            subNav: [
              { label: "Sub Service 1", href: "/sub-service-1" },
              { label: "Sub Service 2", href: "/sub-service-2" },
            ],
          },
        ],
      },
      { label: "Products", href: "/products", iconRight: "fas fa-boxes" },
    ],
    rightAlignedNavItems: [
      {
        label: "Contact",
        href: "/contact",
        iconRight: "fas fa-phone-alt",
        subNav: [
          { label: "Email", href: "/email" },
          { label: "Contacts", href: "/contact" },
          {
            label: "Phone",
            href: "/phone",
            subNav: [
              { label: "Phone Landline 1", href: "/phone-landline-1" },
              { label: "Phone Landline 2", href: "/phone-landline-2" },
              {
                label: "Phone Mobile",
                href: "/phone-mobile",
                iconLeft: "fas fa-mobile-alt",
                subNav: [
                  { label: "Phone Mobile 1", href: "/phone-mobile-1" },
                  { label: "Phone Mobile 2", href: "/phone-mobile-2", emoji: "📱" },
                ],
              },
            ],
          },
          { label: "About", href: "/about" },
        ],
      },
      { label: "Help", href: "/help", iconRight: "fas fa-question" },
    ] as NavLinkType[],
  };