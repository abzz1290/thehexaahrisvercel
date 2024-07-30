import { Compass, Crown, Goal, GraduationCap, Luggage, MapPin, MoveRight, ShoppingBag, UserSquare } from "lucide-react";

const pricingData = [
    {
        id: 1,
        plan: 'Lite',
        icon: Goal,
        price: 9.99,
        currency: '$',
        color: "green",
        isSale: false,
        description: 'Perfect plan for Lite',
        frequency: 'Monthly',
        buttonText: 'Purchase Now',
        features: [
            { text: "Projects", number: 3, isRight: true },
            { text: 'Customers', number: 299, isRight: true },
            { text: 'Scalable Bandwidth', isRight: true },
            { text: 'No Team Account', number: 0, isRight: true },
            { text: 'In app messaging', isRight: false },
            { text: 'FTP Login', number: 5, isRight: false },
            { text: 'Detailed Analytics', isRight: false },
            { text: 'Custom Domain', isRight: false },
            { text: 'Smart Workflow', isRight: false },
            { text: 'IQ test', isRight: false },
        ],
    },
    {
        id: 2,
        plan: 'Professional',
        icon: GraduationCap,
        price: 29.99,
        isSale: false,
        color: "purple",
        description: 'For users who want to do more.',
        currency: '$',
        frequency: 'Monthly',
        buttonText: 'Purchase Now',
        features: [
            { text: "Projects", number: 3, isRight: true },
            { text: 'Customers', number: 299, isRight: true },
            { text: 'Scalable Bandwidth', isRight: true },
            { text: 'No Team Account', number: 3, isRight: true },
            { text: 'In app messaging', isRight: true },
            { text: 'FTP Login', number: 5, isRight: false },
            { text: 'Detailed Analytics', isRight: false },
            { text: 'Custom Domain', isRight: false },
            { text: 'Smart Workflow', isRight: false },
            { text: 'IQ test', isRight: false },
        ],
    },
    {
        id: 3,
        plan: 'Enterprise',
        icon: Crown,
        color: 'sky',
        isSale: true,
        description: 'Run your company on your teams',
        price: 39.99,
        currency: '$',
        frequency: 'Monthly',
        buttonText: 'Purchase Now',
        features: [
            { text: "Projects", number: 3, isRight: true },
            { text: 'Customers', number: 229, isRight: true },
            { text: 'Scalable Bandwidth', isRight: true },
            { text: 'No Team Account', number: 3, isRight: true },
            { text: 'In app messaging', isRight: true },
            { text: 'FTP Login', number: 5, isRight: true },
            { text: 'Detailed Analytics', isRight: true },
            { text: 'Custom Domain', isRight: false },
            { text: 'Smart Workflow', isRight: false },
            { text: 'IQ test', isRight: false },
        ],
    },
    {
        id: 4,
        plan: 'Unlimited',
        icon: Luggage,
        color: 'orange',
        isSale: false,
        description: 'Your entire team in one place',
        price: 49.99,
        currency: '$',
        frequency: 'Monthly',
        buttonText: 'Purchase Now',
        features: [
            { text: "Projects", number: 3, isRight: true },
            { text: 'Customers', number: 299, isRight: true },
            { text: 'Scalable Bandwidth', isRight: true },
            { text: 'No Team Account', number: 3, isRight: true },
            { text: 'In app messaging', isRight: true },
            { text: 'FTP Login', number: 5, isRight: true },
            { text: 'Detailed Analytics', isRight: true },
            { text: 'Custom Domain', isRight: true },
            { text: 'Smart Workflow', isRight: true },
            { text: 'IQ test', isRight: true },
        ],
    },
];


const cardData = [
    {
        icon: MapPin,
        iconColor: "text-sky-500 fill-sky-100 dark:fill-sky-500/20",
        title: "Our Main Office",
        address: "501, Powell Ave, Clarks Summit, Pennsylvania, United States - 18411",
        link: {
            text: "Visit Website",
            url: "#!",
            icon: MoveRight,
            iconDirection: "ltr:ml-1 rtl:mr-1 rtl:rotate-180",
        },
    },
    {
        icon: ShoppingBag,
        iconColor: "text-purple-500 fill-purple-100 dark:fill-purple-500/20",
        title: "Sales Team Support",
        email: "tailwick@sales.com",
        link: {
            text: "Sales Support",
            url: "#!",
            icon: MoveRight,
            iconDirection: "ltr:ml-1 rtl:mr-1 rtl:rotate-180",
        },
    },
    {
        icon: Compass,
        iconColor: "text-orange-500 fill-orange-100 dark:fill-orange-500/20",
        title: "Help & Support",
        email: "tailwick@support.com",
        website: "www.@thehexaa.com",
        link: {
            text: "Contact Support",
            url: "#!",
            icon: MoveRight,
            iconDirection: "ltr:ml-1 rtl:mr-1 rtl:rotate-180",
        },
    },
    {
        icon: UserSquare,
        iconColor: "text-custom-500 fill-custom-100 dark:fill-custom-500/20",
        title: "Email & Phone",
        email: "tailwick@email.com",
        phone: "(570) 586 2588",
        link: {
            text: "Visit Portfolio",
            url: "#!",
            icon: MoveRight,
            iconDirection: "ltr:ml-1 rtl:mr-1 rtl:rotate-180",
        },
    },
];

export { pricingData, cardData };