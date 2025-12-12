import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
    {
        id: "coffee",
        title: "Coffee / Սուրճ",
        items: [
            {
                name: "Cappuccino / Կապուչինո",
                price: "600֏",
                desc: "Espresso with milk / Էսպրեսսո կաթով",
                img: "https://picsum.photos/300/300?random=1"
            },
            {
                name: "Latte / Լատտե",
                price: "700֏",
                desc: "Milk & Espresso / Կաթ և Էսպրեսսո",
                img: "https://picsum.photos/300/300?random=2"
            },
            {
                name: "Espresso / Էսպրեսսո",
                price: "500֏",
                desc: "Hot water & coffee beans / Տաք ջուր և սուրճի հատիկներ",
                img: "https://picsum.photos/300/300?random=3"
            }
        ]
    },
    {
        id: "hot-dishes",
        title: "Hot dishes / Տաք ուտեստներ",
        items: [
            {
                name: "Qabab 1kg / Տավարի քաբաբ 1կգ",
                price: "1000֏",
                desc: "Roasted meat / Տավարի խորոված միս",
                img: "https://picsum.photos/300/300?random=4"
            },
            {
                name: "Ishli Kufta / Իշլի Քյուֆթա",
                price: "800֏",
                desc: "Stuffed meatballs / Լցոնած մսագնդիկներ",
                img: "https://picsum.photos/300/300?random=5",
                badge: "Top"
            }
        ]
    },
    {
        id: "desserts",
        title: "Desserts / Աղանդեր",
        items: [
            {
                name: "Brownie / Բրաունի",
                price: "1200֏",
                desc: "Chocolate cake / Շոկոլադե տորթ",
                img: "https://picsum.photos/300/300?random=6"
            },
            {
                name: "Cheesecake / Չիզքեյք",
                price: "1500֏",
                desc: "Classic cheese cake / Դասական պանրով տորթ",
                img: "https://picsum.photos/300/300?random=7"
            }
        ]
    }
];