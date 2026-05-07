export type LedgerStatus = "paid" | "pending";

export type User = {
  id: string;
  name: string;
  level: "Lvl 1" | "Lvl 2";
  trustScore: number;
  verificationBadges: string[];
  trustBreakdown: { label: string; score: number }[];
};

export type LedgerItem = {
  id: string;
  title: string;
  amount: string;
  date: string;
  status: LedgerStatus;
};

export type Listing = {
  id: string;
  name: string;
  price: string;
  trustScore: number;
  location: string;
  description: string;
  verified: boolean;
  roommates: string[];
};

export type ActivityItem = {
  id: string;
  title: string;
  amount: string;
  statusColor: "green" | "yellow";
};

export const currentUser: User = {
  id: "user-1",
  name: "Nazlican",
  level: "Lvl 2",
  trustScore: 88,
  verificationBadges: ["ID Verified", "Payment Verified", "Address Verified"],
  trustBreakdown: [
    { label: "Payment Reliability", score: 93 },
    { label: "Cleanliness", score: 65 },
    { label: "Reliability", score: 91 },
  ],
};

export const ledgerItems: LedgerItem[] = [
  { id: "led-1", title: "Paid Rent", amount: "+1200 TL", date: "08 May", status: "paid" },
  { id: "led-2", title: "Shared Grocery", amount: "+45 TL", date: "06 May", status: "paid" },
  { id: "led-3", title: "Electricity Bill", amount: "540 TL", date: "04 May", status: "pending" },
  { id: "led-4", title: "Internet Bill", amount: "390 TL", date: "02 May", status: "pending" },
];

export const listings: Listing[] = [
  {
    id: "list-1",
    name: "Ece Kaya",
    price: "10.900 TL / month",
    trustScore: 91,
    location: "Kadikoy, Istanbul",
    description: "Bright private room, calm neighborhood, 2 mins to metro.",
    verified: true,
    roommates: ["E", "N", "K"],
  },
  {
    id: "list-2",
    name: "Deniz Aras",
    price: "11.700 TL / month",
    trustScore: 86,
    location: "Besiktas, Istanbul",
    description: "Modern flat, furnished room, close to coast and cafes.",
    verified: true,
    roommates: ["D", "A"],
  },
  {
    id: "list-3",
    name: "Mert Aydin",
    price: "9.800 TL / month",
    trustScore: 80,
    location: "Bornova, Izmir",
    description: "Student friendly apartment with large common workspace.",
    verified: false,
    roommates: ["M", "S", "T"],
  },
  {
    id: "list-4",
    name: "Selin Erdem",
    price: "10.500 TL / month",
    trustScore: 89,
    location: "Cankaya, Ankara",
    description: "Quiet street, renovated kitchen, tidy and social flatmate.",
    verified: true,
    roommates: ["S", "C"],
  },
];

export const recentActivity: ActivityItem[] = [
  { id: "act-1", title: "Paid Rent", amount: "+1200 TL", statusColor: "green" },
  { id: "act-2", title: "Shared Grocery", amount: "+45 TL", statusColor: "green" },
  { id: "act-3", title: "Electricity bill pending", amount: "540 TL", statusColor: "yellow" },
];
